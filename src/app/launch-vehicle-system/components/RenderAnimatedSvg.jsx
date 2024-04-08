const RenderSvg = ({ name, svgAnimation }) => {
  return name === "sensing-vehicle-acceleration" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="172"
      height="140"
      viewBox="0 0 172 140"
      fill="none"
      className={`${svgAnimation.svg} ${svgAnimation.svg1}`}
    >
      <path
        d="M1 87.5751C14.8235 69.0457 56.4118 40.8104 112.176 76.1045C121.294 81.9869 145.706 89.8693 170.412 74.3398M170.412 74.3398C171.118 74.3398 156.588 73.1634 149.235 72.5751M170.412 74.3398L158.059 90.2222"
        stroke="#22D7FF"
        strokeWidth="1.81223"
        className={svgAnimation.svgElem1}
      ></path>
      <line
        x1="72.9061"
        y1="0.904652"
        x2="72.9061"
        y2="139.092"
        stroke="#40D8BD"
        strokeWidth="1.81223"
        strokeLinecap="round"
        strokeDasharray="5.44 5.44"
        className={svgAnimation.svgElem2}
      ></line>
      <line
        x1="83.0821"
        y1="10.7469"
        x2="83.0821"
        y2="127.17"
        stroke="#40D8BD"
        strokeWidth="1.81223"
        strokeLinecap="round"
        strokeDasharray="5.44 5.44"
        className={svgAnimation.svgElem3}
      ></line>
      <path
        d="M94.5303 16.8999L94.5303 122.782"
        stroke="#40D8BD"
        strokeWidth="1.81223"
        strokeDasharray="5.44 5.44"
        className={svgAnimation.svgElem4}
      ></path>
      <line
        x1="104.26"
        y1="26.6293"
        x2="104.26"
        y2="113.052"
        stroke="#40D8BD"
        strokeWidth="1.81223"
        strokeLinecap="round"
        strokeDasharray="5.44 5.44"
        className={svgAnimation.svgElem5}
      ></line>
      <path
        d="M146.5 72.1733C146.5 104.482 120.309 130.673 88 130.673C55.6913 130.673 29.5 104.482 29.5 72.1733C29.5 39.8647 55.6913 13.6733 88 13.6733C120.309 13.6733 146.5 39.8647 146.5 72.1733Z"
        stroke="#22D7FF"
        className={svgAnimation.svgElem6}
      ></path>
      <g filter="url(#filter0_f_1592_2489)">
        <path
          d="M65 58.9995C65 61.7609 62.7614 63.9995 60 63.9995C57.2386 63.9995 55 61.7609 55 58.9995C55 56.2381 57.2386 53.9995 60 53.9995C62.7614 53.9995 65 56.2381 65 58.9995Z"
          fill="url(#paint0_radial_1592_2489)"
          className={svgAnimation.svgElem7}
        ></path>
        <path
          d="M65 58.9995C65 61.7609 62.7614 63.9995 60 63.9995C57.2386 63.9995 55 61.7609 55 58.9995C55 56.2381 57.2386 53.9995 60 53.9995C62.7614 53.9995 65 56.2381 65 58.9995Z"
          fill="url(#paint1_radial_1592_2489)"
          className={svgAnimation.svgElem8}
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_f_1592_2489"
          x="53.1044"
          y="52.104"
          width="13.7911"
          height="13.7911"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="0.947778"
            result="effect1_foregroundBlur_1592_2489"
          ></feGaussianBlur>
        </filter>
        <radialGradient
          id="paint0_radial_1592_2489"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(60 58.9995) rotate(90) scale(25.625 25.625)"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="#FFEDCA" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial_1592_2489"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(60 58.9995) rotate(90) scale(25.625 25.625)"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="#FFEDCA" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  ) : name == "navigation" ? (
    <svg
      className={`${svgAnimation.svg} ${svgAnimation.svg2}`}
      xmlns="http://www.w3.org/2000/svg"
      width="118"
      height="119"
      viewBox="0 0 118 119"
      fill="none"
    >
      <path
        d="M83.0157 45.1526C78.2438 53.4178 72.6483 60.1381 67.476 64.3266C64.8885 66.422 62.4281 67.8666 60.248 68.5655C58.0679 69.2644 56.2225 69.2031 54.793 68.3777C53.3635 67.5524 52.3877 65.9849 51.9029 63.7475C51.4182 61.51 51.439 58.657 51.9599 55.3684C53.0011 48.7948 56.0233 40.5888 60.7952 32.3236C65.5671 24.0584 71.1626 17.3381 76.3349 13.1496C78.9224 11.0542 81.3828 9.6097 83.5629 8.91075C85.743 8.21184 87.5884 8.2732 89.0179 9.09851C90.4474 9.92382 91.4232 11.4914 91.908 13.7288C92.3927 15.9663 92.372 18.8193 91.851 22.1079C90.8098 28.6814 87.7876 36.8875 83.0157 45.1526Z"
        stroke="#40D8BD"
        className={svgAnimation.svgElem1}
      ></path>
      <path
        d="M80.5 42.001L81.5 47.501L86.5 47.001M65.5 24.501L59 27.001"
        stroke="#22D7FF"
        className={svgAnimation.svgElem2}
      ></path>
      <path
        d="M65 25.001L66.5 30.501"
        stroke="#22D7FF"
        className={svgAnimation.svgElem3}
      ></path>
      <circle
        cx="59"
        cy="59.1758"
        r="58.5"
        stroke="#22D7FF"
        className={svgAnimation.svgElem4}
      ></circle>
      <circle
        cx="59.0002"
        cy="59.176"
        r="40.8"
        stroke="#22D7FF"
        strokeDasharray="2 2"
        className={svgAnimation.svgElem5}
      ></circle>
      <circle
        cx="59"
        cy="59.1758"
        r="10.5625"
        fill="#40D8BD"
        stroke="#40D8BD"
        className={svgAnimation.svgElem6}
      ></circle>
      <g filter="url(#filter0_f_2000_74518)">
        <path
          d="M92 9.00098C92 11.2101 90.2091 13.001 88 13.001C85.7909 13.001 84 11.2101 84 9.00098C84 6.79184 85.7909 5.00098 88 5.00098C90.2091 5.00098 92 6.79184 92 9.00098Z"
          fill="#40D8BD"
          className={svgAnimation.svgElem7}
        ></path>
      </g>
      <g filter="url(#filter1_f_2000_74518)">
        <path
          d="M26 73.001C26 75.7624 23.7614 78.001 21 78.001C18.2386 78.001 16 75.7624 16 73.001C16 70.2396 18.2386 68.001 21 68.001C23.7614 68.001 26 70.2396 26 73.001Z"
          fill="url(#paint0_radial_2000_74518)"
          className={svgAnimation.svgElem8}
        ></path>
        <path
          d="M26 73.001C26 75.7624 23.7614 78.001 21 78.001C18.2386 78.001 16 75.7624 16 73.001C16 70.2396 18.2386 68.001 21 68.001C23.7614 68.001 26 70.2396 26 73.001Z"
          fill="url(#paint1_radial_2000_74518)"
          className={svgAnimation.svgElem9}
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_f_2000_74518"
          x="82.1044"
          y="3.10542"
          width="11.7911"
          height="11.7911"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="0.947778"
            result="effect1_foregroundBlur_2000_74518"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter1_f_2000_74518"
          x="14.1044"
          y="66.1054"
          width="13.7911"
          height="13.7911"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="0.947778"
            result="effect1_foregroundBlur_2000_74518"
          ></feGaussianBlur>
        </filter>
        <radialGradient
          id="paint0_radial_2000_74518"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(21 73.001) rotate(90) scale(25.625 25.625)"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="#FFEDCA" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial_2000_74518"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(21 73.001) rotate(90) scale(25.625 25.625)"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="#FFEDCA" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  ) : name == "guidance" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${svgAnimation.svg} ${svgAnimation.svg3}`}
      width="137"
      height="140"
      viewBox="0 0 137 140"
      fill="none"
    >
      <ellipse
        cx="78.7228"
        cy="57.7238"
        rx="15.7228"
        ry="15.7228"
        fill="#40D8BD"
        className={svgAnimation.svgElem1}
      ></ellipse>
      <path
        d="M52.2509 71.0445C52.2509 70.7684 52.027 70.5445 51.7509 70.5445L47.2509 70.5445C46.9748 70.5445 46.7509 70.7684 46.7509 71.0445C46.7509 71.3206 46.9748 71.5445 47.2509 71.5445L51.2509 71.5445L51.2509 75.5445C51.2509 75.8206 51.4748 76.0445 51.7509 76.0445C52.027 76.0445 52.2509 75.8206 52.2509 75.5445L52.2509 71.0445ZM19.4942 104.008L20.1736 103.329L19.4665 102.622L18.7871 103.301L19.4942 104.008ZM21.5323 101.97L22.8911 100.611L22.184 99.9043L20.8252 101.263L21.5323 101.97ZM24.2498 99.2527L25.6086 97.8939L24.9015 97.1868L23.5427 98.5456L24.2498 99.2527ZM26.9674 96.5351L28.3261 95.1764L27.619 94.4693L26.2603 95.828L26.9674 96.5351ZM29.6849 93.8176L31.0437 92.4589L30.3365 91.7518L28.9778 93.1105L29.6849 93.8176ZM32.4024 91.1001L33.7612 89.7413L33.0541 89.0342L31.6953 90.393L32.4024 91.1001ZM35.1199 88.3826L36.4787 87.0238L35.7716 86.3167L34.4128 87.6755L35.1199 88.3826ZM37.8375 85.6651L39.1962 84.3063L38.4891 83.5992L37.1304 84.9579L37.8375 85.6651ZM40.555 82.9475L41.9137 81.5888L41.2066 80.8817L39.8479 82.2404L40.555 82.9475ZM43.2725 80.23L44.6313 78.8712L43.9242 78.1641L42.5654 79.5229L43.2725 80.23ZM45.99 77.5125L47.3488 76.1537L46.6417 75.4466L45.2829 76.8054L45.99 77.5125ZM48.7075 74.795L50.0663 73.4362L49.3592 72.7291L48.0004 74.0879L48.7075 74.795ZM51.4251 72.0774L52.1045 71.3981L51.3974 70.691L50.718 71.3703L51.4251 72.0774Z"
        fill="#22D7FF"
        className={svgAnimation.svgElem2}
      ></path>
      <path
        d="M60.4146 97.834C60.4146 97.5578 60.1907 97.334 59.9146 97.334L55.4146 97.334C55.1384 97.334 54.9146 97.5578 54.9146 97.834C54.9146 98.1101 55.1384 98.334 55.4146 98.334L59.4146 98.334L59.4146 102.334C59.4146 102.61 59.6384 102.834 59.9146 102.834C60.1907 102.834 60.4146 102.61 60.4146 102.334L60.4146 97.834ZM32.3164 126.139L33.0152 125.44L32.3081 124.733L31.6093 125.432L32.3164 126.139ZM34.4128 124.043L35.8104 122.645L35.1033 121.938L33.7057 123.336L34.4128 124.043ZM37.208 121.248L38.6056 119.85L37.8985 119.143L36.5009 120.541L37.208 121.248ZM40.0032 118.452L41.4007 117.055L40.6936 116.348L39.2961 117.745L40.0032 118.452ZM42.7983 115.657L44.1959 114.26L43.4888 113.553L42.0912 114.95L42.7983 115.657ZM45.5935 112.862L46.9911 111.465L46.284 110.757L44.8864 112.155L45.5935 112.862ZM48.3887 110.067L49.7862 108.669L49.0791 107.962L47.6816 109.36L48.3887 110.067ZM51.1838 107.272L52.5814 105.874L51.8743 105.167L50.4767 106.565L51.1838 107.272ZM53.979 104.477L55.3766 103.079L54.6695 102.372L53.2719 103.77L53.979 104.477ZM56.7742 101.681L58.1718 100.284L57.4646 99.5768L56.0671 100.974L56.7742 101.681ZM59.5693 98.8863L60.2681 98.1875L59.561 97.4804L58.8622 98.1792L59.5693 98.8863Z"
        fill="#22D7FF"
        className={svgAnimation.svgElem3}
      ></path>
      <line
        x1="35.0869"
        y1="105.631"
        x2="107.295"
        y2="33.4228"
        stroke="#40D8BD"
        className={svgAnimation.svgElem4}
      ></line>
      <path
        d="M136.265 58.2336C136.265 90.1185 110.417 115.966 78.5325 115.966C46.6476 115.966 20.7998 90.1185 20.7998 58.2336C20.7998 26.3488 46.6476 0.500977 78.5325 0.500977C110.417 0.500977 136.265 26.3488 136.265 58.2336Z"
        stroke="#22D7FF"
        className={svgAnimation.svgElem5}
      ></path>
      <path
        d="M4.4768 120.809C4.30193 120.595 3.98692 120.564 3.7732 120.739L0.290392 123.588C0.0766699 123.763 0.0451689 124.078 0.220033 124.292C0.394897 124.505 0.709908 124.537 0.92363 124.362L4.01946 121.829L6.55241 124.925C6.72727 125.139 7.04229 125.17 7.25601 124.995C7.46973 124.82 7.50123 124.505 7.32637 124.292L4.4768 120.809ZM18.4777 135.967C18.6341 135.739 18.5765 135.428 18.3489 135.272L14.6407 132.722C14.4132 132.566 14.1019 132.623 13.9455 132.851C13.789 133.079 13.8467 133.39 14.0742 133.546L17.3704 135.812L15.1043 139.109C14.9478 139.336 15.0055 139.647 15.233 139.804C15.4606 139.96 15.7719 139.903 15.9283 139.675L18.4777 135.967ZM3.5923 121.076C3.29515 124.047 3.64333 128.394 5.71809 131.726C6.76222 133.403 8.24725 134.827 10.3033 135.673C12.3567 136.518 14.9401 136.771 18.1567 136.175L17.9746 135.192C14.9021 135.761 12.5211 135.504 10.6839 134.748C8.84927 133.993 7.51729 132.724 6.56695 131.197C4.65277 128.124 4.30217 124.027 4.58734 121.175L3.5923 121.076Z"
        fill="#40D8BD"
        className={svgAnimation.svgElem6}
      ></path>
      <path
        d="M116.468 58.2353C116.468 79.1854 99.4843 96.1688 78.5341 96.1688C57.584 96.1688 40.6006 79.1854 40.6006 58.2353C40.6006 37.2852 57.584 20.3018 78.5341 20.3018C99.4843 20.3018 116.468 37.2852 116.468 58.2353Z"
        stroke="#22D7FF"
        className={svgAnimation.svgElem7}
      ></path>
      <g filter="url(#filter0_f_2000_74517)">
        <path
          d="M112.045 34.2761C112.045 37.1224 109.738 39.4297 106.892 39.4297C104.046 39.4297 101.738 37.1224 101.738 34.2761C101.738 31.4299 104.046 29.1226 106.892 29.1226C109.738 29.1226 112.045 31.4299 112.045 34.2761Z"
          fill="#40D8BD"
          className={svgAnimation.svgElem8}
        ></path>
      </g>
      <g filter="url(#filter1_f_2000_74517)">
        <path
          d="M130 93.001C130 95.7624 127.761 98.001 125 98.001C122.239 98.001 120 95.7624 120 93.001C120 90.2396 122.239 88.001 125 88.001C127.761 88.001 130 90.2396 130 93.001Z"
          fill="url(#paint0_radial_2000_74517)"
          className={svgAnimation.svgElem9}
        ></path>
        <path
          d="M130 93.001C130 95.7624 127.761 98.001 125 98.001C122.239 98.001 120 95.7624 120 93.001C120 90.2396 122.239 88.001 125 88.001C127.761 88.001 130 90.2396 130 93.001Z"
          fill="url(#paint1_radial_2000_74517)"
          className={svgAnimation.svgElem10}
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_f_2000_74517"
          x="99.8427"
          y="27.227"
          width="14.0982"
          height="14.0982"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="0.947778"
            result="effect1_foregroundBlur_2000_74517"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter1_f_2000_74517"
          x="118.104"
          y="86.1054"
          width="13.7911"
          height="13.7911"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="0.947778"
            result="effect1_foregroundBlur_2000_74517"
          ></feGaussianBlur>
        </filter>
        <radialGradient
          id="paint0_radial_2000_74517"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(125 93.001) rotate(90) scale(25.625 25.625)"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="#FFEDCA" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial_2000_74517"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(125 93.001) rotate(90) scale(25.625 25.625)"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="#FFEDCA" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  ) : name == "autopilot" ? (
    <svg
      className={`${svgAnimation.svg} ${svgAnimation.svg4}`}
      xmlns="http://www.w3.org/2000/svg"
      width="134"
      height="119"
      viewBox="0 0 134 119"
      fill="none"
    >
      <circle
        cx="59.5"
        cy="59.5"
        r="59"
        transform="matrix(-1 0 0 1 119 0.000976562)"
        stroke="#22D7FF"
        strokeDasharray="5 5"
        className={svgAnimation.svgElem1}
      ></circle>
      <path
        d="M27.1173 59.501C27.1173 75.8638 30.7564 90.6529 36.6149 101.333C42.4834 112.032 50.5093 118.501 59.2545 118.501C67.9997 118.501 76.0255 112.032 81.894 101.333C87.7525 90.6529 91.3916 75.8638 91.3916 59.501C91.3916 43.1381 87.7525 28.3491 81.894 17.6686C76.0255 6.9698 67.9997 0.500977 59.2545 0.500977C50.5093 0.500977 42.4834 6.9698 36.6149 17.6686C30.7564 28.3491 27.1173 43.1381 27.1173 59.501Z"
        stroke="#22D7FF"
        className={svgAnimation.svgElem2}
      ></path>
      <line
        y1="-0.5"
        x2="119"
        y2="-0.5"
        transform="matrix(4.37114e-08 1 1 -4.37114e-08 59.2432 0.000976562)"
        stroke="#40D8BD"
        strokeDasharray="2 2"
        className={svgAnimation.svgElem3}
      ></line>
      <ellipse
        cx="8.01081"
        cy="8.01081"
        rx="8.01081"
        ry="8.01081"
        transform="matrix(-0.980981 -0.194104 -0.194104 0.980981 128.826 54.1108)"
        fill="#40D8BD"
        className={svgAnimation.svgElem4}
      ></ellipse>
      <path
        d="M109.584 72.3762C109.547 72.594 109.34 72.7405 109.122 72.7034L105.573 72.0993C105.356 72.0623 105.209 71.8557 105.246 71.6379C105.283 71.4201 105.49 71.2736 105.708 71.3107L108.862 71.8476L109.399 68.693C109.436 68.4752 109.643 68.3287 109.861 68.3658C110.078 68.4029 110.225 68.6095 110.188 68.8273L109.584 72.3762ZM109.189 48.31C109.41 48.31 109.589 48.489 109.589 48.71L109.589 52.31C109.589 52.5309 109.41 52.71 109.189 52.71C108.969 52.71 108.789 52.5309 108.789 52.31L108.789 49.11L105.589 49.11C105.369 49.11 105.189 48.9309 105.189 48.71C105.189 48.489 105.369 48.31 105.589 48.31L109.189 48.31ZM108.863 72.5405C107.202 70.1977 105.213 66.1958 104.632 61.773C104.049 57.338 104.881 52.453 108.907 48.4271L109.472 48.9928C105.665 52.7998 104.865 57.413 105.425 61.6687C105.986 65.9366 107.913 69.8178 109.516 72.0777L108.863 72.5405Z"
        fill="#22D7FF"
        className={svgAnimation.svgElem5}
      ></path>
      <path
        d="M128.853 72.3762C128.89 72.594 129.097 72.7405 129.314 72.7034L132.863 72.0993C133.081 72.0623 133.228 71.8557 133.191 71.6379C133.154 71.4201 132.947 71.2736 132.729 71.3107L129.575 71.8476L129.038 68.693C129 68.4752 128.794 68.3287 128.576 68.3658C128.358 68.4029 128.212 68.6095 128.249 68.8273L128.853 72.3762ZM129.247 48.31C129.026 48.31 128.847 48.489 128.847 48.71L128.847 52.31C128.847 52.5309 129.026 52.71 129.247 52.71C129.468 52.71 129.647 52.5309 129.647 52.31L129.647 49.11L132.847 49.11C133.068 49.11 133.247 48.9309 133.247 48.71C133.247 48.489 133.068 48.31 132.847 48.31L129.247 48.31ZM129.574 72.5405C131.235 70.1977 133.224 66.1958 133.805 61.773C134.388 57.338 133.556 52.453 129.53 48.4271L128.964 48.9928C132.772 52.7998 133.571 57.413 133.012 61.6687C132.451 65.9366 130.524 69.8178 128.921 72.0777L129.574 72.5405Z"
        fill="#22D7FF"
        className={svgAnimation.svgElem6}
      ></path>
      <ellipse
        cx="9.28903"
        cy="9.28902"
        rx="9.28903"
        ry="9.28902"
        transform="matrix(-1 0 0 1 68.7852 50.2148)"
        fill="#22D7FF"
        className={svgAnimation.svgElem7}
      ></ellipse>
      <g filter="url(#filter0_f_2000_74516)">
        <path
          d="M38 25.001C38 27.7624 35.7614 30.001 33 30.001C30.2386 30.001 28 27.7624 28 25.001C28 22.2396 30.2386 20.001 33 20.001C35.7614 20.001 38 22.2396 38 25.001Z"
          fill="url(#paint0_radial_2000_74516)"
          className={svgAnimation.svgElem8}
        ></path>
        <path
          d="M38 25.001C38 27.7624 35.7614 30.001 33 30.001C30.2386 30.001 28 27.7624 28 25.001C28 22.2396 30.2386 20.001 33 20.001C35.7614 20.001 38 22.2396 38 25.001Z"
          fill="url(#paint1_radial_2000_74516)"
          className={svgAnimation.svgElem9}
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_f_2000_74516"
          x="26.1044"
          y="18.1054"
          width="13.7911"
          height="13.7911"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="0.947778"
            result="effect1_foregroundBlur_2000_74516"
          ></feGaussianBlur>
        </filter>
        <radialGradient
          id="paint0_radial_2000_74516"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(33 25.001) rotate(90) scale(25.625 25.625)"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="#FFEDCA" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial_2000_74516"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(33 25.001) rotate(90) scale(25.625 25.625)"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="#FFEDCA" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  ) : (
    <></>
  );
};

export default RenderSvg;
