import userModel from "../../../models/userModel";
import encryptPassword from "../../../services/encrypt";
import dbConnect from "../../../lib/dbConnect";

export default async function handler(req, res) {
  dbConnect();
  if (req.method == "POST") {
    const { name, email, password } = req.body;
    try {
      let encPass = await encryptPassword(password);
      let user = await userModel.insertMany([
        { name, email, password: encPass },
      ]);
      console.log(user);
      res.status(201).json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}
