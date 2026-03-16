const auditLogs = [
  {
    id: '1',
    timestamp: '2026-03-17 10:30:25',
    user: '张伟',
    action: '创建智能体',
    resource: 'ESG 评分系统',
    status: 'success',
    ip: '192.168.1.100',
  },
  {
    id: '2',
    timestamp: '2026-03-17 09:15:42',
    user: '李娜',
    action: '修改权限',
    resource: '研究员角色',
    status: 'success',
    ip: '192.168.1.101',
  },
  {
    id: '3',
    timestamp: '2026-03-17 08:45:10',
    user: '王强',
    action: '删除用户',
    resource: '陈明',
    status: 'failed',
    ip: '192.168.1.102',
  },
  {
    id: '4',
    timestamp: '2026-03-16 16:30:00',
    user: '张伟',
    action: '系统配置',
    resource: '安全设置',
    status: 'success',
    ip: '192.168.1.100',
  },
];

export default function AuditPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">审计日志</h1>
        <p className="text-text-secondary mt-1">查看系统操作记录和安全审计</p>
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center gap-4 mb-6">
          <input
            type="date"
            className="px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
          />
          <select className="px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary">
            <option>全部操作</option>
            <option>创建</option>
            <option>修改</option>
            <option>删除</option>
          </select>
          <select className="px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary">
            <option>全部状态</option>
            <option>成功</option>
            <option>失败</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">
                  时间
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">
                  用户
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">
                  操作
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">
                  资源
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">
                  状态
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">
                  IP 地址
                </th>
              </tr>
            </thead>
            <tbody>
              {auditLogs.map((log) => (
                <tr key={log.id} className="border-b border-border last:border-0">
                  <td className="py-3 px-4 text-sm">{log.timestamp}</td>
                  <td className="py-3 px-4 text-sm">{log.user}</td>
                  <td className="py-3 px-4 text-sm">{log.action}</td>
                  <td className="py-3 px-4 text-sm">{log.resource}</td>
                  <td className="py-3 px-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        log.status === 'success'
                          ? 'bg-green-500/10 text-green-500'
                          : 'bg-red-500/10 text-red-500'
                      }`}
                    >
                      {log.status === 'success' ? '成功' : '失败'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-text-secondary">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
