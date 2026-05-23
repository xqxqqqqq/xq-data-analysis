with open('/workspace/src/pages/BeginnerGuide.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 修复多余的 }
content = content.replace('`}]}', '`}]}')

with open('/workspace/src/pages/BeginnerGuide.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("修复完成！")
