import React, { useState } from 'react';

import mint1 from './images/mint1.JPG';
import mint2 from './images/mint2.PNG';
import mint3 from './images/mint3.JPG';
import mint4 from './images/mint4.JPG';
import mint5 from './images/mint5.JPG';
import mint6 from './images/mint6.JPG';
import mint7 from './images/mint7.JPG';
import mint8 from './images/mint8.PNG';
import mint9 from './images/mint9.PNG';
import mint10 from './images/mint10.JPG';
import mint11 from './images/mint11.JPG';
import mint12 from './images/mint12.jpg';
import mint13 from './images/mint13.jpg';
import mint14 from './images/mint14.jpg';
import mint15 from './images/mint15.jpg';
import mint16 from './images/mint16.jpg';
import mint17 from './images/mint17.jpg';
import mint18 from './images/mint18.jpg';
import mint19 from './images/mint19.jpg';
import mint20 from './images/mint20.jpg';
import mint21 from './images/mint21.jpg';
import mint22 from './images/mint22.jpg';
import mint23 from './images/mint23.jpg';
import mint24 from './images/mint24.jpg';
import mint25 from './images/mint25.jpg';
import mint26 from './images/mint26.jpg';
import mint27 from './images/mint27.jpg';
import mint28 from './images/mint28.jpg';
import mint29 from './images/mint29.jpg';
import mint30 from './images/mint30.jpg'
import mint31 from './images/mint31.jpg';
import mint32 from './images/mint32.jpg';
import mint33 from './images/mint33.jpg';
import mint34 from './images/mint34.jpg';
import mint35 from './images/mint35.jpg';
import mint36 from './images/mint36.jpg';
import mint37 from './images/mint37.jpg';
import mint38 from './images/mint38.jpg';
import mint39 from './images/mint39.jpg';
import mint40 from './images/mint40.jpg';
import mint41 from './images/mint41.jpg';
import mint42 from './images/mint42.jpg';
import mint43 from './images/mint43.PNG';
import mint44 from './images/mint44.jpg';
import mint45 from './images/mint45.jpg';
import mint46 from './images/mint46.jpg';
import mint47 from './images/mint47.jpg';
import mint48 from './images/mint48.jpg';
import mint49 from './images/mint49.jpg';
import mint50 from './images/mint50.jpg';
import mint51 from './images/mint51.jpg';
import mint52 from './images/mint52.jpg';

import paw from './images/feet.png';

const MintHome = () => {
    const mintPictures = [
        mint1,
        mint2,
        mint3,
        mint4,
        mint5,
        mint6,
        mint7,
        mint8,
        mint9,
        mint10,
        mint11,        
        mint12,
        mint13,
        mint14,
        mint15,
        mint16,
        mint17,
        mint18,
        mint19,
        mint20,
        mint21,
        mint22,
        mint23,
        mint24,
        mint25,
        mint26,
        mint27,
        mint28,
        mint29,
        mint30,
        mint31,
        mint32,
        mint33,        
        mint34,
        mint35,
        mint36,
        mint37,
        mint38,
        mint39,
        mint40,
        mint41,
        mint42,
        mint43,
        mint44,
        mint45,
        mint46,
        mint47,
        mint48,
        mint49,
        mint50,
        mint51,
        mint52,
    ];

    const [image, setImage] = useState(mintPictures[0]);

    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * mintPictures.length);
        setImage(mintPictures[randomIndex]);
    };

    const styles = {
        body: {
            backgroundColor: '#d0f0c0', //mint green
            backgroundImage: `url(${paw})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            margin: 0,
            cursor: 'pointer',
        },
        container: {
            textAlign: 'center',
            padding: '20px',
            borderRadius: '12px',
            width: '400px',
        },
        title: {
            fontFamily: '"Press Start 2P"',
            fontSize: '30px',
            color: '#2e7d32', //dark green to offset the mint green
        },
        catImage: {
            width: '300px',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '10px',
            border: '4px solid black',
        },
        button: {
            marginTop: '15px',
            padding: '10px 20px',
            backgroundColor: '#2e7d32',
            color: 'white',
            fontSize: '16px',
            fontFamily: '"Press Start 2P"',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            border: '4px solid black',
            boxShadow: '4px 4px 0px black',
        },
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <h1 style={styles.title}>Minty!!</h1>
                <img src={image} style={styles.catImage} />
                <button
                    onClick={getRandomImage}
                    style={styles.button}
                >
                    Show me Mint
                </button>
            </div>
        </div>
    );
};

export default MintHome;