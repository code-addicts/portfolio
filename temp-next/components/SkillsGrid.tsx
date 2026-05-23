import { Code2, Server, Layout, Database, Zap } from "lucide-react";

const skills = [
  { name: "React.js", icon: <Layout className="text-indigo-400" size={28} /> },
  { name: "Node.js", icon: <Server className="text-orange-400" size={28} /> },
  { name: "Express.js", icon: <Server className="text-green-400" size={28} /> },
  { name: "MongoDB", icon: <Database className="text-emerald-400" size={28} /> },
  { name: "Tailwind CSS", icon: <Zap className="text-cyan-400" size={28} /> },
  { name: "Framer Motion", icon: <Zap className="text-pink-400" size={28} /> },
  { name: "TypeScript", icon: <Code2 className="text-blue-400" size={28} /> },
];

export default function SkillsGrid() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-zinc-200">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center p-4 bg-zinc-900/60 rounded-xl border border-zinc-800/50">
            {skill.icon}
            <span className="mt-2 text-zinc-100 text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
