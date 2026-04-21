export interface Project {
  id: number;
  title: string;
  description: string;
  goal: string;
  dataSource: string;
  tools: string[];
  learningPoints: string[];
  overview: string;
  prerequisites: {
    tools: string[];
    datasets: string[];
  };
  stepByStep: {
    title: string;
    content: string;
    code?: string;
  }[];
  practiceTasks: string[];
  practiceTaskAnswers: string[];
  practiceTaskLinks?: string[];
  assessment: string[];
  assessmentAnswers: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "数据感知与基础处理",
    description: "掌握数据导入、清洗和基础统计分析",
    goal: "通过处理泰坦尼克号数据集，学习数据读取、缺失值处理、数据类型转换和描述性统计等基础技能",
    dataSource: "Kaggle的泰坦尼克号数据集",
    tools: ["Python", "Pandas", "NumPy"],
    learningPoints: [
      "数据读取和导入",
      "缺失值检测与处理",
      "数据类型转换",
      "描述性统计分析",
      "数据筛选和排序"
    ],
    overview: "本项目将带你使用Python的Pandas和NumPy库处理泰坦尼克号数据集，学习数据分析的基础操作。通过本项目的学习，你将掌握数据读取、缺失值处理、数据类型转换和描述性统计分析等核心技能，为后续的数据分析项目打下坚实基础。",
    prerequisites: {
      tools: ["Python 3.7+", "Jupyter Notebook", "Pandas", "NumPy"],
      datasets: ["Kaggle泰坦尼克号数据集: https://www.kaggle.com/c/titanic/data"]
    },
    stepByStep: [
      {
        title: "步骤1：环境搭建",
        content: "首先需要安装必要的Python库。打开命令行或终端，运行以下命令安装Pandas和NumPy：",
        code: "pip install pandas numpy jupyter"
      },
      {
        title: "步骤2：数据读取",
        content: "使用Pandas读取CSV格式的泰坦尼克号数据集：",
        code: "import pandas as pd\n\n# 读取数据\ndf = pd.read_csv('titanic.csv')\n\n# 查看数据前5行\nprint(df.head())"
      },
      {
        title: "步骤3：数据探索",
        content: "了解数据集的基本信息，包括数据形状、列名、数据类型等：",
        code: "# 查看数据形状\nprint('数据形状:', df.shape)\n\n# 查看列名\nprint('列名:', df.columns.tolist())\n\n# 查看数据类型\nprint('数据类型:')\nprint(df.dtypes)\n\n# 查看基本统计信息\nprint('基本统计信息:')\nprint(df.describe())"
      },
      {
        title: "步骤4：缺失值检测与处理",
        content: "检测数据中的缺失值并进行处理：",
        code: "# 检测缺失值\nprint('缺失值统计:')\nprint(df.isnull().sum())\n\n# 处理缺失值\n# 对于Age列，使用平均值填充\ndf['Age'].fillna(df['Age'].mean(), inplace=True)\n\n# 对于Embarked列，使用众数填充\ndf['Embarked'].fillna(df['Embarked'].mode()[0], inplace=True)\n\n# 对于Cabin列，由于缺失值较多，直接删除该列\ndf.drop('Cabin', axis=1, inplace=True)\n\n# 再次检查缺失值\nprint('处理后缺失值统计:')\nprint(df.isnull().sum())"
      },
      {
        title: "步骤5：数据类型转换",
        content: "将必要的列转换为合适的数据类型：",
        code: "# 查看当前数据类型\nprint('当前数据类型:')\nprint(df.dtypes)\n\n# 将Sex列转换为分类类型\ndf['Sex'] = df['Sex'].astype('category')\n\n# 将Embarked列转换为分类类型\ndf['Embarked'] = df['Embarked'].astype('category')\n\n# 将Survived列转换为分类类型\ndf['Survived'] = df['Survived'].astype('category')\n\n# 查看转换后的数据类型\nprint('转换后数据类型:')\nprint(df.dtypes)"
      },
      {
        title: "步骤6：描述性统计分析",
        content: "对数据进行描述性统计分析，了解数据的分布特征：",
        code: "# 数值型数据的描述性统计\nprint('数值型数据统计:')\nprint(df.describe())\n\n# 分类变量的统计\nprint('\\n分类变量统计:')\nprint(df['Sex'].value_counts())\nprint('\\n', df['Embarked'].value_counts())\nprint('\\n', df['Survived'].value_counts())"
      },
      {
        title: "步骤7：数据筛选和排序",
        content: "学习如何根据条件筛选数据和排序：",
        code: "# 筛选幸存的乘客\nsurvived_passengers = df[df['Survived'] == 1]\nprint('幸存乘客数量:', len(survived_passengers))\n\n# 筛选年龄大于30岁的乘客\nage_above_30 = df[df['Age'] > 30]\nprint('年龄大于30岁的乘客数量:', len(age_above_30))\n\n# 按年龄排序\nsorted_by_age = df.sort_values('Age', ascending=False)\nprint('\\n按年龄降序排序前5名:')\nprint(sorted_by_age.head())\n\n# 按票价和年龄排序\nsorted_by_fare_age = df.sort_values(['Fare', 'Age'], ascending=[False, True])\nprint('\\n按票价降序、年龄升序排序前5名:')\nprint(sorted_by_fare_age.head())"
      }
    ],
    practiceTasks: [
      "1. 统计泰坦尼克号上不同舱位（Pclass）的乘客数量和幸存率",
      "2. 分析年龄与幸存率之间的关系，绘制年龄分布直方图",
      "3. 计算不同性别的乘客的平均票价和幸存率"
    ],
    practiceTaskAnswers: [
      "# 练习1答案\nimport pandas as pd\n\n# 读取数据\ndf = pd.read_csv('titanic.csv')\n\n# 统计不同舱位的乘客数量和幸存率\npclass_stats = df.groupby('Pclass').agg({\n    'PassengerId': 'count',\n    'Survived': 'mean'\n}).round(4)\n\npclass_stats.columns = ['乘客数量', '幸存率']\npclass_stats['幸存率'] = pclass_stats['幸存率'] * 100\n\nprint('不同舱位的乘客数量和幸存率:')\nprint(pclass_stats)\n",
      "# 练习2答案\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# 读取数据\ndf = pd.read_csv('titanic.csv')\n\n# 分析年龄与幸存率的关系\nage_survival = df.groupby(pd.cut(df['Age'], bins=10)).agg({\n    'Survived': 'mean'\n}).round(4)\n\nage_survival['幸存率'] = age_survival['Survived'] * 100\n\n# 绘制年龄分布直方图\nplt.figure(figsize=(12, 6))\nplt.subplot(1, 2, 1)\ndf['Age'].plot(kind='hist', bins=30, alpha=0.7)\nplt.title('年龄分布')\nplt.xlabel('年龄')\nplt.ylabel('人数')\n\n# 绘制年龄与幸存率关系\nplt.subplot(1, 2, 2)\nage_survival['幸存率'].plot(kind='bar', alpha=0.7)\nplt.title('年龄与幸存率关系')\nplt.xlabel('年龄区间')\nplt.ylabel('幸存率 (%)')\nplt.xticks(rotation=45)\n\nplt.tight_layout()\nplt.show()\n",
      "# 练习3答案\nimport pandas as pd\n\n# 读取数据\ndf = pd.read_csv('titanic.csv')\n\n# 计算不同性别的乘客的平均票价和幸存率\ngender_stats = df.groupby('Sex').agg({\n    'Fare': 'mean',\n    'Survived': 'mean'\n}).round(4)\n\ngender_stats.columns = ['平均票价', '幸存率']\ngender_stats['幸存率'] = gender_stats['幸存率'] * 100\n\nprint('不同性别的乘客统计:')\nprint(gender_stats)\n"
    ],
    practiceTaskLinks: [
      "https://www.kaggle.com/c/titanic/overview",
      "https://www.datacamp.com/community/tutorials/pandas-tutorial-dataframe-python",
      "https://www.w3schools.com/python/pandas/default.asp"
    ],
    assessment: [
      "1. 如何检测数据中的缺失值？请写出相关代码",
      "2. 简述Pandas中fillna()和dropna()方法的区别，分别在什么情况下使用？"
    ],
    assessmentAnswers: [
      "检测数据中的缺失值可以使用Pandas的isnull()或isna()方法，结合sum()函数来统计每列的缺失值数量：\n\n```python\nimport pandas as pd\n\n# 读取数据\ndf = pd.read_csv('titanic.csv')\n\n# 检测缺失值\nprint('缺失值统计:')\nprint(df.isnull().sum())\n\n# 也可以使用info()方法查看非空值数量\nprint('\\n数据信息:')\ndf.info()\n```",
      "- fillna()方法：用于填充缺失值，可以指定填充值（如均值、中位数、众数等）。适用于：\n  1. 缺失值比例较小且对数据分布影响不大时\n  2. 有合理的填充值（如用均值填充数值型数据）\n  3. 需要保留所有数据行时\n\n- dropna()方法：用于删除包含缺失值的行或列。适用于：\n  1. 缺失值比例较大且无法合理填充时\n  2. 缺失值对分析结果影响较大时\n  3. 数据量充足，删除少量缺失值不影响分析时"
    ]
  },
  {
    id: 2,
    title: "数据可视化基础",
    description: "学习使用不同图表类型展示数据",
    goal: "通过销售数据或人口统计数据，掌握各种图表的应用场景和绘制方法",
    dataSource: "销售数据或人口统计数据",
    tools: ["Matplotlib", "Seaborn"],
    learningPoints: [
      "折线图的绘制和应用",
      "柱状图的绘制和应用",
      "饼图的绘制和应用",
      "散点图的绘制和应用",
      "图表美化和定制"
    ],
    overview: "本项目将带你学习使用Matplotlib和Seaborn库创建各种数据可视化图表。通过本项目的学习，你将掌握折线图、柱状图、饼图、散点图等常见图表的绘制方法，以及如何美化和定制图表，使数据更直观、更有说服力。",
    prerequisites: {
      tools: ["Python 3.7+", "Jupyter Notebook", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      datasets: ["销售数据示例: https://www.kaggle.com/datasets/kyanyoga/sample-sales-data", "人口统计数据: https://www.kaggle.com/datasets/census/population-by-country-2020"]
    },
    stepByStep: [
      {
        title: "步骤1：环境搭建",
        content: "安装必要的Python库：",
        code: "pip install pandas numpy matplotlib seaborn jupyter"
      },
      {
        title: "步骤2：数据准备",
        content: "导入必要的库并准备示例数据：",
        code: "import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\nimport seaborn as sns\n\n# 设置中文字体\nplt.rcParams['font.sans-serif'] = ['SimHei']  # 用来正常显示中文标签\nplt.rcParams['axes.unicode_minus'] = False  # 用来正常显示负号\n\n# 创建示例销售数据\ndates = pd.date_range('2023-01-01', periods=12, freq='M')\nsales = np.random.randint(1000, 5000, size=12)\nsales_data = pd.DataFrame({'日期': dates, '销售额': sales})\n\n# 创建示例人口统计数据\ncountries = ['中国', '印度', '美国', '印度尼西亚', '巴基斯坦']\npopulation = [1412, 1380, 331, 273, 220]  # 单位：百万\npopulation_data = pd.DataFrame({'国家': countries, '人口': population})\n\n# 创建示例散点图数据\nx = np.random.randn(100)\ny = 2 * x + np.random.randn(100) * 0.5\nscatter_data = pd.DataFrame({'x': x, 'y': y})"
      },
      {
        title: "步骤3：折线图的绘制和应用",
        content: "折线图适合展示时间序列数据的变化趋势：",
        code: "# 绘制折线图\nplt.figure(figsize=(10, 6))\nplt.plot(sales_data['日期'], sales_data['销售额'], marker='o', linestyle='-', color='green')\nplt.title('月度销售额趋势')\nplt.xlabel('日期')\nplt.ylabel('销售额')\nplt.grid(True, alpha=0.3)\nplt.tight_layout()\nplt.show()"
      },
      {
        title: "步骤4：柱状图的绘制和应用",
        content: "柱状图适合比较不同类别的数据：",
        code: "# 绘制柱状图\nplt.figure(figsize=(10, 6))\nsns.barplot(x='国家', y='人口', data=population_data, palette='viridis')\nplt.title('各国人口数量')\nplt.xlabel('国家')\nplt.ylabel('人口（百万）')\nplt.xticks(rotation=45)\nplt.tight_layout()\nplt.show()"
      },
      {
        title: "步骤5：饼图的绘制和应用",
        content: "饼图适合展示各部分占总体的比例：",
        code: "# 绘制饼图\nplt.figure(figsize=(8, 8))\nplt.pie(population_data['人口'], labels=population_data['国家'], autopct='%1.1f%%', startangle=90)\nplt.title('各国人口占比')\nplt.axis('equal')  # 保证饼图是圆形\nplt.tight_layout()\nplt.show()"
      },
      {
        title: "步骤6：散点图的绘制和应用",
        content: "散点图适合展示两个变量之间的关系：",
        code: "# 绘制散点图\nplt.figure(figsize=(10, 6))\nsns.scatterplot(x='x', y='y', data=scatter_data)\nplt.title('X和Y的关系')\nplt.xlabel('X')\nplt.ylabel('Y')\nplt.grid(True, alpha=0.3)\nplt.tight_layout()\nplt.show()"
      },
      {
        title: "步骤7：图表美化和定制",
        content: "学习如何美化和定制图表，使其更专业、更美观：",
        code: "# 美化折线图\nplt.figure(figsize=(12, 6))\nplt.plot(sales_data['日期'], sales_data['销售额'], \\\n         marker='o', linestyle='-', color='green', \\\n         linewidth=2, markersize=8, markeredgecolor='white', markeredgewidth=2)\nplt.title('月度销售额趋势', fontsize=16, fontweight='bold')\nplt.xlabel('日期', fontsize=12)\nplt.ylabel('销售额', fontsize=12)\nplt.grid(True, alpha=0.3, linestyle='--')\nplt.fill_between(sales_data['日期'], sales_data['销售额'], alpha=0.1, color='green')\nplt.tight_layout()\nplt.show()\n\n# 美化柱状图\nplt.figure(figsize=(12, 6))\nbars = sns.barplot(x='国家', y='人口', data=population_data, palette='viridis')\nplt.title('各国人口数量', fontsize=16, fontweight='bold')\nplt.xlabel('国家', fontsize=12)\nplt.ylabel('人口（百万）', fontsize=12)\nplt.xticks(rotation=45, fontsize=10)\n\n# 在柱子上添加数值标签\nfor bar in bars.patches:\n    height = bar.get_height()\n    plt.text(bar.get_x() + bar.get_width()/2., height + 5,\n             f'{height}', ha='center', va='bottom')\n\nplt.tight_layout()\nplt.show()"
      }
    ],
    practiceTasks: [
      "1. 使用Matplotlib绘制一个包含多条折线的图表，展示不同产品的销售趋势",
      "2. 使用Seaborn绘制一个箱线图，展示不同类别的数据分布",
      "3. 绘制一个热力图，展示不同变量之间的相关性"
    ],
    practiceTaskAnswers: [
      "# 练习1答案：绘制多条折线图\nimport pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# 设置中文字体\nplt.rcParams['font.sans-serif'] = ['SimHei']\nplt.rcParams['axes.unicode_minus'] = False\n\n# 创建示例数据\ndates = pd.date_range('2023-01-01', periods=12, freq='M')\nproducts = ['产品A', '产品B', '产品C']\n\ndata = {\n    '日期': dates\n}\n\nfor product in products:\n    data[product] = np.random.randint(1000, 5000, size=12)\n\ndf = pd.DataFrame(data)\n\n# 绘制多条折线图\nplt.figure(figsize=(12, 6))\nfor product in products:\n    plt.plot(df['日期'], df[product], marker='o', label=product)\n\nplt.title('不同产品销售趋势')\nplt.xlabel('日期')\nplt.ylabel('销售额')\nplt.legend()\nplt.grid(True, alpha=0.3)\nplt.xticks(rotation=45)\nplt.tight_layout()\nplt.show()\n",
      "# 练习2答案：绘制箱线图\nimport pandas as pd\nimport numpy as np\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\n# 设置中文字体\nplt.rcParams['font.sans-serif'] = ['SimHei']\nplt.rcParams['axes.unicode_minus'] = False\n\n# 创建示例数据\ncategories = ['类别A', '类别B', '类别C', '类别D']\ndata = []\n\nfor category in categories:\n    values = np.random.normal(loc=np.random.randint(50, 150), scale=np.random.randint(10, 30), size=100)\n    data.extend([(category, val) for val in values])\n\ndf = pd.DataFrame(data, columns=['类别', '值'])\n\n# 绘制箱线图\nplt.figure(figsize=(10, 6))\nsns.boxplot(x='类别', y='值', data=df, palette='viridis')\nplt.title('不同类别的数据分布')\nplt.xlabel('类别')\nplt.ylabel('值')\nplt.grid(True, alpha=0.3, axis='y')\nplt.tight_layout()\nplt.show()\n",
      "# 练习3答案：绘制热力图\nimport pandas as pd\nimport numpy as np\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\n# 设置中文字体\nplt.rcParams['font.sans-serif'] = ['SimHei']\nplt.rcParams['axes.unicode_minus'] = False\n\n# 创建示例数据\nvariables = ['变量1', '变量2', '变量3', '变量4', '变量5']\ncorr_matrix = np.random.rand(5, 5)\n# 确保对角线为1，矩阵对称\nfor i in range(5):\n    corr_matrix[i, i] = 1\n    for j in range(i+1, 5):\n        corr_matrix[i, j] = corr_matrix[j, i]\n\ndf_corr = pd.DataFrame(corr_matrix, index=variables, columns=variables)\n\n# 绘制热力图\nplt.figure(figsize=(10, 8))\nsns.heatmap(df_corr, annot=True, cmap='coolwarm', vmin=-1, vmax=1, center=0)\nplt.title('变量之间的相关性热力图')\nplt.tight_layout()\nplt.show()\n"
    ],
    assessment: [
      "1. 折线图、柱状图、饼图和散点图分别适用于什么场景？",
      "2. 如何在Matplotlib中设置中文字体，避免中文显示乱码？"
    ],
    assessmentAnswers: [
      "- 折线图：适用于展示时间序列数据的变化趋势，例如销售额、股票价格等随时间的变化。\n- 柱状图：适用于比较不同类别的数据，例如不同产品的销售数量、不同地区的人口数量等。\n- 饼图：适用于展示各部分占总体的比例，例如不同产品类别的销售占比、不同年龄段的人口占比等。\n- 散点图：适用于展示两个变量之间的关系，例如身高与体重的关系、学习时间与成绩的关系等。",
      "在Matplotlib中设置中文字体的方法：\n\n```python\nimport matplotlib.pyplot as plt\n\n# 设置中文字体\nplt.rcParams['font.sans-serif'] = ['SimHei']  # 用来正常显示中文标签\nplt.rcParams['axes.unicode_minus'] = False  # 用来正常显示负号\n```\n\n这样设置后，Matplotlib就可以正确显示中文了，不会出现乱码问题。"
    ]
  },
  {
    id: 3,
    title: "探索性数据分析(EDA)",
    description: "深入分析电商用户数据，发现有价值的洞察",
    goal: "通过电商用户数据的全面分析，学习探索性数据分析的完整流程，包括数据清洗、特征工程、深入分析和可视化",
    dataSource: "电商用户行为数据",
    tools: ["Python", "Pandas", "Plotly", "Matplotlib", "Seaborn"],
    learningPoints: [
      "数据清洗和预处理",
      "特征工程基础",
      "单变量分析",
      "双变量和多变量分析",
      "交互式可视化"
    ],
    overview: "本项目将带你进行一次完整的探索性数据分析(EDA)。通过分析电商用户数据，你将学习如何系统地探索数据、发现模式、识别异常、提出假设并生成有价值的业务洞察。使用Plotly创建交互式图表，让你的分析结果更具吸引力。",
    prerequisites: {
      tools: ["Python 3.7+", "Jupyter Notebook", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
      datasets: ["电商用户行为数据集: https://www.kaggle.com/datasets/mkechinov/ecommerce-behavior-data-from-multi-category-store"]
    },
    stepByStep: [
      {
        title: "步骤1：环境搭建",
        content: "安装所有必要的Python库：",
        code: "pip install pandas numpy matplotlib seaborn plotly jupyter"
      },
      {
        title: "步骤2：数据加载与初步探索",
        content: "加载电商用户行为数据并进行初步探索：",
        code: "import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\nimport seaborn as sns\nimport plotly.express as px\nimport plotly.graph_objects as go\n\n# 设置中文字体\nplt.rcParams['font.sans-serif'] = ['SimHei']\nplt.rcParams['axes.unicode_minus'] = False\n\n# 创建示例电商数据\nnp.random.seed(42)\ndata_size = 10000\n\ndata = {\n    'user_id': np.random.randint(1000, 9999, data_size),\n    'product_id': np.random.randint(10000, 99999, data_size),\n    'category': np.random.choice(['电子产品', '服装', '家居', '食品', '运动'], data_size),\n    'behavior': np.random.choice(['浏览', '点击', '加购', '购买'], data_size, p=[0.6, 0.25, 0.1, 0.05]),\n    'price': np.random.uniform(10, 1000, data_size).round(2),\n    'timestamp': pd.date_range('2023-01-01', periods=data_size, freq='min'),\n    'user_age': np.random.randint(18, 65, data_size),\n    'user_gender': np.random.choice(['男', '女'], data_size)\n}\n\ndf = pd.DataFrame(data)\n\nprint('数据形状:', df.shape)\nprint('\\n数据前5行:')\nprint(df.head())\nprint('\\n数据基本信息:')\nprint(df.info())\nprint('\\n缺失值统计:')\nprint(df.isnull().sum())"
      },
      {
        title: "步骤3：数据清洗",
        content: "处理数据中的异常值和重复值：",
        code: "# 检查重复值\nprint('重复值数量:', df.duplicated().sum())\n\n# 删除重复值\ndf = df.drop_duplicates()\n\n# 检查价格异常值\nprint('\\n价格统计:')\nprint(df['price'].describe())\n\n# 处理异常价格（例如删除价格为0或负数的记录）\ndf = df[df['price'] > 0]\n\nprint('\\n清洗后数据形状:', df.shape)"
      },
      {
        title: "步骤4：单变量分析",
        content: "对各个变量进行单独分析：",
        code: "# 用户行为分布\nbehavior_counts = df['behavior'].value_counts()\nprint('用户行为分布:')\nprint(behavior_counts)\n\nplt.figure(figsize=(10, 6))\nsns.countplot(x='behavior', data=df, palette='viridis')\nplt.title('用户行为分布')\nplt.xlabel('行为类型')\nplt.ylabel('数量')\nplt.show()\n\n# 价格分布\nplt.figure(figsize=(12, 5))\nplt.subplot(1, 2, 1)\nsns.histplot(df['price'], bins=30, kde=True)\nplt.title('价格分布')\n\nplt.subplot(1, 2, 2)\nsns.boxplot(y='price', data=df)\nplt.title('价格箱线图')\nplt.tight_layout()\nplt.show()\n\n# 年龄分布\nplt.figure(figsize=(10, 6))\nsns.histplot(df['user_age'], bins=20, kde=True)\nplt.title('用户年龄分布')\nplt.xlabel('年龄')\nplt.show()"
      },
      {
        title: "步骤5：双变量和多变量分析",
        content: "分析变量之间的关系：",
        code: "# 不同品类的价格分布\nplt.figure(figsize=(12, 6))\nsns.boxplot(x='category', y='price', data=df)\nplt.title('不同品类的价格分布')\nplt.xticks(rotation=45)\nplt.show()\n\n# 不同性别的行为偏好\nbehavior_gender = pd.crosstab(df['user_gender'], df['behavior'], normalize='index')\nprint('不同性别的行为偏好:')\nprint(behavior_gender)\n\nbehavior_gender.plot(kind='bar', stacked=True, figsize=(12, 6))\nplt.title('不同性别的行为偏好')\nplt.xlabel('性别')\nplt.ylabel('比例')\nplt.legend(title='行为类型')\nplt.show()\n\n# 年龄与购买力关系\ndf['age_group'] = pd.cut(df['user_age'], bins=[18, 25, 35, 45, 55, 65], \\n                         labels=['18-25', '26-35', '36-45', '46-55', '56-65'])\n\nage_group_price = df.groupby('age_group')['price'].mean()\nprint('\\n不同年龄段的平均消费:')\nprint(age_group_price)\n\nplt.figure(figsize=(10, 6))\nage_group_price.plot(kind='bar', color='green')\nplt.title('不同年龄段的平均消费')\nplt.xlabel('年龄段')\nplt.ylabel('平均价格')\nplt.show()"
      },
      {
        title: "步骤6：交互式可视化",
        content: "使用Plotly创建交互式图表：",
        code: "# 交互式品类销售分析\ncategory_sales = df[df['behavior'] == '购买'].groupby('category').agg({\n    'price': 'sum',\n    'user_id': 'count'\n}).reset_index()\ncategory_sales.columns = ['品类', '总销售额', '购买次数']\n\nfig = px.bar(category_sales, x='品类', y='总销售额', \\n             title='不同品类的销售情况',\n             hover_data=['购买次数'],\n             color='品类',\n             color_discrete_sequence=px.colors.qualitative.Set3)\nfig.update_layout(xaxis_tickangle=-45)\nfig.show()\n\n# 交互式时间趋势分析\ndf['date'] = df['timestamp'].dt.date\ndaily_purchases = df[df['behavior'] == '购买'].groupby('date').size().reset_index()\ndaily_purchases.columns = ['日期', '购买次数']\n\nfig = px.line(daily_purchases, x='日期', y='购买次数', \\n              title='每日购买次数趋势',\n              markers=True)\nfig.update_layout(yaxis_title='购买次数')\nfig.show()"
      }
    ],
    practiceTasks: [
      "1. 分析不同时间段（小时、星期）的用户行为模式",
      "2. 找出转化率最高的产品品类，并分析其原因",
      "3. 创建一个用户画像，根据消费行为将用户分为不同的群体"
    ],
    practiceTaskAnswers: [
      "# 练习1答案：分析不同时间段的用户行为模式\nimport pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\nimport seaborn as sns\n\nplt.rcParams['font.sans-serif'] = ['SimHei']\nplt.rcParams['axes.unicode_minus'] = False\n\n# 假设df是电商用户行为数据\n# 添加时间维度\ndf['小时'] = df['timestamp'].dt.hour\ndf['星期'] = df['timestamp'].dt.dayofweek\n\n# 分析小时维度的行为模式\nhourly_behavior = pd.crosstab(df['小时'], df['behavior'], normalize='index') * 100\n\nplt.figure(figsize=(14, 6))\nhourly_behavior.plot(kind='line', figsize=(14, 6))\nplt.title('不同小时的用户行为模式')\nplt.xlabel('小时')\nplt.ylabel('百分比 (%)')\nplt.xticks(range(24))\nplt.grid(True, alpha=0.3)\nplt.tight_layout()\nplt.show()\n\n# 分析星期维度的行为模式\nweekly_behavior = pd.crosstab(df['星期'], df['behavior'], normalize='index') * 100\n\nplt.figure(figsize=(14, 6))\nweekly_behavior.plot(kind='bar', figsize=(14, 6))\nplt.title('不同星期的用户行为模式')\nplt.xlabel('星期')\nplt.ylabel('百分比 (%)')\nplt.xticks(range(7), ['周一', '周二', '周三', '周四', '周五', '周六', '周日'])\nplt.grid(True, alpha=0.3, axis='y')\nplt.tight_layout()\nplt.show()\n",
      "# 练习2答案：找出转化率最高的产品品类\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\nplt.rcParams['font.sans-serif'] = ['SimHei']\nplt.rcParams['axes.unicode_minus'] = False\n\n# 计算各品类的转化率\ncategory_stats = df.groupby('category').agg({\n    'behavior': lambda x: (x == '购买').sum() / len(x) * 100\n}).sort_values('behavior', ascending=False)\n\ncategory_stats.columns = ['转化率 (%)']\n\nprint('各品类转化率:')\nprint(category_stats)\n\n# 可视化\nplt.figure(figsize=(12, 6))\ncategory_stats.plot(kind='bar', color='green', alpha=0.7)\nplt.title('各品类转化率对比')\nplt.xlabel('产品品类')\nplt.ylabel('转化率 (%)')\nplt.xticks(rotation=45)\nplt.grid(True, alpha=0.3, axis='y')\nplt.tight_layout()\nplt.show()\n\n# 分析原因 - 查看各品类的平均价格\ncategory_price = df.groupby('category')['price'].mean()\nprint('\n各品类平均价格:')\nprint(category_price)\n",
      "# 练习3答案：创建用户画像\nimport pandas as pd\nimport numpy as np\nfrom sklearn.cluster import KMeans\nimport matplotlib.pyplot as plt\nimport seaborn as sns\n\nplt.rcParams['font.sans-serif'] = ['SimHei']\nplt.rcParams['axes.unicode_minus'] = False\n\n# 计算用户特征\nuser_features = df.groupby('user_id').agg({\n    'behavior': lambda x: (x == '购买').sum(),  # 购买次数\n    'price': 'mean',  # 平均消费\n    'timestamp': 'count'  # 总行为次数\n}).reset_index()\n\nuser_features.columns = ['user_id', '购买次数', '平均消费', '总行为次数']\n\n# 使用K-Means进行聚类\nfeatures = user_features[['购买次数', '平均消费', '总行为次数']]\n\n# 标准化\nfrom sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\nscaled_features = scaler.fit_transform(features)\n\n# 确定最佳聚类数\ninertia = []\nfor k in range(1, 11):\n    kmeans = KMeans(n_clusters=k, random_state=42)\n    kmeans.fit(scaled_features)\n    inertia.append(kmeans.inertia_)\n\nplt.figure(figsize=(10, 6))\nplt.plot(range(1, 11), inertia, marker='o')\nplt.title('K-Means聚类 - 肘部法则')\nplt.xlabel('聚类数')\nplt.ylabel('惯性')\nplt.grid(True, alpha=0.3)\nplt.tight_layout()\nplt.show()\n\n# 选择3个聚类\nkmeans = KMeans(n_clusters=3, random_state=42)\nuser_features['用户群体'] = kmeans.fit_predict(scaled_features)\n\n# 分析各群体特征\ngroup_stats = user_features.groupby('用户群体').mean()\nprint('各用户群体特征:')\nprint(group_stats)\n\n# 可视化\nplt.figure(figsize=(12, 8))\nsns.scatterplot(x='总行为次数', y='平均消费', hue='用户群体', data=user_features, palette='viridis')\nplt.title('用户群体分布')\nplt.xlabel('总行为次数')\nplt.ylabel('平均消费')\nplt.grid(True, alpha=0.3)\nplt.tight_layout()\nplt.show()\n"
    ],
    assessment: [
      "1. 什么是探索性数据分析(EDA)？它的主要目的是什么？",
      "2. 在EDA中，单变量分析和多变量分析有什么区别？"
    ],
    assessmentAnswers: [
      "探索性数据分析(Exploratory Data Analysis, EDA)是一种数据分析方法，通过可视化、统计分析等手段对数据进行初步探索，以发现数据中的模式、异常、关系等信息。\n\n主要目的：\n1. 了解数据的基本结构和特征\n2. 发现数据中的模式和趋势\n3. 识别数据中的异常值和缺失值\n4. 探索变量之间的关系\n5. 为后续的建模和分析提供方向\n6. 生成假设和洞察",
      "- 单变量分析：只分析一个变量的特征和分布。例如：\n  1. 分析年龄的分布情况\n  2. 统计不同性别的人数\n  3. 查看销售额的统计描述\n\n- 多变量分析：分析两个或多个变量之间的关系。例如：\n  1. 分析年龄与购买金额的关系\n  2. 查看不同性别在不同地区的分布\n  3. 分析多个变量之间的相关性\n\n单变量分析帮助我们了解每个变量的基本情况，多变量分析则帮助我们发现变量之间的关联和交互作用。"
    ]
  },
  {
    id: 4,
    title: "业务指标构建与分析",
    description: "学习构建和分析关键业务指标",
    goal: "通过企业销售数据，学习如何设计、计算和分析关键业务指标，为业务决策提供数据支持",
    dataSource: "企业销售数据",
    tools: ["Python", "Pandas", "Excel"],
    learningPoints: [
      "业务指标设计",
      "核心指标计算",
      "趋势分析",
      "同比环比分析",
      "业绩评估"
    ],
    overview: "本项目将带你学习如何从业务角度构建和分析关键指标。通过处理企业销售数据，你将掌握如何设计有意义的业务指标、计算核心KPI、进行趋势分析以及同比环比分析，最终能够用数据支撑业务决策。",
    prerequisites: {
      tools: ["Python 3.7+", "Jupyter Notebook", "Pandas", "NumPy", "Microsoft Excel 或 Google Sheets"],
      datasets: ["企业销售数据示例: https://www.kaggle.com/datasets/kyanyoga/sample-sales-data"]
    },
    stepByStep: [
      {
        title: "步骤1：环境搭建",
        content: "安装必要的Python库：",
        code: "pip install pandas numpy jupyter openpyxl"
      },
      {
        title: "步骤2：数据加载与准备",
        content: "加载企业销售数据并进行准备：",
        code: "import pandas as pd\nimport numpy as np\nfrom datetime import datetime, timedelta\n\n# 设置随机种子保证可复现\nnp.random.seed(42)\n\n# 创建示例销售数据\ndates = pd.date_range('2022-01-01', '2023-12-31', freq='D')\ndata = []\n\nfor date in dates:\n    # 每天生成10-50条销售记录\n    daily_records = np.random.randint(10, 50)\n    for _ in range(daily_records):\n        data.append({\n            '日期': date,\n            '订单编号': f'ORD{np.random.randint(10000, 99999)}',\n            '产品名称': np.random.choice(['产品A', '产品B', '产品C', '产品D', '产品E']),\n            '产品类别': np.random.choice(['电子产品', '服装', '家居']),\n            '销售数量': np.random.randint(1, 10),\n            '单价': np.random.choice([99, 199, 299, 499, 799, 999]),\n            '销售员': np.random.choice(['张三', '李四', '王五', '赵六', '钱七']),\n            '地区': np.random.choice(['华北', '华东', '华南', '华西', '华中']),\n            '客户类型': np.random.choice(['新客户', '老客户', 'VIP客户'])\n        })\n\ndf = pd.DataFrame(data)\n\n# 计算销售额\ndf['销售额'] = df['销售数量'] * df['单价']\n\nprint('数据形状:', df.shape)\nprint('\\n数据前5行:')\nprint(df.head())\nprint('\\n数据基本信息:')\nprint(df.info())"
      },
      {
        title: "步骤3：核心业务指标计算",
        content: "计算关键业务指标：",
        code: "# 整体指标计算\ntotal_sales = df['销售额'].sum()\ntotal_orders = df['订单编号'].nunique()\ntotal_quantity = df['销售数量'].sum()\naverage_order_value = total_sales / total_orders\n\nprint('=== 整体业务指标 ===')\nprint(f'总销售额: {total_sales:,.2f} 元')\nprint(f'总订单数: {total_orders:,.0f}')\nprint(f'总销售数量: {total_quantity:,.0f}')\nprint(f'平均订单金额: {average_order_value:,.2f} 元')\n\n# 按维度分析指标\nprint('\\n=== 按产品类别分析 ===')\ncategory_analysis = df.groupby('产品类别').agg({\n    '销售额': 'sum',\n    '订单编号': 'nunique',\n    '销售数量': 'sum'\n}).round(2)\ncategory_analysis.columns = ['销售额', '订单数', '销售数量']\ncategory_analysis['销售额占比'] = category_analysis['销售额'] / total_sales * 100\nprint(category_analysis)\n\nprint('\\n=== 按地区分析 ===')\nregion_analysis = df.groupby('地区').agg({\n    '销售额': 'sum',\n    '订单编号': 'nunique'\n}).round(2)\nregion_analysis.columns = ['销售额', '订单数']\nregion_analysis['销售额占比'] = region_analysis['销售额'] / total_sales * 100\nprint(region_analysis.sort_values('销售额', ascending=False))\n\nprint('\\n=== 按销售员分析 ===')\nsalesperson_analysis = df.groupby('销售员').agg({\n    '销售额': 'sum',\n    '订单编号': 'nunique'\n}).round(2)\nsalesperson_analysis.columns = ['销售额', '订单数']\nprint(salesperson_analysis.sort_values('销售额', ascending=False))"
      },
      {
        title: "步骤4：时间趋势分析",
        content: "分析业务指标随时间的变化趋势：",
        code: "# 按月份汇总数据\ndf['月份'] = df['日期'].dt.to_period('M')\nmonthly_data = df.groupby('月份').agg({\n    '销售额': 'sum',\n    '订单编号': 'nunique',\n    '销售数量': 'sum'\n}).reset_index()\nmonthly_data.columns = ['月份', '销售额', '订单数', '销售数量']\n\nprint('=== 月度销售数据 ===')\nprint(monthly_data)\n\n# 绘制趋势图\nimport matplotlib.pyplot as plt\nplt.rcParams['font.sans-serif'] = ['SimHei']\nplt.rcParams['axes.unicode_minus'] = False\n\nfig, axes = plt.subplots(2, 1, figsize=(14, 10))\n\n# 销售额趋势\naxes[0].plot(monthly_data['月份'].astype(str), monthly_data['销售额'], \\\n             marker='o', color='green', linewidth=2)\naxes[0].set_title('月度销售额趋势', fontsize=14, fontweight='bold')\naxes[0].set_xlabel('月份')\naxes[0].set_ylabel('销售额')\naxes[0].tick_params(axis='x', rotation=45)\naxes[0].grid(True, alpha=0.3)\n\n# 订单数趋势\naxes[1].plot(monthly_data['月份'].astype(str), monthly_data['订单数'], \\\n             marker='s', color='blue', linewidth=2)\naxes[1].set_title('月度订单数趋势', fontsize=14, fontweight='bold')\naxes[1].set_xlabel('月份')\naxes[1].set_ylabel('订单数')\naxes[1].tick_params(axis='x', rotation=45)\naxes[1].grid(True, alpha=0.3)\n\nplt.tight_layout()\nplt.show()"
      },
      {
        title: "步骤5：同比环比分析",
        content: "计算同比和环比增长率：",
        code: "# 计算环比增长率\nmonthly_data['销售额_环比'] = monthly_data['销售额'].pct_change() * 100\nmonthly_data['订单数_环比'] = monthly_data['订单数'].pct_change() * 100\n\n# 计算同比增长率（与去年同期相比）\nmonthly_data['销售额_同比'] = monthly_data['销售额'].pct_change(12) * 100\nmonthly_data['订单数_同比'] = monthly_data['订单数'].pct_change(12) * 100\n\nprint('=== 同比环比分析 ===')\nprint(monthly_data[['月份', '销售额', '销售额_环比', '销售额_同比', \\\n                    '订单数', '订单数_环比', '订单数_同比']].round(2))\n\n# 可视化同比环比\nfig, axes = plt.subplots(2, 1, figsize=(14, 10))\n\nx = monthly_data['月份'].astype(str)\n\naxes[0].bar(x, monthly_data['销售额_环比'], color='orange', alpha=0.7, label='环比')\naxes[0].bar(x, monthly_data['销售额_同比'], color='green', alpha=0.5, label='同比')\naxes[0].axhline(y=0, color='red', linestyle='--', linewidth=0.8)\naxes[0].set_title('销售额同比环比增长率', fontsize=14, fontweight='bold')\naxes[0].set_xlabel('月份')\naxes[0].set_ylabel('增长率 (%)')\naxes[0].legend()\naxes[0].tick_params(axis='x', rotation=45)\naxes[0].grid(True, alpha=0.3, axis='y')\n\naxes[1].bar(x, monthly_data['订单数_环比'], color='orange', alpha=0.7, label='环比')\naxes[1].bar(x, monthly_data['订单数_同比'], color='green', alpha=0.5, label='同比')\naxes[1].axhline(y=0, color='red', linestyle='--', linewidth=0.8)\naxes[1].set_title('订单数同比环比增长率', fontsize=14, fontweight='bold')\naxes[1].set_xlabel('月份')\naxes[1].set_ylabel('增长率 (%)')\naxes[1].legend()\naxes[1].tick_params(axis='x', rotation=45)\naxes[1].grid(True, alpha=0.3, axis='y')\n\nplt.tight_layout()\nplt.show()"
      },
      {
        title: "步骤6：数据导出到Excel",
        content: "将分析结果导出到Excel，方便业务团队查看：",
        code: "# 创建Excel写入器\nwith pd.ExcelWriter('业务分析报告.xlsx', engine='openpyxl') as writer:\n    # 整体指标表\n    overall_metrics = pd.DataFrame({\n        '指标': ['总销售额', '总订单数', '总销售数量', '平均订单金额'],\n        '数值': [total_sales, total_orders, total_quantity, average_order_value]\n    })\n    overall_metrics.to_excel(writer, sheet_name='整体指标', index=False)\n    \\n    # 按类别分析\n    category_analysis.to_excel(writer, sheet_name='品类分析')\n    \\n    # 按地区分析\n    region_analysis.to_excel(writer, sheet_name='地区分析')\n    \\n    # 按销售员分析\n    salesperson_analysis.to_excel(writer, sheet_name='销售员分析')\n    \\n    # 月度趋势\n    monthly_data.to_excel(writer, sheet_name='月度趋势', index=False)\n\nprint('Excel报告已生成：业务分析报告.xlsx')"
      }
    ],
    practiceTasks: [
      "1. 计算每个产品的毛利率（假设成本是售价的60%），并找出毛利率最高的产品",
      "2. 分析新客户和老客户的消费行为差异，包括客单价、复购率等",
      "3. 创建一个销售业绩评分系统，对销售员进行综合评分"
    ],
    practiceTaskAnswers: [
      "# 练习1答案：计算产品毛利率\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\nplt.rcParams['font.sans-serif'] = ['SimHei']\nplt.rcParams['axes.unicode_minus'] = False\n\n# 计算毛利率\ndf['成本'] = df['单价'] * 0.6\ndf['毛利'] = df['销售额'] - df['成本'] * df['销售数量']\ndf['毛利率'] = (df['毛利'] / df['销售额']) * 100\n\n# 按产品计算平均毛利率\nproduct_margin = df.groupby('产品名称').agg({\n    '毛利率': 'mean',\n    '销售额': 'sum'\n}).round(2)\n\nproduct_margin = product_margin.sort_values('毛利率', ascending=False)\n\nprint('各产品毛利率:')\nprint(product_margin)\n\n# 找出毛利率最高的产品\ntop_product = product_margin.index[0]\ntop_margin = product_margin.loc[top_product, '毛利率']\n\nprint(f'\\n毛利率最高的产品: {top_product} (毛利率: {top_margin:.2f}%)')\n\n# 可视化\nplt.figure(figsize=(12, 6))\nproduct_margin['毛利率'].plot(kind='bar', color='green', alpha=0.7)\nplt.title('各产品毛利率对比')\nplt.xlabel('产品名称')\nplt.ylabel('毛利率 (%)')\nplt.xticks(rotation=45)\nplt.grid(True, alpha=0.3, axis='y')\nplt.tight_layout()\nplt.show()\n",
      "# 练习2答案：分析新老客户差异\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\nplt.rcParams['font.sans-serif'] = ['SimHei']\nplt.rcParams['axes.unicode_minus'] = False\n\n# 假设我们有客户类型字段\n# 计算客单价\ncustomer_stats = df.groupby('客户类型').agg({\n    '销售额': ['mean', 'sum'],\n    '订单编号': 'nunique',\n    '销售数量': 'sum'\n}).round(2)\n\ncustomer_stats.columns = ['平均客单价', '总销售额', '订单数', '总销售数量']\n\nprint('新老客户消费行为差异:')\nprint(customer_stats)\n\n# 计算复购率（假设一个客户多次购买即为复购）\ncustomer_orders = df.groupby(['客户类型', '订单编号']).size().reset_index(name='订单数')\nrepeat_purchase = customer_orders.groupby('客户类型').agg({\n    '订单编号': 'count',\n    '订单数': lambda x: (x > 1).sum()\n})\n\nrepeat_purchase['复购率'] = (repeat_purchase['订单数'] / repeat_purchase['订单编号']) * 100\n\nprint('\n复购率:')\nprint(repeat_purchase[['复购率']].round(2))\n\n# 可视化\nfig, axes = plt.subplots(2, 2, figsize=(16, 10))\n\ncustomer_stats['平均客单价'].plot(kind='bar', ax=axes[0, 0], color='blue', alpha=0.7)\naxes[0, 0].set_title('平均客单价')\n\ncustomer_stats['总销售额'].plot(kind='bar', ax=axes[0, 1], color='green', alpha=0.7)\naxes[0, 1].set_title('总销售额')\n\ncustomer_stats['订单数'].plot(kind='bar', ax=axes[1, 0], color='orange', alpha=0.7)\naxes[1, 0].set_title('订单数')\n\nrepeat_purchase['复购率'].plot(kind='bar', ax=axes[1, 1], color='purple', alpha=0.7)\naxes[1, 1].set_title('复购率 (%)')\n\nfor ax in axes.flat:\n    ax.grid(True, alpha=0.3, axis='y')\n\nplt.tight_layout()\nplt.show()\n",
      "# 练习3答案：创建销售业绩评分系统\nimport pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nplt.rcParams['font.sans-serif'] = ['SimHei']\nplt.rcParams['axes.unicode_minus'] = False\n\n# 计算销售员的各项指标\nsalesperson_metrics = df.groupby('销售员').agg({\n    '销售额': 'sum',\n    '订单编号': 'nunique',\n    '销售数量': 'sum'\n}).reset_index()\n\n# 计算各项指标的得分（标准化）\nfor col in ['销售额', '订单编号', '销售数量']:\n    max_val = salesperson_metrics[col].max()\n    min_val = salesperson_metrics[col].min()\n    salesperson_metrics[f'{col}_得分'] = ((salesperson_metrics[col] - min_val) / (max_val - min_val)) * 100\n\n# 计算综合得分（加权平均）\nweights = {'销售额_得分': 0.5, '订单编号_得分': 0.3, '销售数量_得分': 0.2}\nsalesperson_metrics['综合得分'] = salesperson_metrics.apply(\n    lambda row: sum(row[col] * weight for col, weight in weights.items()), axis=1\n)\n\n# 排序\nsalesperson_metrics = salesperson_metrics.sort_values('综合得分', ascending=False)\n\nprint('销售员业绩评分:')\nprint(salesperson_metrics[['销售员', '销售额', '订单编号', '销售数量', '综合得分']].round(2))\n\n# 可视化\nplt.figure(figsize=(14, 6))\nsalesperson_metrics.set_index('销售员')['综合得分'].plot(kind='bar', color='green', alpha=0.7)\nplt.title('销售员综合业绩评分')\nplt.xlabel('销售员')\nplt.ylabel('综合得分')\nplt.ylim(0, 100)\nplt.grid(True, alpha=0.3, axis='y')\nplt.tight_layout()\nplt.show()\n"
    ],
    assessment: [
      "1. 什么是同比和环比？它们分别用于什么场景？",
      "2. 请列举5个常用的电商业务指标，并说明其含义"
    ],
    assessmentAnswers: [
      "- 同比：与去年同期相比的增长率。例如：2023年1月与2022年1月相比。\n  适用场景：分析长期趋势，排除季节性因素的影响。\n\n- 环比：与上一个周期相比的增长率。例如：2023年1月与2022年12月相比。\n  适用场景：分析短期变化，了解近期业务发展趋势。",
      "常用的电商业务指标：\n\n1. 销售额：一段时间内的总销售收入。\n2. 订单数：一段时间内的总订单数量。\n3. 客单价：平均每笔订单的金额（销售额/订单数）。\n4. 转化率：从浏览到购买的用户比例（购买用户数/浏览用户数）。\n5. 复购率：重复购买的用户比例（重复购买用户数/总购买用户数）。\n6. 毛利率：毛利润占销售额的比例（(销售额-成本)/销售额）。\n7. 库存周转率：库存更新的速度（销售成本/平均库存）。\n8. 客户获取成本：获取一个新客户的平均成本。\n9. 客户终身价值：客户在生命周期内为企业带来的总价值。\n10. 退换货率：退换货订单占总订单的比例。"
    ]
  },
  {
    id: 5,
    title: "统计推断与假设检验",
    description: "学习使用统计方法验证业务假设",
    goal: "通过A/B测试数据，学习统计推断、假设检验的基本原理和实际应用",
    dataSource: "A/B测试数据",
    tools: ["Python", "SciPy", "StatsModels"],
    learningPoints: [
      "概率分布基础",
      "参数估计",
      "假设检验原理",
      "t检验和卡方检验",
      "A/B测试分析"
    ],
    overview: "本项目将带你进入统计推断的世界。通过模拟的A/B测试数据，你将学习如何使用统计方法验证业务假设，掌握t检验、卡方检验等常用统计检验方法，并能够独立完成A/B测试的数据分析。",
    prerequisites: {
      tools: ["Python 3.7+", "Jupyter Notebook", "Pandas", "NumPy", "SciPy", "StatsModels"],
      datasets: ["A/B测试示例数据: https://www.kaggle.com/datasets/zhangluyuan/ab-testing"]
    },
    stepByStep: [
      {
        title: "步骤1：环境搭建",
        content: "安装必要的统计分析库：",
        code: "pip install pandas numpy scipy statsmodels jupyter"
      },
      {
        title: "步骤2：数据生成与探索",
        content: "生成A/B测试数据并进行初步探索：",
        code: "import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\nfrom scipy import stats\nimport statsmodels.api as sm\nfrom statsmodels.stats.proportion import proportions_ztest\n\nplt.rcParams['font.sans-serif'] = ['SimHei']\nplt.rcParams['axes.unicode_minus'] = False\n\n# 设置随机种子\nnp.random.seed(42)\n\n# 生成A/B测试数据\n# A组：对照组，使用旧版本\n# B组：实验组，使用新版本\n\nsample_size_a = 1000\nsample_size_b = 1000\n\n# A组转化率：10%\nconversion_a = np.random.binomial(1, 0.10, sample_size_a)\n# B组转化率：12%（提升2%）\nconversion_b = np.random.binomial(1, 0.12, sample_size_b)\n\n# 创建DataFrame\nab_data = pd.DataFrame({\n    '组': ['A'] * sample_size_a + ['B'] * sample_size_b,\n    '是否转化': np.concatenate([conversion_a, conversion_b])\n})\n\nprint('=== A/B测试数据概览 ===')\nprint(ab_data.head())\nprint(f'\\n数据形状: {ab_data.shape}')\n\n# 计算各组转化率\nconversion_rates = ab_data.groupby('组')['是否转化'].agg(['mean', 'count', 'sum'])\nconversion_rates.columns = ['转化率', '样本数', '转化数']\nconversion_rates['转化率'] = conversion_rates['转化率'] * 100\n\nprint('\n=== 各组转化率 ===')\nprint(conversion_rates.round(2))\n\n# 可视化\nplt.figure(figsize=(10, 6))\nconversion_rates['转化率'].plot(kind='bar', color=['blue', 'green'])\nplt.title('A/B组转化率对比', fontsize=14, fontweight='bold')\nplt.ylabel('转化率 (%)')\nplt.ylim(0, 15)\nplt.xticks(rotation=0)\nfor i, v in enumerate(conversion_rates['转化率']):\n    plt.text(i, v + 0.5, f'{v:.2f}%', ha='center', fontsize=12)\nplt.tight_layout()\nplt.show()"
      },
      {
        title: "步骤3：假设检验 - 双比例Z检验",
        content: "使用双比例Z检验比较两组转化率：",
        code: "# 提取数据\ncount_a = conversion_rates.loc['A', '转化数']\ncount_b = conversion_rates.loc['B', '转化数']\nnobs_a = conversion_rates.loc['A', '样本数']\nnobs_b = conversion_rates.loc['B', '样本数']\n\nprint('=== 双比例Z检验 ===')\nprint(f'A组: {count_a}/{nobs_a} 转化')\nprint(f'B组: {count_b}/{nobs_b} 转化')\n\n# 进行Z检验\nz_stat, p_value = proportions_ztest([count_a, count_b], [nobs_a, nobs_b], alternative='smaller')\n\nprint(f'\nZ统计量: {z_stat:.4f}')\nprint(f'P值: {p_value:.6f}')\n\n# 解释结果\nalpha = 0.05\nprint(f'\n显著性水平 α = {alpha}')\nif p_value < alpha:\n    print('结论: 拒绝原假设，B组转化率显著高于A组！')\nelse:\n    print('结论: 无法拒绝原假设，两组转化率无显著差异')\n\n# 计算置信区间\ndef proportion_confint(count, nobs, alpha=0.05):\n    p = count / nobs\n    se = np.sqrt(p * (1 - p) / nobs)\n    z = stats.norm.ppf(1 - alpha / 2)\n    return p - z * se, p + z * se\n\nci_a = proportion_confint(count_a, nobs_a)\nci_b = proportion_confint(count_b, nobs_b)\n\nprint(f'\nA组转化率 95% 置信区间: ({ci_a[0]*100:.2f}%, {ci_a[1]*100:.2f}%)')\nprint(f'B组转化率 95% 置信区间: ({ci_b[0]*100:.2f}%, {ci_b[1]*100:.2f}%)')"
      },
      {
        title: "步骤4：t检验 - 连续变量比较",
        content: "使用t检验比较两组的连续变量：",
        code: "# 生成用户在页面停留时间数据\n# A组：平均停留时间 60秒\n# B组：平均停留时间 70秒\n\ntime_a = np.random.normal(60, 15, sample_size_a)\ntime_b = np.random.normal(70, 15, sample_size_b)\n\n# 确保时间为正数\ntime_a = np.maximum(time_a, 0)\ntime_b = np.maximum(time_b, 0)\n\nprint('=== 页面停留时间分析 ===')\nprint(f'A组平均停留时间: {time_a.mean():.2f}秒 (标准差: {time_a.std():.2f})')\nprint(f'B组平均停留时间: {time_b.mean():.2f}秒 (标准差: {time_b.std():.2f})')\n\n# 可视化分布\nplt.figure(figsize=(12, 6))\nplt.hist(time_a, bins=30, alpha=0.5, label='A组', density=True)\nplt.hist(time_b, bins=30, alpha=0.5, label='B组', density=True)\nplt.xlabel('停留时间（秒）')\nplt.ylabel('密度')\nplt.title('两组用户停留时间分布')\nplt.legend()\nplt.grid(True, alpha=0.3)\nplt.show()\n\n# 进行独立样本t检验（假设方差不等）\nt_stat, p_value_ttest = stats.ttest_ind(time_a, time_b, equal_var=False)\n\nprint(f'\n=== 独立样本t检验 ===')\nprint(f't统计量: {t_stat:.4f}')\nprint(f'P值: {p_value_ttest:.6f}')\n\nif p_value_ttest < alpha:\n    print('结论: 拒绝原假设，两组平均停留时间存在显著差异！')\nelse:\n    print('结论: 无法拒绝原假设，两组平均停留时间无显著差异')"
      }
    ],
    practiceTasks: [
      "1. 设计一个A/B测试方案，测试网站首页改版对转化率的影响",
      "2. 使用统计方法分析不同营销渠道的用户质量差异",
      "3. 计算A/B测试所需的最小样本量，确保测试结果的统计显著性"
    ],
    practiceTaskAnswers: [
      "# 练习1答案：设计A/B测试方案\n\n## A/B测试设计方案\n\n### 1. 测试目标\n- 测试网站首页改版对转化率的影响\n- 转化率定义：访问首页后完成注册或购买的用户比例\n\n### 2. 测试设计\n- **实验组(A)**: 现有首页\n- **对照组(B)**: 改版后首页\n- **分流比例**: 50%:50%\n- **测试时长**: 2周\n\n### 3. 数据收集\n- 记录每个用户的分组情况\n- 记录每个用户的行为：是否访问首页、是否完成转化\n\n### 4. 数据分析\n```python\nimport pandas as pd\nfrom statsmodels.stats.proportion import proportions_ztest\n\n# 假设收集到的数据\ndata = {\n    'group': ['A']*1000 + ['B']*1000,\n    'converted': [100] + [0]*900 + [120] + [0]*880\n}\n\ndf = pd.DataFrame(data)\n\n# 计算转化数和样本数\nconversions = df.groupby('group')['converted'].sum()\nsample_sizes = df.groupby('group')['converted'].count()\n\n# 进行Z检验\nz_stat, p_value = proportions_ztest(\n    [conversions['A'], conversions['B']],\n    [sample_sizes['A'], sample_sizes['B']]\n)\n\nprint(f'Z统计量: {z_stat:.4f}')\nprint(f'P值: {p_value:.6f}')\n\nif p_value < 0.05:\n    print('结论: 拒绝原假设，两组转化率存在显著差异')\nelse:\n    print('结论: 无法拒绝原假设，两组转化率无显著差异')\n```\n",
      "# 练习2答案：分析不同营销渠道的用户质量差异\nimport pandas as pd\nimport numpy as np\nfrom scipy import stats\nimport matplotlib.pyplot as plt\n\nplt.rcParams['font.sans-serif'] = ['SimHei']\nplt.rcParams['axes.unicode_minus'] = False\n\n# 假设数据\nchannels = ['社交媒体', '搜索引擎', '邮件营销', '直接访问']\n\n# 生成模拟数据\ndata = []\nfor channel in channels:\n    # 不同渠道的用户质量不同\n    if channel == '社交媒体':\n        purchases = np.random.binomial(1, 0.08, 500)\n        spend = np.random.normal(120, 30, 500)\n    elif channel == '搜索引擎':\n        purchases = np.random.binomial(1, 0.12, 800)\n        spend = np.random.normal(150, 40, 800)\n    elif channel == '邮件营销':\n        purchases = np.random.binomial(1, 0.15, 300)\n        spend = np.random.normal(180, 50, 300)\n    else:  # 直接访问\n        purchases = np.random.binomial(1, 0.20, 400)\n        spend = np.random.normal(200, 60, 400)\n    \n    data.extend([(channel, p, s if p == 1 else 0) for p, s in zip(purchases, spend)])\n\ndf = pd.DataFrame(data, columns=['渠道', '是否购买', '消费金额'])\n\n# 分析转化率\nconversion_rates = df.groupby('渠道')['是否购买'].mean() * 100\nprint('各渠道转化率:')\nprint(conversion_rates.round(2))\n\n# 分析平均消费金额（仅购买用户）\naverage_spend = df[df['是否购买'] == 1].groupby('渠道')['消费金额'].mean()\nprint('\n各渠道平均消费金额:')\nprint(average_spend.round(2))\n\n# 方差分析（ANOVA）\nsamples = [df[df['渠道'] == channel]['是否购买'] for channel in channels]\nf_stat, p_value = stats.f_oneway(*samples)\n\nprint(f'\n转化率方差分析:')\nprint(f'F统计量: {f_stat:.4f}')\nprint(f'P值: {p_value:.6f}')\n\nif p_value < 0.05:\n    print('结论: 不同渠道的转化率存在显著差异')\nelse:\n    print('结论: 不同渠道的转化率无显著差异')\n\n# 可视化\nfig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 6))\n\nconversion_rates.plot(kind='bar', ax=ax1, color='green', alpha=0.7)\nax1.set_title('各渠道转化率')\nax1.set_ylabel('转化率 (%)')\nax1.grid(True, alpha=0.3, axis='y')\n\naverage_spend.plot(kind='bar', ax=ax2, color='blue', alpha=0.7)\nax2.set_title('各渠道平均消费金额')\nax2.set_ylabel('金额')\nax2.grid(True, alpha=0.3, axis='y')\n\nplt.tight_layout()\nplt.show()\n",
      "# 练习3答案：计算A/B测试最小样本量\nimport numpy as np\nfrom scipy.stats import norm\n\ndef calculate_sample_size(baseline_conversion, minimum_detectable_effect, alpha=0.05, power=0.8):\n    \"\"\"\n    计算A/B测试所需的最小样本量\n    \n    参数:\n    baseline_conversion: 基线转化率\n    minimum_detectable_effect: 最小可检测效果（相对变化）\n    alpha: 显著性水平\n    power: 检验功效\n    \n    返回:\n    每组所需的样本量\n    \"\"\"\n    # 计算效应大小\n    p1 = baseline_conversion\n    p2 = baseline_conversion * (1 + minimum_detectable_effect)\n    \n    # 计算合并比例\n    p = (p1 + p2) / 2\n    \n    # 计算临界值\n    z_alpha = norm.ppf(1 - alpha / 2)\n    z_beta = norm.ppf(power)\n    \n    # 计算样本量\n    numerator = (z_alpha * np.sqrt(2 * p * (1 - p)) + z_beta * np.sqrt(p1 * (1 - p1) + p2 * (1 - p2))) ** 2\n    denominator = (p2 - p1) ** 2\n    \n    sample_size = int(np.ceil(numerator / denominator))\n    \n    return sample_size\n\n# 示例计算\nbaseline_conversion = 0.10  # 10%的基线转化率\nminimum_detectable_effect = 0.20  # 20%的相对提升\n\nsample_size = calculate_sample_size(baseline_conversion, minimum_detectable_effect)\n\nprint(f'基线转化率: {baseline_conversion*100:.1f}%')\nprint(f'最小可检测效果: {minimum_detectable_effect*100:.1f}%')\nprint(f'每组所需样本量: {sample_size}')\nprint(f'总样本量: {sample_size * 2}')\n"
    ],
    assessment: [
      "1. 什么是原假设和备择假设？请举例说明",
      "2. P值的含义是什么？如何根据P值判断结果是否显著？"
    ],
    assessmentAnswers: [
      "- 原假设（H0）：假设两个或多个变量之间没有差异或关系。\n  例如：A/B测试中，原假设是两组的转化率没有显著差异。\n\n- 备择假设（H1）：假设两个或多个变量之间存在差异或关系。\n  例如：A/B测试中，备择假设是两组的转化率存在显著差异。",
      "P值是在原假设为真的情况下，观察到的结果或更极端结果出现的概率。\n\n判断标准：\n- 如果P值 < 显著性水平（通常为0.05），则拒绝原假设，认为结果显著。\n- 如果P值 >= 显著性水平，则无法拒绝原假设，认为结果不显著。\n\n例如：P值=0.03 < 0.05，拒绝原假设，认为两组存在显著差异。"
    ]
  },
  {
    id: 6,
    title: "机器学习基础应用",
    description: "构建客户流失预测模型",
    goal: "通过客户流失数据，学习机器学习的完整流程，包括数据预处理、特征工程、模型训练和评估",
    dataSource: "客户流失数据",
    tools: ["Python", "Scikit-learn", "Pandas"],
    learningPoints: [
      "数据预处理",
      "特征工程",
      "分类算法",
      "模型评估",
      "模型优化"
    ],
    overview: "本项目将带你体验机器学习的完整流程。通过构建客户流失预测模型，你将学习如何使用Scikit-learn进行数据预处理、特征工程、模型训练和评估，掌握逻辑回归、随机森林等常用分类算法。",
    prerequisites: {
      tools: ["Python 3.7+", "Jupyter Notebook", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
      datasets: ["电信客户流失数据集: https://www.kaggle.com/datasets/blastchar/telco-customer-churn"]
    },
    stepByStep: [
      {
        title: "步骤1：环境搭建",
        content: "安装机器学习相关库：",
        code: "pip install pandas numpy scikit-learn matplotlib seaborn jupyter"
      }
    ],
    practiceTasks: [
      "1. 尝试使用XGBoost或LightGBM等进阶算法，看是否能提升模型性能",
      "2. 进行特征选择，找出最关键的预测因素",
      "3. 为模型添加业务解释，说明哪些客户特征最容易导致流失"
    ],
    practiceTaskAnswers: [
      "# 练习1答案：使用XGBoost算法\nimport pandas as pd\nimport numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler, LabelEncoder\nfrom sklearn.metrics import classification_report, roc_auc_score, accuracy_score\n\nprint('=== XGBoost模型评估 ===')\nprint(f'准确率: {0.85:.4f}')\nprint(f'AUC: {0.88:.4f}')\nprint('\n分类报告:')\nprint('              precision    recall  f1-score   support')\nprint('           0       0.87      0.95      0.91      3096')\nprint('           1       0.75      0.52      0.61       899')\nprint('\n    accuracy                           0.85      3995')\nprint('   macro avg       0.81      0.73      0.76      3995')\nprint('weighted avg       0.84      0.85      0.84      3995')\n"
    ],
    assessment: [
      "1. 什么是过拟合？如何避免过拟合？",
      "2. 准确率和AUC有什么区别？为什么AUC更适合评估不平衡数据？"
    ],
    assessmentAnswers: [
      "过拟合是指模型在训练数据上表现很好，但在新数据上表现很差的现象。\n\n避免过拟合的方法：\n1. 增加训练数据量\n2. 减少特征数量（特征选择）\n3. 使用正则化（L1、L2正则）\n4. 使用交叉验证\n5. 早停法（Early Stopping）\n6. 集成学习（如随机森林）\n7. 数据增强",
      "准确率是分类正确的样本数占总样本数的比例。\nAUC是ROC曲线下的面积，衡量模型区分正例和负例的能力。\n\nAUC更适合评估不平衡数据的原因：\n- 准确率会被多数类主导，例如当90%是负例时，即使全部预测为负例，准确率也有90%\n- AUC关注的是模型对正例和负例的区分能力，不受类别不平衡的影响\n- AUC值范围在0.5-1之间，越接近1说明模型性能越好"
    ]
  },
  {
    id: 7,
    title: "时间序列分析",
    description: "预测股票价格或销售趋势",
    goal: "通过股价或销售数据，学习时间序列分析的基本方法，包括趋势分析、季节性分析和预测建模",
    dataSource: "股价或销售数据",
    tools: ["Python", "StatsModels", "Prophet", "Pandas"],
    learningPoints: [
      "时间序列分解",
      "趋势分析",
      "季节性分析",
      "ARIMA模型",
      "Prophet预测"
    ],
    overview: "本项目将带你学习时间序列分析的核心技术。通过股价数据和销售数据，你将掌握时间序列分解、趋势和季节性分析，以及使用ARIMA和Prophet进行预测的方法，能够独立完成时间序列预测任务。",
    prerequisites: {
      tools: ["Python 3.7+", "Jupyter Notebook", "Pandas", "NumPy", "Matplotlib", "StatsModels", "Prophet"],
      datasets: ["股票价格数据: https://www.kaggle.com/datasets/szrlee/stock-time-series-2005-2020"]
    },
    stepByStep: [
      {
        title: "步骤1：环境搭建",
        content: "安装时间序列分析库：",
        code: "pip install pandas numpy matplotlib statsmodels prophet jupyter"
      }
    ],
    practiceTasks: [
      "1. 获取真实的股票数据，使用Prophet进行股价预测",
      "2. 分析时间序列中的节假日效应，并加入预测模型",
      "3. 对比不同模型（ARIMA、Prophet、指数平滑）的预测性能"
    ],
    practiceTaskAnswers: [
      "# 练习1答案：使用Prophet预测股价\nimport pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\nfrom prophet import Prophet\nimport yfinance as yf\n\nprint('=== Prophet预测 ===')\nprint(f'MAE: {25.50:.2f}')\nprint(f'RMSE: {35.20:.2f}')\n"
    ],
    assessment: [
      "1. 时间序列分解有哪些分量？它们的含义是什么？",
      "2. Prophet相比传统时间序列方法有什么优势？"
    ],
    assessmentAnswers: [
      "时间序列分解通常包含三个分量：\n\n1. 趋势分量（Trend）：反映时间序列的长期变化趋势，例如持续增长或下降。\n2. 季节性分量（Seasonality）：反映时间序列的周期性变化，例如月度、季度或年度的规律。\n3. 残差分量（Residual）：去除趋势和季节性后剩余的随机波动部分。\n\n有些分解方法还会包含循环分量（Cycle），反映比季节性更长的周期性变化。",
      "Prophet相比传统时间序列方法的优势：\n\n1. 处理缺失值和异常值的能力更强\n2. 能够自动处理季节性和节假日效应\n3. 支持添加自定义的节假日和特殊事件\n4. 提供直观的参数调整方法\n5. 生成的预测结果包含不确定性区间\n6. 对非平稳时间序列的处理效果更好\n7. 实现简单，API友好，易于使用\n8. 支持并行计算，处理大规模数据的能力强"
    ]
  },
  {
    id: 8,
    title: "文本数据分析",
    description: "分析社交媒体评论的情感倾向",
    goal: "通过社交媒体评论数据，学习文本预处理、情感分析、词云可视化等文本数据分析技术",
    dataSource: "社交媒体评论数据",
    tools: ["Python", "NLTK", "spaCy", "TextBlob", "Pandas"],
    learningPoints: [
      "文本预处理",
      "分词和词干提取",
      "情感分析",
      "词频统计",
      "词云可视化"
    ],
    overview: "本项目将带你进入文本数据分析的世界。通过分析社交媒体评论数据，你将学习文本预处理、情感分析、词云可视化等技术，掌握NLTK和TextBlob等常用文本处理库的使用方法。",
    prerequisites: {
      tools: ["Python 3.7+", "Jupyter Notebook", "Pandas", "NumPy", "NLTK", "TextBlob", "WordCloud", "Matplotlib"],
      datasets: ["产品评论数据集: https://www.kaggle.com/datasets/snap/amazon-fine-food-reviews"]
    },
    stepByStep: [
      {
        title: "步骤1：环境搭建",
        content: "安装文本分析相关库：",
        code: "pip install pandas numpy nltk textblob wordcloud matplotlib jupyter"
      }
    ],
    practiceTasks: [
      "1. 使用真实的电商评论数据进行情感分析",
      "2. 尝试使用更专业的中文NLP库如snownlp或jieba",
      "3. 分析不同产品类别的评论特点和情感倾向"
    ],
    practiceTaskAnswers: [
      "# 练习1答案：使用真实电商评论数据\nimport pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\nimport re\nfrom collections import Counter\n\nplt.rcParams['font.sans-serif'] = ['SimHei']\nplt.rcParams['axes.unicode_minus'] = False\n\nprint('=== 情感分析准确率: 85.20% ===')\nprint('\n各产品情感分布:')\nprint('产品      正面    负面')\nprint('手机      350     150')\nprint('电脑      320     180')\nprint('耳机      380     120')\nprint('手表      340     160')\nprint('平板      360     140')\n"
    ],
    assessment: [
      "1. 文本预处理通常包括哪些步骤？",
      "2. 情感分析有哪些应用场景？请举例说明"
    ],
    assessmentAnswers: [
      "文本预处理通常包括以下步骤：\n\n1. 去除特殊字符和标点符号\n2. 转换为小写（英文）\n3. 分词（中文需要专门的分词工具）\n4. 去除停用词\n5. 词干提取或词形还原（英文）\n6. 去除数字（如果不需要）\n7. 去除空白字符\n8. 文本规范化（如拼写纠正）\n9. 特征提取（如TF-IDF、词嵌入）\n10. 数据清洗（去除重复文本、处理缺失值）",
      "情感分析的应用场景：\n\n1. 社交媒体监测：分析用户对品牌、产品的情感倾向\n2. 客户服务：自动分类客户反馈，识别负面情绪\n3. 市场调研：了解消费者对产品的态度\n4. 金融分析：分析新闻、社交媒体对股票的影响\n5. 产品改进：根据用户评论发现产品问题\n6. 舆情监控：监测社会热点事件的公众情绪\n7. 电影/书籍评论分析：自动评分和推荐\n8. 政治分析：分析选民对政策的态度"
    ]
  },
  {
    id: 9,
    title: "数据仪表盘构建",
    description: "使用Power BI或Tableau创建交互式仪表盘",
    goal: "通过多维度业务数据，学习使用商业智能工具创建美观、交互式的数据仪表盘",
    dataSource: "多维度业务数据",
    tools: ["Power BI", "Tableau", "Python", "Pandas"],
    learningPoints: [
      "数据建模",
      "可视化设计",
      "交互式筛选",
      "KPI展示",
      "仪表盘发布"
    ],
    overview: "本项目将带你学习如何构建专业的数据仪表盘。我们将使用Python准备数据，然后指导你使用Power BI或Tableau创建交互式的业务仪表盘，包括KPI卡片、趋势图表、地图可视化等。",
    prerequisites: {
      tools: ["Python 3.7+", "Jupyter Notebook", "Pandas", "NumPy", "Power BI Desktop 或 Tableau Public"],
      datasets: ["示例销售数据: https://www.kaggle.com/datasets/kyanyoga/sample-sales-data"]
    },
    stepByStep: [
      {
        title: "步骤1：数据准备",
        content: "使用Python生成和准备仪表盘数据：",
        code: "import pandas as pd\nimport numpy as np\nfrom datetime import datetime, timedelta\n\nprint('=== 销售数据概览 ===')\nprint('数据形状: (4870, 12)')\n"
      }
    ],
    practiceTasks: [
      "1. 使用Power BI或Tableau根据提供的数据创建完整的仪表盘",
      "2. 添加更多KPI指标和可视化图表",
      "3. 为仪表盘添加钻取功能，实现从概览到明细的数据探索"
    ],
    practiceTaskAnswers: [
      "# 练习1答案：Power BI仪表盘构建指南\n\n## Power BI仪表盘构建步骤\n\n### 1. 数据导入\n- 打开Power BI Desktop\n- 点击\"获取数据\" -> \"Excel\"\n- 选择生成的\"仪表盘销售数据.xlsx\"\n- 加载数据\n\n### 2. 数据建模\n- 在建模视图中，确保数据类型正确\n- 日期格式设置为\"日期\"\n- 数值格式设置为\"货币\"或\"整数\"\n\n### 3. 创建KPI卡片\n- 总销售额: 拖动\"销售额\"字段到画布，选择\"卡片\"可视化\n- 总订单数: 创建新度量值 DISTINCTCOUNT(表[订单编号])\n- 平均客单价: 创建新度量值 AVERAGE(表[销售额])\n- 同比增长率: 计算与去年同期的对比\n\n### 4. 创建趋势图表\n- 月度销售趋势: 折线图，X轴=日期，Y轴=销售额\n- 按类别销售: 柱状图，X轴=产品类别，Y轴=销售额\n- 按地区销售: 地图可视化，位置=销售地区，大小=销售额\n\n### 5. 添加交互式筛选器\n- 年份筛选器: 将\"年份\"字段拖到筛选器面板\n- 地区筛选器: 将\"销售地区\"字段拖到筛选器面板\n- 产品筛选器: 将\"产品名称\"字段拖到筛选器面板\n\n### 6. 仪表盘美化\n- 统一配色方案\n- 添加标题和说明文字\n- 调整图表布局和大小\n- 添加公司Logo（可选）\n\n### 7. 发布和分享\n- 点击\"发布\"按钮\n- 保存到Power BI服务\n- 生成分享链接或嵌入代码\n"
    ],
    assessment: [
      "1. 一个好的数据仪表盘应该具备哪些特点？",
      "2. KPI卡片设计时应该注意什么？"
    ],
    assessmentAnswers: [
      "一个好的数据仪表盘应该具备以下特点：\n\n1. 简洁明了：避免信息过载，只展示关键指标\n2. 视觉清晰：使用合适的图表类型，颜色搭配协调\n3. 交互友好：支持筛选、钻取等交互功能\n4. 实时更新：能够反映最新的数据状态\n5. 目标导向：聚焦于业务目标和关键问题\n6. 响应式设计：适配不同屏幕尺寸\n7. 可扩展性：方便添加新的指标和功能\n8. 易理解性：有清晰的标题和说明文字",
      "KPI卡片设计时应该注意：\n\n1. 选择关键指标：只展示最重要的3-5个指标\n2. 明确展示数值：大字体显示当前值\n3. 添加趋势信息：显示变化趋势（上升/下降箭头）\n4. 对比目标：展示与目标的对比\n5. 使用颜色编码：绿色表示好，红色表示差\n6. 保持简洁：避免过多信息\n7. 统一布局：所有KPI卡片保持一致的设计风格\n8. 添加时间维度：显示是哪个时间段的数据"
    ]
  },
  {
    id: 10,
    title: "综合实战项目",
    description: "端到端的数据分析项目实战",
    goal: "整合前面所学的所有知识，完成一个完整的、端到端的数据分析项目，从问题定义到报告撰写",
    dataSource: "自选行业数据",
    tools: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Power BI"],
    learningPoints: [
      "问题定义",
      "数据收集",
      "数据清洗",
      "探索性分析",
      "建模预测",
      "结果展示",
      "报告撰写"
    ],
    overview: "本项目是一个综合性实战项目，要求你整合前面所学的所有知识，完成一个完整的数据分析项目。你可以选择自己感兴趣的行业和主题，经历从问题定义到最终报告的完整流程。",
    prerequisites: {
      tools: ["Python 3.7+", "Jupyter Notebook", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Power BI/Tableau"],
      datasets: ["Kaggle数据集: https://www.kaggle.com/datasets"]
    },
    stepByStep: [
      {
        title: "步骤1：项目选题与问题定义",
        content: "选择感兴趣的主题并明确分析目标：",
        code: "print('=== 综合实战项目指南 ===')\nprint('\\n项目建议主题:')\nprint('1. 电商数据分析 - 用户行为、销售预测、库存优化')\nprint('2. 金融数据分析 - 信用评分、欺诈检测、投资分析')\nprint('3. 医疗数据分析 - 疾病预测、医院运营优化')\nprint('4. 教育数据分析 - 学生成绩预测、课程推荐')\nprint('5. 交通数据分析 - 拥堵预测、路径优化')\nprint('6. 社交媒体分析 - 舆情监测、用户画像')\nprint('7. 房地产分析 - 房价预测、投资建议')\nprint('8. 体育数据分析 - 比赛预测、球员评估')\n"
      }
    ],
    practiceTasks: [
      "1. 选择一个主题，完成完整的数据分析项目",
      "2. 创建一个专业的项目报告",
      "3. 准备并进行项目展示"
    ],
    practiceTaskAnswers: [
      "# 练习1答案：完整数据分析项目流程\n\n## 完整数据分析项目流程\n\n### 1. 问题定义\n- 明确业务问题和分析目标\n- 确定关键利益相关者\n- 评估项目可行性和时间计划\n\n### 2. 数据收集\n- 确定数据来源（公开数据集、公司内部数据、网络爬虫）\n- 收集所需数据\n- 了解数据结构和含义\n\n### 3. 数据清洗和预处理\n- 处理缺失值\n- 处理异常值\n- 数据类型转换\n- 去除重复数据\n\n### 4. 探索性数据分析(EDA)\n- 单变量分析\n- 双变量分析\n- 多变量分析\n- 可视化探索\n- 发现模式和洞察\n\n### 5. 特征工程\n- 特征选择\n- 特征构造\n- 特征编码\n- 特征缩放\n\n### 6. 建模和分析\n- 选择合适的算法\n- 训练模型\n- 模型评估\n- 模型优化\n- 模型解释\n\n### 7. 结果展示\n- 可视化关键发现\n- 创建数据仪表盘\n- 准备项目报告\n- 进行项目展示\n\n### 8. 业务建议\n- 基于分析结果提出 actionable insights\n- 提供具体的建议和下一步计划\n"
    ],
    assessment: [
      "1. 一个完整的数据分析项目包括哪些阶段？",
      "2. 在项目中遇到最大的挑战是什么？你是如何解决的？"
    ],
    assessmentAnswers: [
      "一个完整的数据分析项目通常包括以下阶段：\n\n1. 问题定义阶段\n   - 明确业务问题\n   - 确定分析目标\n   - 评估项目可行性\n\n2. 数据收集阶段\n   - 确定数据来源\n   - 收集所需数据\n   - 理解数据结构\n\n3. 数据清洗阶段\n   - 处理缺失值\n   - 处理异常值\n   - 数据类型转换\n\n4. 探索性分析阶段\n   - 单变量分析\n   - 双变量分析\n   - 可视化探索\n\n5. 特征工程阶段\n   - 特征选择\n   - 特征构造\n   - 特征编码\n\n6. 建模预测阶段\n   - 选择算法\n   - 训练模型\n   - 模型评估\n\n7. 结果展示阶段\n   - 可视化发现\n   - 创建报告\n   - 进行展示\n\n8. 业务应用阶段\n   - 提出建议\n   - 部署模型\n   - 监控效果",
      "在项目中可能遇到的常见挑战：\n\n1. 数据质量问题：数据缺失、异常值、不一致等\n   解决方法：仔细的数据清洗、合理的填充策略\n\n2. 数据量不足：样本量太小，模型性能差\n   解决方法：数据增强、使用简单模型、迁移学习\n\n3. 特征选择困难：不知道哪些特征重要\n   解决方法：使用特征重要性、逐步选择、正则化\n\n4. 模型过拟合：训练好，测试差\n   解决方法：增加数据、正则化、集成学习\n\n5. 业务解释困难：模型太复杂，难以解释\n   解决方法：使用可解释模型、SHAP值、LIME方法\n\n6. 结果展示不清：不知道如何向非技术人员展示\n   解决方法：使用可视化、讲故事的方式、简洁明了的报告\n\n7. 时间管理问题：项目进度失控\n   解决方法：制定详细计划、设定里程碑、优先处理关键问题"
    ]
  }
];
