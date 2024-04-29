



const express = require("express");

const app = express();


app.use(express.urlencoded({extended: false}))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })


app.get("/api/test", (req, res) => {
    res.json("Hello New World!");
});




const listener = app.listen(process.env.PORT || 5500, () => {
    console.log("Your app is listening on port " + listener.address().port);
  });
  