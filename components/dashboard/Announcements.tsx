'use client';

import { Bell } from 'lucide-react';

const announcements = [
  {
    id: 1,
    title: '新增 3 个智能体',
    content: 'ESG 评分系统、另类数据挖掘等智能体已上线',
    time: '2 小时前',
  },
  {
    id: 2,
    title: '系统维护通知',
    content: '本周六凌晨 2:00-4:00 进行系统升级',
    time: '1 天前',
  },
  {
    id: 3,
    title: '权限更新',
    content: '研究员角色新增智能体管理权限',
    time: '3 天前',
  },
];

export default function Announcements() {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">系统公告</h2>
      <div className="space-y-4">
        {announcements.map((item) => (
          <div key={item.id} className="pb-4 border-b border-border last:border-0 last:pb-0">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bell className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-text-secondary mt-1">{item.content}</div>
                <div className="text-xs text-text-secondary mt-2">{item.time}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
