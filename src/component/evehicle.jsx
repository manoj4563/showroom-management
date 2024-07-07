import React from "react";
import'./style/evehicle.css';
import CT100 from './images/peps.jpg';
import Green from './images/jupiter.jpg';
import { useNavigate } from "react-router-dom";


function Escooty(){
    const navigate = useNavigate();
    return(
        
        <div>
            <div className="CT">
                <img id="img1" src={CT100} alt="npoo"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
                     asperiores mollitia odio ipsa quis. Quibusdam dolor mollitia cupiditate 
                    quisquam voluptate, repudiandae quas. Ex libero velit, quos alias eveniet exercitationem fugiat.
                </p>
            </div>
            <div className="green">
                <img id="img2"src={Green} alt="noo"/>
                <p>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Nulla ex autem et ipsum tempore molestiae. Consequatur
                     officia dolorem odio vero, numquam rem, mollitia praesentium possimus nulla, tempora tempore harum dicta?
                </p>
            </div>
            <div>
                <a href='/Detail'>click me</a>
            </div>
            
        </div>
    )
}
export default Escooty;