import json
import re

# 读取项目文件
with open('/workspace/src/data/projects.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 简单解析查找所有项目标题
import re

# 查找所有 id 和 title
id_pattern = re.compile(r'"id":\s*(\d+)')
title_pattern = re.compile(r'"title":\s*"([^"]+)"')

ids = id_pattern.findall(content)
titles = title_pattern.findall(content)

print("=== 当前10个项目列表 ===")
for i, (pid, title) in enumerate(zip(ids, titles), 1):
    print(f"{i}. 项目{pid}: {title}")
