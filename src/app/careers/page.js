'use client';
import React from 'react'
import styles from "../careers/css/careers.module.css";
import Container from '@/components/Container';
import OurValues from './components/OurValues';
import WorkWithUs from './components/WorkWithUs';
import AadyahImpact from './components/AadyahImpact';
import Testimonial from './components/Testimonial';
import Opportunities from './components/Opportunities';

const Banner = () => {
    return  <div className={styles?.Banner}>
        <h6 className="micro-large secondary-font">work with us</h6>
        <h1 className="heading-1">Build the Future With Us</h1>
        <p className="paragraph">We are dedicated to aspiring for the stars and continually advancing the frontiers of aerospace technology</p>
        <button className="secondary-btn secondary-font">view current openings <svg xmlns="http://www.w3.org/2000/svg" width="20" height="1" viewBox="0 0 20 1" fill="none">
        <path d="M0.5 0.5H20" stroke="black"/></svg></button>
        <div>
        <picture>
            <source media="(min-width: 768px)" srcset={"/assets/images/career-banner-img.png"}/> 
            <source media="(max-width: 767px)" srcset={"/assets/images/career-banner-img.png"}/>
            <img src="/assets/images/career-banner-img.png" alt="Fallback Image" />
        </picture>
        </div>
    </div>
}

export default function page() {
  
  return (
    <>
        <Container>
        <Banner />
        </Container>
        <div className={styles?.OurValuesContainer}>
        <Container>
        <OurValues styles={styles}/>
        </Container>
        </div>
        <WorkWithUs styles={styles}/>
        <div className={styles?.AadyahImpactContainer}>
        <Container>
        <AadyahImpact styles={styles}/>
        </Container>
        </div>
        <div className={styles?.TestimonialContainer}>
        <Container>
        <Testimonial styles={styles}/>
        </Container>
        </div>
        <Container>
        <Opportunities styles={styles}/>
        </Container>
    </>
  )
}