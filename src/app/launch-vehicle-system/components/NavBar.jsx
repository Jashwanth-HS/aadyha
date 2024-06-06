import NavLink from "@/components/NavLink";
import { LVCNavBarOrder } from "@/helper";

export default function NavBar({ styles, data }) {
  const orderedData = [];
  LVCNavBarOrder.forEach((type) => {
    const item = data.find((entry) => entry.type === type);
    if (item) {
      orderedData.push({ slug: item.type, ...item });
    }
  });
  return (
    <NavLink
      Links={orderedData}
      renderLink={({ item }) => {
        const { title, header, navbar_icon } = item || {};
        return (
          <>
            {/* {image && <img src={image} />} */}
            {navbar_icon && (
              <div
                dangerouslySetInnerHTML={{ __html: navbar_icon }}
                className={styles?.svgContainerDiv}
              />
            )}
            <h3 className="micro-large secondary-font">{title || header}</h3>
          </>
        );
      }}
    />
  );
}
