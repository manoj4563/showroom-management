import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './style/bike.css';
import CT100 from './images/ct100.jpeg';
import Green from './images/green.jpeg';
import Platina from './images/platinum.jpeg';
import Detail from './detail';

function Bike() {
    const navigate = useNavigate();
    const handleDetail = (bikeName) => {
        navigate(`/detail/${bikeName}`);
    };

    return (
        <div>
            <div className="CT" onClick={() => handleDetail('CT100')}>
                <img id="img1" src={CT100} alt="CT100" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officia
                    rerum aperiam quibusdam eveniet, amet placeat quas
                    voluptas animi quae modi vel non voluptatem esse qui saepe vitae. Blanditiis, officia.
                </p>
            </div>
            <div className="green" onClick={() => handleDetail('DOMINAR')}>
                <img id="img2" src={Green} alt="Green" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis porro consequuntur eveniet alias eligendi, voluptatum placeat repellendus eaque, autem, illum laborum iusto
                    architecto. Eum assumenda odio, deleniti optio maiores deserunt!
                </p>
            </div>
            <div className="platinum" onClick={() => handleDetail('PLATINA')}>
                <img id="img3" src={Platina} alt="Platina" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, expedita!
                    Tempore quas ipsa, ea autem sed, voluptate vitae eos molestias
                    nisi sapiente quibusdam laborum optio nesciunt eligendi recusandae incidunt quisquam.
                </p>
            </div>
        </div>
    );
}



export default Bike;
