const express=require("express");
const app = express();
app.use(express.static("public"));
app.get("/", function(request, response){
    response.sendFile(__dirname+"/index.html");
});

app.get("/hero1", function(request, response){
    response.sendFile(__dirname+"/hero1.html");
});

app.get("/hero2", function(request, response){
    response.sendFile(__dirname+"/hero2.html");
});

app.get("/hero3", function(request, response){
    response.sendFile(__dirname+"/hero3.html");
});

app.get("/hero4", function(request, response){
    response.sendFile(__dirname+"/hero4.html");
});


app.listen(8000, function(){
    console.log("server running on port 3000");
});