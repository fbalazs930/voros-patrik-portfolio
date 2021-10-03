import React from 'react';
import ReactWebMediaPlayer from 'react-web-media-player';

export const Videos = () => {
    return (
        <div className='videos p'>
            <div>
                <h1>Videók</h1>
            </div>

            <div className="videos-container">
                <ReactWebMediaPlayer className="video"
                    title="BME napok"
                    video="https://rr2---sn-c0q7lns7.c.drive.google.com/videoplayback?expire=1633276371&ei=k5lZYZnbLNeEhwb1p5-gBg&ip=2001:4c4e:1e44:2d00:ba:69d2:3f22:3767&cp=QVRIVUNfVVNVQlhPOmM4R2NvWjJicl9ORU5xQXZtYmtmOTd6dnN6OEFyLXpVWkpCNEczeFlROHI&id=7ed7dacf4dfe8bfa&itag=18&source=webdrive&requiressl=yes&mh=QI&mm=32&mn=sn-c0q7lns7&ms=su&mv=u&mvi=2&pl=44&sc=yes&ttl=transient&susc=dr&driveid=1vH1TWJUOZGR6U4kNitqaI9-MuVb6js4P&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=203.104&lmt=1633085477242047&mt=1633260836&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIgXyOuKpl9WqymQspBuK45jO0LcNA-M0MfYwvj23XROtMCIQCxRcw3Xj1t5RH45wd4EHiDbXDmu7KOsNm5V0O77aAzQg==&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc&lsig=AG3C_xAwRQIhAJelc1Ioizh54-Voas_ZwbjVT6xb9-F0bCgWHU8LZCltAiBmRPY5gc-bYuLNeW20D90BBo4tPjPh593ZVtIUW3idhQ==&cpn=OolXsybvAScjGqZv&c=WEB_EMBEDDED_PLAYER&cver=1.20210928.1.1"
                    thumbnail="https://any-link.com/video-thumbnail.jpg"
                />
            </div>
        </div>
    )
}
