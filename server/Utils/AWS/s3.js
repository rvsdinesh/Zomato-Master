import AWS from "aws-sdk";

const s3Bucket = new AWS.S3({
  accessKeyId: "AKIAR6Y3U7NXRUW3WU67",
  secretAccessKey: "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",
  region: "ap-south-1"
});

export const s3Upload = (options) => {
  return new Promise((resolve, reject)=>
    s3Bucket.upload(options, (error,data)=>{
      if(error) return reject(error);
      return resolve(data);
    })
  );
};