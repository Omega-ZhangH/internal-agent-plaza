// 智能体分类
export type AgentCategory =
  | '研究分析'
  | '风险管理'
  | '合规审查'
  | '投资决策'
  | '客户服务'
  | '数据处理'
  | '报告生成';

// 智能体状态
export type AgentStatus = 'active' | 'maintenance' | 'beta';

// 智能体接口
export interface Agent {
  id: string;
  name: string;
  description: string;
  category: AgentCategory;
  status: AgentStatus;
  icon: string;
  callCount: number;
  successRate: number;
  workflow?: {
    steps: WorkflowStep[];
  };
  params?: AgentParam[];
  outputExample?: string;
}

// 工作流步骤
export interface WorkflowStep {
  id: string;
  name: string;
  description: string;
  type: 'input' | 'process' | 'output';
}

// 智能体参数
export interface AgentParam {
  name: string;
  type: 'file' | 'select' | 'text' | 'number';
  label: string;
  options?: string[];
  required: boolean;
}

// 调用历史
export interface CallHistory {
  id: string;
  timestamp: string;
  user: string;
  duration: number;
  status: 'success' | 'failed';
  tokenUsage: number;
}

// 用户角色
export type UserRole = '管理员' | '研究员' | '分析师' | '普通用户';

// 用户接口
export interface User {
  id: string;
  name: string;
  email: string;
  department: string;
  role: UserRole;
  status: 'active' | 'inactive';
  avatar: string;
  lastLogin: string;
}

// 权限操作
export type Permission = 'view' | 'use' | 'manage' | 'admin';

// 角色权限
export interface RolePermission {
  role: UserRole;
  permissions: {
    [resource: string]: Permission[];
  };
}
