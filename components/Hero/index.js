import ReactDOM from "react-dom";
import THREE from "three";
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, Vector3 } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader";
import { Environment, useCubeTexture } from "@react-three/drei";

function Asset({ url, props }) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, url);
  useFrame((state, delta) => (ref.current.rotation.y += 0.01));

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={[0, -0, -0]}
      {...props}
    />
  );
}

function Box(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  // const envMap = useCubeTexture(
  //   [
  //     "warhead.png",
  //     "warhead.png",
  //     "warhead.png",
  //     "warhead.png",
  //     "warhead.png",
  //     "warhead.png",
  //   ],
  //   {
  //     path: "images/",
  //   }
  // );
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <mesh
        {...props}
        ref={ref}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          metalness={hovered ? 2 : 1}
          roughness={hovered ? 0 : 0.1}
          // refractionRatio={0.98}
          // reflectivity={0.9}
          envMapIntensity={1}
          color={0xccddff}
        />
        {/* <meshPhongMaterial
          // color={0xccddff}
          envMap={envMap}
          refractionRatio={0.5}
          reflectivity={0.9}
        /> */}
      </mesh>
    </>
  );
}

export default function Hero() {
  return (
    <>
      <section className="w-screen h-screen pl-24 flex narrow:flex-col-reverse items-center justify-center relative overflow-hidden ">
        <div
          id="heroContent"
          className="w-1/2 narrow:w-full px-6 flex flex-col justify-center items-end narrow:h-auto narrow:items-center narrow:justify-end narrow:pb-8"
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
        <div id="noise"></div>
        <Canvas className="!absolute w-full h-full ">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
          <Box position={[0, 0, 0]} />

          {/* <Asset url="3d/warhead.gltf" /> */}
          <Suspense fallback={null}>
            {/* <Asset url="3d/covid.glb" /> */}
            <Environment
              background={false}
              path="/"
              preset={"sunset"}
              scene={undefined} // adds the ability to pass a custom THREE.Scene
            />
          </Suspense>
        </Canvas>
        <div
          id="heroImage"
          className="w-1/2 narrow:w-full relative narrow:h-full"
        >
          <img
            src="images/warhead.png"
            className="w-[calc((40vw-2.5rem-3rem))] h-[calc((40vw-2.5rem-3rem))] narrow:w-[calc((60vh-2.5rem-3rem))] narrow:h-[calc((60vh-2.5rem-3rem))] aspect-h-1 absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2"
            alt=""
          />
          <div className="w-[calc((40vw-2.5rem-3rem)*0.7071)] h-[calc((40vw-2.5rem-3rem)*0.7071)]  narrow:w-[calc((60vh-2.5rem-3rem)*0.7)] narrow:h-[calc((60vh-2.5rem-3rem)*0.7)] aspect-h-1 absolute top-1/2 left-1/2 bg-black transform -rotate-45 z-[-1] -translate-x-1/2 -translate-y-1/2 heroDiamond flex items-center justify-center">
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
            blur-[150px] opacity-50
          "
          >
            <motion.div
              animate={{ x: 100, y: -100, scale: 2 }}
              transition={{
                ease: "easeInOut",
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="z-[4] h-[25vw] w-[25vw] rounded-full bg-blue-600 absolute top-[20%] left-[90%] transform -translate-x-1/2 -translate-y-1/2"
            ></motion.div>
            <motion.div
              animate={{ x: -200, y: 200, opacity: 0.8, scale: 0.8 }}
              transition={{
                ease: "easeInOut",
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="z-[5] h-[40vw] w-[40vw] rounded-full bg-blue-300 absolute top-0 left-[60%] transform -translate-x-1/2 -translate-y-1/2"
            ></motion.div>
            <motion.div
              animate={{ x: -100, y: -200, scale: -0.5 }}
              transition={{
                ease: "easeInOut",
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="z-[6] h-[35vw] w-[35vw] rounded-full bg-white absolute top-[50%] left-[65%] transform -translate-x-1/2 -translate-y-1/2"
            ></motion.div>
            <motion.div
              animate={{ x: -100, y: -100, scale: 2 }}
              transition={{
                ease: "easeInOut",
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="z-[4] h-[25vw] w-[25vw] rounded-full bg-blue-600 absolute top-[20%] left-[90%] transform -translate-x-1/2 -translate-y-1/2"
            ></motion.div>
            <motion.div
              animate={{ x: 200, y: -200, opacity: 0.8, scale: 0.8 }}
              transition={{
                ease: "easeInOut",
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="z-[5] h-[40vw] w-[40vw] rounded-full bg-blue-300 absolute top-0 left-[60%] transform -translate-x-1/2 -translate-y-1/2"
            ></motion.div>
            <motion.div
              animate={{ x: -100, y: -200, scale: -0.5 }}
              transition={{
                ease: "easeInOut",
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="z-[6] h-[35vw] w-[35vw] rounded-full bg-white absolute top-[50%] left-[65%] transform -translate-x-1/2 -translate-y-1/2"
            ></motion.div>
            <motion.div
              animate={{ x: -100, y: -100, scale: -0.5 }}
              transition={{
                ease: "easeInOut",
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className=" z-[2] h-[35vw] w-[35vw] rounded-full bg-purple-500 absolute top-full left-[40%] transform -translate-x-1/2 -translate-y-1/2"
            ></motion.div>
            <motion.div
              animate={{ x: -100, y: -200, scale: 2 }}
              transition={{
                ease: "easeInOut",
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="z-[1] h-[35vw] w-[35vw] rounded-full bg-blue-200 absolute top-[80%] left-[5%] transform -translate-x-1/2 -translate-y-1/2"
            ></motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
