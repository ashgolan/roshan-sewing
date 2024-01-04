import Express from "express";
import cors from "cors";
import "./DB/mongoose.js";
import { inventoryRouter } from "./routers/inventory.router.js";
import * as url from "url";
import path from "path";
import { providerRouter } from "./routers/provider.router.js";
import { saleRouter } from "./routers/sale.router.js";
import { userRouter } from "./routers/user.router.js";
import { contactRouter } from "./routers/contact.router.js";

const app = Express();
const __dirname = url.fileURLToPath(new URL("./", import.meta.url));
const publicPath = path.join(__dirname, "build");
app.use(Express.static("public"));

app.use(Express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;

app.use(Express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/inventory", inventoryRouter);
app.use("/provider", providerRouter);
app.use("/sale", saleRouter);
app.use("/contact", contactRouter);
app.listen(PORT, () => {
  console.log("connecting to port", PORT);
});
