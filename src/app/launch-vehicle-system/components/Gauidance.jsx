import React from 'react'

export default function Gauidance({styles}) {
  return (
    <div className={styles?.GncContainer}>
    <div className="container">
      <div><h3 className="heading-2">Guidance navigation and control</h3></div>

      <div className={styles?.GncWrapper}>
        <div className={styles?.GncItems}>
          <div><img src={"/assets/images/sensing-vehicle-acceleration.svg"}/></div>
          <div>
            <h3 className="sub-heading-1">Sensing vehicle  Acceleration rates</h3>
            <p>Sensing technology allows us to accurately monitor vehicle acceleration rates comparing with sensors output and generate control command, providing crucial data for precise navigation and control.</p>
          </div>
        </div>
        <div className={styles?.GncItems}>
          <div><img src={"/assets/images/navigation.svg"}/></div>
          <div>
            <h3 className="sub-heading-1">Navigation</h3>
            <p>Using advanced algorithms, we calculate and track the vehicle's current attitude, position, and velocity, ensuring a real-time understanding.</p>
          </div>
        </div>
        <div className={styles?.GncItems}>
          <div><img src={"/assets/images/guidance.svg"}/></div>
          <div>
            <h3 className="sub-heading-1">Guidance</h3>
            <p>We offer comprehensive guidance solutions, assisting in the computation of optimal vehicle attitude, position, and velocity to achieve mission objectives efficiently.</p>
          </div>
        </div>
        <div className={styles?.GncItems}>
          <div><img src={"/assets/images/autopilot.svg"}/></div>
          <div>
            <h3 className="sub-heading-1">Autopilot</h3>
            <p>Our algorithms compute precise control commands, enabling seamless steering of the vehicle to the desired attitude, even in complex operational scenarios.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
