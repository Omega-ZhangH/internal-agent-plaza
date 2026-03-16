import { AgentCategory } from '@/lib/types';

const categoryColors: Record<AgentCategory, string> = {
  '研究分析': 'bg-blue-500/10 text-blue-500',
  '风险管理': 'bg-red-500/10 text-red-500',
  '合规审查': 'bg-green-500/10 text-green-500',
  '投资决策': 'bg-purple-500/10 text-purple-500',
  '客户服务': 'bg-yellow-500/10 text-yellow-500',
  '数据处理': 'bg-cyan-500/10 text-cyan-500',
  '报告生成': 'bg-pink-500/10 text-pink-500',
};

export default function Badge({ category }: { category: AgentCategory }) {
  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${categoryColors[category]}`}>
      {category}
    </span>
  );
}
