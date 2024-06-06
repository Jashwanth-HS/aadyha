import React from "react";

export default function ChooseAadyah({ styles, data }) {
  const { heading, blocks } = data || {};
  return (
    <div className="container">
      <div className={styles?.WcaContainer}>
        <div className={styles?.WcaContainerTitile}>
          <h3 className="heading-2">{heading}</h3>
        </div>
        <div className={styles?.WcaItems}>
          {blocks?.map((e, index) => {
            const { Description, Icon, Title } = e || {};
            return (
              <div key={index}>
                <div dangerouslySetInnerHTML={{ __html: Icon }} />
                <h3 className="sub-heading-1">{Title}</h3>
                <p className={`${styles?.WcaContainerParagraph} paragraph`}>
                  {Description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
