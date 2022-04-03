const express = require("express");

const dishRouter = require("./routers/dishesRouter");
const leaderRouter = require("./routers/leaderRouter");
const promoRouter = require("./routers/promoRouter");

const app = express();
app.use(express.json());

app.use("/dishes", dishRouter);
app.use("/leaders", leaderRouter);
app.use("/promotions", promoRouter);

app.listen(3000, () => {
    console.log("Running on port : 3000...");
});