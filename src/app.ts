import express,{Application} from 'express'
export default class AppHello{
    public app : Application
    public port: number

    constructor(port:number){
        this.app = express();
        this.port = port

        this.app.get('/hello',(req,res)=>{
            res.json({'hello': 'woeld'})
        })
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`app strat on port: ${this.port}`)
        })
    }
}