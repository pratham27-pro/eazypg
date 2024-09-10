import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// routes
import userRouter from "./routes/user.routes.js";


// routes declaration
app.use("/api/v1/users", userRouter)


export {app}


/*
1. ek form bana do jisko user bharde
2. uss form ka data database mei save karlo
3. 
*/