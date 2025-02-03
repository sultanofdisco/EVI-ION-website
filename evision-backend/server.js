const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello, EVI-ION!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

<<<<<<< HEAD

//  너무 졸려요이
=======
// 채연아 이거봐
>>>>>>> 3b2387e0f6acf3bbd3a557ec5a8f014343638fa0
