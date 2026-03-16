'use client';

import { User } from '@/lib/types';
import Image from 'next/image';
import { MoreVertical } from 'lucide-react';

interface UserTableProps {
  users: User[];
}

const roleColors = {
  '管理员': 'bg-red-500/10 text-red-500',
  '研究员': 'bg-blue-500/10 text-blue-500',
  '分析师': 'bg-purple-500/10 text-purple-500',
  '普通用户': 'bg-gray-500/10 text-gray-500',
};

export default function UserTable({ users }: UserTableProps) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-background">
            <tr className="border-b border-border">
              <th className="text-left py-4 px-6 text-sm font-medium text-text-secondary">用户</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-text-secondary">邮箱</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-text-secondary">部门</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-text-secondary">角色</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-text-secondary">状态</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-text-secondary">
                最后登录
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium text-text-secondary">操作</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-border last:border-0">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 relative rounded-full overflow-hidden bg-primary/10">
                      <Image
                        src={user.avatar}
                        alt={user.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-text-secondary">{user.email}</td>
                <td className="py-4 px-6 text-sm">{user.department}</td>
                <td className="py-4 px-6">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${roleColors[user.role]}`}>
                    {user.role}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      user.status === 'active'
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-gray-500/10 text-gray-500'
                    }`}
                  >
                    {user.status === 'active' ? '活跃' : '停用'}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-text-secondary">{user.lastLogin}</td>
                <td className="py-4 px-6">
                  <button className="p-2 hover:bg-background rounded-lg transition-colors">
                    <MoreVertical className="w-4 h-4 text-text-secondary" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
