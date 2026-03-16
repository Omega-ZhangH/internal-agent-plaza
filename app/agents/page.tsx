'use client';

import { useState } from 'react';
import { agents } from '@/lib/data/agents';
import AgentGrid from '@/components/agents/AgentGrid';
import CategoryFilter from '@/components/agents/CategoryFilter';
import SearchBar from '@/components/agents/SearchBar';
import { AgentCategory } from '@/lib/types';

export default function AgentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<AgentCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAgents = agents.filter((agent) => {
    const matchesCategory = selectedCategory === 'all' || agent.category === selectedCategory;
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">智能体工厂</h1>
        <p className="text-text-secondary mt-1">
          共 {agents.length} 个智能体，覆盖 7 大业务场景
        </p>
      </div>

      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
      <AgentGrid agents={filteredAgents} />
    </div>
  );
}
