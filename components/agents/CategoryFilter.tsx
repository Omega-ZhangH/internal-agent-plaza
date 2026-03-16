'use client';

import { AgentCategory } from '@/lib/types';

const categories: Array<{ value: AgentCategory | 'all'; label: string }> = [
  { value: 'all', label: '全部' },
  { value: '研究分析', label: '研究分析' },
  { value: '风险管理', label: '风险管理' },
  { value: '合规审查', label: '合规审查' },
  { value: '投资决策', label: '投资决策' },
  { value: '客户服务', label: '客户服务' },
  { value: '数据处理', label: '数据处理' },
  { value: '报告生成', label: '报告生成' },
];

interface CategoryFilterProps {
  selected: AgentCategory | 'all';
  onSelect: (category: AgentCategory | 'all') => void;
}

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onSelect(category.value)}
          className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
            selected === category.value
              ? 'bg-primary text-white'
              : 'bg-card text-text-secondary hover:bg-background'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
