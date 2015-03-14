(function () {

function getRequest (href, callback) {
  var req = new XMLHttpRequest()
  
  req.onreadystatechange = function () {
    if (req.readyState === 4) // done
      if (req.status === 200) {
        try {
          var dom = Utility.HTMLParser(req.responseText)
          callback(null, dom)
        } catch (error) {
          callback(error)
        }
      } else {
        callback(req.status)
      }
  }
  req.overrideMimeType("text/html")
  req.open("GET", href)
  req.send()
}
var Utility = {
  HTMLParser: function (anHTMLString) {
    /* TODO compatibility with IE9 */
    var parser = new DOMParser
    return parser.parseFromString(anHTMLString, "text/html")
  },
  forEachIn: function (arr, fn) {
    arr = Array.prototype.slice.call(arr) // copy
    for (var i = 0; i < arr.length; i++) {
      fn(arr[i], i)
    }
  },
  isImgLoaded: function (imgEl) {
    return imgEl.complete && typeof imgEl.naturalWidth === "number" && imgEl.naturalWidth !== 0
  }
}

var swapPage = document.getElementById("swap-page")
var swapBuffer = document.getElementById("swap-page-buffer")
var Buffer = {
  flush: function () {
    Utility.forEachIn(swapBuffer.children, function (el) {
      el.remove()
    })
  },
  fill: function () {
    Utility.forEachIn(swapPage.children, function (el) {
      el.remove()
      swapBuffer.appendChild(el)
    })
  },
  resize: function () {
    swapBuffer.style.width = swapPage.offsetWidth
  }
}

// open pages here with transitions
function openPage(path, skipPushState) {
  Buffer.resize()
  Buffer.fill()

  getRequest(path, function (error, dom) {
    if (error) {
      window.location.href = path // Manually open page
    } else {
      var swapNav = document.getElementById("swap-nav")
      // title
      var titleText = dom.querySelector("title").innerText
      document.querySelector("title").innerText = titleText
      // swap-nav html
      swapNav.innerHTML = dom.getElementById("swap-nav").innerHTML
      // swap-page html
      swapPage.innerHTML = dom.getElementById("swap-page").innerHTML

      swapPage.style.visibility = "hidden"
      // Wait for each image to be loaded
      var newImgs = swapPage.querySelectorAll("img")
      var loadingImgs = Array.prototype.filter.call(newImgs, function (img) {
        return !Utility.isImgLoaded(img)
      })
      var imagesToLoad = loadingImgs.length
      function renderPage () {
        setTimeout( function () {
          Buffer.flush()
          swapPage.style.visibility = "visible"
          // from layout
          onSwapLoad()
        }, 10)
      }
      function handleImgLoad () {
        imagesToLoad--
        if (imagesToLoad === 0)
          renderPage()
      }
      if (imagesToLoad > 0)
        for (var i = 0; i < loadingImgs.length; i++) {
          loadingImgs[i].onload = handleImgLoad
        }

      else
        renderPage()

      // listen on new anchors
      attachListeners(swapNav)
      attachListeners(swapPage)

      if (!skipPushState)
        history.pushState({path:path}, titleText, path)
    }
  })
}

// handle page navigations so we can animate
function anchorClickHandler (event) {
  var isLeftClick = event.which === 1
  var anchor = this
  var isSameHost = anchor.hostname === window.location.hostname
  var isSamePath = anchor.pathname === window.location.pathname
  if (isLeftClick && isSameHost && !isSamePath) {
    event.stopPropagation()
    event.preventDefault()
    openPage(anchor.pathname)
    return false 
  }
}

function attachListeners (domEl) {
  var anchors = domEl.querySelectorAll("a")
  for (var i = 0, anchor; i < anchors.length; i++) {
    anchor = anchors[i]
    anchor.addEventListener("click", anchorClickHandler)
  }
}

window.onpopstate = function (event) {
  if (event.state != null && typeof event.state.path === "string")
    openPage(event.state.path, true)

  else
    openPage(window.location.pathname, true)
}

// Initially attach to all anchors
attachListeners(document)
console.log("ready.")

})();
