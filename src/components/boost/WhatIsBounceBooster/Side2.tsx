export default function Side2({
  percent,
  className,
}: {
  percent: number;
  className: string;
}) {
  return (
    <svg
      className={className}
      width="601"
      height="560"
      viewBox="0 0 480 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="884" height="560" rx="280" fill="white" />

      <mask
        id="mask0_17520_568"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="884"
        height="560"
      >
        <path
          d="M0 0H604C758.64 0 884 125.36 884 280C884 434.64 758.64 560 604 560H280C125.36 560 0 434.64 0 280V0Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_17520_568)">
        <rect
          x="116.473"
          y="27"
          width="500.838"
          height="533"
          rx="14.9769"
          fill="#2B51DA"
        />
        <path
          strokeDasharray={'650'}
          strokeDashoffset={650 - (percent / 100) * 650}
          d="M157.139 418.591C174.891 410.554 191.427 397.209 208.762 387.558C213.545 384.896 219.202 377.668 223.064 384.953C227.187 392.731 236.45 404.738 244.341 395.968C253.124 386.207 259.846 380.924 270.153 374.292C278.61 368.851 299.694 356.696 306.429 369.91C311.447 379.755 313.832 382.284 321.253 375.832C328.345 369.667 335.427 363.552 343.141 358.894C352.447 353.277 358.642 339.185 367.471 332.836C373.628 328.409 383.44 340.69 389.882 341.72C396.421 342.765 400.208 336.085 404.619 331.06C410.782 324.038 418.346 318.569 422.757 310.332C424.869 306.387 425.633 291.733 429.908 297.539C433.149 301.943 435.094 309.746 437.32 315.188C444.29 332.23 454.161 330.768 466.881 327.388C472.448 325.908 491.111 332.698 487.202 327.388C496.399 315.188 494.806 307.62 497.998 302.009C504.796 290.06 507.857 286.837 509.523 273.258C511.514 257.036 519.991 234.661 519.991 215.651C524.1 203.867 528.057 203.833 533.186 193.382C540.314 178.86 548.94 169.458 558.531 158.602C563.814 152.622 565.921 142.337 569.955 135.031"
          stroke="white"
          stroke-width="1.87211"
          stroke-linecap="round"
        />
        <path
          opacity="0.4"
          d="M164.721 83.6367H158.505V70.2886H164.533C166.462 70.2886 167.885 70.5694 168.802 71.131C169.719 71.6927 170.187 72.5726 170.187 73.752V73.8082C170.187 74.6132 170 75.2497 169.663 75.7364C169.307 76.2232 168.764 76.5602 168.016 76.7848C168.858 76.9907 169.476 77.3277 169.888 77.8145C170.281 78.3012 170.487 78.9565 170.487 79.7802V79.7989C170.487 81.1094 170 82.0641 169.064 82.7007C168.109 83.3372 166.668 83.6367 164.721 83.6367ZM164.665 72.4602H161.164V75.7177H164.721C165.694 75.7177 166.406 75.5867 166.855 75.3246C167.285 75.0625 167.51 74.6506 167.51 74.089V74.0515C167.51 73.4899 167.285 73.078 166.874 72.8347C166.443 72.5913 165.713 72.4602 164.665 72.4602ZM164.496 77.8706H161.164V81.334H164.384C165.582 81.334 166.443 81.2217 166.949 80.9596C167.435 80.6975 167.697 80.2482 167.697 79.593V79.5742C167.697 78.9565 167.454 78.5259 166.986 78.2638C166.518 78.0017 165.694 77.8706 164.496 77.8706ZM178.085 83.955C176.082 83.955 174.566 83.487 173.536 82.5509C172.506 81.6148 172.001 80.2482 172.001 78.4135V78.2451C172.001 76.504 172.544 75.1186 173.667 74.1077C174.772 73.0968 176.251 72.5726 178.123 72.5726C179.995 72.5726 181.493 73.078 182.597 74.089C183.683 75.0999 184.245 76.4853 184.245 78.2451V78.4135C184.245 80.1733 183.702 81.5212 182.616 82.4947C181.53 83.4682 180.032 83.955 178.085 83.955ZM178.123 81.6148C179.209 81.6148 180.032 81.3527 180.594 80.7911C181.156 80.2482 181.455 79.4432 181.455 78.3948V78.2451C181.455 77.1592 181.156 76.3168 180.594 75.7364C180.032 75.1561 179.209 74.8565 178.142 74.8565C177.074 74.8565 176.251 75.1561 175.67 75.7364C175.09 76.3355 174.809 77.1592 174.809 78.2451V78.3948C174.809 79.4432 175.09 80.2482 175.652 80.7911C176.213 81.3527 177.037 81.6148 178.123 81.6148ZM196.983 83.6367H194.643L194.399 81.4464C194.062 82.2514 193.576 82.8692 192.902 83.281C192.228 83.7116 191.404 83.9175 190.449 83.9175C189.045 83.9175 187.978 83.5244 187.229 82.7007C186.48 81.8957 186.106 80.735 186.106 79.2373V72.8721H188.877V78.5633C188.877 79.6117 189.083 80.3605 189.513 80.8473C189.925 81.334 190.58 81.5774 191.479 81.5774C192.321 81.5774 192.976 81.2966 193.463 80.6975C193.95 80.1172 194.193 79.3122 194.193 78.2638V72.8721H196.983V83.6367ZM205.185 74.8753C204.174 74.8753 203.425 75.1748 202.919 75.7552C202.395 76.3542 202.152 77.2154 202.152 78.3574V83.6367H199.381V72.8721H201.721L201.965 75.1186C202.32 74.2949 202.844 73.6771 203.556 73.2278C204.267 72.7972 205.11 72.5726 206.083 72.5726C207.506 72.5726 208.61 73.0032 209.415 73.8269C210.202 74.6693 210.614 75.83 210.614 77.309V83.6367H207.843V77.983C207.843 76.9159 207.618 76.1296 207.188 75.6241C206.757 75.1374 206.083 74.8753 205.185 74.8753ZM218.525 83.955C216.541 83.955 215.024 83.487 213.995 82.5509C212.965 81.6148 212.46 80.2295 212.46 78.4135V78.2451C212.46 76.5227 213.003 75.1374 214.126 74.1077C215.23 73.0968 216.709 72.5726 218.581 72.5726C220.379 72.5726 221.783 72.9844 222.831 73.7894C223.88 74.6132 224.479 75.7739 224.628 77.2903V77.309H221.708V77.2716C221.577 76.4666 221.259 75.8675 220.753 75.4556C220.229 75.0625 219.518 74.8565 218.6 74.8565C217.533 74.8565 216.709 75.1561 216.148 75.7364C215.567 76.3355 215.287 77.1592 215.287 78.2451V78.3948C215.287 79.4432 215.567 80.2482 216.129 80.7911C216.691 81.3527 217.496 81.6148 218.581 81.6148C219.518 81.6148 220.248 81.4276 220.772 81.0158C221.277 80.6039 221.596 79.9861 221.727 79.1437V79.1249H224.628V79.1624C224.497 80.735 223.917 81.9144 222.869 82.7381C221.82 83.5618 220.379 83.955 218.525 83.955ZM235.049 80.4541H238.044C237.614 81.6148 236.902 82.4947 235.891 83.0751C234.88 83.6742 233.607 83.955 232.053 83.955C230.069 83.955 228.571 83.5057 227.56 82.5696C226.531 81.6336 226.025 80.2856 226.025 78.4884V78.3199C226.025 76.5976 226.568 75.1935 227.691 74.1451C228.796 73.0968 230.294 72.5726 232.184 72.5726C234.038 72.5726 235.498 73.078 236.565 74.089C237.632 75.0999 238.175 76.4291 238.175 78.114V79.256H228.684C228.815 80.0797 229.17 80.7162 229.769 81.1281C230.35 81.54 231.155 81.7459 232.203 81.7459C232.952 81.7459 233.551 81.6523 234.019 81.4276C234.468 81.2217 234.824 80.9034 235.049 80.4541ZM232.241 74.7068C231.267 74.7068 230.481 74.9314 229.882 75.3433C229.283 75.7739 228.889 76.3917 228.721 77.1967H235.461C235.33 76.3729 234.993 75.7364 234.468 75.3246C233.925 74.9127 233.177 74.7068 232.241 74.7068ZM251.836 83.6367H245.62V70.2886H251.649C253.577 70.2886 255 70.5694 255.917 71.131C256.834 71.6927 257.302 72.5726 257.302 73.752V73.8082C257.302 74.6132 257.115 75.2497 256.778 75.7364C256.422 76.2232 255.88 76.5602 255.131 76.7848C255.973 76.9907 256.591 77.3277 257.003 77.8145C257.396 78.3012 257.602 78.9565 257.602 79.7802V79.7989C257.602 81.1094 257.115 82.0641 256.179 82.7007C255.224 83.3372 253.783 83.6367 251.836 83.6367ZM251.78 72.4602H248.279V75.7177H251.836C252.809 75.7177 253.521 75.5867 253.97 75.3246C254.401 75.0625 254.625 74.6506 254.625 74.089V74.0515C254.625 73.4899 254.401 73.078 253.989 72.8347C253.558 72.5913 252.828 72.4602 251.78 72.4602ZM251.611 77.8706H248.279V81.334H251.499C252.697 81.334 253.558 81.2217 254.064 80.9596C254.55 80.6975 254.812 80.2482 254.812 79.593V79.5742C254.812 78.9565 254.569 78.5259 254.101 78.2638C253.633 78.0017 252.809 77.8706 251.611 77.8706ZM265.2 83.955C263.197 83.955 261.681 83.487 260.651 82.5509C259.622 81.6148 259.116 80.2482 259.116 78.4135V78.2451C259.116 76.504 259.659 75.1186 260.782 74.1077C261.887 73.0968 263.366 72.5726 265.238 72.5726C267.11 72.5726 268.608 73.078 269.712 74.089C270.798 75.0999 271.36 76.4853 271.36 78.2451V78.4135C271.36 80.1733 270.817 81.5212 269.731 82.4947C268.645 83.4682 267.147 83.955 265.2 83.955ZM265.238 81.6148C266.324 81.6148 267.147 81.3527 267.709 80.7911C268.271 80.2482 268.57 79.4432 268.57 78.3948V78.2451C268.57 77.1592 268.271 76.3168 267.709 75.7364C267.147 75.1561 266.324 74.8565 265.257 74.8565C264.19 74.8565 263.366 75.1561 262.785 75.7364C262.205 76.3355 261.924 77.1592 261.924 78.2451V78.3948C261.924 79.4432 262.205 80.2482 262.767 80.7911C263.328 81.3527 264.152 81.6148 265.238 81.6148ZM279.095 83.955C277.092 83.955 275.575 83.487 274.546 82.5509C273.516 81.6148 273.011 80.2482 273.011 78.4135V78.2451C273.011 76.504 273.554 75.1186 274.677 74.1077C275.781 73.0968 277.26 72.5726 279.132 72.5726C281.005 72.5726 282.502 73.078 283.607 74.089C284.693 75.0999 285.254 76.4853 285.254 78.2451V78.4135C285.254 80.1733 284.711 81.5212 283.625 82.4947C282.54 83.4682 281.042 83.955 279.095 83.955ZM279.132 81.6148C280.218 81.6148 281.042 81.3527 281.604 80.7911C282.165 80.2482 282.465 79.4432 282.465 78.3948V78.2451C282.465 77.1592 282.165 76.3168 281.604 75.7364C281.042 75.1561 280.218 74.8565 279.151 74.8565C278.084 74.8565 277.26 75.1561 276.68 75.7364C276.1 76.3355 275.819 77.1592 275.819 78.2451V78.3948C275.819 79.4432 276.1 80.2482 276.661 80.7911C277.223 81.3527 278.047 81.6148 279.132 81.6148ZM297.71 80.3044C297.71 81.4276 297.224 82.3262 296.288 82.9815C295.333 83.6367 294.022 83.955 292.356 83.955C290.521 83.955 289.117 83.6367 288.125 83.0002C287.114 82.3637 286.515 81.3902 286.328 80.0797H289.379C289.492 80.6788 289.81 81.0907 290.297 81.3527C290.784 81.6148 291.495 81.7459 292.468 81.7459C293.33 81.7459 293.947 81.6523 294.359 81.4276C294.771 81.2217 294.977 80.8847 294.977 80.4167C294.977 80.061 294.771 79.7989 294.378 79.6304C293.966 79.4806 293.049 79.3309 291.589 79.2185C289.81 79.0875 288.556 78.7692 287.844 78.2825C287.133 77.7957 286.777 77.0656 286.777 76.0921C286.777 75.0063 287.208 74.1451 288.106 73.5086C289.005 72.8908 290.241 72.5726 291.832 72.5726C293.479 72.5726 294.79 72.8721 295.726 73.4712C296.662 74.0703 297.261 74.9501 297.523 76.1483H294.64C294.528 75.6428 294.247 75.2684 293.798 75.025C293.348 74.8004 292.674 74.6693 291.813 74.6693C291.027 74.6693 290.428 74.7817 290.035 74.9876C289.642 75.1935 289.454 75.4931 289.454 75.9049C289.454 76.2793 289.642 76.5602 290.053 76.7099C290.465 76.8784 291.364 77.0095 292.787 77.1218C294.659 77.2903 295.951 77.6085 296.662 78.0953C297.355 78.582 297.71 79.3122 297.71 80.3044ZM305.805 81.1655H306.928V83.6367H305.094C303.446 83.6367 302.323 83.3185 301.724 82.6632C301.125 82.0267 300.825 80.7724 300.825 78.9377V75.2684H298.354V73.0032C298.729 73.0032 299.028 73.0032 299.215 73.0032C299.403 73.0032 299.571 72.9844 299.758 72.9657C300.189 72.9657 300.488 72.8721 300.638 72.6849C300.788 72.4977 300.9 72.142 300.975 71.6178C301.013 71.4119 301.031 71.1498 301.05 70.8315C301.069 70.5133 301.069 70.2324 301.069 69.9703H303.39V72.8721H306.928V75.2684H303.39V78.4697C303.39 79.6491 303.521 80.398 303.802 80.6975C304.064 81.0158 304.738 81.1655 305.805 81.1655ZM317.063 80.4541H320.058C319.628 81.6148 318.916 82.4947 317.906 83.0751C316.895 83.6742 315.622 83.955 314.068 83.955C312.083 83.955 310.586 83.5057 309.575 82.5696C308.545 81.6336 308.04 80.2856 308.04 78.4884V78.3199C308.04 76.5976 308.582 75.1935 309.706 74.1451C310.81 73.0968 312.308 72.5726 314.199 72.5726C316.052 72.5726 317.512 73.078 318.579 74.089C319.647 75.0999 320.189 76.4291 320.189 78.114V79.256H310.698C310.829 80.0797 311.185 80.7162 311.784 81.1281C312.364 81.54 313.169 81.7459 314.217 81.7459C314.966 81.7459 315.565 81.6523 316.033 81.4276C316.483 81.2217 316.838 80.9034 317.063 80.4541ZM314.255 74.7068C313.281 74.7068 312.495 74.9314 311.896 75.3433C311.297 75.7739 310.904 76.3917 310.735 77.1967H317.475C317.344 76.3729 317.007 75.7364 316.483 75.3246C315.94 74.9127 315.191 74.7068 314.255 74.7068ZM324.807 79.2185V83.6367H322.073V72.8721H324.357L324.694 75.5679C324.938 74.6319 325.387 73.9392 326.024 73.4712C326.66 73.0219 327.521 72.7785 328.588 72.7785H329.581V75.5118H328.364C326.997 75.5118 326.061 75.7739 325.556 76.2793C325.05 76.8035 324.807 77.777 324.807 79.2185Z"
          fill="white"
        />
        <text x="156" y="188" fill="white" color="white" fontSize={80}>
          +{percent}%
        </text>
        <path
          opacity="0.4"
          d="M157.139 462.662L596 462.662"
          stroke="white"
          stroke-width="0.965999"
          fill="#2B51DA"
        />
      </g>
    </svg>
  );
}