import { useEffect, useState } from "react";
import { images, music } from "./media/consts.js";


function Background() {

    const [image, setImage] = useState(images[Math.floor(Math.random() * images.length)]);
    const [track, setTrack] = useState(music[Math.floor(Math.random() * music.length)]);

    useEffect(() => {
        setTimeout(() => {
            let imageURL = images[Math.floor(Math.random() * images.length)];
            setImage(imageURL);  
            window.scrollTo(0, 700);
        }, 5000);
    }, [image])
    console.log(image)
    return (
        <div className="w-full h-full max-h-full max-w-full">
            <img src={image} className="w-full h-full max-h-full max-w-full" />
            <audio autoPlay loop>
                <source src={track} type="audio/mpeg" />
            </audio>
        </div>
    )
}

export default Background
