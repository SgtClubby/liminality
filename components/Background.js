import { useEffect, useState } from "react";
import { images, music } from "./media/consts.js";

function Background() {

    const [image, setImage] = useState(images[Math.floor(Math.random() * images.length)]);
    const [track, setTrack] = useState(music[Math.floor(Math.random() * music.length)]);

    useEffect(() => {
        setTimeout(() => {
            let imageURL = images[Math.floor(Math.random() * images.length)];
            setImage(imageURL);  
        }, 5000);
    }, [image])

    return (
        <div className="w-screen h-screen max-h-full max-w-full">
            <img src={image} className="w-screen h-screen" />
            <audio autoPlay loop>
                <source src={track} type="audio/mpeg" />
            </audio>
        </div>
    )
}

export default Background;
