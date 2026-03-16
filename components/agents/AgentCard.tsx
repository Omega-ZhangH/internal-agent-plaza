'use client';

import { Agent } from '@/lib/types';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import Badge from '@/components/ui/Badge';
import StatusDot from '@/components/ui/StatusDot';

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  const Icon = (Icons as any)[agent.icon] || Icons.Bot;

  return (
    <Link href={`/agents/${agent.id}`}>
      <div className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all group">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <StatusDot status={agent.status} />
        </div>

        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
          {agent.name}
        </h3>

        <p className="text-sm text-text-secondary line-clamp-2 mb-4">
          {agent.description}
        </p>

        <div className="flex items-center justify-between">
          <Badge category={agent.category} />
          <div className="text-right">
            <div className="text-sm font-medium">{agent.callCount.toLocaleString()}</div>
            <div className="text-xs text-text-secondary">调用</div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">成功率</span>
            <span className="font-medium text-green-500">{agent.successRate}%</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
