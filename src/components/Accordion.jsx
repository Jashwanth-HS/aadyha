'use client';
import React from 'react';
import styles from './Accordion.module.css';
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
          {header}
          
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

export default function Accordion({children,header}) {
  return (
    <div className={styles?.accordion}>
    <Accordion transition transitionTimeout={250}>
        
      <AccordionItem header="Engine Control Unit" initialEntered>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
  )
}
