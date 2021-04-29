import React from 'react';
import Header from '../Header/Header'
import './contact.css'

const Contact = () => {
    return (
        <div className="contactpg">
            <Header 
                main={'#f87e8d'}
                shadow={'#e7d0b3'}/>
            <div className="contact-box">
            <a href = "mailto: sjaanahydrick@gmail.com">sjaanahydrick@gmail.com</a>
                    <br />
                    <br />
                    <a href="https://github.com/SjaanHydrick">GitHub</a>
                    <br />
                    <br />
                    <a href="https://www.linkedin.com/in/sjaan-hydrick/">LinkedIn</a>
            </div>
            <div>
                <div className="star3" id="st11"></div>
                <div className="star3" id="st14"></div>
                <div className="star3" id="st15"></div>
                <div className="star3" id="st17"></div>
                <div className="star4" id="st21"></div>
                <div className="star4" id="st22"></div>
                <div className="star4" id="st25"></div>
                <div className="star4" id="st26"></div>
                <div className="star4" id="st27"></div>
                <div className="star4" id="st29"></div>
                <div className="star4" id="st212"></div>
                <div className="star4" id="st213"></div>

                <div className="cloud4"></div>
                <div className="cloud5"></div>
                <div className="cloud6" id='cl31'></div>
            </div>
        </div>
    )
}

export default Contact
