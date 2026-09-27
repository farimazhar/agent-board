export type AgentStatus = "working" | "idle" | "offline";

export interface Agent {
  id: string;
  name: string;
  role: string;
  status: AgentStatus;
  tasks: number;
}
