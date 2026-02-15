"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar(){
  return (
    <motion.header
      initial={{y:-80,opacity:0}}
      animate={{y:0,opacity:1}}
      className="fixed w-full top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-semibold tracking-wide">Adithya Nair</h1>

        <nav className="flex gap-6 text-sm text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </motion.header>
  );
}