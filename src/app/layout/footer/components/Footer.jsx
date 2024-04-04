import { PrimaryButton } from "@/components/Buttons";
import { footer } from "@/helper";
import Image from "next/image";
import React from "react";

export default function Footer({ styles }) {
  const { slug, images, title, button, links, enquires, socialLinks, privacyPolicy,copyRights } = footer || {};

  return (
    <div className={styles?.FooterContainer} id={slug}>
      <div className={styles?.FooterItems}>
        <div className={styles?.FooterTitle}>
          {images && <img src={images} alt="Logo" />}
          <h3 className="heading-3">{title}</h3>
          <PrimaryButton isDark label={button.label} href={button?.slug} />

        </div>
        <div className={styles?.FooterLinks}>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.slug}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles?.enquiresWrap}>
          {enquires?.map((e, index) => {
            const { title, tel, email } = e || {};
            return <React.Fragment key={index}>
              <div className={styles?.enquiresContent}>
                <h3 className="caption secondary-font">{title}</h3>
                <a className="caption secondary-font" href={email ? 'mailto:' + email : tel ? 'tel:' + tel : "#"} target='_blank'>{tel || email}</a>
              </div>
            </React.Fragment>
          })}
        </div>
        <div className={styles?.SocialLinkWrapper}>
          <ul>
            {socialLinks.map((data, index) => {
              const { label, slug } = data || {}
              return <li key={index}>
                <a href={slug} target="_blank"><Image width={100} height={100} src={`/assets/socialIcons/${label}.svg`} /></a>
              </li>
            })}
          </ul>
        </div>
      </div>
      <div className={styles?.copyRightsWrapper}>
        <div className={styles?.copyRightsItems}>
          {privacyPolicy.map((e, index) => {
            const { label, slug,  } = e || {};
            return <a href={slug} key={index}>
                {label}
              </a>
          })}

        </div>
        <div className={styles?.privacyPolicyItems}>
          {copyRights}
        </div>
      </div>
    </div>
  );
}