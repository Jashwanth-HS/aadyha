import React from "react";

export default function OurCustomers({ styles, data }) {
  const { type, title, description, svg } = data || {};
  return (
    <div className={styles?.OurCustomersContainer} id={type}>
      <div className={styles?.OurCustomersTitle}>
        <h3 className="heading-2">{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles?.OurCustomersContentWrap}>
        {svg && <div dangerouslySetInnerHTML={{ __html: svg }} />}
      </div>
    </div>
  );
}
