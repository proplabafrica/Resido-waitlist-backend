const Waitlist = require("../Models/waitlist");

const enterEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ msg: "Please enter a valid email address" });
  }
  try {
    console.log(req.body);
    const list = await Waitlist.create(req.body);
    res.status(201).json({ data: list });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { enterEmail };
