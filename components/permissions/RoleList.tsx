'use client';

import { UserRole } from '@/lib/types';
import { rolePermissions } from '@/lib/data/permissions';

interface RoleListProps {
  selected: UserRole;
  onSelect: (role: UserRole) => void;
}

export default function RoleList({ selected, onSelect }: RoleListProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">角色列表</h2>
      <div className="space-y-2">
        {rolePermissions.map((roleData) => (
          <button
            key={roleData.role}
            onClick={() => onSelect(roleData.role)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
              selected === roleData.role
                ? 'bg-primary text-white'
                : 'hover:bg-background text-text-secondary'
            }`}
          >
            {roleData.role}
          </button>
        ))}
      </div>
    </div>
  );
}
