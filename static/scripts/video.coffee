$ = require "jquery"
require "./video.css"
template = require "./templates/video.jade"

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
    }

num = Math.floor Math.random() * videos.length
loadVideo(num)
