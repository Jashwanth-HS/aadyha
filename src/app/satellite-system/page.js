'use client';
import React from 'react'
import styles from "../satellite-system/css/satellite-system.module.css";
import NavBar from './components/NavBar';
import Container from '@/components/Container';
import Propulsion from './components/Propulsion';
import SpaceSystems from './components/SpaceSystems';
import { ElectricPowerSystem,OnBoardComputer,MotionControlSystem } from '@/helper';
  const spaceSystem = [ElectricPowerSystem,OnBoardComputer,MotionControlSystem];
const Banner = () => {
    return  <div className={styles?.Banner}>
    <h6 className="micro-large secondary-font">Space system</h6>
    <h1 className="heading-1">Satellite System</h1>
    <p className="paragraph">AADYAH’s expertise in bespoke Satellite systems can elevate your mission to new heights. </p>
  </div>
  }

export default function page() {
   
  return (
    <>
      <div className={styles?.stickyContainer}>
        <Container>
        <Banner />
        </Container>
        <NavBar styles={styles}/>
        <Container>
        <Propulsion styles={styles} />
        </Container>
        <div className={styles?.SpaceSystemsContainer}>
          <Container>
            {spaceSystem?.map((e,index)=>{
              return <React.Fragment key={index}>
                        <SpaceSystems data={e} styles={styles} />
              </React.Fragment>
            })}
          </Container>
        </div>
      </div>
    </>
  )
}