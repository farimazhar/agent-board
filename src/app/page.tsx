"use client";
import { useState } from "react";
import { Agent } from "@/lib/types";
import { AgentCard } from "@/components/AgentCard";

const initialAgents: Agent[] = [
  { id: "1", name: "Research Agent", role: "Does deep research for you", status: "working", tasks: 3 },
  { id: "2", name: "Code Agent", role: "Writes and reviews TypeScript", status: "working", tasks: 5 },
  { id: "3", name: "Support Agent", role: "Replies to customer tickets", status: "idle", tasks: 0 },
];

export default function Home() {
  const [agents] = useState<Agent[]>(initialAgents);
  return (
    <main className="min-h-screen bg-[#fafafa] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight">agent-board</h1>
        <p className="text-gray-500 mt-3 text-lg">The open-source app everyone uses to manage agents at work.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {agents.map(a => <AgentCard key={a.id} agent={a} />)}
        </div>
      </div>
    </main>
  );
}
