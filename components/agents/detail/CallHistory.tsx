const mockHistory = [
  {
    id: '1',
    timestamp: '2026-03-17 10:30:25',
    user: '张伟',
    duration: 2.3,
    status: 'success' as const,
    tokenUsage: 1250,
  },
  {
    id: '2',
    timestamp: '2026-03-17 09:15:42',
    user: '李娜',
    duration: 1.8,
    status: 'success' as const,
    tokenUsage: 980,
  },
  {
    id: '3',
    timestamp: '2026-03-16 16:45:10',
    user: '王强',
    duration: 3.1,
    status: 'failed' as const,
    tokenUsage: 0,
  },
];

export default function CallHistory({ agentId }: { agentId: string }) {
  return (
    <div className="bg-card border border-border rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">调用历史</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">时间</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">用户</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">耗时</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">状态</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">Token</th>
            </tr>
          </thead>
          <tbody>
            {mockHistory.map((record) => (
              <tr key={record.id} className="border-b border-border last:border-0">
                <td className="py-3 px-4 text-sm">{record.timestamp}</td>
                <td className="py-3 px-4 text-sm">{record.user}</td>
                <td className="py-3 px-4 text-sm">{record.duration}s</td>
                <td className="py-3 px-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      record.status === 'success'
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-red-500/10 text-red-500'
                    }`}
                  >
                    {record.status === 'success' ? '成功' : '失败'}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm">{record.tokenUsage.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
