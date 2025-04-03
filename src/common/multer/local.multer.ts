import multer from "multer"
import {diskStorage} from "multer"
import * as path from "path"
import * as fs from 'fs';


fs.mkdirSync(`images/`,{recursive:true})


const storage = diskStorage({
    // xử lý nơi lưu trữ
    destination: function (req, file, cb) {
        // có req để xử lý logic và folder muốn lưu trữ (file : image,docx,excel,pdf)
      cb(null, 'images/')
    },
    // xử lý tên file 
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      // fileExtension ( đuôi mở rộng của file)
      const fileExtension= path.extname(file.originalname)
      const fileNameString= `local-`+ file.fieldname + '-' + uniqueSuffix + fileExtension

      cb(null,fileNameString)
    }
  })
const uploadLocal = { 
    storage:storage ,
    limits:{
        fileSize: 1*1024*1024,// 1mb
    }
}
export default uploadLocal