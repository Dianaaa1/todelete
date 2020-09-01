const express=require('express');
const app=express();

app.listen(3000, ()=>console.log("Port is listening"));
app.use(express.static('public'));
app.use(express.json()); 
app.use( bodyParser.json() );
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });    
app.post('/sth', (req, res)=>{
    console.log('Inside');
    console.log(req)
    res.send('ep')
})