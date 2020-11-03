import express from 'express'
import path from 'path'

const app = express()

const publicFolder = path.join(__dirname, 'public')
console.log(__dirname, publicFolder)

console.log()
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(publicFolder))
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
