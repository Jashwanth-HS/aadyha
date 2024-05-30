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
// export const fetchMedia = async (mediaId) => {
//   const myData = Array.isArray(mediaId) ? [...mediaId] : [mediaId];
//   console.log("myData: ", myData);
//   // try {
//   //   const responses = await Promise.all(
//   //     myData.map(async (id) => {
//   //       if (typeof id == "string") {
//   //         const response = await axios.get(`${WORDPRESS_API_URL}/media/${id}`);
//   //         return response.data?.source_url || "";
//   //       }
//   //     })
//   //   );
//   //   return responses;
//   // } catch (error) {
//   //   console.error("Error fetching media:", error);
//   //   throw error;
//   // }
// };

const convertHomeACF = async (data) => {
  const spaceSystemAcfData = data.acf.space_system || [];
  const discoverSectionAcfData = data.acf.discover_section[0] || [];
  const clientsSectionAcfData = data.acf.clients[0] || [];
  const contentBlockAcfData = data.acf.content_block[0] || [];

  const spaceSystemResults = await Promise.all(
    spaceSystemAcfData.map(async (item, index) => {
      // const imagePath =
      //   (await fetchMedia(item?.section_image)) ||
      //   "/assets/images/hp-lvs-img.png";

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
        imagePath: item?.section_image?.url,
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
    clients_section_image: clientsSectionAcfData.clients_section_image?.url,
  };
  return {
    spaceSystem: spaceSystemResults,
    discoverSection: discoverSectionResult,
    clientsSection: clientsSectionResults,
    contentBlock: contentBlockResult,
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
  console.log("footerData: ", footerData);
  return {
    cosmosData: { title: cosmosData?.title, blocks: cosmosData?.blocks },
    footerData,
  };
};

function convertToFooterJson(result) {
  console.log("result: ", result);
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

export const convertFromACF = async (data, type) => {
  switch (type) {
    case "header":
      return await convertHeaderACF(data);
    case "home":
      return await convertHomeACF(data);
    case "footer":
      return await convertFooterACF(data);
    default:
      return {};
  }
};
