import React from 'react';
import BallAndChain from '../Assets/partners/BallAndChain.png';
import Baltimore from '../Assets/partners/Baltimore.png';
import Cheeca from '../Assets/partners/Cheeca.png';
import Dolphin from '../Assets/partners/Dolphin.png';
import Frail from '../Assets/partners/Frail.png';
import Grazianos from '../Assets/partners/Grazianos.png';
import HardRock from '../Assets/partners/HardRock.png';
import Image from '../Assets/partners/Image.png';
import IslandGrill from '../Assets/partners/IslandGrill.png';
import magic from '../Assets/partners/magic.png';
import MIA from '../Assets/partners/MIA.png';
import Montys from '../Assets/partners/Montys.png';
import Rusty from '../Assets/partners/Rusty.png';
import RustyPelican from '../Assets/partners/Rustypelican.png';
import Vezasur from '../Assets/partners/VezaSur.png';

const images = [
    BallAndChain,
    Baltimore,
    Cheeca,
    Dolphin,
    Frail,
    Grazianos,
    HardRock,
    Image,
    IslandGrill,
    magic,
    MIA,
    Montys,
    Rusty,
    RustyPelican,
    Vezasur
];

const HomeSlider = () => {
    return (
        <div className="home-slider bg-black min-h-screen flex flex-col justify-center items-center pt-3 xl:mb-10">
            <h1 className="text-6xl text-white mb-8 md:p-10">Some of our clients</h1>
            <div className="grid grid-cols-5 gap-24 xl:mb-15">
                {images.map((image, index) => (
                    <div key={index} className="relative flex justify-center">
                        <img
                            src={image.src}
                            alt={`Client ${index + 1}`}
                            className="mx-auto w-100 h-100 object-contain rounded-lg mb-2"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeSlider;
