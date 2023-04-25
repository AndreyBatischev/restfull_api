import express from "express"
import mongoose from "mongoose"
import router from "./router.js";
import fileUpload from "express-fileupload";
import * as path from 'path'


const PORT = 3000

const DB_URL = `mongodb+srv://user:user123qwe@restapi.gbi9szb.mongodb.net/?retryWrites=true&w=majority`;
const app = express()


app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload())
app.use('/api', router)
// app.use("/static", express.static('./static/'));
// app.use(express.static(path.resolve('static')))
app.get('/', (req, res) => {
    res.sendFile(path.resolve('static/client', 'index.html'))
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => { console.log(`Server is runnign on PORT: ${PORT}`) })
    } catch (error) {
        console.log(error);
    }
}


startApp()