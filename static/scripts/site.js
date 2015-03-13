(function () {

var currentPageType = null

function getRequest (href, callback) {
  var req = new XMLHttpRequest()
  
  req.onreadystatechange = function () {
    if (req.readyState === 4) // done
      if (req.status === 200) {
        try {
          var dom = HTMLParser(req.responseText)
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

function HTMLParser(anHTMLString) {
  /* TODO compatibility with IE9 */
  var parser = new DOMParser
  return parser.parseFromString(anHTMLString, "text/html")
}

// open pages here with transitions
function openPage(path, skipPushState) {
  getRequest(path, function (error, dom) {
    if (error){
      window.location.href = path // Manually open page  
    } else {
      var swapPage = document.getElementById("page-content")
      // title
      var titleText = dom.querySelector("title").innerText
      document.querySelector("title").innerText = titleText
      // page-content html
      swapPage.innerHTML = dom.getElementById("page-content").innerHTML
      // nav-links html
      document.getElementById("nav-links").innerHTML = dom.getElementById("nav-links").innerHTML
      // listen on new anchors
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
  if (isLeftClick && isSameHost) {
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
}

// Initiallize page-type
currentPageType = document.getElementById("page-type").dataset.type

// Initially attach to all anchors
attachListeners(document)
console.log("ready.")

})();
