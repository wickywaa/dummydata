const express = require('express')
const qs = require('query-string')
const statuses = require('./callStatuses')
const hours = require('./hours')
const app = express()

const port = (process.env.PORT)

app.use(express.json())



JsonStatuses  = JSON.stringify(statuses)
JsonParsed = JSON.parse(JsonStatuses)

staffhoursstring = JSON.stringify(hours)
staffhoursParsed = JSON.parse(staffhoursstring)


app.get('/hours',(req,res)=>{
    if (req.query.agent){
        
        const agent = hours.agents.find((agents)=>
            agents.staffId === parseInt(req.query.agent)
        )
    if(agent){
        res.status(200).json(agent)
        console.log(agent)
    }
    else{
        res.status(200).send("sorr there is no  use with that id ")
    }
        
        
    }
    else{
        res.json(JsonParsed)
    }

 
    
}
)

app.get('/statuses',(req,res)=>{
    if (req.query.agent){
        
        const agentList = statuses.find((agent)=>
            agent.agentId === parseInt(req.query.agent)
        )

        if(agentList){
            res.status(200).json(agentList)
        }else{
            res.status(200).send("sorry there is no agent with that id")
        }

        console.log(agentList)
        

    }
    else{
        res.json(JsonParsed)
    }
    console.log(req.query)

 
    
}


)





app.listen(port,()=>{

console.log("listeniing  on port ,",port)
console.log(JsonStatuses)
})