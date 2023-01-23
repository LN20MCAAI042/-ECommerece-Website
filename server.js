import express from "express";
import bcrypt from "bcrypt";

// init server

const app = express();

// middlewares
app.use(express.static("public"));
app.use(express.json())  // enables from sharing

// routes
// home route
app.get('/', (req, res) => {
    res.sendFile("index.html", { root : "public" })
})

// signup
app.get('/signup', (req, res) => {
    res.sendFile("signup.html", { root : "public" })
})
app.post('/signup',(req, res) => {
    const { name, email, password, number, tac } = req.body;

    // form validation
    if(name.length < 3){
        res.json({ 'alert' : 'Name Must Be 3 Letters Long' });
    } else if(!email.length){
        res.json({ 'alert' : 'Enter Your Email' });
    } else if(password.length < 8){
        res.json({ 'alert' : 'Password Must Be 8 Letters Long' });
    } else if(Number(number) || number.length < 10){
        res.json({ 'alert' : 'Invalid Number, Please Enter Valid Number' });
    } else if(!tac.checked){
        res.json({ 'alert' : 'You Must Agree To Our Terms And Conditions' });
    }
})

// 404 route
app.get('/404', (req, res) =>{
    res.sendFile("404.html", { root : "public" })
})

app.use((req, res) => {
    res.redirect('/404')
})
app.listen(3000, () =>{
    console.log('listening on port 3000');
})