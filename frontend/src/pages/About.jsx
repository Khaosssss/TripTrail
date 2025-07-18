import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Uniqueloc from '../assets/Uniqueloc.png';
import service from '../assets/service.png';
import affordable from '../assets/affordable.png';
import rahulImage from "../assets/rahul_mern.jpg";
import abhiramImage from "../assets/abhiram_mern.jpg";
import nayantaraImage from "../assets/nayantara_mern.jpg";
import kousikImage from "../assets/kousik_mern.jpg";


const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div className="about-page">
      <section
        className="about-header text-center py-16 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg?t=st=1734459512~exp=1734463112~hmac=956199774261d513cea7b1861f7343dcc4bcdc9298fbcf1c82e3028ab2da7f18&w=1800)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <motion.h1
          className="text-white text-4xl font-bold relative z-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-teal-500">TravelTide</span>
        </motion.h1>
        <motion.p
          className="text-white mt-4 text-lg relative z-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Your Trusted Travel Agency for Seamless Booking Experiences
        </motion.p>
      </section>

      <section className="about-intro py-16 px-4 bg-light-gray">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            About <span className="text-teal-500">TravelTide</span>
          </motion.h2>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            TravelTide is your trusted travel companion, dedicated to crafting
            unforgettable journeys tailored just for you. From curated tours 
            and thrilling activities to comfortable stays, we bring your dream 
            vacations to life—effortlessly and seamlessly.
          </motion.p>
        </motion.div>
      </section>

      <section className="our-mission py-16">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Our <span className="text-teal-500">Mission</span>
          </motion.h2>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Our Mission
            At TravelTide, we're committed to making travel effortless and inspiring. 
            Our goal is to provide smooth, reliable booking experiences backed by exceptional
            customer support and unbeatable deals—so you can explore the world 
            with confidence and ease.
          </motion.p>
        </motion.div>
      </section>

      <section className="why-choose-us py-16 bg-light-gray">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Why Choose <span className="text-teal-500">Us?</span>
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                img: service,
                title: "Professional Service",
                desc: "We offer expert assistance and personalized guidance to ensure your trip is perfectly planned.",
              },
               {
                img: affordable,
                title: "Affordable Prices",
                desc: "We ensure our customers get the best value for their money, offering competitive rates for every trip.",
              },
              {
                img : Uniqueloc,
                title: "Unique Destinations",
                desc: "We curate exclusive travel packages to unique destinations across the world, ensuring a one-of-a-kind experience.",
              },
             
            ].map((item, index) => (
              <motion.div
                key={index}
                className="w-full md:w-1/3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.3, duration: 0.8 }}
              >
                <img
                  className="rounded-lg mb-4"
                  src={item.img}
                  alt={item.title}
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="our-team py-16 bg-white/20">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Meet Our <span className="text-teal-500">Team</span>
          </motion.h2>
          <p className="text-lg mb-8">
            Our team is dedicated to making your travel experiences
            unforgettable. We are experts in travel planning and passionate
            about helping you discover the best destinations.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                img: rahulImage,
                name: "Rahul Seju",
                title: "Database Engineer",
              },
              {
                img: abhiramImage,
                name: "Abhiram Jayasankar",
                title: "Frontend Developer",
              },
              {
                img: nayantaraImage,
                name: "Nayantara Nair",
                title: "Frontend Developer",
              },
              {
                img: kousikImage,
                name: "Koushik",
                title: "Backend Engineer",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="team-member w-1/3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.3, duration: 0.8 }}
              >
                <img
                  className="rounded-full mb-4"
                  src={item.img}
                  alt={item.name}
                  style={{ width: '600px', height: '300px', objectFit: 'cover' }}
                />
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p>{item.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="contact-info py-16 bg-light-gray text-center">
        <motion.div
          className="container mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Get in <span className="text-teal-500">Touch</span>
          </motion.h2>
          <p className="text-lg mb-4">
            Have any questions or need help with your booking? We're here to
            assist you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="w-8 h-8 mb-4" />,
                title: "Email",
                content: "contact@TravelTide.com",
              },
              {
                icon: <Phone className="w-8 h-8 mb-4" />,
                title: "Phone",
                content: "+91-9130045670",
              },
              {
                icon: <MapPin className="w-8 h-8 mb-4" />,
                title: "Address",
                content: "Vellore, Tamil Nadu",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.content}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="mailto:contact@TravelTide.com"
              className="inline-block px-8 py-3 bg-white text-teal-500 rounded-full font-semibold hover:bg-teal-100 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
