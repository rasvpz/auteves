import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../src/app/globals.css'; // Ensure you have your global styles imported
import Image from 'next/image';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (

<div className='lg:h-[436px]'>
  <div 
    className="p-4 lg:pl-36 lg:pr-36 lg:pt-16 lg:mb-18 bg-right bg-no-repeat" 
    // style={{ backgroundImage: "url('/success6.png')" }} 
  >
    <div className="rounded-2xl bg-slate-950 opacity-75 h-auto px-8 py-6 shadow-white-lg md:shadow-none lg:border-8 border-white">

      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <div className="flex flex-col md:flex-row h-full">
            {/* Image Column */}
            <div className="w-full md:w-2/12 mb-4 md:mb-0 relative">
              <Image
                className="rounded-2xl lg:mb-4 mt-4"
                src="./rashid1.png"
                alt="Logo"
                width={250}
                height={225}
                priority
              />
              {/* Text overlay on mobile */}
              <span className="absolute inset-0 flex justify-center items-center text-2xl font-bold lg:text-xl text-white shadow-lg md:hidden">
                AbduRashid
              </span>
              {/* Text below image on desktop */}
              <span className="hidden md:flex font-bold lg:text-2xl text-white lg:text-blue-400 text-center mt-2 ml-4">
                AbduRashid
              </span>
            </div>
            {/* Text Column */}
            <div className="w-full md:w-10/12 flex flex-col md:pl-8">
            <span className="text-2xl font-bold lg:text-2xl text-blue-400 border-b-2 border-dotted border-gray-800 pb-2 ">

                :: Software Engineer
              </span>
              <span className="text-gray-200 text-lg mt-2">
                Hey everyone! With 13 years of hands-on experience in web and app development, 
                I have worked across the stack, specializing in both &nbsp;  
                <span className="bg-white px-1 text-slate-900 rounded-sm">frontend</span> &nbsp;and &nbsp;
                <span className="bg-white px-1 text-slate-900 rounded-sm">backend</span>. 
                My toolkit includes <span className="bg-white px-1 text-slate-900 rounded-sm">Figma</span> for design, <span className="bg-white px-1 text-slate-900 rounded-sm">HTML</span>, <span className="bg-white px-1 text-slate-900 rounded-sm">CSS</span>, 
                <span className="bg-white px-1 text-slate-900 rounded-sm">Bootstrap</span>, <span className="bg-white px-1 text-slate-900 rounded-sm">javaScript</span>, <span className="bg-white px-1 text-slate-900 rounded-sm">es6</span> and <span className="bg-white px-1 text-slate-900 rounded-sm">Tailwind</span> for modern, responsive layouts. 
                On the dev side, I’ve built applications using <span className="bg-white px-1 text-slate-900 rounded-sm">React.js</span>, <span className="bg-white px-1 text-slate-900 rounded-sm">Node.js</span>, and <span className="bg-white px-1 text-slate-900 rounded-sm">Electron.js</span>—whether 
                its <span className="bg-white px-1 text-slate-900 rounded-sm">web apps</span> or <span className="bg-white px-1 text-slate-900 rounded-sm">desktop</span> applications, Im all in! Im also well-versed in <span className="bg-white px-1 text-slate-900 rounded-sm">Java with SpringBoot </span>
                for enterprise-level apps, and I have experience with databases like <span className="bg-white px-1 text-slate-900 rounded-sm">MySQL</span> and <span className="bg-white px-1 text-slate-900 rounded-sm">MongoDB</span>. 
                My <span className="bg-white px-1 text-slate-900 rounded-sm">DevOps</span> journey has been focused on streamlining deployment, performance optimization, 
                and managing smooth <span className="bg-white px-1 text-slate-900 rounded-sm">CI/CD</span> workflows. Always keen to share !
              </span>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div>
          <div className="flex flex-col md:flex-row h-full">
            {/* Image Column */}
            <div className="w-full md:w-2/12 mb-4 md:mb-0 relative">
              <Image
                className="rounded-2xl lg:mb-4 mt-4"
                src="./shafeek.jpg"
                alt="Logo"
                width={250}
                height={225}
                priority
              />
              {/* Text overlay on mobile */}
              <span className="absolute inset-0 flex justify-center items-center text-2xl font-bold lg:text-xl text-white shadow-lg md:hidden">
                Shafeek
              </span>
              {/* Text below image on desktop */}
              <span className="hidden md:flex font-bold lg:text-2xl text-white lg:text-blue-400 text-center mt-2 ml-8">
                Shafeek
              </span>
            </div>
            {/* Text Column */}
            <div className="w-full md:w-10/12 flex flex-col md:pl-8">
            <span className=" pb-2 text-2xl font-bold lg:text-2xl text-blue-400 border-b-2 border-dotted border-gray-800">
                :: Accountant & GST consultant
              </span>
              <span className="text-gray-200 text-lg pt-2">
                With years of extensive experience in  <span className="bg-white px-1 text-slate-900 rounded-sm">accounting and taxation</span> , I specialize in providing comprehensive solutions in  <span className="bg-white px-1 text-slate-900 rounded-sm">Tally and GST</span> consulting. My expertise lies in  <span className="bg-white px-1 text-slate-900 rounded-sm">streamlining financial processes</span> , ensuring compliance with regulatory requirements, and optimizing tax strategies to enhance business efficiency.
                I have successfully assisted numerous  <span className="bg-white px-1 text-slate-900 rounded-sm">clients</span> in managing their  <span className="bg-white px-1 text-slate-900 rounded-sm">financial records</span>, implementing robust  <span className="bg-white px-1 text-slate-900 rounded-sm">accounting systems</span> , and navigating the complexities of  <span className="bg-white px-1 text-slate-900 rounded-sm">GST regulations</span> . My in-depth knowledge of  <span className="bg-white px-1 text-slate-900 rounded-sm">Tally</span> allows me to offer  <span className="bg-white px-1 text-slate-900 rounded-sm">tailored solutions</span>  that meet the unique needs of each business, ensuring accurate  <span className="bg-white px-1 text-slate-900 rounded-sm">reporting</span> and effective  <span className="bg-white px-1 text-slate-900 rounded-sm">financial management</span> For my students ...
              </span>
            </div>
          </div>
        </div>
        {/* Slide 3 */}
        <div>
          <div className="flex flex-col md:flex-row h-full">
            {/* Image Column */}
            <div className="w-full md:w-2/12 mb-4 md:mb-0 relative">
              <Image
                className="rounded-2xl lg:mb-4 mt-4"
                src="./anas.png"
                alt="Logo"
                width={250}
                height={225}
                priority
              />
              {/* Text overlay on mobile */}
              <span className="absolute inset-0 flex justify-center items-center text-2xl font-bold lg:text-xl text-white shadow-lg md:hidden">
                Anas
              </span>
              {/* Text below image on desktop */}
              <span className="hidden md:flex font-bold lg:text-2xl text-white lg:text-blue-400 text-center mt-2 ml-12">
                Anas
              </span>
            </div>
            {/* Text Column */}
            <div className="w-full md:w-10/12 flex flex-col md:pl-8">
            <span className=" pb-2 text-2xl font-bold lg:text-2xl text-blue-400 border-b-2 border-dotted border-gray-800">
                :: Technical Engineer
              </span>
              <span className="text-gray-200 text-lg pt-2">
              Hello, I’m a seasoned <span className="bg-white px-1 text-slate-900 rounded-sm">Computer Hardware</span>  Engineer with a strong background in <span className="bg-white px-1 text-slate-900 rounded-sm">Network Engineering</span>  and expertise in <span className="bg-white px-1 text-slate-900 rounded-sm">Microsoft Certified Professional</span>  (MCP) certification. I specialize in <span className="bg-white px-1 text-slate-900 rounded-sm">troubleshooting</span>  and <span className="bg-white px-1 text-slate-900 rounded-sm">configuring</span>  a wide range of computer hardware systems, ensuring smooth operation and <span className="bg-white px-1 text-slate-900 rounded-sm"></span> connectivity across <span className="bg-white px-1 text-slate-900 rounded-sm">networks</span>. Additionally, I bring in-depth experience as a <span className="bg-white px-1 text-slate-900 rounded-sm">Laptop Engineer</span>, diagnosing and repairing laptops of various <span className="bg-white px-1 text-slate-900 rounded-sm">models and brands</span>.
              Over the years, I’ve worked extensively in <span className="bg-white px-1 text-slate-900 rounded-sm">setting up</span> , <span className="bg-white px-1 text-slate-900 rounded-sm">managing</span> , and <span className="bg-white px-1 text-slate-900 rounded-sm">maintaining</span>  <span className="bg-white px-1 text-slate-900 rounded-sm">computer networks</span>, providing <span className="bg-white px-1 text-slate-900 rounded-sm">solutions</span> that help businesses and individuals stay connected, or helping others understand the ins and outs of hardware and network systems. </span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row h-full">
            {/* Image Column */}
            <div className="w-full md:w-2/12 mb-4 md:mb-0 relative">
              <Image
                className="rounded-2xl lg:mb-4 mt-4"
                src="./shahir.png"
                alt="Logo"
                width={250}
                height={225}
                priority
              />
              {/* Text overlay on mobile */}
              <span className="absolute inset-0 flex justify-center items-center text-2xl font-bold lg:text-xl text-white shadow-lg md:hidden">
                Shahir
              </span>
              {/* Text below image on desktop */}
              <span className="hidden md:flex font-bold lg:text-2xl text-white lg:text-blue-400 text-center mt-2 ml-8">
                Shahir
              </span>
            </div>
            {/* Text Column */}
            <div className="w-full md:w-10/12 flex flex-col md:pl-8">
            <span className="pb-2 text-2xl font-bold lg:text-2xl text-blue-400 border-b-2 border-dotted border-gray-800">
                :: Mobile Engineer
              </span>
              <span className="text-gray-200 text-lg mt-2">
              Highly skilled <span className="bg-white px-1 text-slate-900 rounded-sm">Mobile Technical Engineer</span> , a specialist in everything related to <span className="bg-white px-1 text-slate-900 rounded-sm">smartphones</span> and <span className="bg-white px-1 text-slate-900 rounded-sm">mobile devices</span> ! With years of hands-on experience in <span className="bg-white px-1 text-slate-900 rounded-sm">diagnosing</span> , <span className="bg-white px-1 text-slate-900 rounded-sm">repairing</span> , and <span className="bg-white px-1 text-slate-900 rounded-sm">optimizing mobile technologies</span> , My expert ensures that your devices stay in <span className="bg-white px-1 text-slate-900 rounded-sm"> perfect working condition</span>.
              From <span className="bg-white px-1 text-slate-900 rounded-sm">troubleshooting</span> software glitches to <span className="bg-white px-1 text-slate-900 rounded-sm">replacing  damaged</span> components, we have mastered the art of making your smartphones perform at their best. We are also <span className="bg-white px-1 text-slate-900 rounded-sm">proficient</span>  in handling both <span className="bg-white px-1 text-slate-900 rounded-sm">Android</span> and <span className="bg-white px-1 text-slate-900 rounded-sm">iOS</span>  platforms, With their expert insights and <span className="bg-white px-1 text-slate-900 rounded-sm">practical tips</span> , you will <span className="bg-white px-1 text-slate-900 rounded-sm">not only learn about mobile technology</span>  but also <span className="bg-white px-1 text-slate-900 rounded-sm">gain</span>  the confidence to <span className="bg-white px-1 text-slate-900 rounded-sm">troubleshoot</span> and <span className="bg-white px-1 text-slate-900 rounded-sm">maintain</span>  your own devices like a pro. 
              </span>
            </div>
          </div>
        </div>
        {/* Slide 4 */}
        <div>
          <div className="flex flex-col md:flex-row h-full">
            {/* Image Column */}
            <div className="w-full md:w-2/12 mb-4 md:mb-0 relative">
              <Image
                className="rounded-2xl lg:mb-4 mt-4"
                src="./safwan.png"
                alt="Logo"
                width={250}
                height={225}
                priority
              />
              {/* Text overlay on mobile */}
              <span className="absolute inset-0 flex justify-center items-center text-2xl font-bold lg:text-xl text-white shadow-lg md:hidden">
                Safwan
              </span>
              {/* Text below image on desktop */}
              <span className="hidden md:flex font-bold lg:text-2xl text-white lg:text-blue-400 text-center mt-2 ml-8">
                Safwan
              </span>
            </div>
            {/* Text Column */}
            <div className="w-full md:w-10/12 flex flex-col md:pl-8">
            <span className="pb-2 text-2xl font-bold lg:text-2xl text-blue-400 border-b-2 border-dotted border-gray-800">
                :: Automations and Robotic
              </span>
              <span className="text-gray-200 text-lg mt-2">
              Hi all have the highly proficient <span className="bg-white px-1 text-slate-900 rounded-sm">Automation</span>, <span className="bg-white px-1 text-slate-900 rounded-sm">Networking</span>, and <span className="bg-white px-1 text-slate-900 rounded-sm">Robotics Engineer</span>, a true innovator in the world of cutting-edge technology. With extensive expertise in <span className="bg-white px-1 text-slate-900 rounded-sm">installing</span> automated systems, this expert ensures top-notch <span className="bg-white px-1 text-slate-900 rounded-sm">security solutions</span> , keeping homes and businesses safe with <span className="bg-white px-1 text-slate-900 rounded-sm">advanced</span>  surveillance <span className="bg-white px-1 text-slate-900 rounded-sm">technologies</span> .
              Beyond security, My excel in <span className="bg-white px-1 text-slate-900 rounded-sm">automation</span> systems, making day-to-day tasks more efficient through <span className="bg-white px-1 text-slate-900 rounded-sm">smart technologies</span>  that simplify operations in <span className="bg-white px-1 text-slate-900 rounded-sm">residential</span> , <span className="bg-white px-1 text-slate-900 rounded-sm">industrial</span> , and <span className="bg-white px-1 text-slate-900 rounded-sm">corporate settings</span> . With my in-depth knowledge and <span className="bg-white px-1 text-slate-900 rounded-sm">practical experience</span> , you’ll <span className="bg-white px-1 text-slate-900 rounded-sm">gain a strong</span> foundation in these diverse fields, <span className="bg-white px-1 text-slate-900 rounded-sm">empowering</span> you to build, innovate, and lead in the technology. </span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  </div>
</div>

  );
};

export default Banner;
