require('dotenv').config();

import express from "express";
import { PORT } from "./config/constants";
import { router } from './routes/router';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


//Router
app.use("/api", router);


app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});