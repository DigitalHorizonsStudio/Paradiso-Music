import React from 'react';
import BallAndChain from '../assets/partners/BallAndChain.png';
import Baltimore from '../assets/partners/Baltimore.png';
import Cheeca from '../assets/partners/Cheeca.png';
import Dolphin from '../assets/partners/Dolphin.png';
import Frail from '../assets/partners/Frail.png';
import Grazianos from '../assets/partners/Grazianos.png';
import HardRock from '../assets/partners/HardRock.png';
import Image from '../assets/partners/Image.png';
import IslandGrill from '../assets/partners/IslandGrill.png';
import magic from '../assets/partners/magic.png';
import MIA from '../assets/partners/MIA.png';
import Montys from '../assets/partners/Montys.png';
import Rusty from '../assets/partners/Rusty.png';
import RustyPelican from '../assets/partners/Rustypelican.png';
import Vezasur from '../assets/partners/VezaSur.png';

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
