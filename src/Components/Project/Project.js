import React from 'react';
import Cycle from './Cycle/Cycle';
import Shop from './Shop/Shop';
import Bang from './Bang/Bang';
import './Project.scss';

const Portfolio = () => {

    return (
        <div className="project">
            <div className="header">
                <h4>Project</h4>
            </div>

            <div className="project_container">
                <Cycle />
                <Bang />
                <Shop />
            </div>
        </div>
    );
};

export default Portfolio;