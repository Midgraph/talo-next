export default function Hero() {
  return (
    <>
      <section className="w-screen h-screen pl-24 flex narrow:flex-col-reverse items-center justify-center relative overflow-hidden ">
        <div
          id="heroContent"
          className="w-1/2 narrow:w-full px-6 flex flex-col justify-center items-end narrow:h-2/5 narrow:items-center narrow:justify-end narrow:pb-8"
        >
          <div class="narrow:w-full flex flex-col gap-8 items-start ">
            <h1 className="wide:text-[calc(3*1vw)] narrow:text-[calc(4*1vw)] font-400 font-favorit">
              <span className="text-blue-500">Emergent Therapeutics.</span>
              <br />
              <span>
                Backed by computational <br />
                design and optimisation.
              </span>
            </h1>
            {/* <ul className=" font-favorit flex flex-col gap-4 pl-4 text-lg font-light">
              <li className="flex gap-2">
                <img src="svg/globe.svg" className="" />
                Autophagy-targeting chimeric molecules.
              </li>
              <li className="flex gap-2">
                <img src="svg/globe.svg" className="" />
                Small molecule drugs.
              </li>
              <li className="flex gap-2">
                <img src="svg/globe.svg" className="" />
                RNA-binding protein inhibitors.
              </li>
            </ul> */}
            <button className="font-favorit text-lg px-6 py-3 bg-blue-700 rounded-full text-white flex gap-4 items-center">
              Read our Approach{" "}
              <img src="svg/arrow-right.svg" className="w-6" alt="" />
            </button>
          </div>
        </div>
        <div id="heroImage" className="w-1/2 relative narrow:h-3/5">
          <img
            src="images/warhead.png"
            className="w-[calc((40vw-2.5rem-3rem))] h-[calc((40vw-2.5rem-3rem))] aspect-h-1 absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2"
            alt=""
          />
          <div className="w-[calc((40vw-2.5rem-3rem)*0.7071)] h-[calc((40vw-2.5rem-3rem)*0.7071)] aspect-h-1 absolute top-1/2 left-1/2 bg-black transform -rotate-45 z-[-1] -translate-x-1/2 -translate-y-1/2 heroDiamond flex items-center justify-center">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 435 434"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b)">
                <rect
                  x="1.85059"
                  y="1.37012"
                  width="431.197"
                  height="431.2"
                  rx="12"
                  stroke="url(#paint0_radial)"
                  stroke-opacity="0.08"
                  stroke-width="2"
                />
                <rect
                  x="1.85059"
                  y="1.37012"
                  width="431.197"
                  height="431.2"
                  rx="12"
                  stroke="url(#paint1_radial)"
                  stroke-width="2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b"
                  x="-25.1494"
                  y="-25.6299"
                  width="485.197"
                  height="485.2"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImage" stdDeviation="13" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur"
                    result="shape"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(-41.9893 359.838) rotate(-13.4092) scale(272.636 268.252)"
                >
                  <stop stop-color="#01488B" />
                  <stop offset="1" stop-color="#0E2F56" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(348.019 28.2983) rotate(134.382) scale(365.752 365.762)"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          {/* <img
            src="svg/diamond.svg"
            className="w-[calc((40vw-2.5rem-5rem))] h-[calc((40vw-2.5rem-5rem))] aspect-h-1 absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 backdrop-blur-3xl"
            alt=""
          /> */}

          <div className="w-[calc(40vw-2.5rem-5rem)] h-[calc(40vw-2.5rem-5rem)] aspect-h-1 absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div
          id="background"
          className="absolute w-full h-full top-0 left-0 z-[-100] overflow-hidden"
        >
          {/* <img
            src="svg/hero-bg.svg"
            alt=""
            className="object-cover h-full w-full"
          /> */}
          {/* <video loop autoplay className="h-full w-full object-cover">
            <source src="/video/bg.mp4" />
          </video> */}
          <div
            className="h-full relative w-full filter  
            blur-[250px] 
          "
          >
            <div className="z-[4] h-[25vw] w-[25vw] rounded-full bg-blue-600 absolute top-[20%] left-[90%] transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="z-[5] h-[40vw] w-[40vw] rounded-full bg-blue-300 absolute top-0 left-[60%] transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="z-[6] h-[35vw] w-[35vw] rounded-full bg-white absolute top-[50%] left-[65%] transform -translate-x-1/2 -translate-y-1/2"></div>
            {/* <div className=" z-[2] h-[35vw] w-[35vw] rounded-full bg-purple-500 absolute top-full left-[40%] transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="z-[1] h-[35vw] w-[35vw] rounded-full bg-blue-200 absolute top-[80%] left-[5%] transform -translate-x-1/2 -translate-y-1/2"></div> */}
          </div>
        </div>
      </section>
    </>
  );
}
