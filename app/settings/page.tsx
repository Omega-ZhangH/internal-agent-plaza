export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">系统设置</h1>
        <p className="text-text-secondary mt-1">配置系统参数和偏好设置</p>
      </div>

      <div className="bg-card border border-border rounded-xl p-8">
        <h2 className="text-xl font-bold mb-6">基础设置</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">平台名称</label>
            <input
              type="text"
              defaultValue="金融企业智能体广场"
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">系统语言</label>
            <select className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary">
              <option>简体中文</option>
              <option>English</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">时区</label>
            <select className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary">
              <option>Asia/Shanghai (UTC+8)</option>
              <option>America/New_York (UTC-5)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-8">
        <h2 className="text-xl font-bold mb-6">安全设置</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">启用双因素认证</div>
              <div className="text-sm text-text-secondary">增强账户安全性</div>
            </div>
            <input type="checkbox" className="w-5 h-5" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">会话超时</div>
              <div className="text-sm text-text-secondary">30 分钟无操作自动登出</div>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button className="px-6 py-2 border border-border rounded-lg hover:bg-background transition-colors">
          取消
        </button>
        <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          保存设置
        </button>
      </div>
    </div>
  );
}
