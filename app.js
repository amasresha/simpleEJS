var express =require("express");
var app =express();


app.get("/",(req,res)=>{
  res.render("home.ejs");
})
app.get ("/:thing", (req,res)=>{
  var thing = req.params.thing;
  res.render ("love.ejs",{thingvar:thing})  ;
});
app.listen(2575, ()=>{
  console.log("Connecting to your awesome server at port 2575!");
})
