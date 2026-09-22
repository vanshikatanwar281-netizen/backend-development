const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    try {
        throw new Error("Something went wrong");
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
})

app.get("/:id", (req, res) => {
    const id = req.params.id;
    try {
        if (id === "1234") {
            res.send("Valid id");
        } else {
            throw new Error("Invalid id");
        }
    } catch (error) {
        res.status(400).json({ success: false, message: "invalid Id" });
    }
});

app.get("/age-check/:age", (req, res) => {
    let age = req.params.age;
    try {
        if (age < 18) {
            throw new Error("You are not eligible to vote");
        } else {
            res.send("You are eligible to vote")
        }
    } catch (error) {
        //res.status(500).json({success:false, message:"Age is less than 18"});
        next(error); //pass the error to the error handling middleware
    }
})
    +
    app.use((err, req, res, next) => {
        res.status(500).json({ success: false, message: err.message })
    })


app.use((req, res) => {   //invalid route middleware
    res.status(404).json({ success: false, message: "Page not found" });
})


app.listen(PORT, () => console.log(`Server is running `));