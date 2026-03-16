'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  iconName: string;
  trend: 'up' | 'down';
}

export default function StatsCard({ title, value, change, iconName, trend }: StatsCardProps) {
  const Icon = (Icons as any)[iconName] || Icons.Bot;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-text-secondary text-sm">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
          <p className={`text-sm mt-2 ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </p>
        </div>
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </motion.div>
  );
}
