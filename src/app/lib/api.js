import axios from "axios";

const WORDPRESS_API_URL = "https://staging.supercode.in/aadyah-cms/wp-json";

export const fetchPage = async (pageId) => {
  try {
    const response = await axios.get(
      `${WORDPRESS_API_URL}/wp/v2/pages/${pageId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

export const fetchGlobal = async (name) => {
  try {
    const response = await axios.get(
      `${WORDPRESS_API_URL}/acf/v3/options/${name}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

const convertHomeACF = async (data) => {
  const spaceSystemAcfData = data.acf.space_system || [];
  const discoverSectionAcfData = data.acf.discover_section
    ? data.acf.discover_section[0] || []
    : [];
  const clientsSectionAcfData = data.acf.clients
    ? data.acf.clients[0] || []
    : [];
  const teamEffortSectionAcfData = data.acf.team_effort_section
    ? data.acf.team_effort_section[0] || []
    : [];
  const contentBlockAcfData = data.acf.content_block
    ? data.acf.content_block[0] || []
    : [];

  const spaceSystemResults = await Promise.all(
    spaceSystemAcfData.map(async (item, index) => {
      return {
        sectionTitle: item.section_title || "",
        sectionSubTitle: item.section_subtitle || "",
        blocks: (item.blocks || []).map((block) => {
          return {
            renderSvg: block.block_svg || "",
            title: block.title || "",
            subTitle: block.subtitle || "",
          };
        }),
        imagePath: item?.section_image,
        renderSvg: index === 0 ? "Left1" : index === 1 ? "Right1" : "Left2",
        ...(index === 1
          ? { isRight: true }
          : index === 2
          ? { isBottom: true }
          : {}),
        title: item.title || "",
        subTitle: item.subtitle || "",
        button: {
          label: item.button?.title || "",
          slug: item.button?.url || "",
        },
      };
    })
  );

  const discoverSectionResult = {
    title: discoverSectionAcfData?.discover_title,
    button: {
      label: discoverSectionAcfData?.discover_link?.title,
      slug: discoverSectionAcfData?.discover_link?.url,
    },
  };

  const clientsSectionImages = await Promise.all(
    clientsSectionAcfData?.clients_section_image.map(async (e) => e?.url || "")
  );
  clientsSectionAcfData.clients_section_image = clientsSectionImages;

  const contentBlockResult = {
    name: contentBlockAcfData.name,
    designation: contentBlockAcfData.designation,
    message: contentBlockAcfData.message,
    profile_image: contentBlockAcfData.profile_image?.url || "",
  };

  const clientsSectionResults = {
    title: clientsSectionAcfData.title,
    client_values: clientsSectionAcfData.client_values,
    client_link: clientsSectionAcfData.client_link,
    team_effort: teamEffortSectionAcfData.team_effort,
    clients_section_image: clientsSectionAcfData.clients_section_image,
  };
  return {
    spaceSystem: spaceSystemResults,
    discoverSection: discoverSectionResult,
    clientsSection: clientsSectionResults,
    contentBlock: contentBlockResult,
    meta_description: data.acf.meta_description,
    meta_title: data.acf.meta_title,
  };
};

const convertHeaderACF = async (data) => {
  const { connect, logos, nav_links } = data || {};
  const { light_logo, dark_logo } = logos[0] || {};
  const navLinks = nav_links.map(({ nav_link }) => ({
    title: nav_link.title,
    url: nav_link.url,
  }));
  return { connect, logo: [light_logo?.url, dark_logo?.url], navLinks };
};

const convertFooterACF = async (data) => {
  const cosmosData = data?.cosmos[0];
  let footerData = data?.footer;
  footerData = footerData.map(({ acf_fc_layout, ...e }) => ({
    ...e,
    type: acf_fc_layout,
  }));
  footerData = convertToFooterJson(footerData);
  return {
    cosmosData: { title: cosmosData?.title, blocks: cosmosData?.blocks },
    footerData,
  };
};

function convertToFooterJson(result) {
  let footer = {
    images: "",
    title: "",
    button: {
      label: "",
      slug: "",
      target: "",
    },
    links: [],
    enquires: [],
    socialLinks: [],
    copyRights: "",
    allRightsReserved: "",
  };

  result.forEach((item) => {
    switch (item.type) {
      case "logo_section":
        footer.images = item.logo.url;
        footer.title = item.description;
        footer.button = {
          label: item.button.title,
          slug: item.button.url,
          target: item.button.target,
        };
        break;
      case "nav_links":
        footer.links.push(
          ...item.nav_links_1.map(({ nav_link }) => ({
            title: nav_link.title,
            slug: nav_link.url,
            target: nav_link.target,
          })),
          ...item.nav_links_2.map(({ nav_link }) => ({
            title: nav_link.title,
            slug: nav_link.url,
            target: nav_link.target,
          }))
        );
        break;
      case "enquiry":
        footer.enquires = item.enquiry_fields.map((field) => {
          if (field.acf_fc_layout === "email") {
            return {
              title: field.title,
              email: field.email,
            };
          } else if (field.acf_fc_layout === "tel") {
            return {
              title: field.title,
              tel: field.number,
            };
          }
        });
        break;
      case "social_links":
        footer.socialLinks = item.social_links_with_icon.map(
          ({ svg_icon, url }) => ({
            iconSvg: svg_icon,
            slug: url,
          })
        );
        break;
      case "terms_and_policy":
        footer.copyRights = item.copy_right_text1;
        footer.allRightsReserved = item.copy_right_text2;
    }
  });

  return footer;
}

const convertAboutACF = async (data) => {
  const AboutACFData = data.acf || [];
  let res = {};
  Object.entries(AboutACFData).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value = value.map(({ acf_fc_layout, ...rest }) => ({
        type: acf_fc_layout,
        ...rest,
      }));
      if (key == "about_banner") {
        let arr = [];
        Object.entries(value[0].card_image[0]).forEach(([key, value]) =>
          arr.push(value)
        );
        value[0].card_image = arr;
      }
      if (key != "vision_and_mission") {
        value = value[0];
      }
      res[key] = value;
    } else if (key.includes("meta_title") || key.includes("meta_description")) {
      res[key] = value;
    }
  });
  return res;
};

const convertSatelliteSystemACF = async (data) => {
  const SatelliteSystemACFData = data.acf || [];
  let result = {};
  const { satellite_system_banner, ...rest } = SatelliteSystemACFData || {};
  result.satellite_system_banner = {
    tag: satellite_system_banner[0].tag,
    title: satellite_system_banner[0].title,
    description: satellite_system_banner[0].description,
  };
  result.blocks = Object.entries(rest)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        const { acf_fc_layout, ...rest } = value[0];
        return {
          type: acf_fc_layout,
          ...rest,
        };
      }
    })
    .filter(Boolean);
  result.meta_description = SatelliteSystemACFData.meta_description;
  result.meta_title = SatelliteSystemACFData.meta_title;
  return result;
};

const convertSpaceMissionACF = async (data) => {
  const SpaceMissionACFData = data.acf || [];
  let res = Object.entries(SpaceMissionACFData).map(([key, value]) => {
    const { acf_fc_layout, ...rest } = value[0];
    return { type: acf_fc_layout, ...rest };
  });
  res.meta_description = SpaceMissionACFData.meta_description;
  res.meta_title = SpaceMissionACFData.meta_title;
  return res;
};

const convertCareersACF = async (data) => {
  const convertCareersACFData = data.acf || [];
  Object.entries(convertCareersACFData).forEach(([key, value]) => {
    if (Array.isArray(value) && key !== "values_tabs") {
      convertCareersACFData[key] = value.map(
        ({ acf_fc_layout, ...rest }, index) => ({
          type: acf_fc_layout,
          ...rest,
        })
      )[0];
    } else if (key.includes("meta_title") || key.includes("meta_description")) {
      convertCareersACFData[key] = value;
    }
  });
  return convertCareersACFData;
};
const convertLaunchVehicleSystemACF = async (data) => {
  const convertLaunchVehicleSystemACFData = data.acf || [];

  Object.entries(convertLaunchVehicleSystemACFData).forEach(([key, value]) => {
    if (Array.isArray(value) && key !== "tvc_by_flex_nozzle_control") {
      convertLaunchVehicleSystemACFData[key] = value.map(
        ({ acf_fc_layout, ...rest }, index) => ({
          type: acf_fc_layout,
          ...rest,
        })
      )[0];
    } else if (key.includes("meta_title") || key.includes("meta_description")) {
      convertLaunchVehicleSystemACFData[key] = value;
    }
  });
  return convertLaunchVehicleSystemACFData;
};
const convertContactACF = async (data) => {
  const convertContactACFData = data.acf || [];
  let res = {};
  Object.entries(convertContactACFData).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value = value.map(({ acf_fc_layout, ...rest }) => ({
        type: acf_fc_layout,
        ...rest,
      }));
    }
    if (key.includes("meta_title") || key.includes("meta_description")) {
      res[key] = value;
    } else {
      value = value[0];
      res[key] = value;
    }
  });
  return res;
};
export const convertFromACF = async (data, type) => {
  switch (type) {
    case "header":
      return await convertHeaderACF(data);
    case "home":
      return await convertHomeACF(data);
    case "about":
      return await convertAboutACF(data);
    case "satellite-system":
      return await convertSatelliteSystemACF(data);
    case "space-mission":
      return await convertSpaceMissionACF(data);
    case "launch-vehicle-system":
      return await convertLaunchVehicleSystemACF(data);
    case "careers":
      return await convertCareersACF(data);
    case "contact":
      return await convertContactACF(data);
    case "footer":
      return await convertFooterACF(data);
    default:
      return {};
  }
};
