import DataUriParser from "datauri/parser.js";// img (coolection of pixel)ko base64 me convert kr dega 
import path from "path";

const getDataUri = (file) => {
  // Pehle check karo ki file sahi hai ya nahi
  if (!file || !file.originalname || !file.buffer) {
    throw new Error("File is missing or invalid.");
  }

  const parser = new DataUriParser();//instance bna lia tha 
  const extName = path.extname(file.originalname).toString();//file ko string me convert
  return parser.format(extName, file.buffer);//base 64 me convert ho jae
};

export default getDataUri;