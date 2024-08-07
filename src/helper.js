// Launch Vehicle System
export const LVCNavBarOrder = [
  "tvc",
  "guidance_navigation_and_control",
  "avioncs",
  "flow_control_system",
];
export const StatNavBar = [
  {
    title: "Propulsion subsystems",
    image: "/assets/images/population-subsystems.svg",
    slug: "Propulsion",
  },
  {
    title: "Electric power system (eps)",
    image: "/assets/images/electric-power-system.svg",
    slug: "ElectricPowerSystem",
  },
  {
    title: "On-board computer",
    image: "/assets/images/on-board-computer.svg",
    slug: "OnBoardComputer",
  },
  {
    title: "Motion control system",
    image: "/assets/images/motion-control-system.svg",
    slug: "MotionControlSystem",
  },
];

export const partGridContent = {
  slug: "Thrust",
  data: [
    {
      title: "TVC by Flex Nozzle Control",
      subTitle: "Thrust vector control system",
      description:
        "Thrust vector control in solid or hybrid rocket motors is achieved using flex nozzles which facilitate the deflection of the thrust by vectoring of the nozzle. Vectoring of the flex nozzle is facilitated by a flexible joint connecting the movable and fixed parts. With over 300 man years of combined experience in multidisciplinary engineering, AADYAH excels in the entire process, from design to production, of high-quality TVC systems, including:",
      image: "/assets/images/tvc-engine-gimballing.png",
      blocks: [
        {
          image: "/assets/images/tvc-rubber-composites.svg",
          title: "Flex Seals & Nozzle- consist of rubber and composites",
        },
        {
          image: "/assets/images/tvc-actuators-electromechanical.svg",
          title: "Actuators-Electromechanical",
        },
        {
          image: "/assets/images/tvc-control-electronics.svg",
          title: "Control Electronics – Hardware and Software",
        },
        {
          image: "/assets/images/tvc-cable-wire.svg",
          title: "Cables and Wire Harnesses",
        },
      ],
    },

    {
      title: "TVC BY Engine Gimballing",
      subTitle: "Thrust vector control system",
      description:
        "Thrust vector control for a liquid engine is achieved using Engine-Gimballing, wherein the thrust coming out of the nozzle is deflected using an actuator that is driven by control electronics. At AADYAH, we do the most optimized, tailor-made TVC system consisting.",
      image: "/assets/images/nozzle-control.png",
      blocks: [
        {
          image: "/assets/images/tvc-actuators-electromechanical.svg",
          title: "Actuators-Electromechanical",
        },
        {
          image: "/assets/images/tvc-control-electronics.svg",
          title: "Control Electronics – Hardware and Software",
        },
        {
          image: "/assets/images/tvc-rubber-composites.svg",
          title: "Cables and Wire Harnesses",
        },
      ],
    },
  ],
};

export const GauidanceData = {
  slug: "Guidance",
  title: "GUIDANCE NAVIGATION AND CONTROL",
  data: [
    {
      image: "sensing-vehicle-acceleration",
      title: "Sensing vehicle  Acceleration rates",
      description:
        "Sensing technology allows us to accurately monitor vehicle acceleration rates comparing with sensors output and generate control command, providing crucial data for precise navigation and control.",
    },
    {
      image: "navigation",
      title: "Navigation",
      description:
        "Using advanced algorithms, we calculate and track the vehicle's current attitude, position, and velocity, ensuring a real-time understanding.",
    },
    {
      image: "guidance",
      title: "Guidance",
      description:
        "We offer comprehensive guidance solutions, assisting in the computation of optimal vehicle attitude, position, and velocity to achieve mission objectives efficiently.",
    },
    {
      image: "autopilot",
      title: "Autopilot",
      description:
        "Our algorithms compute precise control commands, enabling seamless steering of the vehicle to the desired attitude, even in complex operational scenarios.",
    },
  ],
};

export const AvionicsData = {
  slug: "Avionics",
  title: "Avionics",
  description:
    "AADYAH offers cutting-edge design to manufacture solutions of avionics system, including hardware and software system for launch vehicle.",
  images: [
    "/assets/images/avionics-img-one.png",
    // "/assets/images/avionics-img-two.png",
  ],
  data: {
    title: "OUR SOLUTIONS",
    values: [
      {
        header: "Engine Control Unit",
        text: "Mission critical system crucial for managing and controlling parameters such as thrust, fuel flow rate etc.",
      },
      {
        header: "Power Distribution System",
        text: "The power distribution system design will include peak power requirements, Power sustenance for the entire Mission duration, and Maintenance of power within operating boundaries. AADYAH’s Power Distribution System ensures efficient power allocation throughout your launch vehicle.",
      },
      {
        header: "High Voltage Bus",
        text: "AADYAH High Voltage Bus solution is designed to handle high-power demands reliably. Maintain stability and performance with our robust high-voltage power distribution",
      },
      {
        header: "Avionics Power Bus",
        text: "Custom build system to ensure steady operation of avionics subsystems by providing regulated voltage supply and power distribution.",
      },
    ],
  },
};

// Flow control system
export const controlSystemNavBar = {
  title: "FLOW CONTROL SYSTEM",
  slug: "Flow",
  description:
    "AADYAH offers three essential solenoid valves designed to meet the unique requirements of commercial launch vehicles.",
  data: [
    {
      id: 1,
      title: "PROPELLANT FUEL SYSTEM",
      data: [
        {
          image: "/assets/images/fill-drain-valve.png",
          title: "Fill and Drain Valve",
        },
        {
          image: "/assets/images/isolation-valve.png",
          title: "Isolation Valve",
        },
        { image: "/assets/images/latch-valve.png", title: "Latch Valve" },
      ],
    },
    {
      id: 2,
      title: "PRESSURE CONTROL SYSTEM",
      data: [
        { image: "/assets/images/latch-valve.png", title: "Relief Valve" },
        {
          image: "/assets/images/isolation-valve.png",
          title: "Regulator Valve",
        },
      ],
    },
    {
      id: 3,
      title: "MONITORING & DRIVE ELECTRONICS",
      data: [
        {
          image: "/assets/images/driver-circuit-software.png",
          title: "Driver Circuit Software",
        },
      ],
    },
  ],
};

// Satellite System
//Propulsion subsystems
export const PropulsionData = {
  slug: "Propulsion",
  title: "Propulsion subsystems",
  description:
    "We are committed to delivering the best-in-class control, efficiency, and reliability that your spacecraft demands. With the expertise and experience over 300+ years of space pedigree, we offer propulsion subsystems for satellites and spacecraft. Our propulsion subsystem offerings include:",
  images: "/assets/images/propulsion-subsystems.png",
  data: [
    {
      id: 1,
      title: "AADYAH’s Electronic Control Unit (ECU)",
      description:
        "Achieving mission success requires equipment that is both versatile and dependable. AADYAH's Electronic Control Unit (ECU) is a testament to our dedication to precision, flexibility, and quality. As a partner in your mission, we ensure that every facet of our technology aligns with your mission's objectives, guaranteeing success every step of the way.",
      data: {
        title: "Key Features",
        values: [
          {
            header: "Wide Input Voltage Range",
            text: "Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power.",
          },
          {
            header: "Flexible Control Options",
            text: "Whether you have a single thruster or a dual thruster system design, our ECU is adaptable to suit your requirements.",
          },
          {
            header: "Diverse Propulsion Systems",
            text: "We cater to both electrical and chemical propulsion systems. Regardless of the propulsion type, we ensure high efficiency and reliability.",
          },
          {
            header: "Communication Protocols",
            text: "Our ECU supports both CAN 2.0 B and RS 485/422 communication protocols, promoting efficient data exchange and exact control.",
          },
          {
            header: "Custom-Built",
            text: "Recognizing that every mission is unique, we specialize in crafting tailored solutions that perfectly match your mission specifications.",
          },
        ],
      },
    },
    {
      id: 2,
      title: "Power Processing Unit (PPU)",
      description:
        "Space missions represent the pinnacle of human ingenuity and ambition. Such endeavors demand equipment that's not just functional but also supremely reliable. AADYAH's PPUs encapsulate this philosophy, offering power solutions that are tailor-made for the vast, unpredictable expanse of space. Choose AADYAH, and power your mission to success",
      data: {
        title: "Key Features 2",
        values: [
          {
            header: "Tailor-Made Solutions",
            text: "Every mission has its distinct challenges and requirements. We excel in creating PPUs that are custom-built, ensuring optimal synergy with your spacecraft system.",
          },
          {
            header: "Advanced Thermal Protection",
            text: "The vastness of space presents extreme temperature variations. Our PPUs come equipped with sophisticated thermal protection mechanisms, ensuring they deliver optimal performance irrespective of the external conditions.",
          },
          {
            header: "Voltage Protection",
            text: "Voltage stability is crucial for the longevity and reliability of spacecraft systems. With inbuilt under and overvoltage protection, our PPUs shield your power supply from harmful voltage fluctuations.",
          },
          {
            header: "Pending",
            text: "4 Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power",
          },
        ],
      },
    },
    {
      id: 3,
      title: "Flow Control System (FCS)",
      description:
        "When navigating the vast expanse of space, the precise control and management of cryogenic propellants are of paramount importance. AADYAH's expertise in the development of state of-the-art Flow Control Systems (FCS) ensures your propulsion systems operate at their best, regardless of the challenges posed by space environments.",
      data: {
        title: "Key Features 3",
        values: [
          {
            header: "Custom-Tailored Solutions",
            text: "At AADYAH, we recognize that every mission has unique demands. Our in-house team excels in crafting FCS tailored to your specific spacecraft needs.",
          },
          {
            header: "High-Performance Valves",
            text: "Direct-Acting Solenoid Valves: Precision-engineered for space applications, ensuring reliable flow control even in extreme conditions.",
          },
          {
            header: "Impressive Pressure Handling",
            text: "With the capability to handle peak chamber pressures of up to 680 bar, our valves stand robust against the intense demands of space propulsion systems.",
          },
          {
            header: "Stringent Leak-Tightness",
            text: "A leak rate as minimal as 10E-04 mbar L/s for gaseous Helium is testament to our uncompromising quality standards. This assures safety and longevity of the propulsion system by preventing the wastage of precious propellants.",
          },
        ],
      },
    },
  ],
};

// Electric power system (EPS)
export const ElectricPowerSystem = {
  slug: "ElectricPowerSystem",
  title: "Electric power system (EPS)",
  description:
    "A legacy built on 300+ years of space pedigree positions AADYAH at the forefront of space exploration technologies. Our Electric Power System (EPS) embodies this legacy, ensuring that space missions, whether near-Earth or interplanetary, have reliable and adaptable power solutions.",
  images: "/assets/images/power-distribution-system.png",
  data: {
    title: "Key Features",
    values: [
      {
        header: "Radiation Tolerance",
        text: "Space environments are unpredictable and harsh. Our EPS is meticulously designed to be radiation-tolerant, ensuring durability even in the harshest conditions.",
      },
      {
        header: "Efficient Power Tracking and Conversion",
        text: "Harnessing solar power in space requires efficiency. Our EPS excels in peak power tracking, adeptly converting solar array power and efficiently charging onboard batteries.",
      },
      {
        header: "Tailored for Your Mission",
        text: "Recognizing the diverse needs of space missions, our EPS can be customized to align perfectly with your specific mission objectives, ensuring consistent power availability.",
      },
      {
        header: "Multi-Voltage Management",
        text: "Spacecraft comprise numerous sensors and sub-systems, each with its own voltage requirements. AADYAH’s EPS skilfully manages these diverse voltage levels, guaranteeing smooth operations across the board.",
      },
    ],
  },
};

// On-board computer
export const OnBoardComputer = {
  slug: "OnBoardComputer",
  title: "On-board computer",
  description:
    "A successful space mission hinges on the synergy of its onboard systems. AADYAH On-Board Computer is crafted to be the linchpin that holds everything together, guiding your satellite mission with precision, intelligence, and resilience. Rely on AADYAH OBC to illuminate the path through the intricacies of space exploration.",
  images: "/assets/images/on-board-computer.png",
  data: {
    title: "Key Features",
    values: [
      {
        header: "Bespoke Design",
        text: "Recognizing the unique requirements of every satellite mission, AADYAH offers custom-built OBCs that are tailor-made to integrate seamlessly with your specific satellite system.",
      },
      {
        header: "Multifaceted Functionality",
        text: "AADYAH’s OBC is a powerhouse capable of",
        list: {
          type: "ul",
          data: [
            "Attitude and Orbit Control: Ensuring your satellite maintains the correct position and trajectory.",
            "Telecommand Execution: Swiftly processing and executing commands relayed from ground stations.",
            "Telemetry Management: Efficiently collecting, formatting, and transmitting crucial housekeeping data, providing real-time insights into the satellite's health.",
            "Time Synchronization: Guaranteeing harmonized operations across satellite subsystems with precise onboard timing synchronization and distribution.",
          ],
        },
      },
    ],
  },
};

// Motion control system
export const MotionControlSystem = {
  slug: "MotionControlSystem",
  title: "Motion control system",
  description:
    "In the vast and challenging environment of space, AADYAH Satellite Motion Control System emerges as the guiding hand, steering your satellite towards its objectives with unmatched precision and reliability. Trust in our Motion Control System to transform the challenges of space into stepping stones towards mission success.",
  // images: "/assets/images/motion-control-system.png",
  data: {
    title: "Key Features",
    values: [
      {
        header: "Accurate Pointing & Orientation",
        text: "With our advanced Motion Control System, ensure that your satellite is always aligned with its intended target or communication link, irrespective of external disturbances.",
      },
      {
        header: "Precision-Control Mechanisms",
        text: "Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power",
      },
      {
        header: "Adaptable Functionality",
        text: "AADYAH recognizes the varied requirements of space missions. Our Motion Control System is versatile enough to efficiently manage different mission demands.",
      },
      {
        header: "Mission-specific Actuation Mechanisms",
        text: "Our specialized actuation mechanisms cater to distinct satellite functions.",
      },
      {
        header: "Solar Array Driving Assembly",
        text: "Ensuring that your solar panels remain oriented towards the Sun, maximizing energy absorption.",
      },
      {
        header: "Antenna Pointing",
        text: "Keeping your communication antennas aligned with their ground or space relay stations, guaranteeing uninterrupted data exchange.",
      },
      {
        header: "Special Instrument Actuation",
        text: "Whether its scientific tools, observational cameras, or other bespoke instruments, our Motion Control System ensures they operate at their peak potential.",
      },
    ],
  },
};

// Satellite roadmap
export const satelliteRoadmap = {
  slug: "Flow",
  title: "Satellite roadmap",
  data: [
    {
      id: 1,
      title: "Satellite Stabilization and Debris Management",
      data: {
        image: "/assets/images/spacecraft-operations.svg",
        title: "Satellite Stabilization and Debris Management",
        description:
          "AADYAH embarked on an exciting mission that involves the launch of a 16U satellite. This satellite has  a dual-purpose objective: first, to demonstrate advanced satellite stabilization techniques, and  second, to establish robust communication capabilities.",
        button: {
          text: "read more",
        },
      },
    },
    {
      id: 2,
      title: "Spacecraft Operations and IoT Solutions",
      data: {
        image: "/assets/images/spacecarft-operation.svg",
        title: "Spacecraft Operations and IoT Solutions",
        description:
          "Our mission is to operate a spacecraft equipped with IoT communication and imaging payloads. This mission serves as a comprehensive demonstration of our capabilities, showcasing how space assets can be harnessed to provide a complete solution. It is our endeavor to establish AADYAH as the one stop solution for integrated space asset solutions, underlining our commitment to innovation and excellence.",
        button: {
          text: "read more",
        },
      },
    },
    {
      id: 3,
      title: "Debris Rendezvous and Advanced Space Operations",
      data: {
        image: "/assets/images/debris-rendezvous.svg",
        title: "Debris Rendezvous and Advanced Space Operations",
        description:
          "We are initiating the mission with a two-fold purpose. Firstly, we will demonstrate our spacecraft's  ability to rendezvous with space debris, showcasing our precision and control in space operations.  Secondly, we will exhibit the remote operation of the spacecraft's robotic arm (or an alternative  technology for debris removal), representing a leap forward in space technology.",
        button: {
          text: "read more",
        },
      },
    },
    {
      id: 4,
      title: "Deorbiting Debris with Precision",
      data: {
        image: "/assets/images/deorbiting-debris.svg",
        title: "Deorbiting Debris with Precision",
        description:
          "Our mission is to demonstrate the deorbiting of space debris with enhanced precision and efficiency.  This will include the deorbiting of smaller, less massive debris using a robotic arm, showcasing our  mastery over intricate space operations.",
        button: {
          text: "read more",
        },
      },
    },
  ],
};

// Space and planetary missions
export const planetaryMissions = {
  title: "Space and planetary missions",
  images: "/assets/images/space-planetary-mission.png",
  data: [
    {
      image: "/assets/images/lunar-lander.png",
      title: "lunar lander",
      description: {
        text: "AADYAH meticulously designs and predicts the performance of spacecraft with the aim of achieving precise landings on the moon. Among the critical tasks in this pursuit, the analysis of touchdown dynamics during the landing phase stands out as one of the most vital.",
        list: {
          type: "ul",
          data: [
            "Motion Control System",
            "Rover Holding and Deployment Mechanism",
            "Power Distribution System",
          ],
        },
      },
    },
    {
      image: "/assets/images/lunar-rover.png",
      title: "lunar Rover",
      description: {
        text: "The Lunar Rover System is meticulously designed to navigate the lunar terrain, conduct scientific experiments, and push the boundaries of exploration. With a focus on reliability, adaptability, and cutting-edge technology, our rover system is your key to unlocking the mysteries of the lunar landscape.",
        list: {
          type: "ul",
          data: [
            "Contactless Charging of Rover by Laser Beaming",
            "Robotic Arm",
            "Antenna Deployment Mechanism",
          ],
        },
      },
    },
  ],
};

// Space debris mission
export const spaceDebrisMission = {
  slug: "SpaceDebrisMission",
  title: "Space debris mission",
  subTitle:
    "TRACE, is a self-powered and self-communicating beacon that enables active tracking. ",
  description:
    "Attached to Launch Vehicles’ upper stages and Satellites, TRACE helps us to ensure a future of responsible space exploration. TRACE significance lies in its ability to transfer real-time location and velocity data to a ground station, triggered from Earth. This capability empowers space agencies and operators to precisely identify Orbital Parameters, contributing to the safety and coordination of assets in space.",
  images: "/assets/images/space-debris-mission.png",
};

//CAREERS
//Our Values
export const ourValues = {
  title: "our values",
  description:
    "Where our values drive every aspect of our work. At the heart of our operations lie integrity, innovation, and excellence.",
  data: [
    {
      image: "/assets/images/ov-trust.svg",
      title: "Trust",
    },
    {
      image: "/assets/images/ov-accountability.svg",
      title: "Accountability",
    },
    {
      image: "/assets/images/ov-commitment.svg",
      title: "Commitment",
    },
    {
      image: "/assets/images/ov-integrity.svg",
      title: "Integrity",
    },
    {
      image: "/assets/images/ov-transparency.svg",
      title: "Transparency",
    },
  ],
};

//Work With Us
export const workwithus = {
  subTitle: "work with us",
  title: "Life at aadyah",
  description:
    "Join us on our mission to revolutionize transportation, where we believe in cultivating an exceptional team and fostering a dynamic culture. ",
  data: [
    { image: "/assets/images/work-with-us-img-one.png" },
    { image: "/assets/images/work-with-us-img-two.png" },
    { image: "/assets/images/work-with-us-img-three.png" },
  ],
};

//Aadyah Impact
export const aadyahImpact = {
  title: "aadyah impact",
  description:
    "On a daily basis, AADYAH employees work on programs and projects with the potential to notably impact our lives on Earth and beyond the stars. ",
  data: [
    {
      slug: "https://www.linkedin.com/pulse/aadyah-stanford-seed-2024-cohort-aadyah-aerospace-private-limited-qrunc/?trackingId=SJWg5f5nQn6t45vWy90xpQ%3D%3D",
      image: "/assets/images/stanford-seed.png",
      title: "In the NEWS",
      description: "AADYAH in Stanford SEED 2024 Cohort",
    },
    {
      slug: "https://www.keiretsuforum.in/news/exclusive-keiretsu-forum-invests-in-defence-tech-startup-aadyah/20",
      image: "/assets/images/tech-startup-aadyah.png",
      title: "In the NEWS",
      description: "Keiretsu Forum Invests In Defense- Tech Startup AADYAH",
    },
  ],
};

//Testimonial
export const testimonial = [
  {
    id: 1,
    name: "Anil kumar",
    designation: "Trainee, Mechanical design1",
    description:
      "“ Working at AADYAH has been a really great way to kickstart my career. It truly is a fantastic company that invests in the growth of their employees and continuously fosters innovation. I’m excited for the future in space that we will enable! ”",
  },
  {
    id: 2,
    name: "Anil kumar",
    designation: "Trainee, Mechanical design2",
    description:
      "“ Working at AADYAH has been a really great way to kickstart my career. It truly is a fantastic company that invests in the growth of their employees and continuously fosters innovation. I’m excited for the future in space that we will enable! ”",
  },
  {
    id: 3,
    name: "Anil kumar",
    designation: "Trainee, Mechanical design3",
    description:
      "“ Working at AADYAH has been a really great way to kickstart my career. It truly is a fantastic company that invests in the growth of their employees and continuously fosters innovation. I’m excited for the future in space that we will enable! ”",
  },
  {
    id: 4,
    name: "Anil kumar",
    designation: "Trainee, Mechanical design4",
    description:
      "“ Working at AADYAH has been a really great way to kickstart my career. It truly is a fantastic company that invests in the growth of their employees and continuously fosters innovation. I’m excited for the future in space that we will enable! ”",
  },
  {
    id: 5,
    name: "Anil kumar",
    designation: "Trainee, Mechanical design5",
    description:
      "“ Working at AADYAH has been a really great way to kickstart my career. It truly is a fantastic company that invests in the growth of their employees and continuously fosters innovation. I’m excited for the future in space that we will enable! ”",
  },
];

//Opportunities
export const opportunities = {
  slug: "jobs",
  title: "Opportunities",
  description:
    "At AADYAH, we are committed to your personal and professional development.",
  button: {
    text: "View on linkedin",
  },
};
export const headerData = {
  logo: "/assets/images/logo.svg",
  links: [
    { label: "LAUNCH VEHICLE SYSTEM", slug: "launch-vehicle-system" },
    { label: "Satellite SYSTEM", slug: "satellite-system" },
    { label: "SPACE MISSION", slug: "space-mission" },
    { label: "ABOUT US", slug: "about" },
    { label: "CAREERS", slug: "careers" },
  ],
  button: { label: "Connect with us", slug: "/contact" },
};
//Contact Address
export const AddressData = {
  title: `office locations`,
  address: [
    {
      title: `Aadyah Aerospace Pvt. Ltd.`,
      text: `B-1115, Brigade Signature Towers Old Madras Road, Katammanallur Gate, Bengaluru. Karnataka-560049, India`,
    },
    {
      title: `AADYAH North America LLC`,
      text: `1800 Old Meadow Rd, Apt 1119, McLean.VA 22102`,
    },
  ],
  connect: {
    title: `connect with us`,
    data: [
      {
        title: `For enquiries`,
        email: `info@aadyah.com`,
      },
      {
        title: `Call us`,
        tel: `+91 9353401723`,
      },
    ],
  },
};

//Our customers
export const ourCustomers = {
  title: "Our customers are spread across the globe.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra vestibulum tincidunt.",
  images: "/assets/images/our-customers-globe.png",
  data: [{ title: "Offices" }, { title: "Customers" }],
};

//footer cosmos

export const cosmosData = {
  title: "Accelerate your space aspirations with AADYAH",
  blocks: [
    {
      title: "Join Aadyah",
      description: "Join aadyah. innovate and inspire the world",
      button: { label: "view more", slug: "/careers" },
    },
    {
      title: "Clients",
      description: "Talk to us to discuss the  boundless opportunities",
      button: { label: "Get in touch", slug: "/contact" },
    },
  ],
};

//Footer
export const footer = {
  images: "/assets/images/logoBlack.svg",
  title: "Let’s work together",
  button: {
    label: "View opening",
    slug: "/careers#jobs",
  },
  links: [
    { label: "Satellite SYSTEM", slug: "/satellite-system" },
    { label: "LAUNCH VEHICLE SYSTEM", slug: "/launch-vehicle-system" },
    { label: "SPACE MISSION", slug: "/space-mission" },
    { label: "ABOUT US", slug: "/about" },
    { label: "CAREERS", slug: "/careers" },
    { label: "CONTACT US", slug: "/contact" },
  ],
  enquires: [
    {
      title: `For enquiries`,
      email: `info@aadyah.com`,
    },
    {
      title: `Call us`,
      tel: `+91 9353401723`,
    },
  ],
  socialLinks: [
    {
      label: "linkedIn",
      slug: "https://www.linkedin.com/company/aadyah-aerospace-private-limited/",
    },
    { label: "twitter", slug: "https://twitter.com/AadyahAerospace" },
    { label: "youtube", slug: "https://www.youtube.com/@aadyahaerospace5706" },
  ],
  privacyPolicy: [
    { label: "Quality & Policy", slug: "/quality-policy" },
    { label: "cookie policy", slug: "/cookie-policy" },
    { label: "Privacy Policy", slug: "/privacy-policy" },
  ],
  copyRights: "@ Copyright 2024. AADYAH AEROSPACE.",
  allRightsReserved: "All Rights Reserved.",
};

//calculate planets animation function

export const disableOverflow = (boolean) => {
  if (boolean) {
    document.querySelector("html").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden";
  } else {
    document.querySelector("html").style.overflowY = "auto";
    document.querySelector("body").style.overflowY = "auto";
  }
};

export const createDelay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Function to debounce scroll events
export const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

export const interpolateMoon = (X) => {
  // Data points
  const x1 = 8781,
    z1 = 1460;
  const x2 = 10755,
    z2 = 2328;

  // Check if X is within the range
  if (X < x1 || X > x2) {
    throw new Error("X is out of the interpolation range");
  }

  // Linear interpolation formula
  const Z = z1 + ((X - x1) / (x2 - x1)) * (z2 - z1);
  return Z;
};
export const interpolateMars = (X) => {
  // Data points for interpolation
  const x1 = 8847,
    z1 = 2280;
  const x2 = 10755,
    z2 = 3543;

  // Check if X is within the range
  if (X < x1 || X > x2) {
    throw new Error("X is out of the interpolation range");
  }

  // Linear interpolation formula
  const Z = z1 + ((X - x1) / (x2 - x1)) * (z2 - z1);
  return Z;
};
