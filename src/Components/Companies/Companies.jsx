import React from 'react';
import './Companies.css'; // Create this file for your custom CompaniesSection styles
import companyListData from '../../assets/data/companyList';
import worldMap from '../../assets/world.png';

function Companies() {
    return (
        <section className="companies-section">
            <div className="container">
                <h2 className="section-heading">Companies We Worked With Since 2023</h2>

                <div className="company-list">
                    {companyListData.map((company) => (
                        <div key={company.id} className="company-card">
                            <img className="company-logo" src={company.url} alt={`${company.id}`} />
                        </div>
                    ))}
                </div>

                <div className="free-trial-card">
                    <div className="free-trial-text">
                        <h3 className="subtitle">Love Our Tool?</h3>
                        <h2 className="title">Feel Free to Join Our 15 Days Free Trial</h2>
                        <button className="start-trial-button">Start Free Trial</button>
                    </div>
                    <div className="world-map">
                        <img src={worldMap} alt="World Map" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Companies;
