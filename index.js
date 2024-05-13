const express=require('express');
const app=express();

const config=require('./config');
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
const mailRoutes=require('./routers/mail');
app.use(mailRoutes);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
