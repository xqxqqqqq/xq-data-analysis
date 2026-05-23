export interface Project {
  id: number;
  title: string;
  description: string;
  goal: string;
  dataSource: string;
  tools: string[];
  learningPoints: string[];
  overview: string;
  duration: string;
  prerequisites: {
    tools: string[];
    datasets: string[];
  };
  stepByStep: {
    title: string;
    content: string;
    code?: string;
    tools?: string[];
    functions?: string[];
  }[];
  practiceTasks: string[];
  practiceTaskAnswers: string[];
  practiceTaskLinks?: string[];
  assessment: string[];
  assessmentAnswers: string[];
  dataset?: {
    filename: string;
    name: string;
    size: string;
    desc: string;
  };
  script?: {
    filename: string;
    name: string;
    size: string;
    desc: string;
  };
}
export const projects: Project[] = [
  {
    id: 1,
    title: "电商订单数据清洗",
    description: "学习数据清洗的核心技巧",
    goal: "通过处理电商订单数据集，掌握数据导入、缺失值处理、异常值检测和数据标准化等数据清洗技能",
    dataSource: "电商订单数据集",
    tools: ["Python", "Pandas", "NumPy"],
    learningPoints: [
      "数据读取和导入",
      "缺失值检测与处理",
      "异常值识别和处理",
      "数据类型转换",
      "数据去重和标准化"
    ],
    overview: "本项目将带你使用Python的Pandas库处理电商订单数据集，学习数据清洗的完整流程。通过本项目的学习，你将掌握数据读取、缺失值处理、异常值检测和数据标准化等核心技能，为后续的数据分析打下坚实基础。",
    duration: "30分钟",
    prerequisites: {
      tools: ["无前置要求，本项目会从零开始讲解"],
      datasets: ["项目已内置模拟数据，无需额外下载"]
    },
    stepByStep: [
      {
        title: "步骤1：创建模拟数据",
        content: "创建一个模拟的电商订单数据集，包括订单ID、客户ID、产品类别、数量、价格、日期和地区等字段，并人为添加一些缺失值和异常值用于后续练习。",
        code: "import pandas as pd\nimport numpy as np\n\n# 创建模拟数据\nnp.random.seed(42)\ndata = {\n    'order_id': np.arange(1, 101),\n    'customer_id': np.random.randint(1001, 1020, 100),\n    'product_category': np.random.choice(['电子产品', '服装', '食品', '家居', '图书'], 100),\n    'quantity': np.random.randint(1, 10, 100),\n    'price': np.random.uniform(10, 500, 100).round(2),\n    'order_date': pd.date_range(start='2024-01-01', periods=100, freq='D'),\n    'region': np.random.choice(['华北', '华东', '华南', '西南', '西北'], 100)\n}\n\norders_df = pd.DataFrame(data)\norders_df['amount'] = orders_df['quantity'] * orders_df['price']\n\n# 人为添加一些缺失值和异常值\norders_df.loc[np.random.choice(100, 10), 'quantity'] = np.nan\norders_df.loc[np.random.choice(100, 5), 'price'] = np.nan\norders_df.loc[np.random.choice(100, 3), 'quantity'] = 100  # 异常值\n\nprint('数据创建完成！')\nprint(f'数据形状: {orders_df.shape}')\nprint('\\n前5行数据:')\nprint(orders_df.head())",
        tools: ["pandas", "numpy"],
        functions: ["pd.DataFrame()", "np.random.seed()", "np.random.randint()", "np.random.choice()", "np.random.uniform()", "pd.date_range()", "df.loc[]"]
      },
      {
        title: "步骤2：数据质量检查",
        content: "检查数据的基本信息和质量问题，包括数据形状、数据类型、缺失值、重复值和数值统计信息。",
        code: "import pandas as pd\nimport numpy as np\n\n# 重新创建数据（独立运行）\nnp.random.seed(42)\ndata = {\n    'order_id': np.arange(1, 101),\n    'customer_id': np.random.randint(1001, 1020, 100),\n    'product_category': np.random.choice(['电子产品', '服装', '食品', '家居', '图书'], 100),\n    'quantity': np.random.randint(1, 10, 100),\n    'price': np.random.uniform(10, 500, 100).round(2),\n    'order_date': pd.date_range(start='2024-01-01', periods=100, freq='D'),\n    'region': np.random.choice(['华北', '华东', '华南', '西南', '西北'], 100)\n}\norders_df = pd.DataFrame(data)\norders_df['amount'] = orders_df['quantity'] * orders_df['price']\norders_df.loc[np.random.choice(100, 10), 'quantity'] = np.nan\norders_df.loc[np.random.choice(100, 5), 'price'] = np.nan\norders_df.loc[np.random.choice(100, 3), 'quantity'] = 100\n\n# 查看数据形状\nprint('数据形状:', orders_df.shape)\n\n# 查看数据信息\nprint('\\n数据信息:')\norders_df.info()\n\n# 查看缺失值\nprint('\\n缺失值统计:')\nprint(orders_df.isnull().sum())\n\n# 查看重复值\nprint('\\n重复值数量:', orders_df.duplicated().sum())\n\n# 查看数值型数据的统计信息\nprint('\\n数值型数据统计:')\nprint(orders_df.describe())",
        tools: ["pandas"],
        functions: ["df.shape", "df.info()", "df.isnull()", "df.duplicated()", "df.describe()"]
      },
      {
        title: "步骤3：缺失值处理",
        content: "处理数据中的缺失值，对于数值型列使用中位数填充，这是一种常用的缺失值处理方法，可以避免极端值的影响。",
        code: "import pandas as pd\nimport numpy as np\n\n# 重新创建数据（独立运行）\nnp.random.seed(42)\ndata = {\n    'order_id': np.arange(1, 101),\n    'customer_id': np.random.randint(1001, 1020, 100),\n    'product_category': np.random.choice(['电子产品', '服装', '食品', '家居', '图书'], 100),\n    'quantity': np.random.randint(1, 10, 100),\n    'price': np.random.uniform(10, 500, 100).round(2),\n    'order_date': pd.date_range(start='2024-01-01', periods=100, freq='D'),\n    'region': np.random.choice(['华北', '华东', '华南', '西南', '西北'], 100)\n}\norders_df = pd.DataFrame(data)\norders_df['amount'] = orders_df['quantity'] * orders_df['price']\norders_df.loc[np.random.choice(100, 10), 'quantity'] = np.nan\norders_df.loc[np.random.choice(100, 5), 'price'] = np.nan\n\nprint('处理前缺失值统计:')\nprint(orders_df.isnull().sum())\n\n# 对于数值型列，用中位数填充\nnumeric_cols = orders_df.select_dtypes(include=[np.number]).columns\nfor col in numeric_cols:\n    if orders_df[col].isnull().sum() > 0:\n        orders_df[col].fillna(orders_df[col].median(), inplace=True)\n\n# 再次检查缺失值\nprint('\\n处理后缺失值统计:')\nprint(orders_df.isnull().sum())",
        tools: ["pandas", "numpy"],
        functions: ["df.select_dtypes()", "df.fillna()", "df.median()", "df.isnull()"]
      },
      {
        title: "步骤4：异常值检测",
        content: "使用IQR（四分位距）方法检测和处理异常值。IQR方法是一种稳健的异常值检测方法，不受极端值影响。",
        code: "import pandas as pd\nimport numpy as np\n\n# 重新创建数据（独立运行）\nnp.random.seed(42)\ndata = {\n    'order_id': np.arange(1, 101),\n    'customer_id': np.random.randint(1001, 1020, 100),\n    'product_category': np.random.choice(['电子产品', '服装', '食品', '家居', '图书'], 100),\n    'quantity': np.random.randint(1, 10, 100),\n    'price': np.random.uniform(10, 500, 100).round(2),\n    'order_date': pd.date_range(start='2024-01-01', periods=100, freq='D'),\n    'region': np.random.choice(['华北', '华东', '华南', '西南', '西北'], 100)\n}\norders_df = pd.DataFrame(data)\norders_df['amount'] = orders_df['quantity'] * orders_df['price']\norders_df.loc[np.random.choice(100, 10), 'quantity'] = np.nan\norders_df.loc[np.random.choice(100, 5), 'price'] = np.nan\norders_df.loc[np.random.choice(100, 3), 'quantity'] = 100\n\n# 填充缺失值\nnumeric_cols = orders_df.select_dtypes(include=[np.number]).columns\nfor col in numeric_cols:\n    if orders_df[col].isnull().sum() > 0:\n        orders_df[col].fillna(orders_df[col].median(), inplace=True)\n\nprint('处理前数据统计:')\nprint(orders_df[['quantity', 'price', 'amount']].describe())\n\n# 对数值型列进行异常值检测\nfor col in ['quantity', 'price', 'amount']:\n    Q1 = orders_df[col].quantile(0.25)\n    Q3 = orders_df[col].quantile(0.75)\n    IQR = Q3 - Q1\n    lower_bound = Q1 - 1.5 * IQR\n    upper_bound = Q3 + 1.5 * IQR\n    \n    # 替换异常值为上下限\n    orders_df[col] = np.where(orders_df[col] < lower_bound, lower_bound, orders_df[col])\n    orders_df[col] = np.where(orders_df[col] > upper_bound, upper_bound, orders_df[col])\n\nprint('\\n异常值处理完成！')\nprint('\\n处理后数据统计:')\nprint(orders_df[['quantity', 'price', 'amount']].describe())",
        tools: ["pandas", "numpy"],
        functions: ["df.quantile()", "np.where()"]
      },
      {
        title: "步骤5：数据标准化",
        content: "对数据进行去重和标准化处理，删除重复记录，统一文本格式，确保数据的一致性和准确性。",
        code: "import pandas as pd\nimport numpy as np\n\n# 重新创建数据（独立运行）\nnp.random.seed(42)\ndata = {\n    'order_id': np.arange(1, 101),\n    'customer_id': np.random.randint(1001, 1020, 100),\n    'product_category': np.random.choice(['电子产品', '服装', '食品', '家居', '图书'], 100),\n    'quantity': np.random.randint(1, 10, 100),\n    'price': np.random.uniform(10, 500, 100).round(2),\n    'order_date': pd.date_range(start='2024-01-01', periods=100, freq='D'),\n    'region': np.random.choice(['华北', '华东', '华南', '西南', '西北'], 100)\n}\norders_df = pd.DataFrame(data)\norders_df['amount'] = orders_df['quantity'] * orders_df['price']\norders_df.loc[np.random.choice(100, 10), 'quantity'] = np.nan\norders_df.loc[np.random.choice(100, 5), 'price'] = np.nan\norders_df.loc[np.random.choice(100, 3), 'quantity'] = 100\n\n# 填充缺失值\nnumeric_cols = orders_df.select_dtypes(include=[np.number]).columns\nfor col in numeric_cols:\n    if orders_df[col].isnull().sum() > 0:\n        orders_df[col].fillna(orders_df[col].median(), inplace=True)\n\n# 处理异常值\nfor col in ['quantity', 'price', 'amount']:\n    Q1 = orders_df[col].quantile(0.25)\n    Q3 = orders_df[col].quantile(0.75)\n    IQR = Q3 - Q1\n    lower_bound = Q1 - 1.5 * IQR\n    upper_bound = Q3 + 1.5 * IQR\n    orders_df[col] = np.where(orders_df[col] < lower_bound, lower_bound, orders_df[col])\n    orders_df[col] = np.where(orders_df[col] > upper_bound, upper_bound, orders_df[col])\n\n# 删除重复值（如果有）\norders_df.drop_duplicates(inplace=True)\n\n# 文本列统一格式\nif 'product_category' in orders_df.columns:\n    orders_df['product_category'] = orders_df['product_category'].str.strip()\n\nprint('数据清洗完成！')\nprint('最终数据形状:', orders_df.shape)\nprint('\\n清洗后数据预览:')\nprint(orders_df.head())",
        tools: ["pandas"],
        functions: ["df.drop_duplicates()", "df.str.strip()"]
      }
    ],
    practiceTasks: [
      "1. 统计每个产品类别的订单数量和平均金额",
      "2. 找出订单金额最高的前10个客户",
      "3. 分析订单日期的分布情况"
    ],
    practiceTaskAnswers: [
      "# 练习1答案\nimport pandas as pd\nimport numpy as np\n\n# 创建模拟数据\nnp.random.seed(42)\ndata = {\n    'order_id': np.arange(1, 101),\n    'customer_id': np.random.randint(1001, 1020, 100),\n    'product_category': np.random.choice(['电子产品', '服装', '食品', '家居', '图书'], 100),\n    'quantity': np.random.randint(1, 10, 100),\n    'price': np.random.uniform(10, 500, 100).round(2),\n    'order_date': pd.date_range(start='2024-01-01', periods=100, freq='D')\n}\norders_df = pd.DataFrame(data)\norders_df['amount'] = orders_df['quantity'] * orders_df['price']\n\n# 统计每个产品类别的订单数量和平均金额\nif 'product_category' in orders_df.columns and 'amount' in orders_df.columns:\n    category_stats = orders_df.groupby('product_category').agg({\n        'order_id': 'count',\n        'amount': 'mean'\n    }).round(2)\n    \n    category_stats.columns = ['订单数量', '平均金额']\n    print('产品类别统计:')\n    print(category_stats)\n",
      "# 练习2答案\nimport pandas as pd\nimport numpy as np\n\n# 创建模拟数据\nnp.random.seed(42)\ndata = {\n    'order_id': np.arange(1, 101),\n    'customer_id': np.random.randint(1001, 1020, 100),\n    'product_category': np.random.choice(['电子产品', '服装', '食品', '家居', '图书'], 100),\n    'quantity': np.random.randint(1, 10, 100),\n    'price': np.random.uniform(10, 500, 100).round(2)\n}\norders_df = pd.DataFrame(data)\norders_df['amount'] = orders_df['quantity'] * orders_df['price']\n\n# 找出订单金额最高的前10个客户\nif 'customer_id' in orders_df.columns and 'amount' in orders_df.columns:\n    top_customers = orders_df.groupby('customer_id')['amount'].sum()\\\n        .sort_values(ascending=False).head(10)\n    \n    print('订单金额最高的前10个客户:')\n    print(top_customers)\n",
      "# 练习3答案\nimport pandas as pd\nimport numpy as np\n\n# 创建模拟数据\nnp.random.seed(42)\ndata = {\n    'order_id': np.arange(1, 101),\n    'order_date': pd.date_range(start='2024-01-01', periods=100, freq='D'),\n    'quantity': np.random.randint(1, 10, 100),\n    'price': np.random.uniform(10, 500, 100).round(2)\n}\norders_df = pd.DataFrame(data)\norders_df['amount'] = orders_df['quantity'] * orders_df['price']\n\n# 分析订单日期的分布\nif 'order_date' in orders_df.columns:\n    orders_df['order_date'] = pd.to_datetime(orders_df['order_date'])\n    orders_df['month'] = orders_df['order_date'].dt.to_period('M')\n    \n    monthly_orders = orders_df.groupby('month').size()\n    \n    print('月度订单分布:')\n    print(monthly_orders)\n"
    ],
    assessment: [
      "1. 数据清洗的主要步骤有哪些？请简述",
      "2. 简述IQR方法检测异常值的原理"
    ],
    assessmentAnswers: [
      "数据清洗的主要步骤包括：\\n1. 数据质量检查：查看数据形状、类型、缺失值、重复值等\\n2. 缺失值处理：用均值/中位数/众数填充或删除\\n3. 异常值检测：用IQR、Z-score等方法识别\\n4. 数据去重：删除重复的记录\\n5. 数据标准化：统一日期格式、文本格式等",
      "IQR（四分位距）方法检测异常值的原理：\\n1. 计算Q1（第25百分位数）和Q3（第75百分位数）\\n2. 计算IQR = Q3 - Q1\\n3. 定义异常值范围：小于Q1 - 1.5*IQR 或 大于Q3 + 1.5*IQR\\n4. 超出这个范围的数据被认为是异常值"
    ],
    dataset: {
      filename: "project1_orders.csv",
      name: "项目1 - 电商订单数据",
      size: "1.2KB",
      desc: "电商订单数据，包含订单ID、客户ID、产品类别、数量、价格、日期、地区等"
    }
  },
  {
    id: 2,
    title: "销售数据分组分析",
    description: "掌握数据分组和聚合分析",
    goal: "通过销售数据的分组聚合分析，学习groupby操作、多重索引和透视表等高级技巧",
    dataSource: "电商销售数据集",
    tools: ["Python", "Pandas"],
    learningPoints: [
      "groupby基础操作",
      "多重分组和聚合",
      "透视表和交叉表",
      "窗口函数",
      "数据聚合优化"
    ],
    overview: "本项目将带你深入学习Pandas的分组聚合功能。通过分析电商销售数据，你将掌握groupby操作、多重索引、透视表等高级技巧，能够快速从复杂数据中提取有价值的信息。",
    duration: "30分钟",
    prerequisites: {
      tools: ["无前置要求，本项目会从零开始讲解"],
      datasets: ["项目已内置模拟数据，无需额外下载"]
    },
    stepByStep: [
      {
        title: "步骤1：创建模拟数据",
        content: "创建一个模拟的电商销售数据集：",
        code: "import pandas as pd\nimport numpy as np\n\n# 创建模拟数据\nnp.random.seed(42)\ndata = {\n    'order_id': np.arange(1, 201),\n    'product_category': np.random.choice(['电子产品', '服装', '食品', '家居', '图书'], 200),\n    'region': np.random.choice(['华北', '华东', '华南', '西南'], 200),\n    'quantity': np.random.randint(1, 10, 200),\n    'price': np.random.uniform(10, 500, 200).round(2),\n    'order_date': pd.date_range(start='2024-01-01', periods=200, freq='D'),\n    'product_name': np.random.choice(['商品A', '商品B', '商品C', '商品D', '商品E'], 200)\n}\n\norders_df = pd.DataFrame(data)\norders_df['amount'] = orders_df['quantity'] * orders_df['price']\n\nprint('数据创建完成！')\nprint(f'数据形状: {orders_df.shape}')\nprint('\\n前5行数据:')\nprint(orders_df.head())"
      },
      {
        title: "步骤2：基础分组",
        content: "学习基本的groupby操作：",
        code: "import pandas as pd\nimport numpy as np\n\n# 创建模拟数据（独立运行）\nnp.random.seed(42)\ndata = {\n    'order_id': np.arange(1, 201),\n    'product_category': np.random.choice(['电子产品', '服装', '食品', '家居', '图书'], 200),\n    'region': np.random.choice(['华北', '华东', '华南', '西南'], 200),\n    'quantity': np.random.randint(1, 10, 200),\n    'price': np.random.uniform(10, 500, 200).round(2),\n    'order_date': pd.date_range(start='2024-01-01', periods=200, freq='D'),\n    'product_name': np.random.choice(['商品A', '商品B', '商品C', '商品D', '商品E'], 200)\n}\norders_df = pd.DataFrame(data)\norders_df['amount'] = orders_df['quantity'] * orders_df['price']\n\n# 按产品类别分组\nif 'product_category' in orders_df.columns:\n    category_group = orders_df.groupby('product_category')\n    \n    # 计算每组的统计量\n    print('产品类别统计:')\n    print(category_group.size())\n    \n    if 'amount' in orders_df.columns:\n        print('\\n平均订单金额:')\n        print(category_group['amount'].mean().round(2))"
      },
      {
        title: "步骤3：多重聚合",
        content: "同时计算多个统计量：",
        code: "import pandas as pd\nimport numpy as np\n\n# 创建模拟数据（独立运行）\nnp.random.seed(42)\ndata = {\n    'order_id': np.arange(1, 201),\n    'product_category': np.random.choice(['电子产品', '服装', '食品', '家居', '图书'], 200),\n    'quantity': np.random.randint(1, 10, 200),\n    'price': np.random.uniform(10, 500, 200).round(2),\n    'order_date': pd.date_range(start='2024-01-01', periods=200, freq='D')\n}\norders_df = pd.DataFrame(data)\norders_df['amount'] = orders_df['quantity'] * orders_df['price']\n\n# 多重聚合\nif 'product_category' in orders_df.columns and 'amount' in orders_df.columns:\n    agg_result = orders_df.groupby('product_category').agg({\n        'order_id': 'count',\n        'amount': ['mean', 'sum', 'min', 'max']\n    }).round(2)\n    \n    print('多重聚合结果:')\n    print(agg_result)"
      },
      {
        title: "步骤4：透视表",
        content: "使用pivot_table创建透视表：",
        code: "import pandas as pd\nimport numpy as np\n\n# 创建模拟数据（独立运行）\nnp.random.seed(42)\ndata = {\n    'order_id': np.arange(1, 201),\n    'product_category': np.random.choice(['电子产品', '服装', '食品', '家居', '图书'], 200),\n    'region': np.random.choice(['华北', '华东', '华南', '西南'], 200),\n    'quantity': np.random.randint(1, 10, 200),\n    'price': np.random.uniform(10, 500, 200).round(2)\n}\norders_df = pd.DataFrame(data)\norders_df['amount'] = orders_df['quantity'] * orders_df['price']\n\n# 创建透视表\nif all(col in orders_df.columns for col in ['product_category', 'region', 'amount']):\n    pivot_table = pd.pivot_table(\n        orders_df,\n        values='amount',\n        index='product_category',\n        columns='region',\n        aggfunc='mean',\n        fill_value=0\n    ).round(2)\n    \n    print('透视表结果:')\n    print(pivot_table)"
      },
      {
        title: "步骤5：窗口函数",
        content: "学习滚动计算和排名：",
        code: "import pandas as pd\nimport numpy as np\n\n# 创建模拟数据（独立运行）\nnp.random.seed(42)\ndata = {\n    'order_id': np.arange(1, 201),\n    'quantity': np.random.randint(1, 10, 200),\n    'price': np.random.uniform(10, 500, 200).round(2),\n    'order_date': pd.date_range(start='2024-01-01', periods=200, freq='D')\n}\norders_df = pd.DataFrame(data)\norders_df['amount'] = orders_df['quantity'] * orders_df['price']\n\n# 滚动窗口计算\nif 'order_date' in orders_df.columns and 'amount' in orders_df.columns:\n    orders_df_sorted = orders_df.sort_values('order_date').copy()\n    \n    # 7天滚动平均\n    orders_df_sorted['rolling_7d'] = orders_df_sorted['amount'].rolling(window=7).mean()\n    \n    # 排名\n    orders_df_sorted['amount_rank'] = orders_df_sorted['amount'].rank(ascending=False)\n    \n    print('窗口函数计算完成！')\n    print('\\n前10行数据:')\n    print(orders_df_sorted[['order_date', 'amount', 'rolling_7d', 'amount_rank']].head(10))"
      }
    ],
    practiceTasks: [
      "1. 按月份和产品类别分组，计算销售额",
      "2. 创建一个地区×类别的销售透视表",
      "3. 找出每个类别中销售额最高的产品"
    ],
    practiceTaskAnswers: [
      "# 练习1答案\nimport pandas as pd\nimport numpy as np\n\n# 创建模拟数据\nnp.random.seed(42)\ndata = {\n    'order_id': np.arange(1, 201),\n    'product_category': np.random.choice(['电子产品', '服装', '食品', '家居', '图书'], 200),\n    'quantity': np.random.randint(1, 10, 200),\n    'price': np.random.uniform(10, 500, 200).round(2),\n    'order_date': pd.date_range(start='2024-01-01', periods=200, freq='D')\n}\norders_df = pd.DataFrame(data)\norders_df['amount'] = orders_df['quantity'] * orders_df['price']\n\nif 'order_date' in orders_df.columns and 'product_category' in orders_df.columns and 'amount' in orders_df.columns:\n    orders_df['order_date'] = pd.to_datetime(orders_df['order_date'])\n    orders_df['month'] = orders_df['order_date'].dt.to_period('M')\n    \n    monthly_category_sales = orders_df.groupby(['month', 'product_category'])['amount'].sum().unstack()\n    print('月度类别销售额:')\n    print(monthly_category_sales)\n",
      "# 练习2答案\nimport pandas as pd\nimport numpy as np\n\n# 创建模拟数据\nnp.random.seed(42)\ndata = {\n    'order_id': np.arange(1, 201),\n    'product_category': np.random.choice(['电子产品', '服装', '食品', '家居', '图书'], 200),\n    'region': np.random.choice(['华北', '华东', '华南', '西南'], 200),\n    'quantity': np.random.randint(1, 10, 200),\n    'price': np.random.uniform(10, 500, 200).round(2)\n}\norders_df = pd.DataFrame(data)\norders_df['amount'] = orders_df['quantity'] * orders_df['price']\n\nif all(col in orders_df.columns for col in ['region', 'product_category', 'amount']):\n    pivot = pd.pivot_table(\n        orders_df,\n        values='amount',\n        index='region',\n        columns='product_category',\n        aggfunc='sum',\n        fill_value=0\n    )\n    print('地区×类别销售透视表:')\n    print(pivot)\n",
      "# 练习3答案\nimport pandas as pd\nimport numpy as np\n\n# 创建模拟数据\nnp.random.seed(42)\ndata = {\n    'order_id': np.arange(1, 201),\n    'product_category': np.random.choice(['电子产品', '服装', '食品', '家居', '图书'], 200),\n    'product_name': np.random.choice(['商品A', '商品B', '商品C', '商品D', '商品E'], 200),\n    'quantity': np.random.randint(1, 10, 200),\n    'price': np.random.uniform(10, 500, 200).round(2)\n}\norders_df = pd.DataFrame(data)\norders_df['amount'] = orders_df['quantity'] * orders_df['price']\n\nif all(col in orders_df.columns for col in ['product_category', 'product_name', 'amount']):\n    top_products = orders_df.groupby(['product_category', 'product_name'])['amount'].sum()\\\n        .groupby(level=0, group_keys=False).nlargest(1)\n    print('每个类别销售额最高的产品:')\n    print(top_products)\n"
    ],
    assessment: [
      "1. groupby和pivot_table的区别是什么？",
      "2. 如何在Pandas中实现SQL的GROUP BY功能？"
    ],
    assessmentAnswers: [
      "groupby和pivot_table的区别：\\n- groupby：按行分组，适合简单的分组聚合\\n- pivot_table：可以同时按行和列分组，更适合创建交叉表\\n- pivot_table功能更强大，可以指定多个聚合函数",
      "在Pandas中实现SQL的GROUP BY功能：\\n```python\\n# SQL: SELECT category, COUNT(*), AVG(amount) FROM orders GROUP BY category\\nresult = df.groupby('category').agg({\\n    'order_id': 'count',\\n    'amount': 'mean'\\n})\\n```"
    ],
    dataset: {
      filename: "project2_sales.csv",
      name: "项目2 - 销售数据",
      size: "1.3KB",
      desc: "销售数据，包含产品类别、地区、数量、价格、订单日期、产品名称等"
    }
  },
  {
    id: 3,
    title: "超市购物篮分析",
    description: "探索产品关联规则",
    goal: "通过购物篮数据分析，学习关联规则挖掘、Apriori算法和产品推荐系统基础",
    dataSource: "超市购物篮数据集",
    tools: ["Python", "Pandas"],
    learningPoints: [
      "购物篮数据转换",
      "关联规则挖掘",
      "支持度和置信度",
      "产品推荐基础"
    ],
    overview: "本项目将带你进行购物篮分析。通过分析超市购物数据，你将学习关联规则挖掘，理解支持度、置信度、提升度等指标，能够发现产品之间的有趣关联。",
    duration: "45分钟",
    prerequisites: {
      tools: ["无前置要求，本项目会从零开始讲解"],
      datasets: ["项目已内置模拟数据，无需额外下载"]
    },
    stepByStep: [
      {
        title: "步骤1：创建模拟数据",
        content: "创建一个模拟的购物篮数据集：",
        code: "import pandas as pd\nimport numpy as np\n\n# 创建模拟购物篮数据\nnp.random.seed(42)\nproducts = ['牛奶', '面包', '鸡蛋', '苹果', '香蕉', '橙汁', '饼干', '巧克力', '酸奶', '咖啡']\n\ntransactions = []\nfor _ in range(100):\n    # 每个订单随机购买2-5个商品\n    num_items = np.random.randint(2, 6)\n    items = np.random.choice(products, size=num_items, replace=False)\n    transactions.append(items)\n\nprint('购物篮数据创建完成！')\nprint(f'订单数量: {len(transactions)}')\nprint('\\n前5个订单:')\nfor i, items in enumerate(transactions[:5]):\n    print(f'订单{i+1}: {items}')"
      },
      {
        title: "步骤2：数据转换",
        content: "将购物篮数据转换为one-hot编码格式：",
        code: "import pandas as pd\nimport numpy as np\nfrom collections import defaultdict\n\n# 创建模拟购物篮数据（独立运行）\nnp.random.seed(42)\nproducts = ['牛奶', '面包', '鸡蛋', '苹果', '香蕉', '橙汁', '饼干', '巧克力', '酸奶', '咖啡']\ntransactions = []\nfor _ in range(100):\n    num_items = np.random.randint(2, 6)\n    items = np.random.choice(products, size=num_items, replace=False)\n    transactions.append(items)\n\n# 转换为one-hot编码格式\nall_products = sorted(list(set([item for sublist in transactions for item in sublist])))\nproduct_to_idx = {prod: i for i, prod in enumerate(all_products)}\n\none_hot_data = []\nfor trans in transactions:\n    row = [0] * len(all_products)\n    for item in trans:\n        row[product_to_idx[item]] = 1\n    one_hot_data.append(row)\n\n# 转换为DataFrame\ndf_onehot = pd.DataFrame(one_hot_data, columns=all_products)\n\nprint('数据转换完成！')\nprint(f'数据形状: {df_onehot.shape}')\nprint('\\n前5行数据:')\nprint(df_onehot.head())"
      },
      {
        title: "步骤3：计算支持度",
        content: "计算每个商品和商品组合的支持度：",
        code: "import pandas as pd\nimport numpy as np\nfrom collections import defaultdict\n\n# 创建模拟购物篮数据（独立运行）\nnp.random.seed(42)\nproducts = ['牛奶', '面包', '鸡蛋', '苹果', '香蕉', '橙汁', '饼干', '巧克力', '酸奶', '咖啡']\ntransactions = []\nfor _ in range(100):\n    num_items = np.random.randint(2, 6)\n    items = np.random.choice(products, size=num_items, replace=False)\n    transactions.append(items)\n\n# 转换为one-hot编码\nall_products = sorted(list(set([item for sublist in transactions for item in sublist])))\nproduct_to_idx = {prod: i for i, prod in enumerate(all_products)}\none_hot_data = []\nfor trans in transactions:\n    row = [0] * len(all_products)\n    for item in trans:\n        row[product_to_idx[item]] = 1\n    one_hot_data.append(row)\ndf_onehot = pd.DataFrame(one_hot_data, columns=all_products)\n\n# 计算单个商品的支持度\nsupport = df_onehot.mean().sort_values(ascending=False)\nprint('商品支持度（Top 10）:')\nprint(support.head(10))\n\n# 计算商品组合的支持度\nprint('\\n常见商品组合:')\nfor i, prod1 in enumerate(all_products[:3]):\n    for prod2 in all_products[i+1:4]:\n        combo_support = ((df_onehot[prod1] == 1) & (df_onehot[prod2] == 1)).mean()\n        if combo_support > 0.05:\n            print(f'{prod1} + {prod2}: {combo_support:.3f}')"
      },
      {
        title: "步骤4：计算置信度",
        content: "计算关联规则的置信度：",
        code: "import pandas as pd\nimport numpy as np\nfrom collections import defaultdict\n\n# 创建模拟购物篮数据（独立运行）\nnp.random.seed(42)\nproducts = ['牛奶', '面包', '鸡蛋', '苹果', '香蕉', '橙汁', '饼干', '巧克力', '酸奶', '咖啡']\ntransactions = []\nfor _ in range(100):\n    num_items = np.random.randint(2, 6)\n    items = np.random.choice(products, size=num_items, replace=False)\n    transactions.append(items)\n\n# 转换为one-hot编码\nall_products = sorted(list(set([item for sublist in transactions for item in sublist])))\nproduct_to_idx = {prod: i for i, prod in enumerate(all_products)}\none_hot_data = []\nfor trans in transactions:\n    row = [0] * len(all_products)\n    for item in trans:\n        row[product_to_idx[item]] = 1\n    one_hot_data.append(row)\ndf_onehot = pd.DataFrame(one_hot_data, columns=all_products)\n\n# 计算置信度: 如果购买了A，也购买了B的概率\nprint('关联规则置信度:')\nfor prod1 in all_products[:3]:\n    for prod2 in all_products:\n        if prod1 != prod2:\n            support_a = df_onehot[prod1].mean()\n            support_ab = ((df_onehot[prod1] == 1) & (df_onehot[prod2] == 1)).mean()\n            if support_a > 0:\n                confidence = support_ab / support_a\n                if confidence > 0.3:\n                    print(f'{prod1} → {prod2}: 置信度={confidence:.3f}')"
      },
      {
        title: "步骤5：简单推荐系统",
        content: "基于关联规则创建简单的推荐系统：",
        code: "import pandas as pd\nimport numpy as np\nfrom collections import defaultdict\n\n# 创建模拟购物篮数据（独立运行）\nnp.random.seed(42)\nproducts = ['牛奶', '面包', '鸡蛋', '苹果', '香蕉', '橙汁', '饼干', '巧克力', '酸奶', '咖啡']\ntransactions = []\nfor _ in range(100):\n    num_items = np.random.randint(2, 6)\n    items = np.random.choice(products, size=num_items, replace=False)\n    transactions.append(items)\n\n# 转换为one-hot编码\nall_products = sorted(list(set([item for sublist in transactions for item in sublist])))\nproduct_to_idx = {prod: i for i, prod in enumerate(all_products)}\none_hot_data = []\nfor trans in transactions:\n    row = [0] * len(all_products)\n    for item in trans:\n        row[product_to_idx[item]] = 1\n    one_hot_data.append(row)\ndf_onehot = pd.DataFrame(one_hot_data, columns=all_products)\n\n# 简单的商品推荐函数\ndef recommend_products(purchased_items, top_n=3):\n    recommendations = defaultdict(float)\n    \n    for item in purchased_items:\n        if item in all_products:\n            for other_item in all_products:\n                if other_item not in purchased_items:\n                    support_item = df_onehot[item].mean()\n                    support_both = ((df_onehot[item] == 1) & (df_onehot[other_item] == 1)).mean()\n                    if support_item > 0:\n                        confidence = support_both / support_item\n                        recommendations[other_item] = max(recommendations[other_item], confidence)\n    \n    sorted_recs = sorted(recommendations.items(), key=lambda x: x[1], reverse=True)\n    return sorted_recs[:top_n]\n\n# 测试推荐\nprint('推荐系统测试:')\ntest_purchase = ['牛奶', '面包']\nprint(f'已购买: {test_purchase}')\nrecs = recommend_products(test_purchase)\nprint('推荐商品:')\nfor prod, score in recs:\n    print(f'  {prod}: 置信度={score:.3f}')"
      }
    ],
    practiceTasks: [
      "1. 找出最常被一起购买的5组产品",
      "2. 分析哪些产品最常被单独购买",
      "3. 设计一个简单的产品推荐逻辑"
    ],
    practiceTaskAnswers: [
      "# 练习1答案\nimport pandas as pd\nimport numpy as np\nfrom collections import defaultdict\n\n# 创建模拟数据\nnp.random.seed(42)\nproducts = ['牛奶', '面包', '鸡蛋', '苹果', '香蕉', '橙汁', '饼干', '巧克力', '酸奶', '咖啡']\ntransactions = []\nfor _ in range(100):\n    num_items = np.random.randint(2, 6)\n    items = np.random.choice(products, size=num_items, replace=False)\n    transactions.append(items)\n\n# 找出常被一起购买的商品\nall_products = sorted(list(set([item for sublist in transactions for item in sublist])))\nproduct_to_idx = {prod: i for i, prod in enumerate(all_products)}\n\none_hot_data = []\nfor trans in transactions:\n    row = [0] * len(all_products)\n    for item in trans:\n        row[product_to_idx[item]] = 1\n    one_hot_data.append(row)\n\ndf_onehot = pd.DataFrame(one_hot_data, columns=all_products)\n\n# 计算商品组合的支持度\ncombo_supports = []\nfor i, prod1 in enumerate(all_products):\n    for prod2 in all_products[i+1:]:\n        support = ((df_onehot[prod1] == 1) & (df_onehot[prod2] == 1)).mean()\n        if support > 0:\n            combo_supports.append(((prod1, prod2), support))\n\ncombo_supports.sort(key=lambda x: x[1], reverse=True)\nprint('最常被一起购买的商品组合:')\nfor combo, support in combo_supports[:5]:\n    print(f'{combo[0]} + {combo[1]}: {support:.3f}')\n",
      "# 练习2答案\nimport pandas as pd\nimport numpy as np\nfrom collections import Counter\n\n# 创建模拟数据\nnp.random.seed(42)\nproducts = ['牛奶', '面包', '鸡蛋', '苹果', '香蕉', '橙汁', '饼干', '巧克力', '酸奶', '咖啡']\ntransactions = []\nfor _ in range(100):\n    num_items = np.random.randint(2, 6)\n    items = np.random.choice(products, size=num_items, replace=False)\n    transactions.append(items)\n\n# 统计商品出现频率\nproduct_counts = Counter()\nfor trans in transactions:\n    for item in trans:\n        product_counts[item] += 1\n\nprint('最常被购买的商品:')\nfor product, count in product_counts.most_common(10):\n    print(f'{product}: {count}次')\n",
      "# 练习3答案\nprint('产品推荐逻辑: 基于关联规则，当用户购买某些产品时，推荐高置信度的关联产品')\nprint('步骤:')\nprint('1. 计算商品之间的关联规则置信度')\nprint('2. 当用户购买某些商品时，查找相关的关联规则')\nprint('3. 按置信度排序并推荐Top N商品')\n"
    ],
    assessment: [
      "1. 解释支持度、置信度和提升度的含义",
      "2. 购物篮分析在实际业务中有什么应用？"
    ],
    assessmentAnswers: [
      "支持度、置信度和提升度的含义：\\n- 支持度(Support)：项集出现的频率\\n- 置信度(Confidence)：A→B的条件概率\\n- 提升度(Lift)：A和B一起出现的可能性除以单独出现的可能性",
      "购物篮分析的应用：\\n1. 产品摆放优化：将关联产品放在一起\\n2. 交叉销售推荐：买了A推荐B\\n3. 促销活动设计：关联产品一起打折\\n4. 库存管理：关联产品库存联动"
    ],
    dataset: {
      filename: "project3_basket.csv",
      name: "项目3 - 购物篮数据",
      size: "0.5KB",
      desc: "超市购物篮数据，包含交易ID和购买商品列表"
    }
  },
  {
    id: 4,
    title: "客户分群画像",
    description: "学习客户细分方法",
    goal: "通过客户数据，学习RFM分析、K-Means聚类和客户画像构建",
    dataSource: "客户特征数据集",
    tools: ["Python", "Pandas", "Scikit-learn"],
    learningPoints: [
      "RFM分析",
      "特征工程",
      "K-Means聚类",
      "聚类结果可视化",
      "客户画像构建"
    ],
    overview: "本项目将带你学习客户分群技术。通过RFM分析和K-Means聚类，你将能够对客户进行细分，并为每个客户群构建详细画像，为精准营销提供数据支持。",
    duration: "45分钟",
    prerequisites: {
      tools: ["无前置要求，本项目会从零开始讲解"],
      datasets: ["项目已内置模拟数据，无需额外下载"]
    },
    stepByStep: [
      {
        title: "步骤1：创建模拟数据",
        content: "创建一个模拟的客户特征数据集：",
        code: "import pandas as pd\nimport numpy as np\nfrom datetime import datetime, timedelta\n\n# 创建模拟客户数据\nnp.random.seed(42)\n\nn_customers = 200\nend_date = datetime(2024, 6, 30)\n\ncustomer_data = {\n    'customer_id': np.arange(1001, 1001 + n_customers),\n    'last_purchase_date': [end_date - timedelta(days=np.random.randint(1, 180)) for _ in range(n_customers)],\n    'frequency': np.random.randint(1, 20, n_customers),\n    'monetary': np.random.uniform(100, 10000, n_customers).round(2),\n    'age': np.random.randint(18, 70, n_customers),\n    'region': np.random.choice(['华北', '华东', '华南', '西南', '西北'], n_customers)\n}\n\ncustomer_df = pd.DataFrame(customer_data)\n\n# 计算最近购买天数（距离结束日期）\ncustomer_df['recency_days'] = (end_date - customer_df['last_purchase_date']).dt.days\n\nprint('客户数据创建完成！')\nprint(f'数据形状: {customer_df.shape}')\nprint('\\n前5行数据:')\nprint(customer_df.head())"
      },
      {
        title: "步骤2：RFM分析",
        content: "计算RFM指标并进行评分：",
        code: "import pandas as pd\nimport numpy as np\nfrom datetime import datetime, timedelta\n\n# 创建模拟客户数据（独立运行）\nnp.random.seed(42)\nn_customers = 200\nend_date = datetime(2024, 6, 30)\ncustomer_data = {\n    'customer_id': np.arange(1001, 1001 + n_customers),\n    'last_purchase_date': [end_date - timedelta(days=np.random.randint(1, 180)) for _ in range(n_customers)],\n    'frequency': np.random.randint(1, 20, n_customers),\n    'monetary': np.random.uniform(100, 10000, n_customers).round(2),\n    'age': np.random.randint(18, 70, n_customers),\n    'region': np.random.choice(['华北', '华东', '华南', '西南', '西北'], n_customers)\n}\ncustomer_df = pd.DataFrame(customer_data)\ncustomer_df['recency_days'] = (end_date - customer_df['last_purchase_date']).dt.days\n\n# RFM评分\n# R（Recency）：最近购买，天数越少越好\ncustomer_df['R_score'] = pd.qcut(customer_df['recency_days'], 5, labels=[5, 4, 3, 2, 1])\n\n# F（Frequency）：购买频率，越大越好\ncustomer_df['F_score'] = pd.qcut(customer_df['frequency'], 5, labels=[1, 2, 3, 4, 5])\n\n# M（Monetary）：购买金额，越大越好\ncustomer_df['M_score'] = pd.qcut(customer_df['monetary'], 5, labels=[1, 2, 3, 4, 5])\n\n# 组合RFM分数\ncustomer_df['RFM_score'] = customer_df['R_score'].astype(str) + customer_df['F_score'].astype(str) + customer_df['M_score'].astype(str)\n\nprint('RFM分析完成！')\nprint('\\nRFM分数分布:')\nprint(customer_df[['R_score', 'F_score', 'M_score']].describe())\nprint('\\n前10个客户的RFM分数:')\nprint(customer_df[['customer_id', 'R_score', 'F_score', 'M_score', 'RFM_score']].head(10))"
      },
      {
        title: "步骤3：K-Means聚类",
        content: "使用K-Means进行客户分群：",
        code: "import pandas as pd\nimport numpy as np\nfrom datetime import datetime, timedelta\nfrom sklearn.cluster import KMeans\nfrom sklearn.preprocessing import StandardScaler\n\n# 创建模拟客户数据（独立运行）\nnp.random.seed(42)\nn_customers = 200\nend_date = datetime(2024, 6, 30)\ncustomer_data = {\n    'customer_id': np.arange(1001, 1001 + n_customers),\n    'frequency': np.random.randint(1, 20, n_customers),\n    'monetary': np.random.uniform(100, 10000, n_customers).round(2),\n    'recency_days': np.random.randint(1, 180, n_customers)\n}\ncustomer_df = pd.DataFrame(customer_data)\n\n# 选择特征进行聚类\nfeatures = customer_df[['recency_days', 'frequency', 'monetary']].copy()\n\n# 标准化特征\nscaler = StandardScaler()\nfeatures_scaled = scaler.fit_transform(features)\n\n# K-Means聚类\nkmeans = KMeans(n_clusters=4, random_state=42, n_init=10)\ncustomer_df['cluster'] = kmeans.fit_predict(features_scaled)\n\nprint('聚类完成！')\nprint('\\n客户群分布:')\nprint(customer_df['cluster'].value_counts().sort_index())"
      },
      {
        title: "步骤4：客户画像分析",
        content: "分析每个客户群的特征：",
        code: "import pandas as pd\nimport numpy as np\nfrom datetime import datetime, timedelta\nfrom sklearn.cluster import KMeans\nfrom sklearn.preprocessing import StandardScaler\n\n# 创建模拟客户数据（独立运行）\nnp.random.seed(42)\nn_customers = 200\nend_date = datetime(2024, 6, 30)\ncustomer_data = {\n    'customer_id': np.arange(1001, 1001 + n_customers),\n    'frequency': np.random.randint(1, 20, n_customers),\n    'monetary': np.random.uniform(100, 10000, n_customers).round(2),\n    'age': np.random.randint(18, 70, n_customers),\n    'recency_days': np.random.randint(1, 180, n_customers)\n}\ncustomer_df = pd.DataFrame(customer_data)\n\n# 聚类\nfeatures = customer_df[['recency_days', 'frequency', 'monetary']].copy()\nscaler = StandardScaler()\nfeatures_scaled = scaler.fit_transform(features)\nkmeans = KMeans(n_clusters=4, random_state=42, n_init=10)\ncustomer_df['cluster'] = kmeans.fit_predict(features_scaled)\n\n# 分析每个聚类的特征\ncluster_profile = customer_df.groupby('cluster').agg({\n    'recency_days': 'mean',\n    'frequency': 'mean',\n    'monetary': 'mean',\n    'age': 'mean',\n    'customer_id': 'count'\n}).round(2)\n\ncluster_profile.columns = ['平均最近购买天数', '平均购买频率', '平均消费金额', '平均年龄', '客户数量']\n\nprint('客户群画像:')\nprint(cluster_profile)\n\n# 简单的客户群命名\nprint('\\n客户群描述:')\ncluster_names = {\n    0: '高价值客户',\n    1: '新客户',\n    2: '流失风险客户',\n    3: '普通客户'\n}\nfor cluster_id in sorted(customer_df['cluster'].unique()):\n    print(f'群{cluster_id} ({cluster_names.get(cluster_id, \"未知\")}): {cluster_profile.loc[cluster_id, \"客户数量\"]}人')"
      },
      {
        title: "步骤5：营销建议",
        content: "根据客户群特征给出营销建议：",
        code: "# 基于聚类结果的营销建议\nprint('营销策略建议:')\nprint('\\n高价值客户:')\nprint('- 提供VIP专属优惠和服务')\nprint('- 邀请参与新品测试')\nprint('- 个性化推荐高端产品')\n\nprint('\\n新客户:')\nprint('- 发送欢迎礼包')\nprint('- 提供首次购买优惠')\nprint('- 引导浏览更多产品')\n\nprint('\\n流失风险客户:')\nprint('- 发送召回优惠券')\nprint('- 了解客户满意度')\nprint('- 提供特别促销活动')\n\nprint('\\n普通客户:')\nprint('- 常规营销活动')\nprint('- 交叉销售推荐')\nprint('- 会员积分激励')"
      }
    ],
    practiceTasks: [
      "1. 使用肘部法则确定最佳聚类数",
      "2. 为每个客户群命名并描述特征",
      "3. 分析不同地区的客户群分布"
    ],
    practiceTaskAnswers: [
      "# 练习1答案\nimport pandas as pd\nimport numpy as np\nfrom sklearn.cluster import KMeans\nfrom sklearn.preprocessing import StandardScaler\n\n# 创建模拟数据\nnp.random.seed(42)\nn_customers = 200\ncustomer_data = {\n    'recency_days': np.random.randint(1, 180, n_customers),\n    'frequency': np.random.randint(1, 20, n_customers),\n    'monetary': np.random.uniform(100, 10000, n_customers).round(2)\n}\ncustomer_df = pd.DataFrame(customer_data)\n\nfeatures = customer_df[['recency_days', 'frequency', 'monetary']]\nscaler = StandardScaler()\nfeatures_scaled = scaler.fit_transform(features)\n\n# 肘部法则\ninertias = []\nK_range = range(1, 11)\n\nfor k in K_range:\n    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)\n    kmeans.fit(features_scaled)\n    inertias.append(kmeans.inertia_)\n\nprint('肘部法则结果:')\nfor k, inertia in zip(K_range, inertias):\n    print(f'k={k}, inertia={inertia:.2f}')\n",
      "# 练习2答案\nprint('客户群命名示例:')\nprint('- 高价值客户: 消费金额高、购买频率高')\nprint('- 潜力客户: 消费中等、频率高')\nprint('- 新客户: 最近购买、消费低')\nprint('- 流失风险客户: 久未购买、消费低')\n",
      "# 练习3答案\nimport pandas as pd\nimport numpy as np\n\n# 创建模拟数据\nnp.random.seed(42)\nn_customers = 200\ncustomer_data = {\n    'region': np.random.choice(['华北', '华东', '华南', '西南', '西北'], n_customers),\n    'cluster': np.random.randint(0, 4, n_customers)\n}\ncustomer_df = pd.DataFrame(customer_data)\n\n# 地区分布分析\nregion_cluster = pd.crosstab(customer_df['region'], customer_df['cluster'], normalize='index')\nprint('各地区客户群分布:')\nprint(region_cluster.round(3))\n"
    ],
    assessment: [
      "1. RFM分别代表什么？如何计算？",
      "2. K-Means聚类的基本原理是什么？"
    ],
    assessmentAnswers: [
      "RFM的含义：\\n- R(Recency)：最近一次购买距今天数\\n- F(Frequency)：购买频率\\n- M(Monetary)：购买金额\\n\\n计算方法：通常用分位数法将每个指标分成5档，然后组合评分。",
      "K-Means聚类原理：\\n1. 随机选择k个中心点\\n2. 将每个样本分配到最近的中心点\\n3. 重新计算每个簇的中心点\\n4. 重复步骤2-3直到收敛"
    ],
    dataset: {
      filename: "project4_customers.csv",
      name: "项目4 - 客户数据",
      size: "1.2KB",
      desc: "客户数据，包含购买频率、消费金额、年龄、地区、RFM评分等"
    }
  },
  {
    id: 5,
    title: "数据可视化进阶",
    description: "创建专业的数据图表",
    goal: "通过销售数据可视化，学习Matplotlib和Seaborn的高级图表技巧，掌握8种常用数据可视化类型",
    dataSource: "电商销售数据集",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    learningPoints: [
      "折线图：展示趋势变化",
      "柱状图：对比分类数据",
      "饼图：展示占比分布",
      "散点图：分析变量关系",
      "直方图：查看数据分布",
      "热力图：展示区域差异",
      "堆叠图：组合数据展示",
      "面积图：强调累积效果"
    ],
    overview: "本项目将带你系统学习数据可视化技巧。通过电商销售数据，你将掌握8种常用的图表类型，能够根据不同的数据特点选择合适的可视化方式，创建专业的数据可视化报告。",
    duration: "60分钟",
    prerequisites: {
      tools: ["无前置要求，本项目会从零开始讲解"],
      datasets: ["项目已内置模拟数据，无需额外下载"]
    },
    stepByStep: [
      {
        title: "步骤1：创建模拟数据",
        content: "创建一个模拟的电商销售数据集：",
        code: "import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\nimport seaborn as sns\n\n# 创建模拟数据\nnp.random.seed(42)\n\n# 时间序列数据\ndates = pd.date_range(start='2024-01-01', periods=12, freq='M')\nproducts = ['电子产品', '服装', '食品', '家居', '图书']\nregions = ['华北', '华东', '华南', '西南']\n\n# 创建销售数据\nsales_data = {\n    'date': np.tile(dates, len(products)),\n    'product': np.repeat(products, len(dates)),\n    'sales': np.concatenate([\n        np.random.normal(500, 100, 12).cumsum() / 2 + 400,\n        np.random.normal(350, 80, 12).cumsum() / 2 + 300,\n        np.random.normal(400, 90, 12).cumsum() / 2 + 350,\n        np.random.normal(250, 70, 12).cumsum() / 2 + 200,\n        np.random.normal(150, 50, 12).cumsum() / 2 + 120\n    ]).round(2)\n}\n\nsales_df = pd.DataFrame(sales_data)\nprint('销售数据创建完成！')\nprint(f'数据形状: {sales_df.shape}')\nprint('\\n前5行数据:')\nprint(sales_df.head())"
      },
      {
        title: "步骤2：折线图 - 销售趋势",
        content: "使用折线图展示产品销售随时间的变化趋势：",
        code: "# 按产品分组展示趋势\nprint('产品销售趋势:')\nproduct_trends = sales_df.pivot(index='date', columns='product', values='sales')\nprint(product_trends.round(2).head())\n\n# 折线图代码示例\nprint('\\n折线图代码:')\nprint('''\nimport matplotlib.pyplot as plt\n\nplt.figure(figsize=(12, 6))\nfor product in product_trends.columns:\n    plt.plot(product_trends.index, product_trends[product], \n             marker='o', linewidth=2, label=product)\nplt.title('2024年各产品销售趋势', fontsize=16, fontweight='bold')\nplt.xlabel('月份', fontsize=12)\nplt.ylabel('销售额', fontsize=12)\nplt.legend(fontsize=10)\nplt.grid(True, alpha=0.3)\nplt.xticks(rotation=45)\nplt.tight_layout()\nprint('折线图创建完成！')\n''')"
      },
      {
        title: "步骤3：柱状图 - 产品销量对比",
        content: "使用柱状图对比不同产品的销量高低：",
        code: "# 计算各产品总销售额\nproduct_total = sales_df.groupby('product')['sales'].sum().sort_values(ascending=False)\nprint('各产品总销售额:')\nprint(product_total.round(2))\n\n# 柱状图代码示例\nprint('\\n柱状图代码:')\nprint('''\nplt.figure(figsize=(10, 6))\ncolors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444']\nbars = plt.bar(product_total.index, product_total.values, color=colors)\nplt.title('各产品总销售额对比', fontsize=16, fontweight='bold')\nplt.xlabel('产品类别', fontsize=12)\nplt.ylabel('销售额', fontsize=12)\nplt.grid(axis='y', alpha=0.3)\n\n# 添加数值标签\nfor bar in bars:\n    height = bar.get_height()\n    plt.text(bar.get_x() + bar.get_width()/2., height,\n            f'{height:.0f}', ha='center', va='bottom')\nplt.tight_layout()\nprint('柱状图创建完成！')\n''')"
      },
      {
        title: "步骤4：饼图 - 市场占有率",
        content: "使用饼图展示各产品占总体的比例：",
        code: "# 计算占比\nproduct_pct = product_total / product_total.sum() * 100\nprint('各产品销售额占比:')\nprint(product_pct.round(1))\n\n# 饼图代码示例\nprint('\\n饼图代码:')\nprint('''\nplt.figure(figsize=(10, 8))\ncolors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444']\nexplode = (0.05, 0, 0, 0, 0)\nplt.pie(product_total.values, explode=explode, labels=product_total.index, \n        colors=colors, autopct='%1.1f%%', shadow=True, startangle=90)\nplt.title('各产品销售额占比', fontsize=16, fontweight='bold')\nplt.axis('equal')\nplt.tight_layout()\nprint('饼图创建完成！')\n''')"
      },
      {
        title: "步骤5：散点图 - 变量关系",
        content: "使用散点图分析两个变量之间的关系：",
        code: "# 创建模拟的广告投入数据\nnp.random.seed(42)\nad_spend = np.random.uniform(50, 200, 60)\nsales_revenue = ad_spend * 1.5 + np.random.normal(0, 20, 60)\n\nprint('广告投入与销售额关系（样本）:')\nprint(pd.DataFrame({'广告投入': ad_spend[:5], '销售额': sales_revenue[:5]}).round(2))\n\n# 散点图代码示例\nprint('\\n散点图代码:')\nprint('''\nplt.figure(figsize=(10, 6))\nplt.scatter(ad_spend, sales_revenue, alpha=0.6, s=100, \n            c='#3b82f6', edgecolors='white', linewidths=1.5)\nplt.title('广告投入与销售额关系', fontsize=16, fontweight='bold')\nplt.xlabel('广告投入（万元）', fontsize=12)\nplt.ylabel('销售额（万元）', fontsize=12)\nplt.grid(True, alpha=0.3)\n\n# 添加趋势线\nz = np.polyfit(ad_spend, sales_revenue, 1)\np = np.poly1d(z)\nplt.plot(ad_spend, p(ad_spend), \"r--\", alpha=0.8, linewidth=2, label='趋势线')\nplt.legend()\nplt.tight_layout()\nprint('散点图创建完成！')\n''')"
      },
      {
        title: "步骤6：直方图 - 数据分布",
        content: "使用直方图展示数据的分布情况：",
        code: "# 模拟用户年龄数据\nnp.random.seed(42)\nuser_ages = np.random.normal(35, 10, 1000)\nprint('用户年龄统计:')\nprint(f'平均年龄: {user_ages.mean():.1f}岁')\nprint(f'年龄范围: {user_ages.min():.1f} - {user_ages.max():.1f}岁')\n\n# 直方图代码示例\nprint('\\n直方图代码:')\nprint('''\nplt.figure(figsize=(10, 6))\nn, bins, patches = plt.hist(user_ages, bins=30, \n                            color='#8b5cf6', alpha=0.7, \n                            edgecolor='white', linewidth=1)\nplt.title('用户年龄分布', fontsize=16, fontweight='bold')\nplt.xlabel('年龄', fontsize=12)\nplt.ylabel('人数', fontsize=12)\nplt.grid(axis='y', alpha=0.3)\n\n# 添加平均年龄线\nmean_age = user_ages.mean()\nplt.axvline(mean_age, color='red', linestyle='--', \n            linewidth=2, label=f'平均年龄: {mean_age:.1f}')\nplt.legend()\nplt.tight_layout()\nprint('直方图创建完成！')\n''')"
      },
      {
        title: "步骤7：热力图 - 区域差异",
        content: "使用热力图用颜色深浅展示区域差异：",
        code: "# 创建区域月度销售数据\nnp.random.seed(42)\nmonths = ['1月', '2月', '3月', '4月', '5月', '6月', \n          '7月', '8月', '9月', '10月', '11月', '12月']\nregion_sales = np.random.randint(50, 200, (4, 12))\nregion_sales_df = pd.DataFrame(region_sales, index=regions, columns=months)\nprint('区域月度销售额:')\nprint(region_sales_df)\n\n# 热力图代码示例\nprint('\\n热力图代码:')\nprint('''\nplt.figure(figsize=(14, 6))\nsns.heatmap(region_sales_df, annot=True, fmt='d', cmap='YlOrRd', \n            linewidths=0.5, cbar_kws={'label': '销售额(万)'})\nplt.title('各区域月度销售热力图', fontsize=16, fontweight='bold')\nplt.xlabel('月份', fontsize=12)\nplt.ylabel('地区', fontsize=12)\nplt.tight_layout()\nprint('热力图创建完成！')\n''')"
      },
      {
        title: "步骤8：堆叠柱状图 - 组合数据",
        content: "使用堆叠柱状图展示整体和各部分的数量：",
        code: "# 创建线上线下销售数据\nquarterly_data = pd.DataFrame({\n    '季度': ['Q1', 'Q2', 'Q3', 'Q4'],\n    '线上': [120, 150, 180, 220],\n    '线下': [80, 90, 85, 75]\n})\nprint('季度销售数据:')\nprint(quarterly_data)\n\n# 堆叠图代码示例\nprint('\\n堆叠柱状图代码:')\nprint('''\nplt.figure(figsize=(10, 6))\nplt.bar(quarterly_data['季度'], quarterly_data['线上'], \n        label='线上销售', color='#3b82f6')\nplt.bar(quarterly_data['季度'], quarterly_data['线下'], \n        bottom=quarterly_data['线上'], label='线下销售', color='#8b5cf6')\nplt.title('季度销售对比（线上vs线下）', fontsize=16, fontweight='bold')\nplt.xlabel('季度', fontsize=12)\nplt.ylabel('销售额（万元）', fontsize=12)\nplt.legend()\nplt.grid(axis='y', alpha=0.3)\nplt.tight_layout()\nprint('堆叠柱状图创建完成！')\n''')"
      },
      {
        title: "步骤9：面积图 - 累积效果",
        content: "使用面积图强调数据的累积效果：",
        code: "# 累积用户增长数据\nmonthly_users = pd.DataFrame({\n    '月份': months,\n    '累积用户': [100, 250, 450, 720, 1050, 1450, \n                  1900, 2400, 2950, 3550, 4200, 4900]\n})\nprint('累积用户增长数据:')\nprint(monthly_users)\n\n# 面积图代码示例\nprint('\\n面积图代码:')\nprint('''\nplt.figure(figsize=(12, 6))\nplt.fill_between(range(len(monthly_users)), monthly_users['累积用户'], \n                 alpha=0.3, color='#3b82f6')\nplt.plot(range(len(monthly_users)), monthly_users['累积用户'], \n         marker='o', linewidth=2, color='#3b82f6', markersize=8)\nplt.title('2024年累积用户增长趋势', fontsize=16, fontweight='bold')\nplt.xlabel('月份', fontsize=12)\nplt.ylabel('累积用户数', fontsize=12)\nplt.xticks(range(len(monthly_users)), monthly_users['月份'], rotation=45)\nplt.grid(True, alpha=0.3)\nplt.tight_layout()\nprint('面积图创建完成！')\n''')"
      },
      {
        title: "步骤10：图表选择指南",
        content: "了解如何根据数据特点选择合适的图表类型：",
        code: "# 数据可视化黄金法则\nprint('=' * 60)\nprint('数据可视化图表选择指南')\nprint('=' * 60)\nprint('\\n1. 趋势分析 → 折线图:')\nprint('   适用：展示数据随时间变化的趋势')\nprint('   示例：销售趋势、用户增长、股价变化')\n\nprint('\\n2. 对比分析 → 柱状图:')\nprint('   适用：对比不同类别的数值大小')\nprint('   示例：产品销量对比、地区销售额对比')\n\nprint('\\n3. 占比分析 → 饼图:')\nprint('   适用：展示各部分占总体的比例')\nprint('   示例：市场份额、收入构成、用户分布')\n\nprint('\\n4. 关系分析 → 散点图:')\nprint('   适用：分析两个变量之间的关系')\nprint('   示例：广告与销售额、价格与销量')\n\nprint('\\n5. 分布分析 → 直方图:')\nprint('   适用：查看数据的分布情况')\nprint('   示例：年龄分布、收入分布、考试成绩')\n\nprint('\\n6. 区域差异 → 热力图:')\nprint('   适用：用颜色深浅展示矩阵数据')\nprint('   示例：区域销售、用户活跃度矩阵')\n\nprint('\\n7. 组合分析 → 堆叠图:')\nprint('   适用：同时展示整体和部分')\nprint('   示例：线上线下销售、多产品组合')\n\nprint('\\n8. 累积效果 → 面积图:')\nprint('   适用：强调数据的累积和趋势')\nprint('   示例：累积用户、累计收入')\n\nprint('\\n' + '=' * 60)\nprint('选择原则：先明确你想展示什么，再选合适的图表！')\nprint('=' * 60)"
      }
    ],
    practiceTasks: [
      "1. 创建一个折线图展示某产品的月度销售趋势",
      "2. 使用柱状图对比不同产品的总销售额",
      "3. 为你选择的数据选择合适的图表类型并解释原因"
    ],
    practiceTaskAnswers: [
      "# 练习1答案\nimport pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nnp.random.seed(42)\ndates = pd.date_range(start='2024-01-01', periods=12, freq='M')\nsales = np.random.normal(500, 100, 12).cumsum() / 2 + 400\n\nplt.figure(figsize=(12, 6))\nplt.plot(dates, sales, marker='o', linewidth=2, color='#3b82f6')\nplt.title('产品销售趋势', fontsize=16, fontweight='bold')\nplt.xlabel('月份', fontsize=12)\nplt.ylabel('销售额', fontsize=12)\nplt.grid(True, alpha=0.3)\nplt.xticks(rotation=45)\nplt.tight_layout()\nprint('折线图练习完成！')\n",
      "# 练习2答案\nimport pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nproducts = ['电子产品', '服装', '食品', '家居', '图书']\nsales = [4500, 3800, 5200, 2900, 1800]\n\nplt.figure(figsize=(10, 6))\ncolors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444']\nbars = plt.bar(products, sales, color=colors)\nplt.title('各产品总销售额对比', fontsize=16, fontweight='bold')\nplt.xlabel('产品', fontsize=12)\nplt.ylabel('销售额', fontsize=12)\nplt.grid(axis='y', alpha=0.3)\n\nfor bar in bars:\n    height = bar.get_height()\n    plt.text(bar.get_x() + bar.get_width()/2., height,\n            f'{height}', ha='center', va='bottom')\nplt.tight_layout()\nprint('柱状图练习完成！')\n",
      "# 练习3答案\nprint('图表选择练习:')\nprint('\\n如果要展示数据随时间的变化 → 折线图')\nprint('如果要对比不同类别的数值 → 柱状图')\nprint('如果要展示各部分占比 → 饼图')\nprint('如果要分析两个变量关系 → 散点图')\nprint('如果要查看数据分布 → 直方图')\nprint('\\n关键是：先确定想展示什么信息，再选图表！')\n"
    ],
    assessment: [
      "1. 列举3种常用的图表类型及其适用场景",
      "2. 数据可视化的黄金法则是什么？"
    ],
    assessmentAnswers: [
      "常用图表类型：\\n1. 折线图：展示数据随时间的变化趋势\\n2. 柱状图：对比不同类别的数值大小\\n3. 饼图：展示各部分占总体的比例\\n4. 散点图：分析两个变量之间的关系\\n5. 直方图：查看数据的分布情况",
      "数据可视化黄金法则：\\n1. 先明确想展示什么信息，再选图表\\n2. 选择最能清晰传达信息的图表类型\\n3. 保持图表简洁，删除不必要的装饰\\n4. 使用合适的颜色，避免过于花哨\\n5. 添加清晰的标签和标题"
    ],
    dataset: {
      filename: "project5_time_series.csv",
      name: "项目5 - 时间序列数据",
      size: "1.0KB",
      desc: "销售时间序列数据，包含日期、销售额、产品类别等"
    }
  },
  {
    id: 6,
    title: "A/B测试数据分析",
    description: "学习实验设计和分析",
    goal: "通过A/B测试数据，学习实验设计、假设检验、p值解读和统计显著性分析",
    dataSource: "A/B测试数据集",
    tools: ["Python", "Pandas", "SciPy"],
    learningPoints: [
      "实验设计基础",
      "假设检验",
      "p值解读",
      "置信区间",
      "统计功效分析"
    ],
    overview: "本项目将带你学习A/B测试的完整流程。通过实际的A/B测试数据，你将掌握实验设计、假设检验、p值解读等统计技能，能够科学评估产品改进的效果。",
    duration: "45分钟",
    prerequisites: {
      tools: ["无前置要求，本项目会从零开始讲解"],
      datasets: ["项目已内置模拟数据，无需额外下载"]
    },
    stepByStep: [
      {
        title: "步骤1：创建模拟数据",
        content: "创建一个模拟的A/B测试数据集：",
        code: "import pandas as pd\nimport numpy as np\nfrom scipy import stats\n\n# 创建模拟A/B测试数据\nnp.random.seed(42)\n\nn_control = 5000\nn_treatment = 5000\n\n# 对照组：转化率10%\ncontrol_conversions = np.random.binomial(1, 0.10, n_control)\n# 实验组：转化率12%\ntreatment_conversions = np.random.binomial(1, 0.12, n_treatment)\n\n# 创建DataFrame\nab_data = {\n    'user_id': np.arange(1, n_control + n_treatment + 1),\n    'group': ['control'] * n_control + ['treatment'] * n_treatment,\n    'conversion': np.concatenate([control_conversions, treatment_conversions])\n}\n\nab_df = pd.DataFrame(ab_data)\n\nprint('A/B测试数据创建完成！')\nprint(f'数据形状: {ab_df.shape}')\nprint('\\n前5行数据:')\nprint(ab_df.head())\nprint('\\n分组统计:')\nprint(ab_df['group'].value_counts())"
      },
      {
        title: "步骤2：探索性分析",
        content: "先看一下两组的基本情况：",
        code: "import pandas as pd\nimport numpy as np\nfrom scipy import stats\n\n# 创建模拟A/B测试数据（独立运行）\nnp.random.seed(42)\nn_control = 5000\nn_treatment = 5000\ncontrol_conversions = np.random.binomial(1, 0.10, n_control)\ntreatment_conversions = np.random.binomial(1, 0.12, n_treatment)\nab_data = {\n    'user_id': np.arange(1, n_control + n_treatment + 1),\n    'group': ['control'] * n_control + ['treatment'] * n_treatment,\n    'conversion': np.concatenate([control_conversions, treatment_conversions])\n}\nab_df = pd.DataFrame(ab_data)\n\n# 查看分组情况\nprint('分组情况:')\nprint(ab_df['group'].value_counts())\n\n# 查看指标对比\nif 'conversion' in ab_df.columns:\n    group_stats = ab_df.groupby('group')['conversion'].agg(['count', 'mean', 'sum'])\n    group_stats.columns = ['样本量', '转化率', '转化数']\n    print('\\n转化率统计:')\n    print(group_stats.round(4))\n    \n    # 计算提升率\n    control_rate = group_stats.loc['control', '转化率']\n    treatment_rate = group_stats.loc['treatment', '转化率']\n    lift = (treatment_rate - control_rate) / control_rate * 100\n    print(f'\\n提升率: {lift:.2f}%')"
      },
      {
        title: "步骤3：假设检验",
        content: "进行卡方检验：",
        code: "import pandas as pd\nimport numpy as np\nfrom scipy import stats\n\n# 创建模拟A/B测试数据（独立运行）\nnp.random.seed(42)\nn_control = 5000\nn_treatment = 5000\ncontrol_conversions = np.random.binomial(1, 0.10, n_control)\ntreatment_conversions = np.random.binomial(1, 0.12, n_treatment)\nab_data = {\n    'user_id': np.arange(1, n_control + n_treatment + 1),\n    'group': ['control'] * n_control + ['treatment'] * n_treatment,\n    'conversion': np.concatenate([control_conversions, treatment_conversions])\n}\nab_df = pd.DataFrame(ab_data)\n\n# 卡方检验\nif all(col in ab_df.columns for col in ['group', 'conversion']):\n    contingency_table = pd.crosstab(ab_df['group'], ab_df['conversion'])\n    print('列联表:')\n    print(contingency_table)\n    \n    chi2, p_value, dof, expected = stats.chi2_contingency(contingency_table)\n    \n    print(f'\\n卡方检验结果:')\n    print(f'卡方值: {chi2:.4f}')\n    print(f'p值: {p_value:.6f}')\n    print(f'自由度: {dof}')\n    \n    if p_value < 0.05:\n        print('\\n结论: 结果具有统计显著性 (p < 0.05)！')\n        print('实验组效果显著优于对照组。')\n    else:\n        print('\\n结论: 结果不具有统计显著性 (p >= 0.05)')\n        print('两组之间没有显著差异。')"
      },
      {
        title: "步骤4：置信区间",
        content: "计算转化率的置信区间：",
        code: "import pandas as pd\nimport numpy as np\nfrom scipy import stats\n\n# 创建模拟A/B测试数据（独立运行）\nnp.random.seed(42)\nn_control = 5000\nn_treatment = 5000\ncontrol_conversions = np.random.binomial(1, 0.10, n_control)\ntreatment_conversions = np.random.binomial(1, 0.12, n_treatment)\nab_data = {\n    'user_id': np.arange(1, n_control + n_treatment + 1),\n    'group': ['control'] * n_control + ['treatment'] * n_treatment,\n    'conversion': np.concatenate([control_conversions, treatment_conversions])\n}\nab_df = pd.DataFrame(ab_data)\n\n# 计算转化率的置信区间\nif all(col in ab_df.columns for col in ['group', 'conversion']):\n    control = ab_df[ab_df['group'] == 'control']['conversion']\n    treatment = ab_df[ab_df['group'] == 'treatment']['conversion']\n    \n    def proportion_confidence_interval(successes, trials, confidence=0.95):\n        import math\n        p = successes / trials\n        z = stats.norm.ppf((1 + confidence) / 2)\n        se = math.sqrt(p * (1 - p) / trials)\n        return p - z * se, p + z * se\n    \n    control_success = control.sum()\n    control_trials = len(control)\n    control_ci = proportion_confidence_interval(control_success, control_trials)\n    \n    treatment_success = treatment.sum()\n    treatment_trials = len(treatment)\n    treatment_ci = proportion_confidence_interval(treatment_success, treatment_trials)\n    \n    print('转化率置信区间 (95%):')\n    print(f'对照组: {control.mean():.4f} [{control_ci[0]:.4f}, {control_ci[1]:.4f}]')\n    print(f'实验组: {treatment.mean():.4f} [{treatment_ci[0]:.4f}, {treatment_ci[1]:.4f}]')\n    \n    diff = treatment.mean() - control.mean()\n    se_diff = np.sqrt((control.mean() * (1 - control.mean()) / control_trials) + \n                     (treatment.mean() * (1 - treatment.mean()) / treatment_trials))\n    diff_ci = (diff - 1.96 * se_diff, diff + 1.96 * se_diff)\n    \n    print(f'\\n差值 (实验组-对照组): {diff:.4f}')\n    print(f'差值置信区间: [{diff_ci[0]:.4f}, {diff_ci[1]:.4f}]')\n    \n    if diff_ci[0] > 0:\n        print('\\n置信区间不包含0，说明差异显著！')\n    else:\n        print('\\n置信区间包含0，差异可能不显著。')"
      },
      {
        title: "步骤5：结果解读",
        content: "完整解读A/B测试结果：",
        code: "import pandas as pd\nimport numpy as np\nfrom scipy import stats\n\n# 创建模拟A/B测试数据（独立运行）\nnp.random.seed(42)\nn_control = 5000\nn_treatment = 5000\ncontrol_conversions = np.random.binomial(1, 0.10, n_control)\ntreatment_conversions = np.random.binomial(1, 0.12, n_treatment)\nab_data = {\n    'user_id': np.arange(1, n_control + n_treatment + 1),\n    'group': ['control'] * n_control + ['treatment'] * n_treatment,\n    'conversion': np.concatenate([control_conversions, treatment_conversions])\n}\nab_df = pd.DataFrame(ab_data)\n\n# 完整的结果解读\nprint('=' * 60)\nprint('A/B测试结果报告')\nprint('=' * 60)\n\ncontrol = ab_df[ab_df['group'] == 'control']['conversion']\ntreatment = ab_df[ab_df['group'] == 'treatment']['conversion']\n\nprint(f'\\n1. 实验配置:')\nprint(f'   对照组样本量: {len(control)}')\nprint(f'   实验组样本量: {len(treatment)}')\n\nprint(f'\\n2. 核心指标:')\nprint(f'   对照组转化率: {control.mean():.2%}')\nprint(f'   实验组转化率: {treatment.mean():.2%}')\nprint(f'   绝对提升: {(treatment.mean() - control.mean()):.2%}')\nprint(f'   相对提升: {((treatment.mean() - control.mean()) / control.mean() * 100):.2f}%')\n\ncontingency_table = pd.crosstab(ab_df['group'], ab_df['conversion'])\nchi2, p_value, dof, expected = stats.chi2_contingency(contingency_table)\n\nprint(f'\\n3. 统计检验:')\nprint(f'   p值: {p_value:.6f}')\n\nif p_value < 0.05:\n    print(f'   结论: 统计显著 ✓')\n    print(f'   建议: 可以上线实验组方案')\nelse:\n    print(f'   结论: 统计不显著 ✗')\n    print(f'   建议: 需要更多数据或重新设计实验')\n\nprint('\\n' + '=' * 60)\nprint('报告结束')\nprint('=' * 60)"
      }
    ],
    practiceTasks: [
      "1. 计算最小检测效应所需的样本量",
      "2. 分析如果只收集一半数据结果会怎样",
      "3. 解释统计显著性和实际显著性的区别"
    ],
    practiceTaskAnswers: [
      "# 练习1答案\nimport numpy as np\nfrom scipy import stats\n\n# 样本量计算函数\ndef calculate_sample_size(baseline_rate, min_effect, alpha=0.05, power=0.8):\n    \"\"\"计算A/B测试所需样本量\"\"\"\n    z_alpha = stats.norm.ppf(1 - alpha/2)\n    z_power = stats.norm.ppf(power)\n    \n    p1 = baseline_rate\n    p2 = baseline_rate * (1 + min_effect)\n    \n    # 合并方差\n    p_pool = (p1 + p2) / 2\n    \n    # 样本量公式\n    n = ((z_alpha * np.sqrt(2 * p_pool * (1 - p_pool)) + \n         z_power * np.sqrt(p1 * (1 - p1) + p2 * (1 - p2))) ** 2) / (p2 - p1) ** 2\n    \n    return int(np.ceil(n))\n\n# 参数\nbaseline = 0.10  # 基准转化率10%\neffect = 0.20    # 期望检测到20%的提升\n\nsample_size = calculate_sample_size(baseline, effect)\nprint(f'每组需要样本量: {sample_size}')\nprint(f'总共需要: {sample_size * 2}')\n",
      "# 练习2答案\nprint('样本量不足的影响:')\nprint('1. p值变大，可能无法检测到真实效应')\nprint('2. 置信区间变宽，结论不确定')\nprint('3. 统计功效降低（第二类错误概率增加）')\nprint('4. 即使显著，效应估计也可能不准确')\n",
      "# 练习3答案\nprint('统计显著性 vs 实际显著性:')\nprint('\\n统计显著性:')\nprint('- p值 < 0.05，结果不太可能是偶然')\nprint('- 关注结果是否可信')\n\nprint('\\n实际显著性:')\nprint('- 效应大小是否有实际业务价值')\nprint('- 关注结果是否重要')\n\nprint('\\n例子:')\nprint('即使统计显著，但转化率只提升0.1%，')\nprint('如果成本很高，可能不值得投入。')\n"
    ],
    assessment: [
      "1. 什么是第一类错误和第二类错误？",
      "2. 解释p值的含义"
    ],
    assessmentAnswers: [
      "第一类错误和第二类错误：\\n- 第一类错误(α)：原假设为真时拒绝原假设（假阳性）\\n- 第二类错误(β)：原假设为假时接受原假设（假阴性）\\n- 统计功效 = 1 - β",
      "p值的含义：\\n- 在原假设成立的情况下，观察到当前结果或更极端结果的概率\\n- p值小≠效应大，只是表示结果不太可能是偶然\\n- 通常p<0.05被认为具有统计显著性"
    ],
    dataset: {
      filename: "project6_ab_test.csv",
      name: "项目6 - A/B测试数据",
      size: "0.6KB",
      desc: "A/B测试数据，包含用户ID、分组、转化结果等"
    }
  },
  {
    id: 7,
    title: "销售预测建模",
    description: "学习时间序列预测",
    goal: "通过历史销售数据，学习时间序列分析、移动平均和简单预测模型构建",
    dataSource: "时间序列销售数据集",
    tools: ["Python", "Pandas", "NumPy"],
    learningPoints: [
      "时间序列分解",
      "移动平均法",
      "指数平滑",
      "预测准确性评估"
    ],
    overview: "本项目将带你学习时间序列预测。通过销售历史数据，你将掌握时间序列分解、移动平均、指数平滑等预测方法，能够构建准确的销售预测模型。",
    duration: "45分钟",
    prerequisites: {
      tools: ["无前置要求，本项目会从零开始讲解"],
      datasets: ["项目已内置模拟数据，无需额外下载"]
    },
    stepByStep: [
      {
        title: "步骤1：创建模拟数据",
        content: "创建一个模拟的时间序列销售数据集：",
        code: "import pandas as pd\nimport numpy as np\n\n# 创建模拟时间序列数据\nnp.random.seed(42)\n\n# 生成日期序列（1年的日数据）\ndates = pd.date_range(start='2023-07-01', end='2024-06-30', freq='D')\n\n# 创建有趋势和季节性的销售数据\nt = np.arange(len(dates))\n# 基础趋势\ntrend = 100 + 0.5 * t\n# 周季节性\nweekly_seasonality = 20 * np.sin(2 * np.pi * t / 7)\n# 月季节性\nmonthly_seasonality = 30 * np.sin(2 * np.pi * t / 30)\n# 随机噪声\nnoise = np.random.normal(0, 10, len(t))\n\n# 组合所有成分\nsales = trend + weekly_seasonality + monthly_seasonality + noise\nsales = np.maximum(sales, 50)  # 确保销售额不为负\n\n# 创建DataFrame\nsales_data = {\n    'date': dates,\n    'sales': sales.round(2)\n}\n\nsales_df = pd.DataFrame(sales_data)\nsales_df.set_index('date', inplace=True)\n\nprint('销售数据创建完成！')\nprint(f'数据形状: {sales_df.shape}')\nprint('\\n前5行数据:')\nprint(sales_df.head())\nprint('\\n数据统计:')\nprint(sales_df.describe())"
      },
      {
        title: "步骤2：移动平均",
        content: "使用移动平均进行平滑：",
        code: "# 移动平均\nsales_df['MA7'] = sales_df['sales'].rolling(window=7).mean()\nsales_df['MA30'] = sales_df['sales'].rolling(window=30).mean()\n\nprint('移动平均计算完成！')\nprint('\\n数据预览（包含移动平均）:')\nprint(sales_df[['sales', 'MA7', 'MA30']].head(10))\nprint('\\n移动平均统计:')\nprint(sales_df[['MA7', 'MA30']].describe())"
      },
      {
        title: "步骤3：指数平滑",
        content: "使用简单指数平滑进行预测：",
        code: "# 简单指数平滑\ndef simple_exponential_smoothing(series, alpha):\n    \"\"\"简单指数平滑\"\"\"\n    result = [series.iloc[0]]  # 初始值\n    for i in range(1, len(series)):\n        result.append(alpha * series.iloc[i] + (1 - alpha) * result[i-1])\n    return pd.Series(result, index=series.index)\n\n# 应用指数平滑\nsales_df['SES_01'] = simple_exponential_smoothing(sales_df['sales'], alpha=0.1)\nsales_df['SES_05'] = simple_exponential_smoothing(sales_df['sales'], alpha=0.5)\nsales_df['SES_09'] = simple_exponential_smoothing(sales_df['sales'], alpha=0.9)\n\nprint('指数平滑计算完成！')\nprint('\\n不同alpha值的效果对比:')\nprint('Alpha=0.1（平滑）:', sales_df['SES_01'].iloc[-5:].values.round(2))\nprint('Alpha=0.5（中等）:', sales_df['SES_05'].iloc[-5:].values.round(2))\nprint('Alpha=0.9（敏感）:', sales_df['SES_09'].iloc[-5:].values.round(2))"
      },
      {
        title: "步骤4：简单预测",
        content: "基于移动平均进行简单预测：",
        code: "# 使用最后30天的平均值作为预测\nlast_30_avg = sales_df['sales'].tail(30).mean()\nlast_7_avg = sales_df['sales'].tail(7).mean()\nlast_value = sales_df['sales'].iloc[-1]\n\nprint('简单预测方法:')\nprint(f'最后1天销售额: {last_value:.2f}')\nprint(f'最后7天平均: {last_7_avg:.2f}')\nprint(f'最后30天平均: {last_30_avg:.2f}')\n\n# 预测未来7天\nprint('\\n未来7天预测（基于最后7天平均）:')\nfor i in range(1, 8):\n    print(f'第{i}天: {last_7_avg:.2f}')"
      },
      {
        title: "步骤5：预测评估",
        content: "评估不同预测方法的准确性：",
        code: "# 使用历史数据进行回测\n# 将数据分为训练集和测试集\ntrain_size = int(len(sales_df) * 0.8)\ntrain = sales_df['sales'].iloc[:train_size]\ntest = sales_df['sales'].iloc[train_size:]\n\n# 简单预测：用训练集最后一个值预测所有测试集\nnaive_prediction = [train.iloc[-1]] * len(test)\n\n# 计算误差指标\ndef calculate_metrics(actual, predicted):\n    \"\"\"计算预测误差指标\"\"\"\n    errors = actual - predicted\n    mae = np.mean(np.abs(errors))\n    rmse = np.sqrt(np.mean(errors ** 2))\n    mape = np.mean(np.abs(errors / actual)) * 100\n    return mae, rmse, mape\n\nmae, rmse, mape = calculate_metrics(test.values, naive_prediction)\n\nprint('预测模型评估:')\nprint(f'测试集样本量: {len(test)}')\nprint(f'\\n误差指标:')\nprint(f'MAE (平均绝对误差): {mae:.2f}')\nprint(f'RMSE (均方根误差): {rmse:.2f}')\nprint(f'MAPE (平均绝对百分比误差): {mape:.2f}%')\n\nprint('\\n预测示例:')\nprint('实际值:', test.iloc[:5].values.round(2))\nprint('预测值:', np.array(naive_prediction[:5]).round(2))"
      }
    ],
    practiceTasks: [
      "1. 尝试不同的移动平均窗口大小，比较效果",
      "2. 使用指数平滑进行预测并调整alpha参数",
      "3. 计算预测误差指标"
    ],
    practiceTaskAnswers: [
      "# 练习1答案\nimport pandas as pd\nimport numpy as np\n\n# 创建模拟数据\nnp.random.seed(42)\ndates = pd.date_range(start='2023-07-01', end='2024-06-30', freq='D')\nt = np.arange(len(dates))\ntrend = 100 + 0.5 * t\nweekly_seasonality = 20 * np.sin(2 * np.pi * t / 7)\nnoise = np.random.normal(0, 10, len(t))\nsales = trend + weekly_seasonality + noise\n\nsales_df = pd.DataFrame({'sales': sales.round(2)}, index=dates)\n\n# 不同窗口的移动平均\nwindows = [3, 7, 14, 30]\nfor window in windows:\n    sales_df[f'MA{window}'] = sales_df['sales'].rolling(window=window).mean()\n\nprint('不同窗口移动平均的最后值:')\nfor window in windows:\n    print(f'MA{window}: {sales_df[f\"MA{window}\"].iloc[-1]:.2f}')",
      "# 练习2答案\nimport pandas as pd\nimport numpy as np\n\n# 创建模拟数据\nnp.random.seed(42)\ndates = pd.date_range(start='2023-07-01', end='2024-06-30', freq='D')\nt = np.arange(len(dates))\ntrend = 100 + 0.5 * t\nnoise = np.random.normal(0, 10, len(t))\nsales = trend + noise\n\nsales_df = pd.DataFrame({'sales': sales.round(2)}, index=dates)\n\ndef simple_exponential_smoothing(series, alpha):\n    result = [series.iloc[0]]\n    for i in range(1, len(series)):\n        result.append(alpha * series.iloc[i] + (1 - alpha) * result[i-1])\n    return pd.Series(result, index=series.index)\n\n# 测试不同alpha值\nalphas = [0.1, 0.3, 0.5, 0.7, 0.9]\nprint('不同alpha值的指数平滑预测:')\nfor alpha in alphas:\n    ses = simple_exponential_smoothing(sales_df['sales'], alpha)\n    print(f'Alpha={alpha}: {ses.iloc[-1]:.2f}')",
      "# 练习3答案\nimport pandas as pd\nimport numpy as np\n\n# 创建模拟数据\nnp.random.seed(42)\ndates = pd.date_range(start='2023-07-01', end='2024-06-30', freq='D')\nt = np.arange(len(dates))\ntrend = 100 + 0.5 * t\nnoise = np.random.normal(0, 10, len(t))\nsales = trend + noise\n\nsales_df = pd.DataFrame({'sales': sales.round(2)}, index=dates)\n\n# 划分训练测试集\ntrain_size = int(len(sales_df) * 0.8)\ntrain = sales_df['sales'].iloc[:train_size]\ntest = sales_df['sales'].iloc[train_size:]\n\n# 简单预测\nnaive_prediction = [train.iloc[-1]] * len(test)\n\n# 计算误差\nerrors = test.values - naive_prediction\nmae = np.mean(np.abs(errors))\nrmse = np.sqrt(np.mean(errors ** 2))\nmape = np.mean(np.abs(errors / test.values)) * 100\n\nprint('预测误差指标:')\nprint(f'MAE: {mae:.2f}')\nprint(f'RMSE: {rmse:.2f}')\nprint(f'MAPE: {mape:.2f}%')"
    ],
    assessment: [
      "1. 时间序列的主要组成部分有哪些？",
      "2. 简单移动平均和指数平滑的区别是什么？"
    ],
    assessmentAnswers: [
      "时间序列的主要组成部分：\\n1. 趋势(Trend)：长期增长或下降趋势\\n2. 季节性(Seasonality)：周期性波动\\n3. 周期性(Cyclical)：长期波动\\n4. 残差(Residual)：随机波动",
      "简单移动平均和指数平滑的区别：\\n- 简单移动平均：所有历史数据权重相同\\n- 指数平滑：近期数据权重更大\\n- 指数平滑通常能更快适应变化"
    ],
    dataset: {
      filename: "project7_features.csv",
      name: "项目7 - 特征工程数据",
      size: "1.1KB",
      desc: "客户特征数据，包含年龄、性别、消费等级、活跃度等"
    }
  },
  {
    id: 8,
    title: "特征工程实战",
    description: "学习特征构建技巧",
    goal: "通过客户数据，学习特征构造、特征编码和特征变换",
    dataSource: "客户特征数据集",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    learningPoints: [
      "特征构造",
      "特征编码",
      "特征变换",
      "特征选择"
    ],
    overview: "本项目将带你学习特征工程的核心技巧。通过客户数据，你将掌握特征构造、编码、变换等技能，能够为机器学习模型构建高质量的特征集。",
    duration: "60分钟",
    prerequisites: {
      tools: ["无前置要求，本项目会从零开始讲解"],
      datasets: ["项目已内置模拟数据，无需额外下载"]
    },
    stepByStep: [
      {
        title: "步骤1：创建模拟数据",
        content: "创建一个模拟的客户特征数据集：",
        code: "import pandas as pd\nimport numpy as np\n\n# 创建模拟客户数据\nnp.random.seed(42)\n\nn_customers = 500\n\ncustomer_data = {\n    'customer_id': np.arange(1001, 1001 + n_customers),\n    'age': np.random.randint(18, 70, n_customers),\n    'gender': np.random.choice(['男', '女', '未知'], n_customers, p=[0.48, 0.48, 0.04]),\n    'region': np.random.choice(['华北', '华东', '华南', '西南', '西北'], n_customers),\n    'total_spent': np.random.uniform(100, 10000, n_customers).round(2),\n    'purchase_count': np.random.randint(1, 50, n_customers),\n    'last_purchase_days': np.random.randint(1, 365, n_customers),\n    'is_active': np.random.choice([0, 1], n_customers, p=[0.3, 0.7])\n}\n\ncustomer_df = pd.DataFrame(customer_data)\n\nprint('客户数据创建完成！')\nprint(f'数据形状: {customer_df.shape}')\nprint('\\n前5行数据:')\nprint(customer_df.head())\nprint('\\n数据信息:')\ncustomer_df.info()"
      },
      {
        title: "步骤2：特征构造",
        content: "从现有特征构造新特征：",
        code: "# 特征构造\n# 1. 平均订单金额\ncustomer_df['avg_order_value'] = customer_df['total_spent'] / customer_df['purchase_count']\n\n# 2. 消费等级（分箱）\ncustomer_df['spending_level'] = pd.qcut(customer_df['total_spent'], 4, labels=['低', '中', '高', 'VIP'])\n\n# 3. 活跃度评分\ncustomer_df['activity_score'] = (\n    (customer_df['is_active'] * 50) +\n    (np.maximum(0, 365 - customer_df['last_purchase_days']) / 365 * 30) +\n    (np.minimum(customer_df['purchase_count'], 20) / 20 * 20)\n)\n\n# 4. 年龄分组\ncustomer_df['age_group'] = pd.cut(customer_df['age'], \n                                 bins=[0, 25, 35, 45, 55, 100],\n                                 labels=['18-25', '26-35', '36-45', '46-55', '55+'])\n\nprint('特征构造完成！')\nprint('\\n新特征统计:')\nprint('平均订单金额统计:')\nprint(customer_df['avg_order_value'].describe().round(2))\nprint('\\n消费等级分布:')\nprint(customer_df['spending_level'].value_counts())\nprint('\\n年龄分组分布:')\nprint(customer_df['age_group'].value_counts().sort_index())"
      },
      {
        title: "步骤3：特征编码",
        content: "处理分类变量：",
        code: "# 特征编码示例\nprint('原始分类特征:')\nprint('性别:', customer_df['gender'].unique())\nprint('地区:', customer_df['region'].unique())\nprint('消费等级:', customer_df['spending_level'].unique())\n\n# 1. 标签编码（适用于有序变量）\nspending_mapping = {'低': 0, '中': 1, '高': 2, 'VIP': 3}\ncustomer_df['spending_level_encoded'] = customer_df['spending_level'].map(spending_mapping)\n\n# 2. 独热编码（适用于无序变量）\n# 简单实现：手动创建one-hot列\nfor region in customer_df['region'].unique():\n    customer_df[f'region_{region}'] = (customer_df['region'] == region).astype(int)\n\nprint('\\n特征编码完成！')\nprint('\\n消费等级编码示例:')\nprint(customer_df[['spending_level', 'spending_level_encoded']].head())\nprint('\\n地区独热编码示例:')\nregion_cols = [col for col in customer_df.columns if col.startswith('region_')]\nprint(customer_df[['region'] + region_cols].head())"
      },
      {
        title: "步骤4：特征变换",
        content: "数值特征标准化和归一化：",
        code: "# 特征变换\nnumeric_features = ['age', 'total_spent', 'purchase_count', 'avg_order_value', 'activity_score']\n\nprint('原始数值特征统计:')\nprint(customer_df[numeric_features].describe().round(2))\n\n# 1. 标准化 (Z-score normalization)\nprint('\\n标准化特征:')\nfor feature in numeric_features:\n    mean_val = customer_df[feature].mean()\n    std_val = customer_df[feature].std()\n    customer_df[f'{feature}_standardized'] = (customer_df[feature] - mean_val) / std_val\n    print(f'{feature}: 均值={mean_val:.2f}, 标准差={std_val:.2f}')\n\n# 2. 归一化 (Min-Max scaling)\nprint('\\n归一化特征:')\nfor feature in numeric_features:\n    min_val = customer_df[feature].min()\n    max_val = customer_df[feature].max()\n    customer_df[f'{feature}_normalized'] = (customer_df[feature] - min_val) / (max_val - min_val)\n    print(f'{feature}: 最小值={min_val:.2f}, 最大值={max_val:.2f}')\n\nprint('\\n特征变换完成！')\nprint('\\n变换后的特征示例（前3行）:')\npreview_cols = ['age', 'age_standardized', 'age_normalized', \n                'total_spent', 'total_spent_standardized', 'total_spent_normalized']\nprint(customer_df[preview_cols].head(3).round(4))"
      },
      {
        title: "步骤5：特征选择",
        content: "基于相关性选择重要特征：",
        code: "# 特征选择：相关性分析\n# 选择数值特征进行相关性分析\ncorrelation_features = ['age', 'total_spent', 'purchase_count', \n                        'avg_order_value', 'activity_score', 'last_purchase_days']\n\n# 计算相关系数矩阵\ncorrelation_matrix = customer_df[correlation_features].corr()\n\nprint('特征相关系数矩阵:')\nprint(correlation_matrix.round(3))\n\n# 找出与目标变量（假设为活跃度）高度相关的特征\ntarget = 'activity_score'\nprint(f'\\n与{target}的相关性:')\ncorrelations = correlation_matrix[target].abs().sort_values(ascending=False)\nfor feature, corr in correlations.items():\n    if feature != target:\n        print(f'{feature}: {corr:.3f}')\n\n# 特征重要性排序\nprint('\\n特征重要性排序（基于相关性）:')\nfor i, (feature, corr) in enumerate(correlations.items(), 1):\n    if feature != target:\n        print(f'{i}. {feature}: {corr:.3f}')"
      }
    ],
    practiceTasks: [
      "1. 从日期特征中提取多种时间特征",
      "2. 尝试不同的特征编码方式并比较",
      "3. 使用相关性分析进行特征选择"
    ],
    practiceTaskAnswers: [
      "# 练习1答案\nimport pandas as pd\nimport numpy as np\n\n# 创建包含日期的数据\ndates = pd.date_range(start='2024-01-01', end='2024-06-30', periods=100)\ndf = pd.DataFrame({'date': dates})\n\n# 提取时间特征\ndf['year'] = df['date'].dt.year\ndf['month'] = df['date'].dt.month\ndf['day'] = df['date'].dt.day\ndf['day_of_week'] = df['date'].dt.day_of_week  # 0=周一, 6=周日\ndf['day_of_year'] = df['date'].dt.day_of_year\ndf['quarter'] = df['date'].dt.quarter\ndf['is_weekend'] = (df['day_of_week'] >= 5).astype(int)\ndf['is_month_start'] = df['date'].dt.is_month_start.astype(int)\ndf['is_month_end'] = df['date'].dt.is_month_end.astype(int)\n\nprint('时间特征提取完成:')\nprint(df.head())",
      "# 练习2答案\nprint('不同特征编码方式:')\nprint('1. 标签编码：适用于有序分类变量（如：低/中/高）')\nprint('2. 独热编码：适用于无序分类变量（如：地区）')\nprint('3. 频率编码：用类别出现的频率编码')\nprint('4. 目标编码：用目标变量的均值编码（需要小心数据泄露）')",
      "# 练习3答案\nimport pandas as pd\nimport numpy as np\n\n# 创建模拟数据\nnp.random.seed(42)\ndata = {\n    'feature1': np.random.randn(100),\n    'feature2': np.random.randn(100),\n    'feature3': np.random.randn(100),\n    'feature4': np.random.randn(100),\n    'target': np.random.randn(100)\n}\ndf = pd.DataFrame(data)\n\n# 添加一些相关性\ndf['target'] = df['feature1'] * 0.8 + df['feature2'] * 0.5 + np.random.randn(100) * 0.3\n\n# 计算相关性\ncorrelations = df.corr()['target'].abs().sort_values(ascending=False)\nprint('特征与目标的相关性:')\nprint(correlations)"
    ],
    assessment: [
      "1. 为什么需要进行特征工程？",
      "2. 特征选择的主要方法有哪些？"
    ],
    assessmentAnswers: [
      "特征工程的重要性：\\n1. 提高模型性能\\n2. 使模型更容易解释\\n3. 减少计算量\\n4. 避免过拟合\\n5. 发现数据中的模式",
      "特征选择的主要方法：\\n1. 过滤法(Filter)：基于统计指标\\n2. 包装法(Wrapper)：基于模型性能\\n3. 嵌入法(Embedded)：模型训练过程中自动选择"
    ],
    dataset: {
      filename: "project8_outliers.csv",
      name: "项目8 - 异常检测数据",
      size: "0.7KB",
      desc: "交易数据，包含异常值用于异常检测练习"
    }
  },
  {
    id: 9,
    title: "异常值检测系统",
    description: "学习异常检测方法",
    goal: "通过客户数据，学习统计方法、孤立森林等异常检测技术",
    dataSource: "客户交易数据集",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    learningPoints: [
      "统计方法检测",
      "孤立森林",
      "Z-score方法",
      "IQR方法",
      "异常值可视化"
    ],
    overview: "本项目将带你学习异常检测技术。通过客户交易数据，你将掌握统计方法、孤立森林等异常检测算法，能够构建实用的异常检测系统。",
    duration: "60分钟",
    prerequisites: {
      tools: ["无前置要求，本项目会从零开始讲解"],
      datasets: ["项目已内置模拟数据，无需额外下载"]
    },
    stepByStep: [
      {
        title: "步骤1：创建模拟数据",
        content: "创建一个包含异常值的模拟数据集：",
        code: "import pandas as pd\nimport numpy as np\n\n# 创建模拟数据\nnp.random.seed(42)\n\nn_samples = 1000\n\n# 正常数据\nnormal_data = {\n    'transaction_amount': np.random.normal(500, 100, n_samples),\n    'transaction_count': np.random.poisson(10, n_samples),\n    'account_age_days': np.random.randint(30, 1000, n_samples)\n}\n\ndf = pd.DataFrame(normal_data)\n\n# 添加异常值\nn_outliers = 50\noutlier_indices = np.random.choice(n_samples, n_outliers, replace=False)\n\n# 大额交易异常\ndf.loc[outlier_indices[:25], 'transaction_amount'] = np.random.uniform(5000, 10000, 25)\n\n# 频繁交易异常\ndf.loc[outlier_indices[25:40], 'transaction_count'] = np.random.randint(100, 200, 15)\n\n# 新账户大额交易异常\nnew_account_indices = outlier_indices[40:]\ndf.loc[new_account_indices, 'account_age_days'] = np.random.randint(1, 7, len(new_account_indices))\ndf.loc[new_account_indices, 'transaction_amount'] = np.random.uniform(3000, 8000, len(new_account_indices))\n\n# 确保数值为正\ndf['transaction_amount'] = df['transaction_amount'].abs()\n\nprint('数据创建完成！')\nprint(f'数据形状: {df.shape}')\nprint('\\n数据统计:')\nprint(df.describe().round(2))\nprint('\\n前5行数据:')\nprint(df.head())"
      },
      {
        title: "步骤2：Z-score方法",
        content: "使用Z-score检测单变量异常值：",
        code: "# Z-score方法\nprint('Z-score异常检测:')\n\nfor feature in ['transaction_amount', 'transaction_count', 'account_age_days']:\n    # 计算Z-score\n    mean_val = df[feature].mean()\n    std_val = df[feature].std()\n    z_scores = (df[feature] - mean_val) / std_val\n    \n    # 标记异常值（|Z| > 3）\n    outliers = (z_scores.abs() > 3)\n    outlier_count = outliers.sum()\n    \n    df[f'{feature}_zscore_outlier'] = outliers.astype(int)\n    \n    print(f'{feature}:')\n    print(f'  均值: {mean_val:.2f}, 标准差: {std_val:.2f}')\n    print(f'  检测到 {outlier_count} 个异常值 ({outlier_count/len(df)*100:.1f}%)')\n    if outlier_count > 0:\n        print(f'  异常值示例: {df[feature][outliers].head().values.round(2)}')\n\n# 综合Z-score异常\ndf['any_zscore_outlier'] = (\n    df['transaction_amount_zscore_outlier'] | \n    df['transaction_count_zscore_outlier'] | \n    df['account_age_days_zscore_outlier']\n).astype(int)\n\nprint(f'\\nZ-score检测到的总异常数: {df[\"any_zscore_outlier\"].sum()}')"
      },
      {
        title: "步骤3：IQR方法",
        content: "使用IQR方法检测异常值：",
        code: "# IQR方法\nprint('IQR异常检测:')\n\nfor feature in ['transaction_amount', 'transaction_count', 'account_age_days']:\n    # 计算IQR\n    Q1 = df[feature].quantile(0.25)\n    Q3 = df[feature].quantile(0.75)\n    IQR = Q3 - Q1\n    lower_bound = Q1 - 1.5 * IQR\n    upper_bound = Q3 + 1.5 * IQR\n    \n    # 标记异常值\n    outliers = (df[feature] < lower_bound) | (df[feature] > upper_bound)\n    outlier_count = outliers.sum()\n    \n    df[f'{feature}_iqr_outlier'] = outliers.astype(int)\n    \n    print(f'{feature}:')\n    print(f'  Q1: {Q1:.2f}, Q3: {Q3:.2f}, IQR: {IQR:.2f}')\n    print(f'  范围: [{lower_bound:.2f}, {upper_bound:.2f}]')\n    print(f'  检测到 {outlier_count} 个异常值 ({outlier_count/len(df)*100:.1f}%)')\n    if outlier_count > 0:\n        print(f'  异常值示例: {df[feature][outliers].head().values.round(2)}')\n\n# 综合IQR异常\ndf['any_iqr_outlier'] = (\n    df['transaction_amount_iqr_outlier'] | \n    df['transaction_count_iqr_outlier'] | \n    df['account_age_days_iqr_outlier']\n).astype(int)\n\nprint(f'\\nIQR检测到的总异常数: {df[\"any_iqr_outlier\"].sum()}')"
      },
      {
        title: "步骤4：孤立森林",
        content: "使用孤立森林进行多变量异常检测：",
        code: "from sklearn.ensemble import IsolationForest\n\n# 孤立森林\nprint('孤立森林异常检测:')\n\n# 选择特征\nfeatures = ['transaction_amount', 'transaction_count', 'account_age_days']\nX = df[features].values\n\n# 训练孤立森林\niso_forest = IsolationForest(contamination=0.05, random_state=42)\nprint('训练孤立森林...')\nprint(f'参数: contamination=0.05 (预计5%异常)')\n\n# 预测异常值\nanomaly_scores = iso_forest.fit_predict(X)\n# 1为正常，-1为异常\ndf['isolation_forest_outlier'] = (anomaly_scores == -1).astype(int)\n\n# 获取异常分数\noutlier_scores = iso_forest.decision_function(X)\ndf['anomaly_score'] = -outlier_scores  # 分数越高越异常\n\noutlier_count = df['isolation_forest_outlier'].sum()\nprint(f'\\n孤立森林检测到 {outlier_count} 个异常值 ({outlier_count/len(df)*100:.1f}%)')\n\n# 显示最异常的样本\nprint('\\nTop 10 最异常样本:')\ntop_outliers = df.nlargest(10, 'anomaly_score')\nprint(top_outliers[features + ['anomaly_score']].round(2))"
      },
      {
        title: "步骤5：综合分析",
        content: "综合多种方法的检测结果：",
        code: "# 综合分析\nprint('=' * 60)\nprint('异常检测综合报告')\nprint('=' * 60)\n\nprint(f'\\n1. 数据概况:')\nprint(f'  总样本数: {len(df)}')\n\nprint(f'\\n2. 各方法检测结果:')\nprint(f'  Z-score方法: {df[\"any_zscore_outlier\"].sum()} 个异常')\nprint(f'  IQR方法: {df[\"any_iqr_outlier\"].sum()} 个异常')\nprint(f'  孤立森林: {df[\"isolation_forest_outlier\"].sum()} 个异常')\n\n# 计算一致性\nprint(f'\\n3. 方法一致性:')\ndf['outlier_vote'] = (\n    df['any_zscore_outlier'] + \n    df['any_iqr_outlier'] + \n    df['isolation_forest_outlier']\n)\n\nvote_counts = df['outlier_vote'].value_counts().sort_index()\nfor votes, count in vote_counts.items():\n    print(f'  {votes} 种方法标记为异常: {count} 个样本')\n\n# 高置信度异常（至少2种方法同意）\nhigh_confidence_outliers = df[df['outlier_vote'] >= 2]\nprint(f'\\n4. 高置信度异常:')\nprint(f'  至少2种方法同意的异常: {len(high_confidence_outliers)} 个')\n\nif len(high_confidence_outliers) > 0:\n    print(f'  示例:')\n    print(high_confidence_outliers[['transaction_amount', 'transaction_count', 'account_age_days', 'outlier_vote']].head().round(2))\n\nprint('\\n' + '=' * 60)\nprint('报告结束')\nprint('=' * 60)"
      }
    ],
    practiceTasks: [
      "1. 可视化不同方法检测到的异常值",
      "2. 尝试调整孤立森林的contamination参数",
      "3. 比较几种方法的检测结果差异"
    ],
    practiceTaskAnswers: [
      "# 练习1答案\nimport pandas as pd\nimport numpy as np\n\n# 创建模拟数据\nnp.random.seed(42)\nn_samples = 1000\ndata = {\n    'transaction_amount': np.random.normal(500, 100, n_samples),\n    'transaction_count': np.random.poisson(10, n_samples)\n}\ndf = pd.DataFrame(data)\n\n# 添加异常值\noutlier_indices = np.random.choice(n_samples, 50, replace=False)\ndf.loc[outlier_indices, 'transaction_amount'] = np.random.uniform(5000, 10000, 50)\n\n# Z-score检测\nz_scores = (df['transaction_amount'] - df['transaction_amount'].mean()) / df['transaction_amount'].std()\ndf['zscore_outlier'] = (z_scores.abs() > 3).astype(int)\n\nprint('异常检测结果:')\nprint(f'正常样本: {len(df[df[\"zscore_outlier\"] == 0])}')\nprint(f'异常样本: {len(df[df[\"zscore_outlier\"] == 1])}')\nprint('\\n异常样本示例:')\nprint(df[df['zscore_outlier'] == 1].head())",
      "# 练习2答案\nprint('孤立森林contamination参数的作用:')\nprint('- contamination=0.01: 只检测1%最异常的样本（严格）')\nprint('- contamination=0.05: 检测5%异常样本（常用）')\nprint('- contamination=0.10: 检测10%异常样本（宽松）')\nprint('\\n建议:')\nprint('1. 根据业务知识预估异常比例')\nprint('2. 尝试不同值并验证结果')\nprint('3. 结合其他方法交叉验证')",
      "# 练习3答案\nprint('不同异常检测方法的特点:')\nprint('\\n1. Z-score方法:')\nprint('   - 优点: 简单快速，单变量检测')\nprint('   - 缺点: 假设正态分布，对多变量不敏感')\n\nprint('\\n2. IQR方法:')\nprint('   - 优点: 不假设分布，鲁棒性好')\nprint('   - 缺点: 只能单变量，不太敏感')\n\nprint('\\n3. 孤立森林:')\nprint('   - 优点: 多变量检测，适合高维数据')\nprint('   - 缺点: 需要调参，计算量较大')\n\nprint('\\n建议: 结合多种方法使用！')"
    ],
    assessment: [
      "1. 异常检测在实际业务中有什么应用？",
      "2. 简述孤立森林的工作原理"
    ],
    assessmentAnswers: [
      "异常检测的应用：\\n1. 欺诈检测：识别异常交易\\n2. 网络安全：检测入侵行为\\n3. 质量控制：发现次品\\n4. 医疗：发现罕见病例\\n5. 运维：检测系统异常",
      "孤立森林工作原理：\\n1. 随机选择特征和分割点\\n2. 递归分割数据\\n3. 异常值需要更少的分割就能被孤立\\n4. 通过路径长度判断异常程度"
    ],
    dataset: {
      filename: "project9_multi_source.csv",
      name: "项目9 - 多源数据",
      size: "1.5KB",
      desc: "多源数据融合示例，包含订单、客户、产品信息"
    }
  },
  {
    id: 10,
    title: "多源数据融合",
    description: "学习数据整合技巧",
    goal: "通过多个数据源的融合，学习数据合并、连接、去重和数据一致性处理",
    dataSource: "多源电商数据集",
    tools: ["Python", "Pandas", "NumPy"],
    learningPoints: [
      "数据合并",
      "表连接操作",
      "数据去重",
      "数据一致性",
      "数据仓库概念"
    ],
    overview: "本项目将带你学习多源数据融合技术。通过整合多个电商数据源，你将掌握数据合并、连接、去重和一致性处理，能够构建完整的整合数据集。",
    duration: "60分钟",
    prerequisites: {
      tools: ["无前置要求，本项目会从零开始讲解"],
      datasets: ["项目已内置模拟数据，无需额外下载"]
    },
    stepByStep: [
      {
        title: "步骤1：创建模拟数据",
        content: "创建多个模拟数据源：",
        code: "import pandas as pd\nimport numpy as np\n\nnp.random.seed(42)\n\n# 1. 订单数据\nn_orders = 200\norders_data = {\n    'order_id': np.arange(1001, 1001 + n_orders),\n    'customer_id': np.random.randint(2001, 2050, n_orders),\n    'product_id': np.random.randint(3001, 3020, n_orders),\n    'quantity': np.random.randint(1, 5, n_orders),\n    'unit_price': np.random.uniform(10, 500, n_orders).round(2),\n    'order_date': pd.date_range(start='2024-01-01', periods=n_orders, freq='D'),\n    'status': np.random.choice(['完成', '待发货', '已取消'], n_orders, p=[0.7, 0.2, 0.1])\n}\norders_df = pd.DataFrame(orders_data)\norders_df['total_amount'] = orders_df['quantity'] * orders_df['unit_price']\n\n# 2. 客户数据\ncustomers_data = {\n    'customer_id': np.arange(2001, 2050),\n    'customer_name': [f'客户{i}' for i in range(2001, 2050)],\n    'email': [f'customer{i}@example.com' for i in range(2001, 2050)],\n    'phone': [f'138{str(np.random.randint(10000000, 99999999))}' for _ in range(49)],\n    'register_date': pd.date_range(start='2023-01-01', periods=49, freq='W'),\n    'level': np.random.choice(['普通', '银卡', '金卡', '钻石'], 49, p=[0.5, 0.3, 0.15, 0.05]),\n    'region': np.random.choice(['华北', '华东', '华南', '西南', '西北'], 49)\n}\ncustomers_df = pd.DataFrame(customers_data)\n\n# 3. 产品数据\nproducts_data = {\n    'product_id': np.arange(3001, 3020),\n    'product_name': [f'产品{i}' for i in range(3001, 3020)],\n    'category': np.random.choice(['电子产品', '服装', '食品', '家居', '图书'], 19),\n    'brand': np.random.choice(['品牌A', '品牌B', '品牌C', '品牌D'], 19),\n    'cost_price': np.random.uniform(5, 300, 19).round(2),\n    'stock': np.random.randint(10, 500, 19),\n    'is_active': np.random.choice([True, False], 19, p=[0.9, 0.1])\n}\nproducts_df = pd.DataFrame(products_data)\n\nprint('多源数据创建完成！')\nprint(f'\\n订单数据: {orders_df.shape}')\nprint(f'客户数据: {customers_df.shape}')\nprint(f'产品数据: {products_df.shape}')\nprint('\\n订单数据前3行:')\nprint(orders_df.head(3))\nprint('\\n客户数据前3行:')\nprint(customers_df.head(3))\nprint('\\n产品数据前3行:')\nprint(products_df.head(3))"
      },
      {
        title: "步骤2：数据合并",
        content: "使用merge进行表连接：",
        code: "# 1. 订单 + 客户\nprint('1. 订单数据与客户数据合并:')\norders_customers = pd.merge(\n    orders_df,\n    customers_df,\n    on='customer_id',\n    how='left'  # 保留所有订单\n)\nprint(f'  合并后形状: {orders_customers.shape}')\nprint(f'  合并后列: {orders_customers.columns.tolist()}')\n\n# 2. 再合并产品数据\nprint('\\n2. 再与产品数据合并:')\nfull_data = pd.merge(\n    orders_customers,\n    products_df,\n    on='product_id',\n    how='left'\n)\nprint(f'  合并后形状: {full_data.shape}')\nprint(f'  最终列数: {len(full_data.columns)}')\n\nprint('\\n3. 完整数据预览:')\npreview_cols = ['order_id', 'customer_name', 'product_name', \n                'category', 'quantity', 'total_amount', 'status']\nprint(full_data[preview_cols].head(5))"
      },
      {
        title: "步骤3：连接类型",
        content: "学习不同的连接方式：",
        code: "# 演示不同的连接类型\nprint('连接类型对比:')\n\n# 创建示例数据\nleft = pd.DataFrame({\n    'id': [1, 2, 3, 4],\n    'value_left': ['A', 'B', 'C', 'D']\n})\n\nright = pd.DataFrame({\n    'id': [3, 4, 5, 6],\n    'value_right': ['X', 'Y', 'Z', 'W']\n})\n\nprint('\\n左表:')\nprint(left)\nprint('\\n右表:')\nprint(right)\n\nprint('\\n1. INNER JOIN (内连接): 只保留匹配的记录')\ninner = pd.merge(left, right, on='id', how='inner')\nprint(inner)\n\nprint('\\n2. LEFT JOIN (左连接): 保留左表所有记录')\nleft_join = pd.merge(left, right, on='id', how='left')\nprint(left_join)\n\nprint('\\n3. RIGHT JOIN (右连接): 保留右表所有记录')\nright_join = pd.merge(left, right, on='id', how='right')\nprint(right_join)\n\nprint('\\n4. OUTER JOIN (全连接): 保留所有记录')\nouter = pd.merge(left, right, on='id', how='outer')\nprint(outer)"
      },
      {
        title: "步骤4：数据去重",
        content: "处理重复数据：",
        code: "# 模拟重复数据\nprint('数据去重演示:')\n\n# 创建有重复的数据\ndata_with_duplicates = pd.concat([orders_df.head(10), orders_df.head(3)])\nprint(f'\\n原始数据（含重复）: {len(data_with_duplicates)} 行')\nprint(f'重复的order_id: {data_with_duplicates[\"order_id\"].duplicated().sum()} 个')\n\n# 1. 完全去重\ndeduped_all = data_with_duplicates.drop_duplicates()\nprint(f'完全去重后: {len(deduped_all)} 行')\n\n# 2. 按指定列去重\ndeduped_key = data_with_duplicates.drop_duplicates(subset=['order_id'], keep='first')\nprint(f'按order_id去重后: {len(deduped_key)} 行')\n\n# 在完整数据上检查重复\nprint(f'\\n完整数据去重检查:')\nprint(f'完整数据行数: {len(full_data)}')\nprint(f'重复订单数: {full_data[\"order_id\"].duplicated().sum()}')\n\n# 去除重复订单（如果有）\nif full_data['order_id'].duplicated().sum() > 0:\n    full_data_deduped = full_data.drop_duplicates(subset=['order_id'], keep='first')\n    print(f'去重后行数: {len(full_data_deduped)}')\nelse:\n    print('没有发现重复订单')"
      },
      {
        title: "步骤5：分析应用",
        content: "使用融合后的数据进行分析：",
        code: "# 使用融合后的数据进行分析\nprint('=' * 60)\nprint('数据融合分析报告')\nprint('=' * 60)\n\n# 1. 按客户等级统计\nprint('\\n1. 客户等级销售统计:')\nlevel_stats = full_data.groupby('level').agg({\n    'order_id': 'count',\n    'total_amount': ['sum', 'mean']\n}).round(2)\nlevel_stats.columns = ['订单数', '总销售额', '平均订单金额']\nprint(level_stats)\n\n# 2. 按产品类别统计\nprint('\\n2. 产品类别销售统计:')\ncategory_stats = full_data.groupby('category').agg({\n    'order_id': 'count',\n    'quantity': 'sum',\n    'total_amount': 'sum'\n}).round(2)\ncategory_stats.columns = ['订单数', '销量', '销售额']\ncategory_stats = category_stats.sort_values('销售额', ascending=False)\nprint(category_stats)\n\n# 3. 按地区统计\nprint('\\n3. 地区销售统计:')\nregion_stats = full_data.groupby('region').agg({\n    'order_id': 'count',\n    'total_amount': 'sum'\n}).round(2)\nregion_stats.columns = ['订单数', '销售额']\nregion_stats = region_stats.sort_values('销售额', ascending=False)\nprint(region_stats)\n\n# 4. 订单状态统计\nprint('\\n4. 订单状态统计:')\nstatus_stats = full_data['status'].value_counts()\nprint(status_stats)\n\n# 5. 关键指标汇总\nprint('\\n5. 关键指标汇总:')\nprint(f'  总订单数: {len(full_data)}')\nprint(f'  总销售额: {full_data[\"total_amount\"].sum():,.2f}')\nprint(f'  平均订单金额: {full_data[\"total_amount\"].mean():,.2f}')\nprint(f'  客户数: {full_data[\"customer_id\"].nunique()}')\nprint(f'  产品数: {full_data[\"product_id\"].nunique()}')\n\nprint('\\n' + '=' * 60)\nprint('报告结束')\nprint('=' * 60)"
      }
    ],
    practiceTasks: [
      "1. 设计一个星型模式的数据仓库结构",
      "2. 实现一个增量数据更新的逻辑",
      "3. 处理数据冲突的解决方案"
    ],
    practiceTaskAnswers: [
      "# 练习1答案\nprint('星型模式设计:')\nprint('\\n事实表: 订单事实表')\nprint('- order_id (订单ID)')\nprint('- customer_id (客户ID)')\nprint('- product_id (产品ID)')\nprint('- date_id (日期ID)')\nprint('- quantity (数量)')\nprint('- amount (金额)')\n\nprint('\\n维度表:')\nprint('1. 客户维度: customer_id, name, level, region...')\nprint('2. 产品维度: product_id, name, category, brand...')\nprint('3. 日期维度: date_id, date, year, month, day...')\nprint('4. 地区维度: region_id, region, province, city...')",
      "# 练习2答案\nprint('增量更新逻辑:')\nprint('1. 记录上次更新时间 (last_update_time)')\nprint('2. 从源系统只获取 last_update_time 之后的新增/修改数据')\nprint('3. 新数据：直接插入')\nprint('4. 修改数据：更新已有记录')\nprint('5. 更新 last_update_time 为当前时间')\nprint('6. 定期进行全量校验')",
      "# 练习3答案\nprint('数据冲突解决方案:')\nprint('\\n1. 时间优先: 以最新的数据为准')\nprint('2. 来源优先: 以更可信的数据源为准')\nprint('3. 业务规则: 按预设的业务规则处理')\nprint('4. 人工审核: 复杂情况留待人工处理')\nprint('5. 数据版本: 保留所有版本，记录变更历史')"
    ],
    assessment: [
      "1. 数据融合的主要挑战是什么？",
      "2. 简述事实表和维度表的区别"
    ],
    assessmentAnswers: [
      "数据融合的主要挑战：1. 数据格式不一致 2. 数据质量差异 3. 主键冲突 4. 数据冗余 5. 实时性要求",
      "事实表和维度表的区别：事实表存储业务度量，维度表存储描述性信息，星型模式是一个事实表连接多个维度表"
    ],
    dataset: {
      filename: "project10_fusion.csv",
      name: "项目10 - 数据融合数据",
      size: "1.8KB",
      desc: "多源数据融合数据，包含订单、客户、产品等多维度信息"
    }
  }
]