import bcrypt from "bcrypt";

async function decryptPassword(userPass, dbPassword) {
  try {
    let result = await bcrypt.compare(userPass, dbPassword);
    if (result === true) {
      return result;
    } else {
      throw { msg: "Invalid password", code: "401" };
    }
  } catch (err) {
    throw err;
  }
}

export default decryptPassword;
