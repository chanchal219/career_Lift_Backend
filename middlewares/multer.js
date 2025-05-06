import multer from "multer";//img,files upload krne ke lie -upload in ram or harddisk

const storage = multer.memoryStorage();//ram me humari image store kr lega buffer bnakr
export const singleUpload = multer({storage}).single("file");// single file upload
//req merese image nikalkr ram me store krri hai