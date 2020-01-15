import express, { Application } from 'express'
import mongoose, { Schema } from 'mongoose'
import bodyParser from 'body-parser'
export default class AppHello {
    public app: Application
    public port: number
    todo_model: mongoose.Model<mongoose.Document, {}>;

    constructor(port: number) {
        this.app = express();
        this.port = port
        this.todo_model = mongoose.model('todos', new Schema({
            toppic: String,
            time_alert: String,
            status: String
        }))

        this.app.use(bodyParser.json())

        this.app.get('/hello', (req, res) => {
            res.json({ 'hello': 'woeld' })
        })

        this.app.get('/todos', async (req, res) => {
           const todos = await this.todo_model.find()
           res.json(todos)
        })

        this.app.put('/todos/:id',async({params,body},res)=>{
            try{
                await this.todo_model.updateOne({_id:params.id},{status:body.status})
                res.status(200).json({"status":"done"})
            }catch(error){
                console.error("error:",error)
                res.status(500).json({
                    "error": error.message,
                })
            }
        })

        this.app.post('/todos',async(req,res)=>{
            try{
                await this.todo_model.create({
                    toppic: req.body.toppic,
                    time_alert: req.body.time_alert,
                    status:'todo'
                })
                res.sendStatus(201).json({})
            }catch(error){
                console.error("error:",error)
                res.status(500).json({
                    "error": error.message,
                })
            }
        })
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`app strat on port: ${this.port}`)
        })
    }
}