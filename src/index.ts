import express from 'express'
import path from 'path'
// eslint-disable-next-line no-unused-vars
import { User } from './models/user'

const app = express()
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')))
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

const iuhisa = 'iwhdiuhdwid8u9ui3newodij'

for (let i = 0; i < 10; i++) {
  console.log(iuhisa)
}

const myFriend: User = {
  name: 'Joao',
  id: 'juanito'
}
console.log('AMENDOAAAAAASSS')
console.log(myFriend)

const count = 3 + 3
console.log(count)
