import { RolePermission } from '../types';

export const rolePermissions: RolePermission[] = [
  {
    role: '管理员',
    permissions: {
      '智能体工厂': ['view', 'use', 'manage', 'admin'],
      '用户管理': ['view', 'use', 'manage', 'admin'],
      '权限管理': ['view', 'use', 'manage', 'admin'],
      '系统设置': ['view', 'use', 'manage', 'admin'],
      '审计日志': ['view', 'use', 'manage', 'admin'],
    },
  },
  {
    role: '研究员',
    permissions: {
      '智能体工厂': ['view', 'use', 'manage'],
      '用户管理': ['view'],
      '权限管理': ['view'],
      '系统设置': ['view'],
      '审计日志': ['view'],
    },
  },
  {
    role: '分析师',
    permissions: {
      '智能体工厂': ['view', 'use'],
      '用户管理': ['view'],
      '权限管理': [],
      '系统设置': [],
      '审计日志': [],
    },
  },
  {
    role: '普通用户',
    permissions: {
      '智能体工厂': ['view'],
      '用户管理': [],
      '权限管理': [],
      '系统设置': [],
      '审计日志': [],
    },
  },
];
