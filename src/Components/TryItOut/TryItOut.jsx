import React, { useState } from 'react';
import './TryItOut.css'; // Create this file for your custom TryItOutSection styles
import globeImage from '../../assets/globe.png';
import ellipse1 from '../../assets/ellipse-1-try-it-out.png';
import ellipse2 from '../../assets/ellipse-2-try-it-out.png';

function TryItOut() {

    const [selectedFileName, setSelectedFileName] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFileName(file.name);
    };

    const removeFile = () => {
        setSelectedFileName('');
    }
    return (
        <section className="try-it-out-section">
            <div className="try-it-out-content">
                <div className="try-it-out-globe">
                    <img src={ellipse1} className='ellipse ellipse1' alt="ellipse1" />
                    <img src={ellipse2} className='ellipse ellipse2' alt="ellipse2" />
                    <img src={globeImage} alt="Globe" />
                </div>
                <div className="try-it-out-form">
                    <h2 className="form-header">Try it out! <span className="form-sub-header">(for free) </span> </h2>
                    <p className="form-description">
                        Get started with our amazing platform by entering your
                        information below. Ensure that the zip file you upload
                        contains all the necessary assets for your project.
                    </p>
                    <form className="form">
                        <input type="text" placeholder="Email" required />
                        <input type="text" placeholder="Full Name" required />
                        <input type="text" placeholder="Project Name" required />
                        <label className="custom-file-label">
                            <input type="file" className='custom-file-input' requireds onChange={handleFileChange} />
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
