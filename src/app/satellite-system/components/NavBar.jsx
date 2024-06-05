import NavLink from "@/components/NavLink";
import { StatNavBar } from "@/helper";

export default function NavBar({ styles, Blocks }) {
  return (
    <NavLink
      Links={Blocks.map((e) => ({ slug: e.type, ...e }))}
      renderLink={({ item }) => {
        const { title, navbar_icon } = item || {};
        return (
          <>
            {/* {image && <img src={image} />} */}
            {navbar_icon && (
              <div
                className={styles?.svgIconContainer}
                dangerouslySetInnerHTML={{ __html: navbar_icon }}
              />
            )}
            {title && (
              <div
                className={`${styles?.SsTabTitle} secondary-font micro-large`}
              >
                {title}
              </div>
            )}
          </>
        );
      }}
    />
  );
}
