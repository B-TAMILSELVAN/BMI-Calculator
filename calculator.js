const express=require("express")

const bodyParser=require("body-parser")

const app=express()

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")


})

app.post("/bmiCalculator",function(req,res){
    let num1=parseFloat(req.body.weight);
    let num2=parseFloat(req.body.height);
    let result=num1/(num2*num2);
    res.send("Your BMI is "+ result)
})

app.listen(5000,function(){
    console.log("starting server");
})
