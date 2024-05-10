import { AddressData } from "@/helper";
import React from "react";

export default function Address({ styles }) {
  const {
    title,
    address,
    connect: { title: connecTitle, data: connectData },
  } = AddressData || {};
  return (
    <div className={styles?.AddressContainer}>
      <h2 className="sub-heading-2">{title}</h2>

      <div className={styles?.AddressWrapper}>
        <div className={styles?.AddressItems}>
          {address?.map((e, index) => {
            const { title, text } = e || {};
            return (
              <React.Fragment key={index}>
                <div className={styles?.AddressItemsContent}>
                  <h3 className="micro-large secondary-font">{title}</h3>
                  <p className="secondary-font">{text}</p>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <div className={styles?.ConnectUsWrapper}>
          <h2 className="caption secondary-font">{connecTitle}</h2>
          <div className={styles?.ConnectUsItems}>
            {connectData?.map((e, index) => {
              const { title, tel, email } = e || {};
              return (
                <React.Fragment key={index}>
                  <div className={styles?.ConnectUsContent}>
                    <h3 className="caption secondary-font">{title}</h3>
                    <a
                      className="paragraph secondary-font"
                      href={
                        email ? "mailto:" + email : tel ? "tel:" + tel : "#"
                      }
                      target="_blank"
                    >
                      {tel || email}
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
