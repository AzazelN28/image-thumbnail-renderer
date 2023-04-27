self.addEventListener('message', async (e) => {
  // NOTA: e.data es un ImageBitmap
  console.log(e.data)
  const canvas = new OffscreenCanvas(e.data.width, e.data.height)
  const context = canvas.getContext('bitmaprenderer')
  context.transferFromImageBitmap(e.data)
  const blob = await canvas.convertToBlob()
  console.log(blob)
})
