'use client';

import { agents } from '@/lib/data/agents';
import { Clock } from 'lucide-react';
import Link from 'next/link';

export default function RecentAgents() {
  const recentAgents = agents.slice(0, 6);

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">最近使用</h2>
      <div className="space-y-3">
        {recentAgents.map((agent) => (
          <Link
            key={agent.id}
            href={`/agents/${agent.id}`}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-background transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">{agent.name}</div>
                <div className="text-sm text-text-secondary">{agent.category}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">{agent.callCount.toLocaleString()}</div>
              <div className="text-xs text-text-secondary">调用次数</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
