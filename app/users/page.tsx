import { users } from '@/lib/data/users';
import UserTable from '@/components/users/UserTable';

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">用户管理</h1>
          <p className="text-text-secondary mt-1">管理平台用户和角色分配</p>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          添加用户
        </button>
      </div>

      <UserTable users={users} />
    </div>
  );
}
