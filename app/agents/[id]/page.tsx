import { agents } from '@/lib/data/agents';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import * as Icons from 'lucide-react';
import Badge from '@/components/ui/Badge';
import StatusDot from '@/components/ui/StatusDot';
import WorkflowVisual from '@/components/agents/detail/WorkflowVisual';
import ParamConfig from '@/components/agents/detail/ParamConfig';
import OutputPreview from '@/components/agents/detail/OutputPreview';
import CallHistory from '@/components/agents/detail/CallHistory';

export default async function AgentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const agent = agents.find((a) => a.id === id);

  if (!agent) {
    notFound();
  }

  const Icon = (Icons as any)[agent.icon] || Icons.Bot;

  return (
    <div className="space-y-6">
      <Link
        href="/agents"
        className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        返回智能体工厂
      </Link>

      <div className="bg-card border border-border rounded-xl p-8">
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Icon className="w-10 h-10 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold">{agent.name}</h1>
                <p className="text-text-secondary mt-2">{agent.description}</p>
              </div>
              <StatusDot status={agent.status} />
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Badge category={agent.category} />
              <div className="text-sm">
                <span className="text-text-secondary">调用次数：</span>
                <span className="font-medium">{agent.callCount.toLocaleString()}</span>
              </div>
              <div className="text-sm">
                <span className="text-text-secondary">成功率：</span>
                <span className="font-medium text-green-500">{agent.successRate}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {agent.workflow && <WorkflowVisual workflow={agent.workflow} />}
      {agent.params && <ParamConfig params={agent.params} />}
      {agent.outputExample && <OutputPreview output={agent.outputExample} />}
      <CallHistory agentId={agent.id} />
    </div>
  );
}
