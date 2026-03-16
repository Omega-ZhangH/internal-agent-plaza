#!/bin/bash

echo "==================================="
echo "金融企业智能体广场平台 - 验证测试"
echo "==================================="
echo ""

# 测试所有路由
routes=(
  "/"
  "/dashboard"
  "/agents"
  "/agents/research-001"
  "/permissions"
  "/users"
  "/settings"
  "/audit"
)

echo "测试所有路由..."
echo ""

for route in "${routes[@]}"; do
  status=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000$route")
  if [ "$status" = "200" ] || [ "$status" = "307" ]; then
    echo "✓ $route - $status"
  else
    echo "✗ $route - $status"
  fi
done

echo ""
echo "==================================="
echo "验证完成！"
echo "==================================="
echo ""
echo "访问 http://localhost:3000 查看应用"
echo ""
