import React, { useState } from 'react'
import { PropulsionData } from '@/helper';
import AccordionWrap from '@/components/Accordion';

const NavBar = ({ setActive, active, styles }) => {
  return (
    <div className={styles?.ControlSystemTabWrapper}>
      {PropulsionData?.data?.map((e, index) => (
        <div
          key={index}
          className={`${styles?.FcsNavBar} ${active?.id === e.id ? styles?.FcsNavActive : ''} secondary-font`}
          onClick={() => setActive(PropulsionData.data?.find(e1 => e1.id === e.id))}
        >
          <p>[{index + 1}]</p> 
          {e.title}
        </div>
      ))}
    </div>
  );
};

const NavContent = ({ data, styles }) => {
  const { title: contentTitle, description: contentDescription, data: accordianData } = data || {};
  return (
      <div className={styles?.ECUContentWrapper}>
          <div className={styles?.ECUContentItems}>
            <h3 className="heading-3">{contentTitle}</h3>
            <p className="paragraph">{contentDescription}</p>
          </div>
          <div style={{ flex: 1 }}>
              {accordianData?.values && <AccordionWrap AccordianTitle={accordianData?.title} values={accordianData?.values}/>}
          </div>
      </div>
  );
}
export default function Propulsion({ styles }) {
  const [active, setActive] = useState(PropulsionData?.data[0])
  const { slug,
    title,
    description,
    images,
  } = PropulsionData || {}
  return (
    <div>
      <div className={styles?.PropulsionWrapper} id={slug}>
        <div className={styles?.Title}>
          <h3 className="heading-2">{title}</h3>
          <p className="paragraph">{description}</p>
        </div>
        <div>{images && <img src={images} />}</div>
      </div>
      <NavBar active={active} setActive={setActive} styles={styles} />
      {active && <NavContent data={active} styles={styles} />}
    </div>
  )
}
