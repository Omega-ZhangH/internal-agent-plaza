# 项目结构

```
internal-agent-plaza/
├── app/                                    # Next.js App Router
│   ├── layout.tsx                         # 根布局
│   ├── page.tsx                           # 首页（重定向）
│   ├── globals.css                        # 全局样式
│   ├── dashboard/
│   │   └── page.tsx                       # 仪表盘页面
│   ├── agents/
│   │   ├── page.tsx                       # 智能体列表页面
│   │   └── [id]/
│   │       └── page.tsx                   # 智能体详情页面
│   ├── permissions/
│   │   └── page.tsx                       # 权限管理页面
│   ├── users/
│   │   └── page.tsx                       # 用户管理页面
│   ├── settings/
│   │   └── page.tsx                       # 系统设置页面
│   └── audit/
│       └── page.tsx                       # 审计日志页面
│
├── components/                             # React 组件
│   ├── layout/                            # 布局组件
│   │   ├── AppShell.tsx                   # 整体布局容器
│   │   ├── Sidebar.tsx                    # 侧边栏
│   │   └── Topbar.tsx                     # 顶部栏
│   ├── dashboard/                         # 仪表盘组件
│   │   ├── StatsCard.tsx                  # 统计卡片
│   │   ├── RecentAgents.tsx               # 最近使用
│   │   └── Announcements.tsx              # 系统公告
│   ├── agents/                            # 智能体组件
│   │   ├── AgentCard.tsx                  # 智能体卡片
│   │   ├── AgentGrid.tsx                  # 卡片网格
│   │   ├── CategoryFilter.tsx             # 分类筛选
│   │   ├── SearchBar.tsx                  # 搜索栏
│   │   └── detail/                        # 详情页组件
│   │       ├── WorkflowVisual.tsx         # 工作流可视化
│   │       ├── ParamConfig.tsx            # 参数配置
│   │       ├── OutputPreview.tsx          # 输出预览
│   │       └── CallHistory.tsx            # 调用历史
│   ├── permissions/                       # 权限组件
│   │   ├── RoleList.tsx                   # 角色列表
│   │   └── PermissionMatrix.tsx           # 权限矩阵
│   ├── users/
│   │   └── UserTable.tsx                  # 用户表格
│   └── ui/                                # 通用 UI 组件
│       ├── Badge.tsx                      # 徽章
│       └── StatusDot.tsx                  # 状态点
│
├── lib/                                    # 工具和数据
│   ├── types.ts                           # TypeScript 类型定义
│   ├── utils.ts                           # 工具函数
│   └── data/                              # Mock 数据
│       ├── agents.ts                      # 54 个智能体数据
│       ├── users.ts                       # 用户数据
│       └── permissions.ts                 # 权限数据
│
├── public/                                 # 静态资源
├── node_modules/                          # 依赖包
├── .next/                                 # Next.js 构建输出
│
├── next.config.ts                         # Next.js 配置
├── tailwind.config.ts                     # Tailwind CSS 配置
├── postcss.config.js                      # PostCSS 配置
├── tsconfig.json                          # TypeScript 配置
├── package.json                           # 项目依赖
├── README.md                              # 项目说明
├── IMPLEMENTATION.md                      # 实现总结
├── PROJECT_STRUCTURE.md                   # 项目结构（本文件）
└── verify.sh                              # 验证脚本
```

## 关键文件说明

### 配置文件
- `next.config.ts`: Next.js 配置，包含图片域名白名单
- `tailwind.config.ts`: Tailwind CSS 配置，定义颜色主题
- `postcss.config.js`: PostCSS 配置，使用 @tailwindcss/postcss
- `tsconfig.json`: TypeScript 配置

### 数据文件
- `lib/data/agents.ts`: 54 个智能体的完整数据
- `lib/data/users.ts`: 5 个用户的 Mock 数据
- `lib/data/permissions.ts`: 4 个角色的权限配置

### 核心组件
- `components/layout/AppShell.tsx`: 整体布局，包含侧边栏和顶部栏
- `components/agents/AgentCard.tsx`: 智能体卡片，支持 hover 效果
- `components/agents/detail/WorkflowVisual.tsx`: 工作流三步可视化

## 路由映射

| URL | 文件路径 | 说明 |
|-----|---------|------|
| `/` | `app/page.tsx` | 重定向到 `/dashboard` |
| `/dashboard` | `app/dashboard/page.tsx` | 仪表盘 |
| `/agents` | `app/agents/page.tsx` | 智能体列表 |
| `/agents/[id]` | `app/agents/[id]/page.tsx` | 智能体详情 |
| `/permissions` | `app/permissions/page.tsx` | 权限管理 |
| `/users` | `app/users/page.tsx` | 用户管理 |
| `/settings` | `app/settings/page.tsx` | 系统设置 |
| `/audit` | `app/audit/page.tsx` | 审计日志 |
