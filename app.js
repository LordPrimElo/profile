// PACKAGE IMPORTS
const express = require("express")
const app = express()


// ROUTE IMPORTS
const mainRoutes = require("./routes/main")


// CONFIG
app.set("view engine", "ejs")
app.use(express.static("public"))


// Route configuration
app.use(mainRoutes)


// LISTEN
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server runnin' boys! (and girls!)`)
})