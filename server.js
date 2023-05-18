const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/social-hub-api',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

app.listen(PORT, () => console.log(`🔗 Connected on localhost:${PORT}`));
