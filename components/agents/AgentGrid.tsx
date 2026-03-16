'use client';

import { Agent } from '@/lib/types';
import AgentCard from './AgentCard';
import { motion } from 'framer-motion';

interface AgentGridProps {
  agents: Agent[];
}

export default function AgentGrid({ agents }: AgentGridProps) {
  if (agents.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary">未找到匹配的智能体</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {agents.map((agent, index) => (
        <motion.div
          key={agent.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <AgentCard agent={agent} />
        </motion.div>
      ))}
    </div>
  );
}
