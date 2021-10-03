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
                    video="https://rr2---sn-c0q7lns7.c.drive.google.com/videoplayback?expire=1633259715&ei=g1hZYfP6BZir8wSciZu4Ag&ip=2001:4c4e:1e44:2d00:ba:69d2:3f22:3767&cp=QVRIVUNfWFdPRlhPOmM4RWZzVDZicl9ORUx0RXBxYmtmOTd4eXd0MkFyLXpVWE1GOEszeFlROHA&id=7ed7dacf4dfe8bfa&itag=18&source=webdrive&requiressl=yes&mh=QI&mm=32&mn=sn-c0q7lns7&ms=su&mv=u&mvi=2&pl=44&sc=yes&ttl=transient&susc=dr&driveid=1vH1TWJUOZGR6U4kNitqaI9-MuVb6js4P&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=203.104&lmt=1633085477242047&mt=1633244359&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRgIhAJF2lQ234fZMPH_RGHFa_EGbXB0DasCF6PiIa9Hi9LIPAiEAl-JGTwjL265jgt-LnfG7F3novWEUcUpp6kWkEIjQR_M=&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc&lsig=AG3C_xAwRQIgfxt9zFq3Tdko5nZFsgNKjt07v3Z6t-0ScgvRX3csnhUCIQDR_2ncmu_o-SNmEd-b4zb6Hl1GJ8QDfFv7eGecc6BeZg==&cpn=KuLYUTJ0bZ1rsNvs&c=WEB_EMBEDDED_PLAYER&cver=1.20210928.1.1"
                    thumbnail="https://any-link.com/video-thumbnail.jpg"
                />
            </div>
        </div>
    )
}
