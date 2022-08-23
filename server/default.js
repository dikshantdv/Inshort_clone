import { data } from "./database/data.js";
import News from "./model/newsSchema.js";

const DefaultData = async () => {
  try {
    await News.insertMany(data);
    console.log("Data imported successfully");
  } catch (err) {
    console.log(err.message);
  }
};

export default DefaultData;
