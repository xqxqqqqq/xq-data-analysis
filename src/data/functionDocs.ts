export interface FunctionDoc {
  name: string;
  description: string;
  syntax: string;
  parameters?: string;
  returnValue?: string;
  example: string;
}

export const functionDocumentation: Record<string, FunctionDoc> = {
  "pd.DataFrame()": {
    name: "pd.DataFrame()",
    description: "创建二维表格数据结构，类似Excel表格，是Pandas最常用的数据结构",
    syntax: "pd.DataFrame(data, index, columns)",
    parameters: "data: 数据源（字典、数组等）\nindex: 行索引\ncolumns: 列名",
    returnValue: "返回DataFrame对象",
    example: "pd.DataFrame({\n  '姓名': ['张三', '李四'],\n  '年龄': [25, 30]\n})"
  },
  "np.random.seed()": {
    name: "np.random.seed()",
    description: "设置随机种子，确保代码每次运行产生相同的随机数，便于结果复现",
    syntax: "np.random.seed(seed=None)",
    parameters: "seed: 整数（常用42）",
    returnValue: "无返回值",
    example: "np.random.seed(42)\nnums = np.random.randint(1, 10, 5)\n# 每次运行结果相同"
  },
  "np.random.randint()": {
    name: "np.random.randint()",
    description: "生成指定范围内的随机整数",
    syntax: "np.random.randint(low, high=None, size=None)",
    parameters: "low: 最小值\nhigh: 最大值（不包含）\nsize: 生成数量",
    returnValue: "随机整数或数组",
    example: "np.random.randint(1, 10, 5)\n# 生成5个1-9的随机整数"
  },
  "np.random.choice()": {
    name: "np.random.choice()",
    description: "从数组中随机选择元素",
    syntax: "np.random.choice(a, size=None, replace=True)",
    parameters: "a: 候选数组或数量\nsize: 选择数量\nreplace: 是否允许重复",
    returnValue: "选中的元素",
    example: "np.random.choice(['苹果','香蕉','橘子'], 3)\n# 随机选择3个水果"
  },
  "np.random.uniform()": {
    name: "np.random.uniform()",
    description: "生成指定范围内的随机浮点数",
    syntax: "np.random.uniform(low, high, size=None)",
    parameters: "low: 最小值\nhigh: 最大值\nsize: 数量",
    returnValue: "随机浮点数或数组",
    example: "np.random.uniform(1.5, 9.5, 3)\n# 生成3个1.5-9.5之间的随机数"
  },
  "pd.date_range()": {
    name: "pd.date_range()",
    description: "生成日期范围，常用于创建时间序列数据",
    syntax: "pd.date_range(start, end, periods, freq)",
    parameters: "start: 开始日期\nend: 结束日期\nperiods: 日期数量\nfreq: 频率（D=天, H=小时）",
    returnValue: "DatetimeIndex日期索引",
    example: "pd.date_range('2024-01-01', periods=10, freq='D')\n# 生成10天的日期"
  },
  "df.loc[]": {
    name: "df.loc[]",
    description: "通过标签索引选择数据，可以同时选择行和列",
    syntax: "df.loc[行索引, 列索引]",
    parameters: "行索引: 行标签或条件\n列索引: 列名",
    returnValue: "选中的数据",
    example: "df.loc[df['年龄'] > 25, '姓名']\n# 选择年龄大于25岁的姓名"
  },
  "df.shape": {
    name: "df.shape",
    description: "查看数据的行数和列数",
    syntax: "df.shape",
    parameters: "无参数",
    returnValue: "返回 (行数, 列数) 元组",
    example: "df.shape\n# 返回 (100, 5) 表示100行5列"
  },
  "df.info()": {
    name: "df.info()",
    description: "查看数据的基本信息，包括列名、数据类型、非空值数量等",
    syntax: "df.info()",
    parameters: "无参数",
    returnValue: "无返回值，直接打印信息",
    example: "df.info()\n# 显示数据概况"
  },
  "df.isnull()": {
    name: "df.isnull()",
    description: "检测数据中的缺失值，返回布尔值（True表示缺失）",
    syntax: "df.isnull() / df.isna()",
    parameters: "无参数",
    returnValue: "返回布尔型DataFrame",
    example: "df.isnull().sum()\n# 统计每列缺失值数量"
  },
  "df.duplicated()": {
    name: "df.duplicated()",
    description: "检测重复行，返回布尔值（True表示重复）",
    syntax: "df.duplicated(subset=None, keep='first')",
    parameters: "subset: 检查的列\nkeep: 保留哪个重复（first/last/False）",
    returnValue: "返回布尔型Series",
    example: "df.duplicated().sum()\n# 统计重复行数量"
  },
  "df.describe()": {
    name: "df.describe()",
    description: "查看数值型数据的统计信息，包括均值、标准差、最小值、最大值等",
    syntax: "df.describe(percentiles=None)",
    parameters: "percentiles: 指定百分位数",
    returnValue: "返回统计信息DataFrame",
    example: "df.describe()\n# 显示数值列的统计摘要"
  },
  "df.select_dtypes()": {
    name: "df.select_dtypes()",
    description: "根据数据类型选择列，如选择所有数值列或字符串列",
    syntax: "df.select_dtypes(include=None, exclude=None)",
    parameters: "include: 包含的数据类型\nexclude: 排除的数据类型",
    returnValue: "返回筛选后的DataFrame",
    example: "df.select_dtypes(include=[np.number])\n# 选择所有数值型列"
  },
  "df.fillna()": {
    name: "df.fillna()",
    description: "用指定值填充缺失值，可以是数值、字符串或均值等",
    syntax: "df.fillna(value=None, method=None)",
    parameters: "value: 填充值\nmethod: 填充方法（ffill/bfill）",
    returnValue: "返回填充后的DataFrame",
    example: "df['年龄'].fillna(df['年龄'].mean())\n# 用均值填充缺失值"
  },
  "df.median()": {
    name: "df.median()",
    description: "计算中位数，不受极端值影响，比均值更稳健",
    syntax: "df.median(axis=None, skipna=True)",
    parameters: "axis: 计算方向（0=列, 1=行）\nskipna: 是否跳过缺失值",
    returnValue: "返回中位数",
    example: "df['价格'].median()\n# 计算价格列的中位数"
  },
  "df.quantile()": {
    name: "df.quantile()",
    description: "计算分位数，常用0.25、0.5、0.75分别表示Q1、中位数、Q3",
    syntax: "df.quantile(q=0.5, axis=None)",
    parameters: "q: 分位数（0-1之间）\naxis: 计算方向",
    returnValue: "返回分位数",
    example: "df['价格'].quantile(0.25)\n# 计算价格列的25%分位数"
  },
  "np.where()": {
    name: "np.where()",
    description: "根据条件选择数据，类似于Excel的IF函数",
    syntax: "np.where(condition, x, y)",
    parameters: "condition: 条件\nx: 条件为True时的值\ny: 条件为False时的值",
    returnValue: "返回选择后的数组",
    example: "np.where(df['年龄'] > 18, '成年', '未成年')\n# 标记成年状态"
  },
  "df.drop_duplicates()": {
    name: "df.drop_duplicates()",
    description: "删除重复的行，默认保留第一条",
    syntax: "df.drop_duplicates(subset=None, keep='first')",
    parameters: "subset: 检查的列\nkeep: 保留策略",
    returnValue: "返回去重后的DataFrame",
    example: "df.drop_duplicates()\n# 删除所有重复行"
  },
  "df.str.strip()": {
    name: "df.str.strip()",
    description: "去除字符串两端的空白字符，统一文本格式",
    syntax: "df['列名'].str.strip()",
    parameters: "无参数",
    returnValue: "返回处理后的字符串Series",
    example: "df['姓名'].str.strip()\n# 去除姓名前后的空格"
  }
};
