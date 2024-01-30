import aws from 'aws-sdk';
import { dataUriToBuffer } from 'data-uri-to-buffer';


const aws_secret_key = process.env.AWS_SECRET_ACCESS_KEY;
const aws_access_key = process.env.AWS_ACCESS_KEY_ID;

export default async function handler(req, res) {
    if (req.method === "POST") {

        try{
          
        let {image} = req.body;

        

        aws.config.update({
    secretAccessKey: aws_secret_key,
    accessKeyId: aws_access_key,
    signatureVersion: 'v4',
    region: 'us-east-1'

});

const s3 = new aws.S3({
    params: {
        Bucket: 'hermes-email-images',
        signatureVersion: 'v4',
        region: 'us-east-1'
    }
});

   


            let date = new Date();
            let timestamp = date.getTime() + Math.floor(Math.random()*1000000)
            let image_name = timestamp + '.jpg';
            let parsed = dataUriToBuffer(image);
     
            let params = {
                    Bucket: 'hermes-email-images',
                    Key: image_name,
                    Body: Buffer.from(parsed.buffer)
                };
                let response = await s3.upload(params).promise();
                let image_destination = response.Location;

                //send image_destination as response
                res.status(200).json({image_destination: image_destination});


} catch (err) {

    console.log("there was an error")
    console.log(err)
    res.status(400).json({ error: err.message });
}

   
}
    }