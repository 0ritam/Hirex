import { useState } from 'react';
import Globe from 'react-globe.gl';

// import Button from '../components/Button.jsx';

const About = () => {
//   const [hasCopied, setHasCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(' adrian@jsmastery.pro');
//     setHasCopied(true);

//     setTimeout(() => {
//       setHasCopied(false);
//     }, 2000);
//   };

  return (
<section className="c-space my-20 px-4" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Crafting the Perfect Resume</p>
              <p className="grid-subtext">
                Learn how to create a resume that stands out. We share the essential tips for showcasing your experience and skills effectively.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/gridv2.1.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
            <p className="grid-headtext">Stay Ahead with Trending Skills</p>
              <p className="grid-subtext">
                Keep up-to-date with the most in-demand skills in the job market and how they can boost your career potential.
              </p>
              
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 12.97, lng: 77.56, text: 'We are here', color: 'white', size: 15 }]}
              />
            </div>
            <div>
                <p className="grid-headtext">Building a Strong LinkedIn Profile</p>
              <p className="grid-subtext">
                Enhance your online professional presence with a compelling LinkedIn profile that attracts recruiters and networking opportunities.
              </p>
              
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Your Career Growth Journey</p>
              <p className="grid-subtext">
                Discover actionable tips and strategies for continuous growth and development in your career.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Connect with Us</p>
              <div className="copy-container">
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">contact@hirex.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;