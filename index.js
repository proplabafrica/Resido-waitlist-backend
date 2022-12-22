const express = require ("express")
const app = express()
const PORT = process.env.PORT || 3700;
require ("dotenv").config();
const connectDB = require("./connectdb")
const waitlistRouter = require("./Routes/waitlistRoute")
const cors = require("cors")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use ('/waitlist', waitlistRouter)


connectDB(process.env.mongo_url).then(() => {
    app.listen(PORT, () => {
        console.log("Waitlist Live");
    })
}) .catch((err) => console.log(err));

