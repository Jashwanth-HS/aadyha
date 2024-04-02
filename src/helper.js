// Launch Vehicle System
export const LVCNavBar = [
    { title: "Thrust vector control system (TVC)", image: "/assets/images/thrust-vector-control-system.svg", slug: "Thrust" },
    { title: "Guidance navigation and control", image: "/assets/images/guidance-navigation-control.svg", slug: 'Guidance' },
    { title: "Avionics", image: "/assets/images/lvs-avionics.svg", slug: 'Avionics' },
    { title: "Flow control system", image: "/assets/images/flow-control-system.svg", slug: 'Flow' }
]
export const StatNavBar = [
    { title: "Propulsion subsystems", image: "/assets/images/population-subsystems.svg", slug: "Propulsion" },
    { title: "Electric power system (eps)", image: "/assets/images/electric-power-system.svg", slug: 'ElectricPowerSystem' },
    { title: "On-board computer", image: "/assets/images/on-board-computer.svg", slug: 'OnBoardComputer' },
    { title: "Motion control system", image: "/assets/images/motion-control-system.svg", slug: 'MotionControlSystem' }
]

export const partGridContent = {
    slug: "Thrust",
            data:[{
                title: "TVC by Flex Nozzle Control"
                , subTitle: "Thrust vector control system"
                , description: "Thrust vector control in solid or hybrid rocket motors is achieved using flex nozzles which facilitate the deflection of the thrust by vectoring of the nozzle. Vectoring of the flex nozzle is facilitated by a flexible joint connecting the movable and fixed parts. With over 300 years of combined experience in multidisciplinary engineering, AADYAH excels in the entire process, from design to production, of high-quality TVC systems, including:"
                , image: "/assets/images/tvc-engine-gimballing.png"
                , blocks: [
                    { image: "/assets/images/tvc-rubber-composites.svg", title: "Flex Seals & Nozzle- consist of rubber and composites" },
                    { image: "/assets/images/tvc-actuators-electromechanical.svg", title: "Actuators-Electromechanical" },
                    { image: "/assets/images/tvc-control-electronics.svg", title: "Control Electronics – Hardware and Software" },
                    { image: "/assets/images/tvc-cable-wire.svg", title: "Cables and Wire Harnesses" },
                ]
            },

            {
                title: "TVC BY Engine Gimballing"
                , subTitle: "Thrust vector control system"
                , description: "Thrust vector control for a liquid engine is achieved using Engine-Gimballing, wherein the thrust coming out of the nozzle is deflected using an actuator that is driven by control electronics. At AADYAH, we do the most optimized, tailor-made TVC system consisting."
                , image: "/assets/images/nozzle-control.png"
                , blocks: [
                    { image: "/assets/images/tvc-actuators-electromechanical.svg", title: "Actuators-Electromechanical" },
                    { image: "/assets/images/tvc-control-electronics.svg", title: "Control Electronics – Hardware and Software" },
                    { image: "/assets/images/tvc-rubber-composites.svg", title: "Cables and Wire Harnesses" },
                ]
            }]
        }

export const GauidanceData = {
    slug:'Guidance',title:'GUIDANCE NAVIGATION AND CONTROL',
    data:[
        {
            image:"/assets/images/sensing-vehicle-acceleration.svg",
            title:"hdh kjdfh ",
            description:"Sensing technology allows us to accurately monitor vehicle acceleration rates comparing with sensors output and generate control command, providing crucial data for precise navigation and control."
        },
        {
            image:"/assets/images/sensing-vehicle-acceleration.svg",
            title:"hdh kjdfh ",
            description:"Sensing technology allows us to accurately monitor vehicle acceleration rates comparing with sensors output and generate control command, providing crucial data for precise navigation and control.            "
        },
        {
            image:"/assets/images/sensing-vehicle-acceleration.svg",
            title:"hdh kjdfh ",
            description:"Sensing technology allows us to accurately monitor vehicle acceleration rates comparing with sensors output and generate control command, providing crucial data for precise navigation and control.            "
        },
        {
            image:"/assets/images/sensing-vehicle-acceleration.svg",
            title:"hdh kjdfh ",
            description:"Sensing technology allows us to accurately monitor vehicle acceleration rates comparing with sensors output and generate control command, providing crucial data for precise navigation and control.            "
        },
    ]
}

export const AvionicsData = {
    slug:'Avionics',
    title:'Avionics',
    description:'AADYAH offers cutting-edge design to manufacture solutions of avionics system, including hardware and software system for launch vehicle.',
    images:['/assets/images/avionics-img-one.png','/assets/images/avionics-img-two.png'],
    data:{title:'OUR SOLUTION',values:[
        {header:'Engine Control Unit',
        text:'Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
        },
        {header:'Engine Control Unit',
        text:'Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
        },
        {header:'Engine Control Unit',
        text:'Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
        },
        {header:'Engine Control Unit',
        text:'Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
        },
    ]}
}


// Flow control system
export const controlSystemNavBar = {
    title:'FLOW CONTROL SYSTEM',
    slug:'Flow',
    description:'AADYAH’s offers three essential solenoid valves designed to meet the unique requirements of commercial launch vehicles.',
    data:[
    { id: 1, 
        title: "PROPELLANT FUEL SYSTEM",
         data: [
            { image: "/assets/images/fill-drain-valve.png", title: "Fill and Drain Valve" },
            { image: "/assets/images/isolation-valve.png", title: "Isolation Valve" },
            { image: "/assets/images/latch-valve.png", title: "Latch Valve" },
        ] 
    },
    { id: 2, 
        title: "PRESSURE CONTROL SYSTEM",
         data: [
            { image: "/assets/images/latch-valve.png", title: "Latch Valve" },
            { image: "/assets/images/isolation-valve.png", title: "Isolation Valve 1" },
            { image: "/assets/images/fill-drain-valve.png", title: "Fill and Drain Valve 1" },
        ] 
    },
    { id: 3, 
        title: "MONITORING & DRIVE ELECTRONICS",
         data: [
            { image: "/assets/images/fill-drain-valve.png", title: "Fill and Drain Valve 2" },
            { image: "/assets/images/isolation-valve.png", title: "Isolation Valve 2" },
            { image: "/assets/images/latch-valve.png", title: "Latch Valve 2" },
        ] 
    }
    ]
};

// Satellite System
//Propulsion subsystems
export const PropulsionData = {
    slug:'Propulsion',
    title:'Propulsion subsystems',
    description:'We are committed to delivering the best-in-class control, efficiency, and reliability that your spacecraft demands. With the expertise and experience over 300+ years of space pedigree, we offer propulsion subsystems for satellites and spacecraft. Our propulsion subsystem offerings include:',
    images:'/assets/images/propulsion-subsystems.png',
    data:[
    { id: 1, 
        title: "Flow Control System (FCS)",
        description:"Achieving mission success requires equipment that is both versatile and dependable. AADYAH's Electronic Control Unit (ECU) is a testament to our dedication to precision, flexibility, and quality. As a partner in your mission, we ensure that every facet of our technology aligns with your mission's objectives, guaranteeing success every step of the way.",
        data:{title:'Key Features',values:[
            {header:'Wide Input Voltage Range',
            text:'Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power.'
            },
            {header:'Flexible Control Options',
            text:'Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
            },
            {header:'Communication Protocols',
            text:'Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
            },
            {header:'Communication Protocols',
            text:'Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
            },
        ]}
    },
    { id: 2, 
        title: "Electronic Control Unit (ECU)",
        description:"Achieving mission success requires equipment that is both versatile and dependable. AADYAH's Electronic Control Unit (ECU) is a testament to our dedication to precision, flexibility, and quality. As a partner in your mission, we ensure that every facet of our technology aligns with your mission's objectives, guaranteeing success every step of the way.",
        data:{title:'Key Features 2',values:[
            {header:'Wide Input Voltage Range 1',
            text:'1 Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power.'
            },
            {header:'Flexible Control Options 2',
            text:'2 Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
            },
            {header:'Communication Protocols 3',
            text:'3 Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
            },
            {header:'Communication Protocols 4',
            text:'4 Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
            },
        ]}
    },
    { id: 3, 
        title: "Power Processing Unit (PPU)",
        description:"Achieving mission success requires equipment that is both versatile and dependable. AADYAH's Electronic Control Unit (ECU) is a testament to our dedication to precision, flexibility, and quality. As a partner in your mission, we ensure that every facet of our technology aligns with your mission's objectives, guaranteeing success every step of the way.",
        data:{title:'Key Features 3',values:[
            {header:'Wide Input Voltage Range 11',
            text:'11 Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power.'
            },
            {header:'Flexible Control Options 22',
            text:'22 Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
            },
            {header:'Communication Protocols 33',
            text:'33 Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
            },
            {header:'Communication Protocols 44',
            text:'44 Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
            },
        ]}
    },
    ]
};

// Electric power system (EPS)
export const ElectricPowerSystem = {
    slug:'ElectricPowerSystem',
    title:'Electric power system (EPS)',
    description:'A legacy built on 300+ years of space pedigree positions AADYAH at the forefront of space exploration technologies. Our Electric Power System (EPS) embodies this legacy, ensuring that space missions, whether near-Earth or interplanetary, have reliable and adaptable power solutions.',
    images:'/assets/images/power-distribution-system.png',
    data:{title:'Key Features',values:[
        {header:'Radiation Tolerance',
        text:'Space environments are unpredictable and harsh. Our EPS is meticulously designed to be radiation-tolerant, ensuring durability even in the harshest conditions.'
        },
        {header:'Efficient Power Tracking and Conversion',
        text:'Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
        },
        {header:'Tailored for Your Mission',
        text:'Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
        },
        {header:'Multi-Voltage Management',
        text:'Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
        },
    ]}
};

// On-board computer
export const OnBoardComputer = {
    slug:'OnBoardComputer',
    title:'On-board computer',  
    description:'A successful space mission hinges on the synergy of its onboard systems. AADYAH On-Board Computer is crafted to be the linchpin that holds everything together, guiding your satellite mission with precision, intelligence, and resilience. Rely on AADYAH OBC to illuminate the path through the intricacies of space exploration.',
    images:'/assets/images/on-board-computer.png',
    data:{title:'Key Features',values:[
        {header:'Bespoke Design',
        text:'Recognizing the unique requirements of every satellite mission, AADYAH offers custom-built OBCs that are tailor-made to integrate seamlessly with your specific satellite system.'
        },
        {header:'Multifaceted Functionality',
        text:'Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
        },
    ]}
};

// Motion control system
export const MotionControlSystem = {
    slug:'MotionControlSystem',
    title:'Motion control system',
    description:'In the vast and challenging environment of space, AADYAH Satellite Motion Control System emerges as the guiding hand, steering your satellite towards its objectives with unmatched precision and reliability. Trust in our Motion Control System to transform the challenges of space into stepping stones towards mission success.',
    images:'/assets/images/motion-control-system.png',
    data:{title:'Key Features',values:[
        {header:'Accurate Pointing & Orientation',
        text:'With our advanced Motion Control System, ensure that your satellite is always aligned with its intended target or communication link, irrespective of external disturbances.'
        },
        {header:'Precision-Control Mechanisms',
        text:'Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
        },
        {header:'Adaptable Functionality',
        text:'Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
        },
        {header:'Mission-specific Actuation Mechanisms',
        text:'Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
        },
        {header:'Solar Array Driving Assembly',
        text:'Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
        },
        {header:'Antenna Pointing',
        text:'Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
        },
        {header:'Special Instrument Actuation',
        text:'Our ECU can handle a diverse range of input voltages from 5V to 32V, ensuring your satellite thruster system always gets consistent and dependable power'
        },
    ]}
};

// Satellite roadmap
export const satelliteRoadmap = {
    slug: 'Flow',
    title: 'Satellite roadmap',
    data: [
        {
            id: 1,
            title: "Satellite Stabilization and Debris Management",
            data:
                {
                    image: "/assets/images/spacecarft-operation.svg",
                    title: "Satellite Stabilization and Debris Management",
                    description: "Our mission is to operate a spacecraft equipped with IoT communication and imaging payloads. This mission serves as a comprehensive demonstration of our capabilities, showcasing how space assets can be harnessed to provide a complete solution.",
                    button: {
                        text: "read more",
                    }
                }
            ,
        },
        {
            id: 2,
            title: "Spacecraft Operations and IoT Solutions",
            data:
                {
                    image: "/assets/images/spacecarft-operation.svg",
                    title: "Spacecraft Operations and IoT Solutions",
                    description: "Our mission is to operate a spacecraft equipped with IoT communication and imaging payloads. This mission serves as a comprehensive demonstration of our capabilities, showcasing how space assets can be harnessed to provide a complete solution.",
                    button: {
                        text: "read more",
                    }
                }
            ,
        },
        {
            id: 3,
            title: "Debris Rendezvous and Advanced Space Operations",
            data:
                {
                    image: "/assets/images/spacecarft-operation.svg",
                    title: "Debris Rendezvous and Advanced Space Operations",
                    description: "Our mission is to operate a spacecraft equipped with IoT communication and imaging payloads. This mission serves as a comprehensive demonstration of our capabilities, showcasing how space assets can be harnessed to provide a complete solution.",
                    button: {
                        text: "read more",
                    }
                }
            ,
        },
        {
            id: 4,
            title: "Deorbiting Debris with Precision",
            data:
            {
                image: "/assets/images/spacecarft-operation.svg",
                title: "Deorbiting Debris with Precision",
                description: "Our mission is to operate a spacecraft equipped with IoT communication and imaging payloads. This mission serves as a comprehensive demonstration of our capabilities, showcasing how space assets can be harnessed to provide a complete solution.",
                button: {
                    text: "read more",
                }
            }
            
        }
    ]
};

// Space and planetary missions
export const planetaryMissions = {
    title:'Space and planetary missions',
    images:"/assets/images/space-planetary-mission.png",
    data: [
        {
            image: "/assets/images/lunar-lander.png",
            title: "lunar lander",
            description: "descent, modular design, enabling safe lunar exploration missions.",
        },
        {
            image: "/assets/images/lunar-rover.png",
            title: "lunar Rover",
            description: "Robust mobility, advanced instrumentation, pivotal for lunar surface exploration.",
        }   
    ]
}   

// Space debris mission
export const spaceDebrisMission = {
    slug:'SpaceDebrisMission',
    title:'Space debris mission', 
    subTitle: 'TRACE, is a self-powered and self-communicating beacon that enables active tracking. ', 
    description:'Attached to Launch Vehicles’ upper stages and Satellites, TRACE helps us to ensure a future of responsible space exploration. TRACE significance lies in its ability to transfer real-time location and velocity data to a ground station, triggered from Earth. This capability empowers space agencies and operators to precisely identify Orbital Parameters, contributing to the safety and coordination of assets in space.',
    images:'/assets/images/space-debris-mission.png',
};