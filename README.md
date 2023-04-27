# Rendering SVG images without laggy performance

Last demo is working as expected and 0 lag.

## Without Iframe :thumbsdown:

[Demo](https://azazeln28.com/penpot/iframe-thumbnail-renderer/without-iframe.html)

This is the current behaviour.

`toBlob` interferes with rendering time.

## With Iframe :thumbsdown:

[Demo](https://azazeln28.com/penpot/iframe-thumbnail-renderer/with-iframe.html)

This is a different approach using `<iframe>` elements but results are the same as
without iframe. 

`toBlob` interferes with rendering time.

## With Iframe (detached) :thumbsdown:

[Demo](https://azazeln28.com/penpot/iframe-thumbnail-renderer/with-iframe-detached.html)

This don't work because `<iframe>` needs to be attached to a DOM node to be
processed and rendered.

## With worker (ImageData) :thumbsdown:

[Demo](https://azazeln28.com/penpot/iframe-thumbnail-renderer/with-worker-imagedata.html)

This is even worse.

`getImageData` allocates and copies memory from current `context` and even with
`willReadFrequently` enabled it is very slow (~1s).

## With worker (ImageBitmap) :thumbsup:

[Demo](https://azazeln28.com/penpot/iframe-thumbnail-renderer/with-worker-imagebitmap.html)

THIS WORKS!

The idea behind this is transform SVG data into ImageBitmaps (that are processed
asynchronously) and then send to a worker that transform that ImageBitmap into
a Blob that can be sent to the backend.

Made with :heart: by [AzazelN28](https://github.com/azazeln28)
