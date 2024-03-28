'use client';
import React from 'react'
import styles from "../launch-vehicle-system/css/lvs.module.css";
import NavContent from './components/NavContent';
import Avionics from './components/Avionics';
import Gauidance from './components/Gauidance';
import ControlSystem from './components/ControlSystem';

const Banner = () => {
  return  <div className={styles?.Banner}>
  <p className="micro-large secondary-font">Space system</p>
  <h1 className="heading-1">Launch Vehicle System</h1>
</div>
}
export default function Index() {
  return (
    <>
      <div className="container">
        <Banner />
        <NavContent styles={styles}/>
      </div>
      <Gauidance styles={styles} />
      <Avionics  styles={styles} />
      <ControlSystem  styles={styles}/>
    </>

  )
}
