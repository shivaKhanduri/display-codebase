const AWS = require('aws-sdk');
const mysql = require('mysql');

// Initialize AWS SDK clients
const s3Client = new AWS.S3({ region: 'ap-south-1' });
const bucketName = 'uni-notes';

// MySQL database configuration
const dbConfig = {
    host: 
    user: 
    password: 
    database: 
    port: 3306,
    flags: "-4",
};

// Create MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Fetch metadata and URLs of S3 objects
async function fetchS3ObjectMetadata(bucketName) {
    try {
        const data = await s3Client.listObjectsV2({ Bucket: bucketName }).promise();
        return data.Contents.map(object => {
            const metadata = {
                key: object.Key,
                name: object.Key, // Assuming `name` is the same as `key`
                url: `https://${bucketName}.s3.amazonaws.com/${object.Key}`,
                size: object.Size,
                lastModified: object.LastModified.toISOString(),
                
            };
            console.log('Object metadata:', metadata);
            return metadata;
        });
    } catch (err) {
        console.error('Error fetching S3 object metadata:', err);
        throw err; // Rethrow the error to propagate it to the caller
    }
}

async function transferS3MetadataToSQL(bucketName) {
    try {
        const objects = await fetchS3ObjectMetadata(bucketName);
        for (const object of objects) {
            await insertMetadataIntoSQL(object);
        }
        console.log('Transfer complete.');
    } catch (err) {
        console.error('Error transferring metadata to SQL:', err);
    }
}

async function insertMetadataIntoSQL(metadata) {
    try {
        await pool.query('INSERT INTO UNINOTES SET ?', metadata);
        console.log('Metadata inserted successfully:', metadata);
    } catch (err) {
        console.error('Error inserting metadata into SQL:', err);
        throw err; // Rethrow the error to propagate it to the caller
    }
}

// Call the function to start the transfer process
transferS3MetadataToSQL(bucketName);
