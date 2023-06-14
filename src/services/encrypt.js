import bcrypt from "bcrypt";

async function encryptPassword(password) {
  try {
    const encPass = await bcrypt.hash(password, 10);
    return encPass;
  } catch (err) {
    throw err;
  }
}

export default encryptPassword;
