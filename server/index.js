import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import KpiRoute from "./routes/kpi.js";
import KPI from "./models/KPI.js";
import { kpis } from "./data/data.js";
/* CONFIGURATIONS*/

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

console.log("hello");

/* ROUTES */

app.use("/kpi", KpiRoute);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9090;
mongoose.Promise = global.Promise;
mongoose
	.connect(process.env.MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(async () => {
		app.listen(PORT, () => console.log(`server port: ${PORT}`));




		// ADD DATE ONLY ONCE TIME OR WHEN YOU WANT TO RESET THE DATABASE
		// await mongoose.connection.db.dropDatabase();
		// KPI.insertMany(kpis);
	})
	.catch((error) => console.log(`${error} did not connect to server`));
