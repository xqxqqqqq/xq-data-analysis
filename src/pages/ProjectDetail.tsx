import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { projects } from '@/data/projects';
import CodeEditor from '@/components/CodeEditor';
import FunctionDocModal from '@/components/FunctionDocModal';
import { Download, FileText } from 'lucide-react';

// 获取小白贴士
const getBeginnerTip = (projectId: number, stepIndex: number): string => {
  const tips: Record<number, string[]> = {
    1: [
      '如果是第一次安装Python库，建议先确认网络连接正常。pip是Python的包管理工具，就像手机上的应用商店一样。',
      'read_csv()函数需要传入正确的文件路径。如果文件和代码在同一文件夹下，直接写文件名就可以了。',
      'df.head()默认显示前5行，想要看更多行可以在括号里填数字，比如df.head(10)显示前10行。',
      '缺失值就像填空题的空答案一样。处理缺失值有两种主要方法：填个合理的数（均值/众数），或者干脆删掉这道题。',
      '数据类型转换很重要！就像把文字"123"变成数字123才能做数学运算一样。',
      'describe()会给出很多统计信息，比如平均值、最大值、最小值等，这些能帮你快速了解数据的整体情况。',
      '筛选数据就像用搜索引擎按条件搜索一样，把符合条件的行找出来。排序则是按某列从小到大或从大到小排列。'
    ],
    2: [
      'Matplotlib和Seaborn是Python中最常用的画图库，它们的关系就像基础款和升级款一样。',
      '中文字体设置很关键！如果不设置，图表中的中文会显示成乱码，就像看加密文件一样。',
      '折线图特别适合看趋势，比如股票走势、销售变化等，能一眼看出是涨还是跌。',
      '柱状图适合比大小，比如不同产品的销量对比，柱子越高代表销量越好。',
      '饼图看比例最直观，但别分太多块，超过5块就会很乱，像切披萨切得太碎一样。',
      '散点图看两个变量的关系，比如身高和体重，一般来说身高越高体重也越重。',
      '美化图表很重要！就像给照片加滤镜一样，适当的颜色、字体、标签能让图表更专业。'
    ],
    3: [
      'EDA就像侦探破案一样，通过数据中的线索发现隐藏的真相。别急着下结论，先好好探索数据！',
      '数据清洗是EDA的第一步，也是最重要的一步。脏数据会得出错误的结论，就像用过期食材做菜一样。',
      '单变量分析是基础，先搞清楚每个变量长什么样，再去看它们之间的关系。',
      '双变量分析就像配对游戏，看看哪两个变量关系最好，哪两个合不来。',
      '交互式图表很酷！鼠标悬停就能看详细数据，还能缩放、筛选，让分析变得更有趣。'
    ]
  };
  
  const projectTips = tips[projectId] || tips[1] || [];
  return projectTips[stepIndex] || '慢慢来，每一步都搞清楚了再往下走！遇到不懂的地方先上网搜索，这也是学习的一部分。';
};

// 步骤总结
const getStepSummary = (projectId: number, stepIndex: number) => {
  const summaries: Record<number, string[]> = {
    1: [
      '本步骤学习如何创建模拟数据，使用NumPy生成随机数据，为后续数据清洗做准备。',
      '数据质量检查是数据清洗的关键步骤，需要检查缺失值、重复值和数据类型。',
      '缺失值处理有多种方法：删除、填充均值/中位数、用前/后值填充等。',
      '异常值检测可以使用统计方法（如Z-score）或可视化方法（如箱线图）。',
      '数据标准化可以将数据转换到相同尺度，便于后续分析和建模。'
    ],
    2: [
      '本步骤学习如何读取CSV文件数据，使用Pandas进行数据导入。',
      '分组聚合是数据分析的核心技能，可以按不同维度统计数据。',
      '透视表是一种强大的数据分析工具，可以快速汇总多维数据。',
      '数据透视表可以灵活调整行、列和值，获得不同角度的分析结果。',
      '通过聚合分析可以发现数据中的规律和趋势。'
    ],
    3: [
      '本步骤学习购物篮分析的基本概念，了解关联规则挖掘。',
      '数据预处理包括数据清洗、转换和编码，为关联分析做准备。',
      'Apriori算法是经典的关联规则挖掘算法，用于发现频繁项集。',
      '关联规则可以发现商品之间的关联关系，帮助商家优化商品陈列。',
      '通过案例分析理解关联规则在实际业务中的应用价值。'
    ],
    4: [
      '本步骤学习客户分群的基本概念，了解聚类分析的应用场景。',
      '数据预处理包括数据标准化、特征选择等步骤。',
      'K-means算法是最常用的聚类算法，需要确定合适的K值。',
      '聚类结果分析包括评估聚类质量和解读各簇特征。',
      '客户画像可以帮助企业更好地了解客户需求，制定精准营销策略。'
    ],
    5: [
      '本步骤学习数据可视化的基本概念和常用图表类型。',
      '折线图适合展示时间序列数据和趋势变化。',
      '柱状图适合比较不同类别之间的数据差异。',
      '饼图适合展示各部分占总体的比例关系。',
      '散点图适合展示两个变量之间的关系。',
      '多种图表的组合使用可以更全面地展示数据信息。',
      '直方图适合展示数据的分布情况。',
      '热力图适合展示数据的相关性矩阵。',
      '堆叠图适合展示各部分随时间的变化。',
      '根据数据类型和分析目的选择合适的图表类型很重要。'
    ],
    6: [
      '本步骤学习A/B测试的基本概念和应用场景。',
      '假设检验是A/B测试的核心，包括原假设和备择假设。',
      '样本量计算确保测试结果具有统计显著性。',
      '使用统计方法评估测试结果的显著性。',
      '通过案例分析理解A/B测试在业务决策中的应用。'
    ]
  };
  const projectSummaries = summaries[projectId] || summaries[1];
  return projectSummaries[stepIndex] || '本步骤完成了数据分析的一个重要环节！';
};

// 课后问题
const getStepQuestions = (projectId: number, stepIndex: number) => {
  const questions: Record<number, string[][]> = {
    1: [
      ['什么是数据清洗？为什么数据清洗很重要？', '数据清洗的主要步骤有哪些？'],
      ['如何检测数据中的缺失值？有哪些处理方法？', '重复值如何检测和处理？'],
      ['缺失值处理的常用方法有哪些？各有什么优缺点？', '如何选择合适的缺失值处理策略？'],
      ['什么是异常值？如何检测和处理异常值？', 'Z-score和IQR方法有什么区别？'],
      ['为什么需要数据标准化？常用的标准化方法有哪些？', '数据标准化对后续分析有什么影响？']
    ],
    2: [
      ['Pandas读取CSV文件有哪些参数可以设置？', '如何处理CSV文件中的中文编码问题？'],
      ['groupby方法可以配合哪些聚合函数使用？', '如何对多列进行分组聚合？'],
      ['透视表和分组聚合有什么区别？', '如何设置透视表的行、列和值？'],
      ['如何对透视表的结果进行排序和筛选？', '透视表的aggfunc参数有什么作用？'],
      ['如何将聚合结果导出为Excel文件？', '聚合分析的结果可以用来做什么？']
    ],
    3: [
      ['什么是关联规则？关联规则有什么应用场景？', '支持度和置信度分别代表什么含义？'],
      ['Apriori算法的基本思想是什么？', '如何选择合适的支持度和置信度阈值？'],
      ['频繁项集和关联规则有什么关系？', '如何从频繁项集生成关联规则？'],
      ['lift值代表什么含义？如何解读lift值？', '如何评估关联规则的质量？'],
      ['关联规则分析在电商中有哪些实际应用？', '如何将关联规则应用到推荐系统中？']
    ],
    4: [
      ['什么是聚类分析？聚类分析有什么应用场景？', '聚类和分类有什么区别？'],
      ['K-means算法的基本步骤是什么？', '如何选择合适的K值？'],
      ['K-means算法对初始中心点敏感吗？如何解决？', 'K-means的优缺点是什么？'],
      ['如何评估聚类结果的质量？', '轮廓系数的取值范围和含义是什么？'],
      ['客户分群后可以做哪些后续分析？', '如何将聚类结果应用到实际业务中？']
    ],
    5: [
      ['常用的数据可视化图表有哪些？分别适用于什么场景？', '如何选择合适的图表类型？'],
      ['折线图和柱状图有什么区别？分别适用于什么场景？', '如何给图表添加标题和标签？'],
      ['饼图的优缺点是什么？使用时需要注意什么？', '如何设置饼图的颜色和图例？'],
      ['散点图可以展示什么信息？如何添加趋势线？', '如何处理散点图中的重叠点？'],
      ['如何在一张图中展示多个图表？', '子图的布局如何设置？'],
      ['直方图和柱状图有什么区别？', '如何选择合适的区间数量？'],
      ['热力图适合展示什么类型的数据？', '如何设置热力图的颜色映射？'],
      ['堆叠图适合展示什么数据？', '如何解读堆叠图中的信息？'],
      ['如何保存高质量的图表图片？', '图表导出时需要注意什么？'],
      ['数据可视化的基本原则是什么？', '如何制作专业美观的图表？']
    ],
    6: [
      ['什么是A/B测试？A/B测试有什么应用场景？', 'A/B测试和假设检验有什么关系？'],
      ['原假设和备择假设分别是什么？如何设置？', '显著性水平α的含义是什么？'],
      ['如何计算A/B测试所需的样本量？', '样本量不足会有什么问题？'],
      ['常用的统计检验方法有哪些？如何选择？', 'P值的含义是什么？如何解读？'],
      ['如何判断A/B测试的结果是否显著？', 'A/B测试结果不显著时应该怎么办？']
    ]
  };
  const projectQuestions = questions[projectId] || questions[1];
  return projectQuestions[stepIndex] || ['请回顾本步骤的学习内容，总结所学知识。'];
};

const getStepWhy = (projectId: number, stepIndex: number): string => {
  const whyData: Record<number, string[]> = {
    1: [
      '数据是分析的基础，没有高质量的数据就无法得出准确的结论。我们需要先创建一些模拟数据，这样才能练习数据清洗的技巧。',
      '在做任何数据分析之前，都必须先了解数据的基本情况。这就像医生给病人做检查一样，只有全面了解数据现状，才能对症下药进行清洗。',
      '缺失值会导致分析结果不准确，甚至使程序报错。我们需要用合理的方法填充缺失值，而不是简单地删除，否则会丢失重要信息。',
      '异常值会严重影响分析结果，比如平均值的计算。检测出异常值后要判断是真实数据还是错误数据，再决定如何处理。',
      '数据标准化可以让不同规模的数据在同一个尺度上比较，这就像把公斤和磅统一成同一种单位，便于后续的分析和建模。'
    ],
    2: [
      '只有掌握数据长什么样，才能决定怎么分析。我们先创建一些销售数据，这样才有东西可以练习分组和聚合。',
      '分组是数据分析中最常用的操作之一。通过groupby，我们可以按类别统计，快速了解各类的整体情况。',
      '单一指标往往不够全面，同时看多个统计量（如数量、总和、平均值）能得到更完整的洞察。',
      '透视表是一种强大的数据汇总工具，可以从不同角度快速查看数据，特别适合制作交叉报表。',
      '滚动窗口可以发现数据的趋势变化，排名可以找出最优或最差的案例，这些在业务分析中非常有用。'
    ],
    3: [
      '只有有了真实的交易数据，才能分析商品之间的关联关系。没有数据就无法进行关联规则挖掘。',
      '购物篮数据需要转换成特定格式才能进行关联分析。one-hot编码把"买了什么"变成0和1，便于计算机处理。',
      '支持度告诉我们某个商品组合出现的频率有多高。只有支持度够高的组合才值得研究，否则可能是偶然现象。',
      '置信度告诉我们"买了A的人有多少也买了B"。这个指标直接决定了推荐的准确性，是关联规则的核心。',
      '推荐系统是关联规则最直接的应用。了解这些原理后，你就能理解购物网站"猜你喜欢"背后的逻辑了。'
    ],
    4: [
      '没有客户数据就无法进行客户分群。我们需要创建包含消费行为特征的客户数据，这样才能进行后续分析。',
      'RFM是客户价值评估的经典模型：最近购买时间(Recency)、购买频率(Frequency)、消费金额(Monetary)。这三个指标能全面反映客户价值。',
      'K-Means是最常用的聚类算法之一。它能把相似的客户自动归为一组，让我们发现数据中自然存在的客户群体。',
      '聚类后我们需要分析每个群体的特征，才能给它们打上标签（如"高价值客户"），这是精准营销的基础。',
      '了解客户分群后，企业可以根据不同群体的特点制定针对性的营销策略，提高营销效率和投资回报率。'
    ],
    5: [
      '数据可视化让数据"看得见"。一张好的图表胜过千言万语，能帮助我们快速发现数据中的规律和异常。',
      '折线图最适合展示数据随时间变化的趋势，比如股票走势、销售额变化等，能一眼看出是涨是跌。',
      '柱状图最适合比较不同类别的大小高低，比如各产品的销量对比，柱子长短一目了然。',
      '饼图展示各部分占总体的比例，适合类别不太多的情况，能直观看出谁最大谁最小。',
      '散点图展示两个变量之间的关系，可以发现数据中的相关性，比如身高和体重的关系。',
      '直方图展示数据的分布情况，能看到数据主要集中在哪个区间，有没有双峰等特殊现象。',
      '热力图用颜色深浅展示数据大小，适合展示矩阵数据或相关性，能快速找出最大值和最小值。',
      '堆叠柱状图展示各部分对整体的贡献，能同时看到总量和各部分的构成变化。',
      '面积图强调累积效果，特别适合展示多类别数据随时间的变化趋势。',
      '根据数据的性质和分析目的选择合适的图表类型，这是数据可视化的核心技能。'
    ],
    6: [
      '只有有了真实的测试数据，才能验证A/B测试的效果，理解统计检验的原理。',
      '探索性分析帮助我们直观了解两组数据的差异，为后续的统计检验做准备。',
      '假设检验是A/B测试的数学基础，通过设定原假设和备择假设，我们可以用数据来判断哪个方案更好。',
      '置信区间告诉我们结果的可靠程度，不仅能判断有没有差异，还能知道差异大概有多大。',
      '了解如何解读检验结果，才能判断新方案是否真的比旧方案好，避免被随机波动误导。'
    ],
    7: [
      '销售预测是企业制定生产计划、库存管理的依据。我们需要创建包含历史销售数据的时间序列数据集。',
      '移动平均是最简单的时间序列预测方法，通过平滑历史数据来消除随机波动，预测未来的趋势。',
      '指数平滑给予近期数据更高的权重，比简单移动平均更能反映数据的变化趋势，是实用的预测工具。',
      '简单预测模型帮助我们理解预测的基本原理，为学习更复杂的模型打下基础。',
      '预测评估指标让我们知道模型准不准，常用的有MAE（平均绝对误差）和RMSE（均方根误差）。'
    ],
    8: [
      '特征工程决定了机器学习模型效果的上限。没有好的特征，再好的算法也难以发挥。',
      '特征构造从原始数据中创建新的、有意义的特征，比如从日期中提取"星期几"、"是否节假日"等。',
      '特征编码把文字类别转换成数字，让机器学习模型能够处理这些特征，是数据预处理的关键步骤。',
      '特征变换如标准化、归一化等，能让不同尺度的特征在模型中发挥适当的作用，避免某些特征被忽视。',
      '特征选择去掉无关和冗余的特征，能提高模型效果、减少训练时间，是提升模型性能的重要手段。'
    ],
    9: [
      '异常值检测在金融风控、网络安全、质量控制等领域都有广泛应用，是数据分析的重要技能。',
      'Z-score方法通过计算数据点偏离均值的标准差数量来识别异常，是统计领域最常用的方法之一。',
      'IQR方法基于数据的四分位数，不受极端值影响，对各种分布的数据都适用，是一种稳健的方法。',
      '孤立森林是一种基于决策树的异常检测算法，特别适合高维数据和大规模数据集，能快速识别异常。',
      '综合多种方法可以更准确地识别异常值，不同方法可以互相验证，提高检测的可靠性。'
    ],
    10: [
      '企业的数据往往来自多个渠道，整合这些数据才能获得更全面的洞察，这就是数据融合的价值。',
      '数据合并将来自不同表的数据整合到一起，是数据融合的基础操作，需要理解不同合并方式的区别。',
      '不同的连接类型（内连接、左连接、全外连接等）决定了保留哪些数据，选择不当会导致信息丢失。',
      '合并后的数据可能有重复记录，去重是保证数据质量的重要步骤，需要选择合适的去重策略。',
      '融合后的完整数据可以支持更全面的分析，比如结合用户行为和产品信息进行精准营销。'
    ]
  };
  const projectWhy = whyData[projectId] || whyData[1];
  return projectWhy[stepIndex] || '这一步是完成这个项目的重要环节，帮助你掌握数据分析的关键技能。';
};

// 为每个步骤准备核心函数提示
const getStepHints = (step: any) => {
  const hints: Record<string, {name: string, description: string, example: string}[]> = {
    "数据导入": [
      { name: "pd.read_csv()", description: "从CSV文件读取数据到DataFrame", example: "import pandas as pd\n\ndf = pd.read_csv('data.csv')" },
      { name: "pd.read_excel()", description: "从Excel文件读取数据到DataFrame", example: "import pandas as pd\n\ndf = pd.read_excel('data.xlsx')" }
    ],
    "数据探索": [
      { name: "df.head()", description: "查看DataFrame前几行数据", example: "df.head()\n# 默认显示前5行\ndf.head(10)\n# 显示前10行" },
      { name: "df.info()", description: "查看数据类型和缺失值情况", example: "df.info()\n# 显示每列的数据类型和非空值数量" },
      { name: "df.describe()", description: "查看数值型列的统计信息", example: "df.describe()\n# 显示均值、中位数、标准差等" }
    ],
    "数据清洗": [
      { name: "df.isnull()", description: "检查缺失值", example: "df.isnull().sum()\n# 统计每列的缺失值数量" },
      { name: "df.dropna()", description: "删除含有缺失值的行", example: "df_clean = df.dropna()\n# 删除所有含有缺失值的行" },
      { name: "df.fillna()", description: "填充缺失值", example: "df.fillna(0)\n# 用0填充所有缺失值\ndf.fillna(df.mean())\n# 用均值填充数值列" }
    ],
    "数据筛选": [
      { name: "df[条件]", description: "按条件筛选数据", example: "df[df['age'] > 30]\n# 筛选年龄大于30的数据" },
      { name: "df.loc[]", description: "按标签索引选择数据", example: "df.loc[df['city'] == '北京', ['name', 'age']]\n# 选择北京地区的姓名和年龄" }
    ],
    "数据聚合": [
      { name: "df.groupby()", description: "按列分组", example: "df.groupby('category')['sales'].sum()\n# 按类别分组并计算销售额总和" },
      { name: "df.merge()", description: "合并两个DataFrame", example: "pd.merge(df1, df2, on='id')\n# 按id字段合并两个表" }
    ],
    "数据可视化": [
      { name: "df.plot()", description: "快速画图", example: "df.plot(x='date', y='value', kind='line')\n# 画折线图" },
      { name: "plt.bar()", description: "画柱状图", example: "import matplotlib.pyplot as plt\n\nplt.bar(categories, values)\nplt.show()" },
      { name: "plt.hist()", description: "画直方图", example: "import matplotlib.pyplot as plt\n\nplt.hist(data, bins=10)\nplt.show()" }
    ]
  };
  
  // 查找匹配的提示
  for (const [key, values] of Object.entries(hints)) {
    if (step.title?.includes(key) || step.content?.includes(key)) {
      return values;
    }
  }
  
  // 默认提示
  return [
    { name: "pd.DataFrame()", description: "创建DataFrame对象", example: "import pandas as pd\n\ndata = {'name': ['A', 'B'], 'age': [20, 25]}\ndf = pd.DataFrame(data)" },
    { name: "print()", description: "输出变量内容", example: "print('Hello World!')\nprint(df)" }
  ];
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id || '1'));
  const [showPracticeAnswers, setShowPracticeAnswers] = useState(false);
  const [showAssessmentAnswers, setShowAssessmentAnswers] = useState(false);
  const [selectedFunction, setSelectedFunction] = useState<string | null>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleStepClick = (index: number) => {
    setActiveStepIndex(index);
    window.scrollTo(0, 0);
  };

  const downloadDataset = () => {
    if (!project?.dataset) return;
    
    const csvContent = generateCSV(project.id);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', project.dataset.filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateCSV = (projectId: number): string => {
    const csvData: Record<number, string> = {
      1: `order_id,customer_id,product_category,quantity,price,order_date,region,amount\n1,1001,电子产品,3,256.80,2024-01-01,华北,770.40\n2,1002,服装,2,128.50,2024-01-02,华东,257.00\n3,1003,食品,5,45.20,2024-01-03,华南,226.00\n4,1004,家居,1,389.90,2024-01-04,西南,389.90\n5,1005,图书,4,35.80,2024-01-05,西北,143.20\n6,1006,电子产品,2,199.99,2024-01-06,华北,399.98\n7,1007,服装,3,89.50,2024-01-07,华东,268.50\n8,1008,食品,1,15.90,2024-01-08,华南,15.90\n9,1009,家居,2,258.80,2024-01-09,西南,517.60\n10,1010,图书,5,28.60,2024-01-10,西北,143.00`,
      2: `order_id,product_category,region,quantity,price,order_date,product_name,amount\n1,电子产品,华北,3,256.80,2024-01-01,商品A,770.40\n2,服装,华东,2,128.50,2024-01-02,商品B,257.00\n3,食品,华南,5,45.20,2024-01-03,商品C,226.00\n4,家居,西南,1,389.90,2024-01-04,商品D,389.90\n5,图书,华北,4,35.80,2024-01-05,商品E,143.20\n6,电子产品,华东,2,199.99,2024-01-06,商品A,399.98\n7,服装,华南,3,89.50,2024-01-07,商品B,268.50\n8,食品,西南,1,15.90,2024-01-08,商品C,15.90\n9,家居,华北,2,258.80,2024-01-09,商品D,517.60\n10,图书,华东,5,28.60,2024-01-10,商品E,143.00`,
      3: `transaction_id,products\n1,牛奶|面包|鸡蛋\n2,苹果|香蕉\n3,牛奶|橙汁|饼干\n4,巧克力|酸奶\n5,面包|鸡蛋|橙汁\n6,牛奶|咖啡|饼干\n7,苹果|香蕉|酸奶\n8,面包|巧克力\n9,牛奶|鸡蛋|咖啡\n10,橙汁|饼干|酸奶`,
      4: `customer_id,last_purchase_date,frequency,monetary,age,region,recency_days\n1001,2024-06-15,15,5680.50,35,华北,15\n1002,2024-05-20,8,3250.80,28,华东,41\n1003,2024-06-28,20,8950.20,42,华南,2\n1004,2024-04-10,5,1280.00,55,西南,81\n1005,2024-06-20,12,4560.30,31,西北,10\n1006,2024-05-01,6,2340.90,48,华北,60\n1007,2024-06-25,18,7890.00,25,华东,5\n1008,2024-03-15,3,980.50,62,华南,107\n1009,2024-06-10,14,5230.70,38,西南,20\n1010,2024-05-30,9,3680.20,44,西北,31`,
      5: `date,product,sales\n2024-01-31,电子产品,650.80\n2024-01-31,服装,480.50\n2024-01-31,食品,520.30\n2024-01-31,家居,350.20\n2024-01-31,图书,220.60\n2024-02-29,电子产品,720.40\n2024-02-29,服装,510.80\n2024-02-29,食品,580.10\n2024-02-29,家居,380.50\n2024-02-29,图书,250.30`,
      6: `user_id,group,click_count,conversion,time_on_page\n1,A,15,1,450\n2,B,12,0,380\n3,A,20,1,520\n4,B,8,0,280\n5,A,18,1,490\n6,B,10,0,350\n7,A,22,1,550\n8,B,14,1,420\n9,A,16,1,470\n10,B,9,0,310`
    };
    return csvData[projectId] || 'id,name,value\n1,示例数据,100\n2,示例数据2,200';
  };

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            项目不存在
          </h2>
          <Link 
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  const activeStep = project.stepByStep[activeStepIndex];
  const stepHints = getStepHints(activeStep);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* 函数说明弹窗 */}
      {selectedFunction && (
        <FunctionDocModal
          functionName={selectedFunction}
          onClose={() => setSelectedFunction(null)}
        />
      )}

      {/* 顶部导航 */}
      <header className="bg-white shadow-lg sticky top-0 z-20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link 
              to="/"
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回项目列表
            </Link>
            <h1 className="text-xl font-bold text-blue-600">
              {project.title}
            </h1>
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      {/* 主要内容区 - 左右布局 */}
      <div className="flex h-[calc(100vh-72px)]">
        {/* 左侧：项目介绍和步骤说明 */}
        <div className="w-4/12 overflow-y-auto p-5 border-r border-slate-200 bg-white" style={{scrollbarWidth: 'none'}}>
          {/* 项目标题 */}
          <div className="mb-4 pb-3 border-b border-slate-100">
            <div className="flex items-center mb-2">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl w-10 h-10 flex items-center justify-center mr-3 text-lg font-bold">
                {project.id}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {project.title}
                </h2>
                <p className="text-gray-500 text-xs">
                  ⏱️ {project.duration}
                </p>
              </div>
            </div>
          </div>

          {/* 项目概述 */}
          <div className="mb-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-100">
            <h3 className="text-sm font-semibold mb-2 text-indigo-700">
              📖 项目介绍
            </h3>
            <p className="text-indigo-600 text-xs leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* 学习目标 */}
          <div className="mb-4 bg-blue-50 rounded-lg p-3 border border-blue-100">
            <h3 className="text-sm font-semibold mb-1 text-blue-700">
              🎯 学习目标
            </h3>
            <p className="text-blue-600 text-xs leading-relaxed">
              {project.goal}
            </p>
          </div>

          {/* 步骤导航 */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2 text-gray-700">
              📚 学习步骤
            </h3>
            <div className="space-y-1.5">
              {project.stepByStep.map((step, index) => (
                <button
                  key={index}
                  onClick={() => handleStepClick(index)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm ${
                    activeStepIndex === index
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow'
                      : 'bg-slate-50 hover:bg-slate-100 text-gray-700'
                  }`}
                >
                  <div className="flex items-center">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 text-xs font-bold ${
                      activeStepIndex === index ? 'bg-white/20' : 'bg-slate-200'
                    }`}>
                      {index + 1}
                    </span>
                    <span className="font-medium">{step.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 当前步骤详情 */}
          <div className="bg-white rounded-lg border border-slate-100 p-4">
            <div className="flex items-center mb-3 pb-2 border-b border-slate-100">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                {activeStepIndex + 1}
              </div>
              <h3 className="text-base font-semibold text-gray-800">
                {activeStep.title}
              </h3>
            </div>

            {/* 为什么要做 */}
            <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-100">
              <div className="flex items-center mb-2">
                <span className="text-lg mr-2">🔍</span>
                <span className="font-bold text-amber-800 text-sm">为什么要这样做？</span>
              </div>
              <p className="text-amber-700 text-xs leading-relaxed">
                {getStepWhy(project.id, activeStepIndex)}
              </p>
            </div>

            {/* 步骤内容 */}
            <div className="mb-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                {activeStep.content}
              </p>
            </div>

            {/* 小白贴士 */}
            <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center mb-1">
                <span className="text-lg mr-2">💡</span>
                <span className="font-bold text-blue-800 text-sm">小白贴士</span>
              </div>
              <p className="text-blue-700 text-xs leading-relaxed">
                {getBeginnerTip(project.id, activeStepIndex)}
              </p>
            </div>

            {/* 使用的函数 */}
            {activeStep.functions && activeStep.functions.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-600 mb-2">📚 核心函数</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeStep.functions.map((func, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedFunction(func)}
                      className="bg-orange-50 text-orange-600 px-2.5 py-1 rounded text-xs border border-orange-200 font-mono hover:bg-orange-100 transition-all cursor-pointer"
                    >
                      {func}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 步骤总结 */}
          <div className="bg-blue-50 rounded-lg border border-blue-100 p-4 mt-4">
            <h4 className="text-xs font-semibold text-blue-700 mb-2">📝 步骤总结</h4>
            <p className="text-xs text-blue-600 leading-relaxed">
              {getStepSummary(project.id, activeStepIndex)}
            </p>
          </div>

          {/* 课后问题 */}
          <div className="bg-purple-50 rounded-lg border border-purple-100 p-4 mt-4">
            <h4 className="text-xs font-semibold text-purple-700 mb-2">❓ 课后问题</h4>
            <ul className="space-y-2">
              {getStepQuestions(project.id, activeStepIndex).map((question, idx) => (
                <li key={idx} className="text-xs text-purple-600 flex items-start">
                  <span className="font-bold mr-1">{idx + 1}.</span>
                  {question}
                </li>
              ))}
            </ul>
          </div>

          {/* 数据集说明 */}
          {project.dataset && (
            <div className="bg-green-50 rounded-lg border border-green-100 p-4 mt-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-semibold text-green-700">📊 数据集</h4>
                <button
                  onClick={downloadDataset}
                  className="flex items-center gap-1 px-2.5 py-1 bg-green-600 text-white text-xs rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  下载
                </button>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-green-600" />
                <span className="text-xs text-green-600">{project.dataset.filename}</span>
                <span className="text-xs text-green-400">- {project.dataset.size}</span>
              </div>
              <p className="text-xs text-green-600 mt-1">{project.dataset.desc}</p>
            </div>
          )}
        </div>

        {/* 右侧：编程环境 */}
        <div className="w-8/12 bg-slate-900 flex flex-col" style={{scrollbarWidth: 'none'}}>
          {/* 代码编辑器 */}
          {activeStep.code ? (
            <div className="flex-1 flex flex-col p-3">
              <CodeEditor 
                initialCode="" 
                examples={[{name: "示例代码", code: activeStep.code}]}
                title={activeStep.title}
                stepHints={stepHints}
              />
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center text-slate-400">
                <div className="text-3xl mb-3">🖥️</div>
                <p className="text-base">本步骤暂无代码示例</p>
                <p className="text-xs mt-1">完成上面的理论学习后，进入下一步！</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
