# Shot on iPhone
We all know the meme. This small package returns random funny shot on iPhone videos fetched from **[shot-on-iphone.studio]**

---

## Disclaimer
None of the videos are owned by me. This package just fetched the videos from **[shot-on-iphone.studio]**. All credit goes to them.

---

## To use it
See the following code snippet
```js
// Use Async Function
(async () => {

    // importing the package
    const soi = require('shot-on-iphone')

    const result = await soi.getVideo()
    // logging the video url to console
    console.log(result)    
  })()
```
Or using `then`
```js
    const soi = require('shot-on-iphone')
    soi.getVideo()
    .then(result => console.log(result))
```
---
### Promoted
***[CraftBlur Bot]** - A multipurpose bot*<br>
***[Soumalyaplayz API]** - Yet Another General Purpose API*

[shot-on-iphone.studio]: https://shot-on-iphone.studio
[CraftBlur Bot]: https://www.craftblurbot.cf
[Soumalyaplayz API]: https://api.spapi.ga