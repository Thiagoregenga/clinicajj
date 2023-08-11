import React from 'react';
import photo from '../FOTOS/3m.jpeg';
import styles from './PhotoGallery.module.css';

function Photos() {
    return (
        <div className={styles.photos}>
            <img src={photo} alt="foto" className={styles.photos_img} />
        </div>
    );
}

export default Photos;
