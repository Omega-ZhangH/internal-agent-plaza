'use client';

import { useState } from 'react';
import { rolePermissions } from '@/lib/data/permissions';
import RoleList from '@/components/permissions/RoleList';
import PermissionMatrix from '@/components/permissions/PermissionMatrix';
import { UserRole } from '@/lib/types';

export default function PermissionsPage() {
  const [selectedRole, setSelectedRole] = useState<UserRole>('管理员');

  const roleData = rolePermissions.find((r) => r.role === selectedRole);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">权限管理</h1>
        <p className="text-text-secondary mt-1">管理不同角色的系统权限</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <RoleList selected={selectedRole} onSelect={setSelectedRole} />
        </div>
        <div className="lg:col-span-3">
          {roleData && <PermissionMatrix roleData={roleData} />}
        </div>
      </div>
    </div>
  );
}
