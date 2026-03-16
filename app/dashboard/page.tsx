import StatsCard from '@/components/dashboard/StatsCard';
import RecentAgents from '@/components/dashboard/RecentAgents';
import Announcements from '@/components/dashboard/Announcements';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">仪表盘</h1>
        <p className="text-text-secondary mt-1">欢迎回来，查看平台运行概况</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="智能体总数"
          value="54"
          change="+3"
          iconName="Bot"
          trend="up"
        />
        <StatsCard
          title="活跃用户"
          value="128"
          change="+12"
          iconName="Users"
          trend="up"
        />
        <StatsCard
          title="今日调用"
          value="3,247"
          change="+18%"
          iconName="Activity"
          trend="up"
        />
        <StatsCard
          title="平均成功率"
          value="96.8%"
          change="+0.5%"
          iconName="TrendingUp"
          trend="up"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentAgents />
        </div>
        <div>
          <Announcements />
        </div>
      </div>
    </div>
  );
}
