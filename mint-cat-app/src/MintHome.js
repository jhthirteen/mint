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
import paw from './images/feet.png'

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
        mint11
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