"use client";
import React from "react";
import styles from "./Accordion.module.css";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

const AccordionItem = ({
  header,
  HeaderclassName,
  ContentClassName,
  IconClass,
  ...rest
}) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <span className={styles.chevron}>
          <span className={`${styles?.chevron1} ${IconClass}`}></span>
          <span className={`${styles?.chevron2} ${IconClass}`}></span>
        </span>
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${HeaderclassName} ${
          isEnter && styles.itemBtnExpanded
        }`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: `${styles.itemPanel}  ${ContentClassName}` }}
  />
);

export const RenderList = ({ list, listClassName }) => {
  const { type, data } = list || {};
  const RenderDiv = type;
  return (
    <RenderDiv className={listClassName}>
      {data.map((e, index) => {
        return (
          <React.Fragment key={index}>
            <li>{e}</li>
          </React.Fragment>
        );
      })}
    </RenderDiv>
  );
};
export default function AccordionWrap({
  AccordianTitle,
  values,
  HeaderclassName,
  ContentClassName,
  IconClass,
  listClassName,
}) {
  return (
    <div className={styles?.AccordionWrapper}>
      <div>
        <h3 className="sub-heading-1">{AccordianTitle}</h3>
      </div>
      <div className={styles?.accordion}>
        <Accordion transition transitionTimeout={250}>
          {values?.map((e, index) => {
            const { header, text, list } = e || {};
            return (
              <React.Fragment key={index}>
                <AccordionItem
                  header={header}
                  // initialEntered={index === 0}
                  ContentClassName={ContentClassName}
                  HeaderclassName={HeaderclassName}
                  IconClass={IconClass}
                >
                  {text && <p>{text}</p>}
                  {list && (
                    <RenderList list={list} listClassName={listClassName} />
                  )}
                </AccordionItem>
              </React.Fragment>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
