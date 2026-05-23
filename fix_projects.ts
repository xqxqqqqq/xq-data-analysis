import json

# 读取并检查文件
with open('/workspace/src/data/projects.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到最后一行，修复它
if content.endswith('"]\\n  }\\n]\\n'):
    content = content[:-11]  # 移除末尾的冗余内容
    # 添加正确的结尾
    content += '"'

# 确保最后是正确的格式
if not content.endswith('}]'):
    # 找到最后一个 }] 的位置
    end_pos = content.rfind('}]')
    if end_pos != -1:
        content = content[:end_pos+2]

with open('/workspace/src/data/projects.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("File fixed!")
