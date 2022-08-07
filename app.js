// PACKAGE IMPORTS
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const nodeMailer = require("nodemailer")

// Config CONFIG
try {
	var config = require("./config")
} catch (e) {
	console.log("Could not import config. Probable Cause: NOT WORKING LOCALLY, ya dum dum")
	console.log(e)	
}



// ROUTE IMPORTS
const mainRoutes = require("./routes/main.js")


// CONFIG
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// Route configuration
app.use(mainRoutes)


// LISTEN
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server runnin' boys! (and girls!)`)
})