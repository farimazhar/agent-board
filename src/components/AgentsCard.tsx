import { Agent } from "@/lib/types";

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="border rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{agent.name}</h3>
        <span className={`text-[11px] px-2.5 py-1 rounded-full font-medium ${agent.status === 'working'? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>{agent.status}</span>
      </div>
      <p className="text-sm text-gray-500 mt-2">{agent.role}</p>
      <p className="text-xs text-gray-400 mt-4">{agent.tasks} tasks active</p>
    </div>
  );
}
