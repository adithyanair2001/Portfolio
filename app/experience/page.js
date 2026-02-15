import { experience } from "@/data/experience";

export default function Experience(){
  return (
    <div className="pt-28 space-y-10">
      <h2 className="text-3xl font-semibold">Experience</h2>

      <div className="space-y-8">
        {experience.map((job,i)=>(
          <div key={i}
            className="bg-white/5 p-6 rounded-xl border border-white/10">

            <p className="text-gray-400 text-sm">{job.period}</p>

            <h3 className="text-xl font-medium">{job.role}</h3>

            <p className="text-gray-300 mb-3">{job.company}</p>

            <ul className="list-disc ml-6 text-gray-400 space-y-1">
              {job.details.map((d,idx)=><li key={idx}>{d}</li>)}
            </ul>

          </div>
        ))}
      </div>
    </div>
  );
}
