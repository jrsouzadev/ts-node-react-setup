import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
