import React from "react";

import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { Link } from "react-router-dom";
import MemberCard from "../../components/AboutPage/MemberCard/MemberCard";
import aditya from "../../../public/images/Aditya.jpg";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Aditya Kumar Sahu",
      designation: "Full Stack Developer",
      image: aditya,
      /* linkedin: "https://www.linkedin.com/in/aditya--sahu89/", */
    },
    {
      name: "Himanshu Maurya",
      designation: "Digital Marketing Executive",
      image: "https://i.postimg.cc/9fCX4GC4/John-Smiths.jpg",
    },
  ];

  return (
    <div className="relative">
      <div className="container mx-auto px-4 py-12">
        {/* Our Story */}
        <section className="text-left mb-12 font-cat px-4">
          <h2 className="text-4xl font-dosis font-bold mb-4">Our Story</h2>
          <div className="flex flex-col-reverse lg:flex-row gap-x-1">
            <div className="text-md text-justify w-full lg:w-3/5 flex justify-start items-start pt-4">
              <div className="ring-2 ring-black rounded-md p-2">
                <div className="flex justify-start">
                  <RiDoubleQuotesL className="text-[20px]" />
                </div>
                <p className="p-6 text-[14px]">
                  Welcome to Cord & Brushes – where creativity comes to life
                  through color, canvas, and community. <br />
                  We are a passionate art studio dedicated to inspiring
                  creativity in people of all ages and skill levels. Whether
                  you're picking up a brush for the first time or looking to
                  refine your technique, our classes and workshops are designed
                  to spark imagination and build confidence. Founded by artists,
                  for artists, Cord & Brushes offers a warm, welcoming space to
                  explore your artistic journey. From painting and drawing to
                  mixed media and themed workshops, our sessions are guided by
                  experienced instructors who believe that art is for everyone.{" "}
                  <br />
                  <br />
                  🎨 Art Classes – Weekly sessions for kids, teens, and adults
                  covering foundational skills and creative techniques. <br />
                  🖌 Workshops – Themed, one-day experiences where you can
                  explore new mediums or create something beautiful in a relaxed
                  setting.
                  <br /> 👩‍🎨 Private Sessions & Events – Custom art events for
                  birthdays, team-building, or personal coaching.
                  <br /> 🖼 Original Artwork – Explore and purchase unique pieces
                  created by our in-house artists. <br />
                  <br />
                  At Cord & Brushes, we believe art is more than just a
                  skill—it's a way to express, connect, and grow. Whether you're
                  here to learn, create, or simply get inspired, you'll find a
                  supportive space where creativity is always encouraged.
                </p>
                <div className="flex justify-end">
                  <RiDoubleQuotesR className="text-[20px]" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/5 pl-10 p-6 flex justify-center items-center">
              <img
                src="https://i.postimg.cc/25hJHbb0/annie-spratt-Tywjk-DHf0-Ps-unsplash.jpg"
                className="rounded-md h-full w-full"
              />
            </div>
          </div>
        </section>
        {/* Our Founder */}
        <section className="text-left mb-12 font-cat px-4">
          <h2 className="text-4xl font-dosis font-bold mb-4">Our Leaders</h2>
          <div className="flex flex-col-reverse lg:flex-row-reverse gap-x-2">
            <div className="text-md text-justify w-full lg:w-3/5 flex flex-col justify-start items-start pt-4">
              <div className="ring-2 ring-black rounded-md p-2">
                <h1 className="text-2xl pl-2 font-dosis font-semibold">
                  Kalpana Mahanti
                </h1>
                <h3 className="text-gray-400 pl-2 font-dosis font-medium">
                  Founder & Lead Artist
                </h3>

                <div>
                  <div className="flex justify-start">
                    <RiDoubleQuotesL className="text-[20px]" />
                  </div>
                  <p className="p-6 text-[14px]">
                    Greetings,
                    <br />
                    <br /> I'm Kalpana Mahanti, an Artist/Art instructor and the
                    Founder of Cord & Brushes. Despite starting my career in
                    software engineering after completing my B.Tech, my passion
                    for art has always been present since childhood. Though I
                    had to set it aside for studies and work, the pandemic
                    provided me with the opportunity to reconnect with my
                    artistic side while working from home.
                    <br />
                    <br />
                    During the lockdown, with limited art supplies, I resorted
                    to basic DIY projects, reigniting my love for art. In
                    September 2022, I took the leap, leaving my IT job to
                    establish Cord & Brushes, a virtual venture on social media,
                    alongside my brother Abhishek Mahanti (Co-Founder of Cord &
                    Brushes). The response has been overwhelming, allowing us to
                    offer workshops on various art forms at affordable prices,
                    making art education accessible to all.
                    <br />
                    <br />
                    Our mission is simple: to provide quality art education to
                    everyone, ensuring that anyone with a desire to learn can
                    pursue their passion without financial constraints.
                    <br />
                    <br /> I owe this achievement to the unwavering support of
                    Abhishek Mahanti (Brother), Sanjib Mahapatra (Husband),
                    Parents, Friends, and Family, whose love and encouragement
                    have been constant pillars of strength.
                    <br />
                    <br />
                    Warm Regards,
                    <br />
                    Artist/Art Instructor Founder
                  </p>
                  <div className="flex justify-end">
                    <RiDoubleQuotesR className="text-[20px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/5 pl-0 p-0 lg:p-4">
              <div className="cards flex justify-center items-center">
                <img
                  src="./images/kalpana.jpg"
                  alt="3D Hover"
                  className="border-5 rounded-md"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Our Co-Founder */}
        <section className="text-left mb-12 font-cat px-4">
          <h2 className="text-4xl font-dosis font-bold mb-4"></h2>
          <div className="flex flex-col-reverse lg:flex-row gap-x-2">
            <div className="text-md text-justify w-full lg:w-3/5 flex flex-col justify-start items-start pt-4">
              <div className="ring-2 ring-black rounded-md p-2">
                <h1 className="text-2xl pl-2 font-dosis font-semibold">
                  Abhishek Mahanti
                </h1>
                <h2 className="pl-2 font-dosis text-gray-400 font-medium">
                  Director and CEO{" "}
                </h2>

                <div>
                  <div className="flex justify-start">
                    <RiDoubleQuotesL className="text-[20px]" />
                  </div>
                  <p className="p-6 text-[14px]">
                    Greetings,
                    <br />
                    <br /> I'm Kalpana Mahanti, an Artist/Art instructor and the
                    Founder of Cord & Brushes. Despite starting my career in
                    software engineering after completing my B.Tech, my passion
                    for art has always been present since childhood. Though I
                    had to set it aside for studies and work, the pandemic
                    provided me with the opportunity to reconnect with my
                    artistic side while working from home.
                    <br />
                    <br />
                    During the lockdown, with limited art supplies, I resorted
                    to basic DIY projects, reigniting my love for art. In
                    September 2022, I took the leap, leaving my IT job to
                    establish Cord & Brushes, a virtual venture on social media,
                    alongside my brother Abhishek Mahanti (Co-Founder of Cord &
                    Brushes). The response has been overwhelming, allowing us to
                    offer workshops on various art forms at affordable prices,
                    making art education accessible to all.
                    <br />
                    <br />
                    Our mission is simple: to provide quality art education to
                    everyone, ensuring that anyone with a desire to learn can
                    pursue their passion without financial constraints. I owe
                    this achievement to the unwavering support of Abhishek
                    Mahanti (Brother), Sanjib Mahapatra (Husband), Parents,
                    Friends, and Family, whose love and encouragement have been
                    constant pillars of strength.
                    <br />
                    <br />
                    Warm Regards,
                    <br />
                    Artist/Art Instructor Founder
                  </p>
                  <div className="flex justify-end">
                    <RiDoubleQuotesR className="text-[20px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/5 pl-0 p-0 lg:p-4">
              <div className="cards flex justify-center items-center">
                <img
                  src="./images/abhishek.jpg"
                  alt="3D Hover"
                  className="w-10/12 object-cover border-5 rounded-md"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Our Team */}
        <div className="items-center lg:justify-none">
          <h2 className="text-left font-dosis text-4xl font-bold mb-4 pb-4 p-4">
            Our Team
          </h2>
          <div className="flex flex-col justify-center items-center lg:justify-none">
            <section className="grid grid-cols-1 justify-center items-center sm:grid-cols-2 sm:gap-16 md:grid-cols-2 lg:grid-cols-4 gap-y-16 md:gap-x-20 lg:gap-x-20 p-4 sm:p-8 md:p-12 lg:p-20 max-w-full">
              {teamMembers.map((member) => (
                <MemberCard
                  image={member.image}
                  name={member.name}
                  designation={member.designation}
                />
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
