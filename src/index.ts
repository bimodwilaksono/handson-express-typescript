/**
 * Required External Modules
 */
// import { config } from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import { itemsRouter } from "./items/items.router";
// import helmet from "helmet";
// import { itemsRouter } from "./items/items.router";

// config({ path: process.env });

/**
 * App Variables
 */

// if (!process.env.PORT) {
//     process.exit(1);
// }

// const PORT: number = parseInt(process.env.PORT as string, 10);
const PORT: number = 7000;

const app = express();

/**
 *  App Configuration
 */
app.get("/", (req: Request, res: Response) => {
    return res.send("Health is OK");
});
app.use("/api/v1/items", itemsRouter);

// app.use(helmet());
app.use(cors());
app.use(express.json);

/**
 * Server Activation
 */

app.listen(8080, () => console.log(`Server running on port ${PORT}`));
