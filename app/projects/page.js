"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const languageColors = {
  Python: "bg-yellow-400",
  JavaScript: "bg-yellow-300",
  Java: "bg-red-400",
  TypeScript: "bg-blue-400",
  HTML: "bg-orange-400",
  CSS: "bg-blue-300",
};

export default function Projects(){
  const [repos,setRepos]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    async function load(){
      try{

        // ⭐ STARRED REPOS
        const starred = await fetch(
          "https://api.github.com/users/adithyanair2001/starred"
        ).then(r=>r.json());

        // 📌 USER REPOS (for pinned approximation: recently updated)
        const own = await fetch(
          "https://api.github.com/users/adithyanair2001/repos?sort=updated"
        ).then(r=>r.json());

        // take top 3 recent as "featured"
        const featured = own.slice(0,3);

        // merge without duplicates
        const merged = [
          ...featured,
          ...starred.filter(s=>!featured.find(f=>f.id===s.id))
        ];

        setRepos(merged);
      }catch(e){
        console.error(e);
      }
      setLoading(false);
    }

    load();
  },[]);

  return (
    <div className="pt-28">
      <h2 className="text-3xl font-semibold mb-10">Featured GitHub Projects</h2>

      {loading && (
        <p className="text-gray-400">Loading projects...</p>
      )}

      <div className="grid md:grid-cols-2 gap-6">

        {repos.map(repo=>{

          const langColor =
            languageColors[repo.language] || "bg-gray-400";

          return (
            <motion.a
              whileHover={{scale:1.03}}
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-white/10 to-white/0
              border border-white/10 p-6 rounded-xl block
              hover:border-white/30 transition"
            >

              {/* TITLE */}
              <h3 className="text-xl font-medium">{repo.name}</h3>

              {/* DESC */}
              <p className="text-gray-400 mt-2">
                {repo.description || "No description provided"}
              </p>

              {/* STATS */}
              <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">

                <span>⭐ {repo.stargazers_count}</span>

                <span>🍴 {repo.forks_count}</span>

                {repo.language && (
                  <span className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${langColor}`}></span>
                    {repo.language}
                  </span>
                )}

              </div>

            </motion.a>
          );
        })}

      </div>
    </div>
  );
}
