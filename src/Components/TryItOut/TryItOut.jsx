import React, { useState } from 'react';
import './TryItOut.css'; // Create this file for your custom TryItOutSection styles
import globeImage from '../../assets/globe.png';
import ellipse1 from '../../assets/ellipse-1-try-it-out.png';
import ellipse2 from '../../assets/ellipse-2-try-it-out.png';
import loadingImage from '../../assets/loading.gif';
import { createCombinations } from '../../api/stage2';

function TryItOut() {

    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [projectName, setProjectName] = useState('');
    const [zipFile, setZipFile] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState('');

    const removeFile = () => {
        setSelectedFileName('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if all fields are filled
        if (!email || !fullName || !projectName || !zipFile) {
            alert('Please fill in all fields.');
            return;
        }

        // Check if the uploaded file is a .zip file
        if (!zipFile.name.endsWith('.zip')) {
            alert('Please upload a .zip file.');
            return;
        }

        // Create a FormData object to send the file
        const formData = new FormData();
        formData.append('email', email);
        formData.append('fullName', fullName);
        formData.append('projectName', projectName);
        formData.append('file', zipFile);

        setIsLoading(true);

        // Make the POST request
        createCombinations(formData)
            .then((response) => {
                // Handle the response here if needed
                setResponse(response.data);
            })
            .catch((error) => {
                console.error('Error making POST request:', error);
            })
            .finally(() => {
                // Stop loading
                setIsLoading(false);
            });
    };


    return (
        <section className="try-it-out-section">
            <div className="try-it-out-content">
                <div className="try-it-out-globe">
                    <img src={ellipse1} className='ellipse ellipse1' alt="ellipse1" />
                    <img src={ellipse2} className='ellipse ellipse2' alt="ellipse2" />
                    <img src={globeImage} alt="Globe" />
                </div>
                {response && (
                    <div className='selected-file'>
                        <p className="selected-file-name">{response}</p>
                    </div>
                )}
                <div className="try-it-out-form" style={{ filter: isLoading ? 'blur(1px)' : 'none', display: response ? 'none' : 'block' }}>
                    {isLoading && (
                        <div className="loading-overlay">
                            <img src={loadingImage} alt="Loading" />
                        </div>
                    )}
                    <h2 className="form-header">Try it out! <span className="form-sub-header">(for free) </span> </h2>
                    <p className="form-description">
                        Get started with our amazing platform by entering your
                        information below. Ensure that the zip file you upload
                        contains all the necessary assets for your project.
                    </p>
                    <form className="form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            placeholder="Project Name"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            required
                        />
                        <label className="custom-file-label">
                            <input
                                type="file"
                                className="custom-file-input"
                                required
                                onChange={(e) => {
                                    setZipFile(e.target.files[0]);
                                    setSelectedFileName(e.target.files[0].name);
                                }}
                            />
                            Select a Zip file!
                        </label>
                        {selectedFileName && (
                            <div className='selected-file'>
                                <p className="selected-file-name">{selectedFileName}</p>
                                <p className='selected-file-cancel' onClick={removeFile} > X </p>
                            </div>
                        )}
                        <button className="try-it-out-button">Try it out</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default TryItOut;
