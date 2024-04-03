import NavLink from '@/components/NavLink';
import { StatNavBar } from '@/helper';

export default function NavBar({styles}) {
  return (
    <NavLink Links={StatNavBar}
      renderLink={
        ({ item }) => {
          const { title, image } = item || {};
          return <>
            {image && <img src={image} />}
            {title && <div className={`${styles?.SsTabTitle} secondary-font`}>{title}</div>}
          </>
        }
      }
    />
  )
}
