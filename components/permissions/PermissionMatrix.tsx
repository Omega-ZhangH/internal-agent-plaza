'use client';

import { RolePermission, Permission } from '@/lib/types';
import { Check, X } from 'lucide-react';

interface PermissionMatrixProps {
  roleData: RolePermission;
}

const permissionLabels: Record<Permission, string> = {
  view: '查看',
  use: '使用',
  manage: '管理',
  admin: '超管',
};

export default function PermissionMatrix({ roleData }: PermissionMatrixProps) {
  const resources = Object.keys(roleData.permissions);
  const allPermissions: Permission[] = ['view', 'use', 'manage', 'admin'];

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">{roleData.role} - 权限矩阵</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">
                资源模块
              </th>
              {allPermissions.map((perm) => (
                <th
                  key={perm}
                  className="text-center py-3 px-4 text-sm font-medium text-text-secondary"
                >
                  {permissionLabels[perm]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {resources.map((resource) => (
              <tr key={resource} className="border-b border-border last:border-0">
                <td className="py-3 px-4 text-sm font-medium">{resource}</td>
                {allPermissions.map((perm) => {
                  const hasPermission = roleData.permissions[resource]?.includes(perm);
                  return (
                    <td key={perm} className="py-3 px-4 text-center">
                      {hasPermission ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-text-secondary/30 mx-auto" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
