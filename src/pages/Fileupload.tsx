import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import '../components/FileUpload.css'; 

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState<string>('');
  const [topic, setTopic] = useState<string>('');
  const [studyLevel, setStudyLevel] = useState<string>('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!file) {
      alert('Please select a file.');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', description);
    formData.append('topic', topic);
    formData.append('studyLevel', studyLevel);
  
    try {
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('File uploaded successfully. Location: ' + response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file. Please try again.');
    }
  };
  

  return (
    <div className="fileUploadContainer">
      <h2>Upload Notes</h2>
      <form onSubmit={handleSubmit}>
        <div className="fileUploadInputGroup">
          <label htmlFor="file" className="fileUploadLabel">Select File:</label>
          <input type="file" id="file" className="fileUploadFile" onChange={handleFileChange} />
        </div>
        <div className="fileUploadInputGroup">
          <label htmlFor="description" className="fileUploadLabel">Description:</label>
          <input type="text" id="description" className="fileUploadText" value={description} onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} />
        </div>
        <div className="fileUploadInputGroup">
          <label htmlFor="topic" className="fileUploadLabel">Topic:</label>
          <input type="text" id="topic" className="fileUploadText" value={topic} onChange={(e: ChangeEvent<HTMLInputElement>) => setTopic(e.target.value)} />
        </div>
        <div className="fileUploadInputGroup">
          <label htmlFor="studyLevel" className="fileUploadLabel">Study Level:</label>
          <input type="text" id="studyLevel" className="fileUploadText" value={studyLevel} onChange={(e: ChangeEvent<HTMLInputElement>) => setStudyLevel(e.target.value)} />
        </div>
        <button type="submit" className="fileUploadButton">Upload</button>
      </form>
    </div>
  );
};

export default FileUpload;
