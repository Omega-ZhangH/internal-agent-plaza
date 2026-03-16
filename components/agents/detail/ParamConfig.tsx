'use client';

import { AgentParam } from '@/lib/types';

interface ParamConfigProps {
  params: AgentParam[];
}

export default function ParamConfig({ params }: ParamConfigProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">参数配置</h2>
      <div className="space-y-4">
        {params.map((param) => (
          <div key={param.name} className="space-y-2">
            <label className="block text-sm font-medium">
              {param.label}
              {param.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            {param.type === 'file' && (
              <input
                type="file"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
              />
            )}
            {param.type === 'select' && (
              <select className="w-full px-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary">
                <option value="">请选择</option>
                {param.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            {param.type === 'text' && (
              <input
                type="text"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
              />
            )}
            {param.type === 'number' && (
              <input
                type="number"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-primary"
              />
            )}
          </div>
        ))}
        <button className="w-full mt-6 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
          执行智能体
        </button>
      </div>
    </div>
  );
}
