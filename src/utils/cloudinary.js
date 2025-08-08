import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    const uploadOnCloudinary = async function (localFilePath) {
        try {
            if(!localFilePath){
                console.log("Couldn't find a path for local file while uploading to cloudinary");
                return null;
            }
            //upload on cloudinary
            const response = await cloudinary.uploader.upload(localFilePath , {
                resource_type : "auto"
            });
            //file has been uploaded
            console.log("Uploaded is succesfully on cloudinary " , response.url);
            fs.unlinkSync(localFilePath); //delete from local server as the upload is complete
            return response;
        } catch (error) {
            console.log("File upload FAILED " , error)
            fs.unlinkSync(localFilePath);
            return null; 
        }
    }

    export {uploadOnCloudinary};