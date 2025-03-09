"use client";
import BeforeAfterCard from "./BeforeAfterCard/page";
import { Link } from "react-scroll";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const experiences = [
  {
    company: "BZM Graphics",
    role: "Photo Editor",
    duration: "April 2022 – September 2023 (2.5 years)",
    location: "Onsite",
    tasks: [
      "Specialized in shadow creation, color correction, retouching, and neck joint techniques.",
      "Delivered high-quality image edits for e-commerce, fashion, and product photography.",
      "Collaborated with teams to enhance workflow efficiency and meet tight deadlines.",
    ],
  },
  {
    company: "KOW Company",
    role: "Photo Editor",
    duration: "September 2023 –  Running",
    location: "Onsite",
    tasks: [
      "Provided high-end retouching and background removal services.",
      "Worked closely with clients and designers to meet branding and quality standards.",
      "Gained experience in batch editing and fast-paced project handling.",
    ],
  },
];

export default function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    

    gsap.to(textRef.current, {
      x: "-130%",
      scrollTrigger: {
        trigger: textRef.current,
        scroller: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
      },
      duration: 1,
    });
  }, []);
  return (
    <>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="flex items-center justify-center h-screen bg-white scroll-auto"
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-[120px] font-bold">Forhad Hossain</h1>
          <TypeAnimation
            sequence={[
              "Graphic Designer",
              2000,
              "Photo Editor",
              2000,
              "Web Designer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-[60px] mt-2"
          />
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="flex justify-center gap-4 mt-4 text-2xl"
          >
            <Link
              href="https://www.linkedin.com/in/fahad-hassan-069493202/"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/Forhad2k"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.facebook.com/farhar.hossain"
              target="_blank"
              className="text-blue-600 hover:text-blue-500"
            >
              <FaFacebook />
            </Link>
            <Link
              href="mailto:fh594694@gmail.com"
              target="_blank"
              className="text-red-500 hover:text-red-400"
            >
              <FaEnvelope />
            </Link>
          </motion.div>
          <div className="mt-6">
            <Link to="footer" smooth={true} duration={5000}>
              <button className="px-6 py-2 bg-green-500 text-white rounded transition-all hover:bg-green-400">
                Reach Out
              </button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* About Me Section */}
      <section className="md:flex justify-between min-h-screen items-center p-3.5 py-8">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="md:w-1/2 text-lg m-auto md:p-20 font-sans"
        >
          <h2 className="text-2xl font-bold md:w-[80%] mb-4">About Me</h2>
          <p>
            Hello, I&rsquo;m Forhad Hossain!
            <br />
            <br />
        I&rsquo;m a passionate Photo Editor with expertise in shadow creation, color correction, retouching, and neck joint techniques. I love enhancing images to create visually stunning, high-quality results that capture attention. My focus is on delivering precise, detailed, and natural-looking edits that align with client expectations. With a strong foundation in photo manipulation and digital enhancement, I continuously strive to learn new techniques and adapt to the evolving industry. Whether it’s restoring old photos, perfecting product images, or refining portraits, I take pride in every detail. I am always eager to explore new tools and creative approaches to elevate my work. My goal is to contribute to impactful projects while collaborating with professionals to create flawless visual experiences. Let&rsquo;s bring your images to life!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="w-1/2 m-auto py-14"
        >
          <Image
            src="/my-photo.jpg"
            width={500}
            height={500}
            alt="Your Image"
            className="m-auto rounded-lg"
          />
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="text-center md:w-2/3 m-auto p-14 md:p-28"
      >
        <h1 className="text-5xl md:text-[80px] text-center font-bold">
          SEE <span className="text-[#ADB5BD]">WORK</span>
        </h1>

        <p className="text-lg mt-4 text-center ">
          Take a look at our work and see our image editing mastery in action.
          Whether it’s removing backgrounds, shadows, or anything else you don’t
          want, we do it quickly and affordably. Give us a try today!
        </p>
      </motion.div>
      {/* title section end */}
      <motion.h1
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="font-bold text-3xl p-7 text-center"
      >
        Background Remove
      </motion.h1>

      {/* Grid Section */}
      <motion.div
        initial={{ opacity: 0, x: -250 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="grid w-[80%] pb-28 pt-16 h-auto items-center m-auto gap-7 md:grid-cols-3"
      >
        {/* Left Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Background Remove/B2.png"
              afterImage="/Background Remove/2.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">
              Dust & Scratch Remove
            </h3>
            <p className="text-lg mt-3 p-3">
              We specialize in providing top-notch background removal services
              to make your images stand out. Trust us to deliver high-quality
              results every time.
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Background Remove/Before3.jpg"
              afterImage="/Background Remove/After3.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">
              Poor Reflection Remove
            </h3>
            <p className="text-lg mt-3 p-3">
              Shiny jewelry often has many reflections when photographed. In
              this piece, unwanted reflections were removed to give it a more
              expensive look.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Background Remove/Before4.jpg"
              afterImage="/Background Remove/After4.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">Shadow Making</h3>
            <p className="text-lg mt-3 p-3">
              Shadows give the product a natural look. However, due to a
              two-sided light source, shadows might not be captured properly. We
              create and adjust them using Photoshop.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="font-bold text-3xl p-7 text-center"
      >
        Color Colection
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: 250 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="grid w-[80%] pb-28 pt-16 h-auto items-center m-auto gap-7 md:grid-cols-3"
      >
        {/* Left Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Color Adjustment/Before2.jpg"
              afterImage="/Color Adjustment/After2.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">Product Photo</h3>
            <p className="text-lg mt-3 p-3">
              Editors Cloud offers top-tier product photo color correction
              services, ensuring that the colors in your images are perfectly
              natural. We fine-tune white balance, highlights, shadows, color
              temperature, contrast, and brightness to achieve flawless results.
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300 ">
            <BeforeAfterCard
              beforeImage="/Color Adjustment/Before3.jpg"
              afterImage="/Color Adjustment/After3.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">Model Photo</h3>
            <p className="text-lg mt-3 p-3">
              At Editors Cloud, we specialize in model photo color correction.
              We address unnatural skin tones, adjust colors, correct
              imperfections, remove moles if needed, and tackle other issues—all
              while preserving a natural appearance.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Color Adjustment/Before4.jpg"
              afterImage="/Color Adjustment/After4.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">Color Change​</h3>
            <p className="text-lg mt-3 p-3">
              Product photos are crucial for online buyers, as purchase
              decisions are greatly influenced by how items are presented.
              Showcasing products in various color options can significantly
              boost sales by appealing to diverse cultures and preferences.
            </p>
          </div>
        </div>
      </motion.div>
      <h1 className="font-bold text-3xl p-7 text-center">Ghost-Mannequin</h1>

      {/* Grid Section */}
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="grid w-[80%] pb-28 pt-16 h-auto items-center m-auto gap-7 md:grid-cols-3"
      >
        {/* Left Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Ghost Mannequin/Before2.jpg"
              afterImage="/Ghost Mannequin/After2.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">3D Ghost Mannequin</h3>
            <p className="text-lg mt-3 p-3">
              You want your apparel to look its best online, but lack a model?
              We can make your garments appear as if worn by a ghost mannequin
              in 3D, showcasing the shape and fit of your items without any
              distractions.
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Ghost Mannequin/Before3.jpg"
              afterImage="/Ghost Mannequin/After3.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">Bottom Joint</h3>
            <p className="text-lg mt-3 p-3">
              You have top-quality clothing and want to showcase it in your
              eCommerce store, but don’t have a model? We can create a 3D ghost
              mannequin effect for your garments, allowing you to display the
              style and fit of your items without any issues.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Ghost Mannequin/Before4.jpg"
              afterImage="/Ghost Mannequin/After4.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">Neck Joint</h3>
            <p className="text-lg mt-3 p-3">
              To showcase your product online without the cost of a model, you
              can still feature your clothes professionally. We can create a 3D
              ghost mannequin effect to present your garments in a polished and
              realistic way.
            </p>
          </div>
        </div>
      </motion.div>
      {/* Grid Section End */}
      <h1 className="font-bold text-3xl p-7 text-center">Model Retouch</h1>
      {/* Grid Section */}
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="grid w-[80%] pb-28 pt-16 h-auto items-center m-auto gap-7 md:grid-cols-3"
      >
        {/* Left Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Model retouch/Before2.jpg"
              afterImage="/Model retouch/After2.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">
              Full Body Retouching​
            </h3>
            <p className="text-lg mt-3 p-3">
              Our model photo editing service goes beyond facial enhancements,
              offering virtual body shaping and fitness improvements. We smooth
              skin, contour the body, and address imperfections like scars or
              marks, ensuring a flawless, natural appearance from head to toe.
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Model retouch/Before3.jpg"
              afterImage="/Model retouch/After3.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">
              Advanced Retouching​
            </h3>
            <p className="text-lg mt-3 p-3">
              Advanced retouching goes beyond basic edits, utilizing various
              techniques to perfect model photos. Skin imperfections caused by
              heavy makeup or lighting are corrected, ensuring flawless results.
              Techniques used for alluring model photos include.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Model retouch/Before4.jpg"
              afterImage="/Model retouch/After4.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">Basic Retouching​</h3>
            <p className="text-lg mt-3 p-3">
              Basic retouching addresses minimal adjustments like stray hair,
              uneven skin tones, pimples, and red-eye. Techniques such as
              blemish removal, skin smoothing, and eye correction are used to
              create a polished, natural look, ensuring the model appears their
              best without heavy modifications.
            </p>
          </div>
        </div>
      </motion.div>
      {/* Grid Section End */}
      <h1 className="font-bold text-3xl p-7 text-center">Jewelry Retouch</h1>
      {/* Grid Section */}
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="grid w-[80%] pb-28 pt-16 h-auto items-center m-auto gap-7 md:grid-cols-3"
      >
        {/* Left Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Jewelry Retouch/Before2.jpg"
              afterImage="/Jewelry Retouch/After2.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">
              Jewelry Color Correction
            </h3>
            <p className="text-lg mt-3 p-3">
              At the time this jewelry image was taken, some dust was captured
              on the piece. We removed the dust and made it look more refined
              and polished.
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Jewelry Retouch/Before3.jpg"
              afterImage="/Jewelry Retouch/After3.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">
              Cleaning Object/Noise Remove
            </h3>
            <p className="text-lg mt-3 p-3">
              Shiny jewelry often has many reflections when photographed. In
              this piece, unwanted reflections were removed to give it a more
              expensive look.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Jewelry Retouch/Before4.jpg"
              afterImage="/Jewelry Retouch/After4.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">
              Jewelry Photo Enhancement
            </h3>
            <p className="text-lg mt-3 p-3">
              Shadows give the product a natural look. However, due to a
              two-sided light source, shadows might not be captured properly. We
              create and adjust them using Photoshop.
            </p>
          </div>
        </div>
        
      </motion.div>
      
      <div id="page2"  className="h-screen w-full">
      <h1
        ref={textRef}
        className="text-[70vh] font-bold  text-[#ADB5BD]"
      >
        EXPERIENCE
      </h1>
    </div>
      {/* Grid Section End */}
      <div className="py-12 h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6  rounded-2xl shadow-lg"
            >
              <h3 className="text-3xl font-semibold">{exp.role} @ {exp.company}</h3>
              <p className="text-xl ">{exp.duration} • {exp.location}</p>
              <ul className="mt-3 text-l space-y-2 list-disc list-inside ">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <div className="h-screen w-auto">
      
      <motion.h1 initial={{ opacity: 0, x: 250 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
               className="text-[40vh] font-bold p-20  text-[#ADB5BD]">Let&rsquo;s Talk</motion.h1>
      <a href="/cv.pdf" download>
      <button className=" mx-24 px-6 py-2  border  rounded transition-all hover:bg-green-400">Download CV</button>
      </a>
    </div>
      <footer id="footer" className="bg-gray-800 text-white py-6">
        <div className="max-w-screen-xl mx-auto px-4  items-center">
          <p className="text-sm">
            &copy; 2025 Forhad Hossain. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
