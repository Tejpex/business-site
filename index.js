import express from "express"

const app = express()
const port = 3000

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.render("index.ejs")
})

app.post("/submit", (req, res) => {
  const { date, time, name, telNumber, email, guests, foodPreference, requests } = req.body
  res.render("submit.ejs", { 
    date: date, 
    time: time, 
    name: name, 
    telNumber: telNumber, 
    mail: email, 
    numGuests: guests,
    food: foodPreference,
    allergies: requests
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})