const router = require('express').Router();
const User = require('../Model/user');
const bcrypt = require("bcryptjs")

//sign up
router.post("/register", async (req, res) => {
    console.log("BODY", req.body)
    const { email, userName, password } = req.body;
    const hashpassword = bcrypt.hashSync(password);
    const data = new User({ email, userName, password: hashpassword });

    console.log("DATA", data)
    let avlEmail = await User.findOne({ email });
    let avlUserName = await User.findOne({ userName });

    console.log("EMAIL", avlEmail);
    console.log("Username", avlUserName);


    if (avlEmail || avlUserName) {
        res.status(400).json({ error: "USER_ALREADY_EXIST" });
    } else {
        data.save()
            .then(savedData => { res.status(200).json({ message: "User Created!", newUser: savedData }) })
            .catch(er => {
                res.status(500).json({ message: "Something went wrong!" })
            })
    }
})
//login

router.post("/signin", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(400).json({ messege: "please sign up first" })
        }
        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect) {
            res.status(403).json({ messege: "password is not correct" })
        }

        const { password, ...others } = user._doc;
        res.status(200).json({ others })



    } catch (err) {
        console.log(err)
        res.status(404).json({ messege: "Something went wrong" })
    }
})






module.exports = router;