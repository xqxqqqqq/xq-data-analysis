import re

# 读取项目时长配置
durations = [
    "30分钟",  # 1
    "30分钟",  # 2
    "45分钟",  # 3
    "45分钟",  # 4
    "45分钟",  # 5
    "45分钟",  # 6
    "45分钟",  # 7
    "60分钟",  # 8
    "60分钟",  # 9
    "60分钟",  # 10
]

with open('/workspace/src/data/projects.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到所有 overview 后添加 duration
result = content
current_id = 0

def add_duration(match):
    global current_id
    if current_id < len(durations):
        duration = durations[current_id]
        current_id += 1
        return match.group(1) + f'\n    duration: "{duration}",'
    return match.group(0)

# 查找模式：找到 overview: "...",
result = re.sub(
    r'(overview: "[^"]*",)',
    add_duration,
    result
)

with open('/workspace/src/data/projects.ts', 'w', encoding='utf-8') as f:
    f.write(result)

print(f"成功添加了 {current_id} 个 duration 字段！")
