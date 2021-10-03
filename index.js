module.exports.getVideo = async function() {
  const fetch = require('node-fetch')
    const result = await fetch('https://shot-on-iphone.studio/api/video')
    const json = await result.json()
    const video = (await json).url
    return video
  }