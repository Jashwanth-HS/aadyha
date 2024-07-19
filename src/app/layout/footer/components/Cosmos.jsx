import { PrimaryButton } from "@/components/Buttons";
import Image from "next/image";
import React from "react";

export default function Cosmos({ styles, cosmosData }) {
  const { title, blocks } = cosmosData || {};
  if (!cosmosData) return <></>;
  return (
    <div className={styles?.cosmosContainer}>
      <div className={styles?.cosmosContainerBackground}>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={"/assets/images/cosmosbg.png"}
          />
          <source
            media="(max-width: 767px)"
            srcSet={"/assets/images/cosmosbgMob.png"}
          />
          <Image
            alt="cosmos bg"
            width={100}
            height={100}
            priority={true}
            src={"/assets/images/cosmosbg.png"}
          />
        </picture>
      </div>
      <div className={styles.cosmosContentContainer}>
        <h2 className={`${styles?.cosmosTitle} heading-2`}>{title}</h2>
        <div className={styles?.cosmosBlocksContainer}>
          {blocks?.map((e, index) => {
            const { title, description, button } = e || {};
            return (
              <div key={index} className={styles?.cosmosBlock}>
                <div className={styles?.cosmosBlockContent}>
                  <h4
                    className={`${styles?.cosmosBlockTitle} caption secondary-font`}
                  >
                    {title}
                  </h4>
                  <p
                    className={`${styles?.cosmosBlockDescription} caption secondary-font`}
                  >
                    {description}
                  </p>
                </div>
                <PrimaryButton label={button.title} href={button?.url} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
