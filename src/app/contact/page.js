import Container from '@/components/Container'
import styles from "../contact/css/contact.module.css";
import React from 'react'
import Contact from './components/Contact';
import OurCustomers from './components/OurCustomers';

const Banner = () => {
  return  <div className={styles?.Banner}>
    <div>
        <h1 className="heading-1">Reach out to us to know more</h1>
        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra vestibulum tincidunt.</p>
    </div>
  </div>
}

export default function page() {

return (
  <>
    <div className={styles?.ContactBanner}>
    <Container>
    <Banner />
    <Contact  styles={styles}/>
    </Container>
    </div>
    <div className={styles?.OurCustomersWrap}>
    <Container>
    <OurCustomers styles={styles}/>
    </Container>
    </div>
  </>
)
}
