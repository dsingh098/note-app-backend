import exprees from "express"
import dotenv from "dotenv"
import ConnectDB from "./config/db.js"
import authRouter from "./routes/userRoutes.js"
import cookieParser from "cookie-parser"
import noteRouter from "./routes/notesRoutes.js"
dotenv.config()
const app = exprees()
const PORT = process.env.PORT || 5000
app.use(exprees.json())
app.use(cookieParser())

app.use("/",authRouter)
app.use("/note", noteRouter)

app.listen(PORT, () => {
 ConnectDB()
    console.log(`Server Running on ${PORT}`)
})