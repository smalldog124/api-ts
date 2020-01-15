import AppHello from './app'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/todo_list',{ useUnifiedTopology: true })

const app = new AppHello(3000)
app.listen()