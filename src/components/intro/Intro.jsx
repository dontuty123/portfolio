/** @format */

import React from "react";
import "./intro.css";
import Me from "../../img/men.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Pham Tri Thuc</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item"> Web Developer</div>
              <div className="i-title-item"> UI/UX Designer</div>
              <div className="i-title-item"> Photographer</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop service for customer, specializing in creating of stylish, modern websites, web
            services and online stores.
          </p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <div className="body">
          <svg
            width="25%"
            height="25%"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            tabIndex={0}
          >
            <rect className="buttonSides" x="5.04999" y={51} width="90.62" height={8} fill="#763AC2" />
            <rect
              className="buttonSides"
              width={57}
              height={57}
              rx={8}
              transform="matrix(0.866025 -0.5 0.866025 0.5 1 59)"
              fill="#763AC2"
            />
            <g clipPath="url(#clip0_106_11)">
              <rect
                className="buttonTop"
                width={57}
                height={57}
                rx={8}
                transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)"
                fill="#A661FF"
              />
              <path
                className="buttonSides playSides"
                d="M64.2199 42.5L55.4353 61.4282L31.4353 47.5718L64.2199 42.5Z"
                fill="#763AC2"
              />
              <g className="glowAll" filter="url(#filter0_d_106_11)">
                <path d="M64.2199 42.5L55.4353 61.4282L31.4353 47.5718L64.2199 42.5Z" fill="white" />
              </g>
              <g className="glowMe" opacity="0.5" filter="url(#filter1_f_106_11)">
                <path d="M73.0478 36.9032L58.6665 67.8905L19.3761 45.2062L73.0478 36.9032Z" fill="white" />
              </g>
            </g>
            <path
              className="glowMe"
              opacity="0.5"
              d="M64 43L32 47.8L32 8L64 8L64 43Z"
              fill="url(#paint0_linear_106_11)"
            />
            <defs>
              <filter
                id="filter0_d_106_11"
                x="23.4353"
                y="34.5"
                width="48.7846"
                height="34.9282"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation={4} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_11" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_11" result="shape" />
              </filter>
              <filter
                id="filter1_f_106_11"
                x="3.37613"
                y="20.9032"
                width="85.6716"
                height="62.9873"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation={8} result="effect1_foregroundBlur_106_11" />
              </filter>
              <linearGradient id="paint0_linear_106_11" x1={47} y1={48} x2={47} y2={8} gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset={1} stopColor="white" stopOpacity={0} />
              </linearGradient>
              <clipPath id="clip0_106_11">
                <rect width={57} height={57} rx={8} transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="25%"
            height="25%"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            tabIndex={0}
          >
            <rect className="buttonSides" x="5.04999" y={51} width="90.62" height={8} fill="#763AC2" />
            <rect
              className="buttonSides"
              width={57}
              height={57}
              rx={8}
              transform="matrix(0.866025 -0.5 0.866025 0.5 1 59)"
              fill="#763AC2"
            />
            <g clipPath="url(#clip0_106_11)">
              <rect
                className="buttonTop"
                width={57}
                height={57}
                rx={8}
                transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)"
                fill="#A661FF"
              />
              <path
                className="buttonSides playSides"
                d="M64.2199 42.5L55.4353 61.4282L31.4353 47.5718L64.2199 42.5Z"
                fill="#763AC2"
              />
              <g className="glowAll" filter="url(#filter0_d_106_11)">
                <path d="M64.2199 42.5L55.4353 61.4282L31.4353 47.5718L64.2199 42.5Z" fill="white" />
              </g>
              <g className="glowMe" opacity="0.5" filter="url(#filter1_f_106_11)">
                <path d="M73.0478 36.9032L58.6665 67.8905L19.3761 45.2062L73.0478 36.9032Z" fill="white" />
              </g>
            </g>
            <path
              className="glowMe"
              opacity="0.5"
              d="M64 43L32 47.8L32 8L64 8L64 43Z"
              fill="url(#paint0_linear_106_11)"
            />
            <defs>
              <filter
                id="filter0_d_106_11"
                x="23.4353"
                y="34.5"
                width="48.7846"
                height="34.9282"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation={4} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_11" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_11" result="shape" />
              </filter>
              <filter
                id="filter1_f_106_11"
                x="3.37613"
                y="20.9032"
                width="85.6716"
                height="62.9873"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation={8} result="effect1_foregroundBlur_106_11" />
              </filter>
              <linearGradient id="paint0_linear_106_11" x1={47} y1={48} x2={47} y2={8} gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset={1} stopColor="white" stopOpacity={0} />
              </linearGradient>
              <clipPath id="clip0_106_11">
                <rect width={57} height={57} rx={8} transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="25%"
            height="25%"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            tabIndex={0}
          >
            <rect className="buttonSides" x="5.04999" y={51} width="90.62" height={8} fill="#763AC2" />
            <rect
              className="buttonSides"
              width={57}
              height={57}
              rx={8}
              transform="matrix(0.866025 -0.5 0.866025 0.5 1 59)"
              fill="#763AC2"
            />
            <g clipPath="url(#clip0_106_11)">
              <rect
                className="buttonTop"
                width={57}
                height={57}
                rx={8}
                transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)"
                fill="#A661FF"
              />
              <path
                className="buttonSides playSides"
                d="M64.2199 42.5L55.4353 61.4282L31.4353 47.5718L64.2199 42.5Z"
                fill="#763AC2"
              />
              <g className="glowAll" filter="url(#filter0_d_106_11)">
                <path d="M64.2199 42.5L55.4353 61.4282L31.4353 47.5718L64.2199 42.5Z" fill="white" />
              </g>
              <g className="glowMe" opacity="0.5" filter="url(#filter1_f_106_11)">
                <path d="M73.0478 36.9032L58.6665 67.8905L19.3761 45.2062L73.0478 36.9032Z" fill="white" />
              </g>
            </g>
            <path
              className="glowMe"
              opacity="0.5"
              d="M64 43L32 47.8L32 8L64 8L64 43Z"
              fill="url(#paint0_linear_106_11)"
            />
            <defs>
              <filter
                id="filter0_d_106_11"
                x="23.4353"
                y="34.5"
                width="48.7846"
                height="34.9282"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation={4} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_11" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_11" result="shape" />
              </filter>
              <filter
                id="filter1_f_106_11"
                x="3.37613"
                y="20.9032"
                width="85.6716"
                height="62.9873"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation={8} result="effect1_foregroundBlur_106_11" />
              </filter>
              <linearGradient id="paint0_linear_106_11" x1={47} y1={48} x2={47} y2={8} gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset={1} stopColor="white" stopOpacity={0} />
              </linearGradient>
              <clipPath id="clip0_106_11">
                <rect width={57} height={57} rx={8} transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Intro;
