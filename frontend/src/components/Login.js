import './style.css'
import React from 'react';
import { Link } from 'react-router-dom';
import fakebook from '../Images/fakebook.png'
import tiktok from '../Images/tiktok.png'

const Login = () =>{

    return(
        <div className="main_container">

        <div className="header_container">
            <img className="header_logo" src={fakebook} alt=""/>
            <div className="text-container">
                <h3>Log in With Facebook</h3>
            </div>
        </div>
        
        <h3>hello world</h3>

        <div className="tiktok-container">
            <img className="tiktok_logo" src={tiktok} alt=""/>
            <h4>Tiktok is requesting access to:</h4>
            <p>Your name and profile picture, email<br/> address and friends list.</p>
        </div>
        <p className="facebook_warning">This doesn't let the app post to facebook</p>


        <div className="button_section">
            <Link className='button_one' to={"/password"}>Continue as SUraj</Link>
            <Link className='button_two'>Cancel</Link>
        </div>

        <div className="terms_policy">
            <p className="p_text"> By continuing, TikTok will recieve ongoing access to the information you share and Facebook will record when TikTok accesses it. <span>Learn more</span> about this sharing and the setting you  <br/> have. </p>
            <p className="p_privacy">TikTok's <span>Privacy Policy</span> and <span>Terms</span></p>
        </div>

    </div>

    )
}

export default Login;