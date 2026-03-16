'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface WorkflowVisualProps {
  workflow: {
    steps: Array<{
      id: string;
      name: string;
      description: string;
      type: 'input' | 'process' | 'output';
    }>;
  };
}

const typeColors = {
  input: 'bg-blue-500/10 border-blue-500',
  process: 'bg-purple-500/10 border-purple-500',
  output: 'bg-green-500/10 border-green-500',
};

export default function WorkflowVisual({ workflow }: WorkflowVisualProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">工作流程</h2>
      <div className="flex items-center gap-4 overflow-x-auto pb-4">
        {workflow.steps.map((step, index) => (
          <div key={step.id} className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className={`flex-shrink-0 w-64 p-6 rounded-xl border-2 ${typeColors[step.type]}`}
            >
              <div className="text-sm font-medium text-text-secondary mb-2">
                步骤 {index + 1}
              </div>
              <div className="text-lg font-bold mb-2">{step.name}</div>
              <div className="text-sm text-text-secondary">{step.description}</div>
            </motion.div>
            {index < workflow.steps.length - 1 && (
              <ArrowRight className="w-6 h-6 text-text-secondary flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
