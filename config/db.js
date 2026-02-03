import mongoose from "mongoose"

const ConnectDB = async ()=> {
 try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Db Connected")
 } catch (err) {
    console.log(err)
    console.log("db err ", err)
 }
}

export default ConnectDB