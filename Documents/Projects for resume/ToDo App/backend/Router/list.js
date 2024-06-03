const router = require('express').Router();

const User = require('../Model/user');
const List = require("../Model/list");


//create
router.post("/addTask", async (req, res) => {
    try {
        const { title, body, email } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            const list = new List({ title, body, user: existingUser });
            await list.save().then(() => res.status(200).json({ list }))
            existingUser.list.push(list)
            existingUser.save();

        }


    } catch (error) {
        console.log(error);
    }
})

//update

router.put("/updateTask/:id", async (req, res) => {
    try {
        const { title, body, email } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            const updatedList = await List.findByIdAndUpdate(req.params.id, { title, body });
            res.json({ updatedList });
        }
    } catch (error) {
        console.log(error)
    }
})

//get

router.get("/getTask", async (req, res) => {
    try {
        const { email } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            const getLists = await List.find()
            res.json(getLists)
        } else {
            res.status(404).json({ message: 'user not found' })
        }
    } catch (error) {
        console.log(error);
    }
})



//delete

router.delete("/deleteTask/:id", async (req, res) => {
    try {
        const existingList = await List.findOne({ _id: req.params.id });
        if (existingList) {
            const deletedList = await List.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "successfully deleted" })
        } else {
            res.status(404).json({ message: "not a list" })
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;