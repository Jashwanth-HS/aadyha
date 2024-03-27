// "use client";
// import React from "react";
// import Planets from "./components/Planets";
// import Earth from "./components/Earth";
// import Moon from "./components/Moon";

// export default function Home() {
//   return (
//     <>
//       <Planets />
//     </>
//   );
"use client";
import React from "react";
import Earth from "./components/Earth";
import Moon from "./components/Moon";
import Planets from "./components/Planets";
import Mars from "./components/Mars";
import SpaceSystem from "./components/SpaceSystem";
import Clients from "./components/Clients";
const Section = ({children}) => {
  const styles = {position:"relative",width:"100%",height:"100%",zIndex:"2"}
  return <div style={styles}>{children}</div>
}
export default function Home() {
  return (
    <>
      <Planets>
        <Earth />
        <Moon />
        <Mars />
      </Planets>
      <Section>
      <SpaceSystem />
      <Clients />
      </Section>
    </>
  );
}
