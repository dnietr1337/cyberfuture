import React from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import { useState } from 'react';
import { useRef } from 'react';
const BentoTilt = ({ children, className = '' }) => {
  const itemRef = useRef(null);
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.97, 0.97, 0.97)`;
    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle('');
  };
  const [transformStyle, setTransformStyle] = useState('');
  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};
const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52" id="cyberverse">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the CyberVerse
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            At CyberFuture, we are pioneers in exploring the intersection of
            technology, humanity, and innovation. Our mission is to empower
            individuals and organizations to thrive in a rapidly evolving
            digital world. From artificial intelligence and quantum computing to
            virtual reality and beyond, we are committed to shaping a future
            that is smarter, safer, and more connected.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full  overflow-hidden rounded-md md:h-[65vh] opacity-70">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                Sp<b>e</b>ed
              </>
            }
            description="In 2147, the Quantum Velocity Network enables instant global communication, but only for those with neural implant"
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  Uni<b>v</b>erse<b></b>
                </>
              }
              description="By 2256, the Cosmic Net connects interstellar colonies, revealing mysterious signals and parallel universes, sparking both exploration and fear."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 opacity-90">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  Dar<b>k</b> Matter
                </>
              }
              description="In 2341, dark matter powers the Shadow Grid, but its unpredictable nature attracts enigmatic Shadows, blurring the line between energy and entity"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  Me<b>m</b>ory Erasing
                </>
              }
              description="By 2489, memories can be erased and traded, but a dangerous memory called 'The Void' threatens to unravel minds and reality itself."
            />
          </BentoTilt>
          <div className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on
              </h1>
              <TiLocationArrow className="m-4 scale-[5] self-end" />
            </div>
          </div>
          <div className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
