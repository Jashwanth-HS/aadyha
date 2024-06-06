import React from "react";

export default function Address({ styles, data }) {
  const { address_locations, address_title, contact_details, contact_title } =
    data || {};
  return (
    <div className={styles?.AddressContainer}>
      <h2 className="sub-heading-2">{address_title}</h2>
      <div className={styles?.AddressWrapper}>
        <div className={styles?.AddressItems}>
          {address_locations?.map((e, index) => {
            const { office_name, office_location } = e || {};
            return (
              <React.Fragment key={index}>
                <div className={styles?.AddressItemsContent}>
                  <h3 className="micro-large secondary-font">{office_name}</h3>
                  <p className="secondary-font">{office_location}</p>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <div className={styles?.ConnectUsWrapper}>
          <h2 className="caption secondary-font">{contact_title}</h2>
          <div className={styles?.ConnectUsItems}>
            {contact_details?.map((e, index) => {
              const { title, number, email } = e || {};
              return (
                <React.Fragment key={index}>
                  <div className={styles?.ConnectUsContent}>
                    <h3 className="caption secondary-font">{title}</h3>
                    <a
                      className="paragraph secondary-font"
                      href={
                        email
                          ? "mailto:" + email
                          : number
                          ? "tel:" + number
                          : "#"
                      }
                      target="_blank"
                    >
                      {number || email}
                    </a>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
