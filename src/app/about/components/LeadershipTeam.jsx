import React from "react";

export default function LeadershipTeam({ styles, data }) {
  const { profile_card, tag, title } = data || {};
  return (
    <div className={styles?.LeadershipTeamContainer}>
      <div className="container">
        <div className={styles?.LeadershipTeamTitle}>
          <h6 className="micro-large secondary-font">{tag}</h6>
          <h3 className="heading-2">{title}</h3>
        </div>
        <div className={styles?.LeadershipTeamWrap}>
          {profile_card?.map((e, index) => {
            const { designation, linkedin_url, name, profile_image } = e || {};
            return (
              <div key={index} className={styles?.LeadershipTeamItem}>
                <div className={styles?.LeadershipTeamProfile}>
                  <img src={profile_image} alt="LeadershipTeamProfile" />
                </div>
                <h3>{name}</h3>
                <p>{designation}</p>
                {linkedin_url && (
                  <a target="_blank" href={linkedin_url?.url}>
                    <img src={"/assets/images/linkedin.svg"} alt="linkedin" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
