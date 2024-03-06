import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const filename = path.basename(file.originalname);

        const uniqueFilename = `${Date.now()}-${filename}`;
        cb(null, uniqueFilename);
    },
});

const upload = multer({ storage });

export default upload;
