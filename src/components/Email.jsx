import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const Email = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_lc1ep2d', 'template_rq6u8s8', e.target,
            'user_DPJA0z119tV74uzT3J57Y')
            .then((result) => {
                alert("Elküldve!");
            }, (error) => {
                alert("Sikertelen!");
            });
        e.target.reset() ;
    }
    const[click,setClick] = useState(false);
    return (
        <div className="email">
            <i onClick={()=>{setClick(!click)}} className="fab fa-facebook-messenger"></i>
            {click && 
            <form onSubmit={sendEmail}>
                <input className='nameI' type="text" placeholder="Név" name="name" />
                <input className='emailI' type="email" placeholder="E-mail cím" name="email" />
                <input type="text" placeholder="Tárgy" name="subject" />
                <textarea className='messageI' placeholder="Írj valamit..." name="message"></textarea>
                <button className='sendI' type="submit">Küldés</button>
            </form>}
        </div>
    )
}
