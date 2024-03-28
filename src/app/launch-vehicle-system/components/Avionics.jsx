import React from 'react'
import styles from  '../css/lvs.module.css';
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
          {header}
          <span className={`${styles.chevron} chevron`}></span>
        </>
      }
      className={styles.item}
      buttonProps={{
        className: ({ isEnter }) =>
          `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
      }}
      contentProps={{ className: styles.itemContent }}
      panelProps={{ className: styles.itemPanel }}
    />
);

export default function Avionics({ styles }) {
  return (
    <div className="container">
      <div className={styles?.AvionicsContainer}>
        <div className={styles?.AvionicsHeader}>
          <h3 className="heading-2">Avionics</h3>
          <p className="paragraph">AADYAH offers cutting-edge design to manufacture solutions of avionics system, including hardware and software system for launch vehicle. </p>
        </div>
        
        <div className={styles?.AvionicsItemWrapper}>
          <div className={styles?.AvionicsGallery}>
            <div><img src={"/assets/images/avionics-img-one.png "}/></div>
            <div><img src={"/assets/images/avionics-img-two.png"}/></div>
          </div>
          
          <div className={styles?.AccordionWrapper}>
            <div><h3 className="sub-heading-1">Our Solution</h3></div>
            <div className={styles?.accordion}>
              <Accordion transition transitionTimeout={250}>
                <AccordionItem header="Engine Control Unit" initialEntered>
                  Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster 
                  system always gets consistent and dependable power.
                </AccordionItem>

                <AccordionItem header="Power Distribution System">
                  Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
                  erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
                </AccordionItem>

                <AccordionItem header="High Voltage Bus">
                  Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
                  Fusce vulputate purus sed tempus feugiat.
                </AccordionItem>

                <AccordionItem header="Avionics Power Bus">
                  Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
                  Fusce vulputate purus sed tempus feugiat.
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
