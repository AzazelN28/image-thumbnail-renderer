self.addEventListener('message', (e) => {
  const { width, height, data } = e.data
  console.log(width, height, data.byteLength)
})
