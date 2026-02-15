"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home(){
  return (
    <div className="pt-28 min-h-screen flex items-center">

      <div className="grid md:grid-cols-2 gap-12 items-center w-full">

        {/* PROFILE IMAGE WITH GLOW */}
        <motion.div
          initial={{opacity:0,scale:0.8}}
          animate={{opacity:1,scale:1}}
          transition={{duration:0.6}}
          className="relative flex justify-center"
        >
          <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

          <div className="relative w-56 h-56 md:w-72 md:h-72">
            <Image
              src="/profile.jpg"
              alt="Adithya Nair"
              fill
              className="rounded-full object-cover border-4 border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>

        {/* TEXT */}
        <div>

          <motion.p
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            className="text-blue-400 font-medium mb-3"
          >
            OPEN TO OPPORTUNITIES
          </motion.p>

          <motion.h1
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Adithya Nair
          </motion.h1>

          <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.2}}
            className="mt-4 text-xl text-gray-300 max-w-xl"
          >
            Software Developer at IBM | Python | Cloud | DevSecOps | Kubernetes | Terraform
          </motion.p>

          <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.3}}
            className="mt-6 text-gray-400 max-w-xl"
          >
            Building scalable cloud infrastructure, automation frameworks,
            and secure enterprise API systems.
          </motion.p>

          {/* SOCIAL BUTTONS */}
          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.4}}
            className="flex gap-4 mt-6"
          >
            <a
              href="https://github.com/adithyanair2001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-lg hover:scale-105 transition"
            >
              <FaGithub/> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/adithya-nair-685888189/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/30 px-5 py-2 rounded-lg hover:bg-white/10 transition"
            >
              <FaLinkedin/> LinkedIn
            </a>
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.5}}
            className="flex gap-4 mt-8"
          >
            <Link
              href="/projects"
              className="bg-blue-500 px-7 py-3 rounded-xl font-medium hover:scale-105 transition"
            >
              View Projects
            </Link>

            <a
              href="/resume.pdf"
              download
              className="border border-white/30 px-7 py-3 rounded-xl hover:bg-white/10 transition"
            >
              Download Resume
            </a>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
