import React from "react";
import './style/home.css';
import { useNavigate } from 'react-router-dom'; 

function Home() {
    const navigate = useNavigate();

    const img1 = () => {
        navigate('/Bike');
    };

    const img2 = () => {
        navigate('/Scooty');
    };

    const img3 = () => {
        navigate('/Escooty');
    };

    return (
        <div>
            <div className="main">
                <button onClick={img1}>Bike</button>
                <button onClick={img2}>Scooty</button>
                <button onClick={img3}>Escooty</button>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Aliquam ducimus consectetur quaerat labore accusantium tempore 
                    maxime, beatae, cupiditate nam, doloribus esse nisi
                     omnis autem sint. Ullam facilis quasi excepturi hic.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Vero, ullam iste mollitia est sapiente quos! Dolore iusto aliquid inventore rerum a. 
                    Magnam placeat excepturi amet consequatur dolorum animi quidem inventore.
                </p>
            </div>
        </div>
    );
}

export default Home;
