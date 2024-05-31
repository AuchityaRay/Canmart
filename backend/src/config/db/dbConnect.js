const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
      });
      console.log(`Database Connected!`);
    } catch (error) {
      console.error("DB Error: "+error);
      process.exit(1);
    }
  }

module.exports = dbConnect;
