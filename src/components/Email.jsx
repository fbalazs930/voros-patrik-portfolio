import React from 'react';
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
        e.target.reset()
    }
    return (
        <div className="email">
            <h1>Küldj üzenetet</h1>
            <form onSubmit={sendEmail}>
                <input className='name' type="text" placeholder="Név" name="name" />
                <input className='email' type="email" placeholder="E-mail cím" name="email" />
                <input type="text" placeholder="Tárgy" name="subject" />
                <textarea className='message' placeholder="Írj valamit..." name="message"></textarea>
                <button className='send' type="submit">Küldés</button>
            </form>
        </div>
    )
}
