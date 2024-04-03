import Link from 'next/link';
import styles from './Navlink.module.css';
import React, { useEffect } from 'react'

export default function NavLink({Links,renderLink , ...rest}) {
  const handleActiveNav = (id) => {
    Links.forEach((e)=> {
    const divLink =  document.getElementById('navLink'+e?.slug);
    if(divLink){
      if(id === 'navLink'+e.slug){
        divLink.classList.add(styles?.NavTabTitlesActive);
      }else{
        divLink.classList.remove(styles?.NavTabTitlesActive);

      }
    }
    })
  }
  useEffect(()=> {
    if(Links){

        let initialDiv = document.getElementById('navLink'+Links[0]?.slug);
        if(initialDiv){
            initialDiv.classList.add(styles?.NavTabTitlesActive);
        }
    }
  },[])
  return (
    <div className={styles?.NavTab} {...rest}>
    <div className={styles?.NavTabWrapper}>
        {Links?.map((item,index)=> {
          return <Link href={"#"+item?.slug}  id={'navLink'+item?.slug}
          className={styles?.NavTabTitles}
          onClick={()=> handleActiveNav('navLink'+item?.slug)}
          key={index} >
            {renderLink({item,index})}
            </Link>
        })}
        </div>
    </div>
  )
}
