import { AgentStatus } from '@/lib/types';

const statusConfig: Record<AgentStatus, { color: string; label: string }> = {
  active: { color: 'bg-green-500', label: '运行中' },
  maintenance: { color: 'bg-yellow-500', label: '维护中' },
  beta: { color: 'bg-blue-500', label: '测试版' },
};

export default function StatusDot({ status }: { status: AgentStatus }) {
  const config = statusConfig[status];
  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${config.color}`}></div>
      <span className="text-xs text-text-secondary">{config.label}</span>
    </div>
  );
}
