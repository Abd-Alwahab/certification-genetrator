const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const pdf = require("html-pdf");
const pdftemplate = require("./documents");
const masterTemplate = require("./documents/master");
const doctorTemplate = require("./documents/doctor");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());







// post the pdf to the database
app.post('/create-pdf', (req,res) =>{

    pdf.create(pdftemplate(req.body),{
        "height": "6in",       
        "width": "12in"
       
    }).toFile('result.pdf', (error) => {

        if(error) {

            res.send(Promise.reject());
        }


        res.send(Promise.resolve());
    });
});



// post the pdf to the database
app.post('/create-master', (req,res) =>{

    pdf.create(masterTemplate(req.body),{
        "height": "8.5in",       
        "width": "12in"
       
    }).toFile('result.pdf', (error) => {

        if(error) {

            res.send(Promise.reject());
        }


        res.send(Promise.resolve());
    });
});





// post the pdf to the database
app.post('/create-doctor', (req,res) =>{

    pdf.create(doctorTemplate(req.body),{
        "height": "8.5in",       
        "width": "12in"
       
    }).toFile('result.pdf', (error) => {

        if(error) {

            res.send(Promise.reject());
        }


        res.send(Promise.resolve());
    });
});



//fetch the pdf from the database 
app.get('/fetchdoctor', (req,res) => {

    res.sendFile(`${__dirname}/result.pdf`)
})



//fetch the pdf from the database 
app.get('/fetchmaster', (req,res) => {

    res.sendFile(`${__dirname}/result.pdf`)
})




//fetch the pdf from the database 
app.get('/fetchpdf', (req,res) => {

    res.sendFile(`${__dirname}/result.pdf`)
})

app.listen(port, () => {
    console.log(`listen on port ${port}`);
})
