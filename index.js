const express = require("express");
const secureRoutes = require("./routes/secureRoutes");
const app = express();

app.use(express.json());

app.use("/api/secure", secureRoutes);

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
