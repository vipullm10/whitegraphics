import React from 'react';
import './homepage.styles.scss';
import WhiteButton from '../buttons/white-button.component';


const HomePage = () => (
    <div className="homepage-container">
        <div className="homepage-content">
            <h2 className="jumbotron-title">
                Watch out
                <br></br>
                The Modern Responsive Website!
            </h2>
            <WhiteButton value="See our work"/>
        </div>
    </div>
);

export default HomePage;