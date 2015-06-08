$ = require "jquery"
require "./video.css"
template = require "./templates/video.jade"
MobileDetect = require "mobile-detect"
md = new MobileDetect(window.navigator.userAgent)
isMobile = !!md.mobile()
if isMobile
  $("body").addClass "is-mobile"

videos = [
  ["couch-sit", "Me sitting on a comfortable couch, opening my laptop, and continuing to program.", 7.7]
]

$("body").prepend("<div class=\"background-video\"></div>")

loadVideo = (num) ->
  video = videos[num]
  $(".background-video")
    .html template {
      filename: video[0]
      alt: video[1]
      loopstart: video[2]
      isMobile
    }

num = Math.floor Math.random() * videos.length
loadVideo(num)
