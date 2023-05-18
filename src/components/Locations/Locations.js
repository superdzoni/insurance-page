import styles from './Locations.module.scss';
import React from 'react';
import location1 from '../../images/location1.jpg';
import location2 from '../../images/location2.jpg';
import map from '../../images/map.jpg';

const Locations = () => {
  return (
    <div>
      <h2>Locations</h2>
      <img src={location1} className={styles.img} alt="Location 1" />
      <p>Mainstreet 56</p>
      <p>32564 Bigcity</p>
      <img src={map} alt="map" />
      <img src={location2} className={styles.img} alt="Location 2" />
      <p>Longstreet 33</p>
      <p>78091 Bigcity</p>
      <img src={map} alt="map" />
    </div>
  );
};

export default Locations;