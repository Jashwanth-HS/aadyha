import NavLink from '@/components/NavLink';
import { LVCNavBar } from '@/helper';

export default function NavBar() {
  return (
    <NavLink Links={LVCNavBar}
      renderLink={
        ({ item }) => {
          const { title, image } = item || {};
          return <>
            {image && <img src={image} />}
            {title && <div>{title}</div>}
          </>
        }
      }
    />
  )
}
