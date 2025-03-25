'use client';
import React, { useState } from "react";
import "./EnrollButton.css";

const EnrollButton = ({showSavings=false}) => {
    return <div style={{display: 'flex', gap: '100px'}}>
        <div className="enroll-btn-container">
            <span className="text">
                LIFETIME ACCESS<span style={{marginBottom: '25px'}}><br /></span>
                1 Payment of $997<br />
            </span>
            <a className="enroll-btn">
                Enroll Now
            </a>
            {showSavings && <a style={{marginTop: '30px', color: 'rgb(65,139,189)', backgroundColor: 'white', margin: '0'}} className="link">
                Save $194 -- Pay in Full
            </a>}
        </div>
        <div className="enroll-btn-container">
            <span className="text">
                LIFETIME ACCESS<br />
                3 Payments of $397<br />
            </span>
            <a className="enroll-btn">
                Enroll Now
            </a>
        </div>
    </div>
}

export default EnrollButton;