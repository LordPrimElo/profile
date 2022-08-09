const router = require("express").Router()
const nodeMailer = require("nodemailer")

try {
	var config = require("../config")
} catch (e) {
	console.log("Could not import config. Probable Cause: NOT WORKING LOCALLY, ya dum dum")
	console.log(e)	
}

router.get("/", (req, res) => {
    res.render("index")
})

router.post("/", (req, res) => {
    const sendMailToMe = async () => {
        let transporter = nodeMailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: "evansrathore@gmail.com",
              pass: process.env.PASS || config.pass,
            },
          });
        
          let info = await transporter.sendMail({
            from: req.body.email,
            to: "evansrathore@gmail.com", 
            subject: "Buisness EMAIL IMPORTANT",
            text: req.body.emailText + " From Ya Boy " + req.body.email, 
            html: req.body.emailText + " From Ya Boy " + req.body.email
          })
    }
    sendMailToMe().catch(console.error)
    res.render("index")
})

router.get("*", (req, res, next) => {
  res.redirect("/")
})

module.exports = router