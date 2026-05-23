import { ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

const cases = [
  {
    id: 1,
    company: '阿里巴巴',
    industry: '电商平台',
    title: '用户购买行为分析',
    description: '通过分析用户浏览、收藏、购买数据，优化商品推荐系统，提升转化率',
    dataSource: '天猫淘宝用户行为数据集',
    dataSize: '1000万+条记录',
    keyInsights: [
      '发现用户在晚上8-10点的购买转化率最高',
      '商品推荐准确率提升了35%',
      '个性化推荐让用户停留时间增加28%'
    ],
    techniques: ['关联规则', '协同过滤', '漏斗分析', '用户分群'],
    results: [
      '推荐准确率提升 35%',
      '用户停留时间增加 28%',
      'GMV 增长 15%'
    ],
    sampleCode: `import pandas as pd
import numpy as np

# 读取用户行为数据
user_behavior = pd.read_csv('user_behavior.csv')
user_behavior.columns = ['user_id', 'item_id', 'category_id', 
                         'behavior_type', 'timestamp']

# 转化时间戳
user_behavior['datetime'] = pd.to_datetime(user_behavior['timestamp'], 
                                           unit='s')
user_behavior['date'] = user_behavior['datetime'].dt.date
user_behavior['hour'] = user_behavior['datetime'].dt.hour

# 分析不同时间段的转化率
behavior_stats = user_behavior.groupby('hour')['behavior_type']\\
    .value_counts().unstack().fillna(0)
behavior_stats['conversion_rate'] = (behavior_stats['buy'] / 
                                     behavior_stats['pv'])

print('各小时转化率:')
print(behavior_stats[['conversion_rate']].sort_values(
      'conversion_rate', ascending=False))`,
    color: 'orange'
  },
  {
    id: 2,
    company: '美团外卖',
    industry: '本地生活',
    title: '外卖配送效率优化',
    description: '分析订单分布、骑手位置、交通状况，智能调度配送资源',
    dataSource: '外卖订单和骑手轨迹数据',
    dataSize: '500万+订单',
    keyInsights: [
      '午高峰11:30-12:30订单量占全天35%',
      '智能调度让平均配送时间减少12分钟',
      '骑手利用率提升23%'
    ],
    techniques: ['时间序列预测', '路径优化', '聚类分析', '供需预测'],
    results: [
      '平均配送时间减少 12分钟',
      '骑手效率提升 23%',
      '用户满意度提升 18%'
    ],
    sampleCode: `import pandas as pd
from sklearn.cluster import KMeans
import numpy as np

# 分析订单时空分布
orders = pd.read_csv('delivery_orders.csv')
orders['order_time'] = pd.to_datetime(orders['order_time'])
orders['hour'] = orders['order_time'].dt.hour

# 按小时统计订单量
hourly_orders = orders.groupby('hour').size()
print('各时段订单分布:')
print(hourly_orders)

# 配送位置聚类
locations = orders[['latitude', 'longitude']].values
kmeans = KMeans(n_clusters=10, random_state=42, n_init=10)
orders['zone'] = kmeans.fit_predict(locations)

# 分析各区域订单密度
zone_stats = orders.groupby('zone').agg({
    'order_id': 'count',
    'delivery_time': 'mean'
}).round(2)
zone_stats.columns = ['订单数', '平均配送时间(分钟)']

print('\\n各区域配送情况:')
print(zone_stats.sort_values('订单数', ascending=False))`,
    color: 'green'
  },
  {
    id: 3,
    company: '京东物流',
    industry: '物流仓储',
    title: '智能仓储管理',
    description: '预测商品需求，优化库存布局，减少仓储成本',
    dataSource: '历史销售和库存数据',
    dataSize: '3年历史数据',
    keyInsights: [
      '节假日期间家电类商品需求增长200%',
      'ABC分类管理让库存周转率提升40%',
      '智能补货系统让缺货率下降60%'
    ],
    techniques: ['需求预测', '库存优化', 'ABC分类', '时间序列'],
    results: [
      '库存周转率提升 40%',
      '仓储成本降低 25%',
      '缺货率下降 60%'
    ],
    sampleCode: `import pandas as pd
import numpy as np
from statsmodels.tsa.holtwinters import ExponentialSmoothing

# 读取销售数据
sales_data = pd.read_csv('product_sales.csv')
sales_data['date'] = pd.to_datetime(sales_data['date'])
sales_data.set_index('date', inplace=True)

# ABC分类
product_value = sales_data.groupby('product_id').agg({
    'revenue': 'sum',
    'quantity': 'sum'
}).sort_values('revenue', ascending=False)

total_revenue = product_value['revenue'].sum()
product_value['cum_revenue'] = product_value['revenue'].cumsum()
product_value['cum_percentage'] = product_value['cum_revenue'] / total_revenue

def abc_classify(x):
    if x <= 0.8:
        return 'A'
    elif x <= 0.95:
        return 'B'
    else:
        return 'C'

product_value['abc_category'] = product_value['cum_percentage'].apply(abc_classify)

print('ABC分类结果:')
print(product_value['abc_category'].value_counts())

# 简单需求预测示例
product_a = sales_data[sales_data['product_id'] == 'PROD_A']['quantity']
model = ExponentialSmoothing(product_a, seasonal='add', seasonal_periods=7)
fit = model.fit()
forecast = fit.forecast(30)
print('\\n未来30天预测销量:')
print(forecast.round(0))`,
    color: 'blue'
  },
  {
    id: 4,
    company: '字节跳动',
    industry: '内容平台',
    title: '内容推荐算法优化',
    description: '分析用户行为数据，提升内容推荐的精准度和用户粘性',
    dataSource: '用户点击和浏览日志',
    dataSize: '每天TB级数据',
    keyInsights: [
      '用户停留前3秒决定是否继续阅读',
      '个性化推荐让点击率提升42%',
      '内容创作者数量增长50%'
    ],
    techniques: ['协同过滤', '深度学习', 'A/B测试', '特征工程'],
    results: [
      '用户点击率提升 42%',
      '平均使用时长增加 35%',
      '内容创作者增长 50%'
    ],
    sampleCode: `import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# 用户-内容交互矩阵
interactions = pd.read_csv('user_content_interactions.csv')

# 创建用户-文章评分矩阵
user_item_matrix = interactions.pivot(
    index='user_id', 
    columns='article_id', 
    values='reading_time'
).fillna(0)

# 计算文章相似度
item_similarity = cosine_similarity(user_item_matrix.T)
item_similarity_df = pd.DataFrame(
    item_similarity,
    index=user_item_matrix.columns,
    columns=user_item_matrix.columns
)

def recommend_articles(user_id, n_recommendations=5):
    # 获取用户已读的文章
    user_read = user_item_matrix.loc[user_id]
    user_read = user_read[user_read > 0].index.tolist()
    
    # 基于相似度计算推荐分数
    recommendations = pd.Series(dtype='float64')
    for article in user_read:
        similar_articles = item_similarity_df[article].sort_values(
            ascending=False
        )[1:n_recommendations+1]
        recommendations = pd.concat([recommendations, similar_articles])
    
    # 过滤掉已读文章，取Top推荐
    recommendations = recommendations.groupby(recommendations.index).sum()
    recommendations = recommendations.drop(user_read, errors='ignore')
    
    return recommendations.sort_values(ascending=False).head(n_recommendations)

# 测试推荐
user_id_example = 1001
recs = recommend_articles(user_id_example)
print(f'为用户{user_id_example}推荐的文章:')
print(recs)`,
    color: 'pink'
  }
];

const Cases = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-800 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              真实企业数据分析案例
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            了解顶级公司如何用数据驱动业务增长
          </p>
          <p className="text-lg text-slate-500 mb-8">
            每个案例都包含真实数据场景、分析思路和可运行的代码示例
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/80 backdrop-blur-sm px-8 py-4 rounded-xl shadow-lg border border-blue-200 flex items-center gap-3">
              <span className="text-3xl">🏢</span>
              <div>
                <div className="text-2xl font-bold text-slate-800">4</div>
                <div className="text-sm text-slate-600">精选案例</div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-8 py-4 rounded-xl shadow-lg border border-blue-200 flex items-center gap-3">
              <span className="text-3xl">📊</span>
              <div>
                <div className="text-2xl font-bold text-slate-800">15+</div>
                <div className="text-sm text-slate-600">分析方法</div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-8 py-4 rounded-xl shadow-lg border border-blue-200 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              <div>
                <div className="text-2xl font-bold text-slate-800">100%</div>
                <div className="text-sm text-slate-600">实战导向</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {cases.map((caseItem) => (
            <div 
              key={caseItem.id}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={cn(
                  "w-16 h-16 rounded-xl flex items-center justify-center text-3xl flex-shrink-0",
                  caseItem.color === 'orange' && "bg-gradient-to-br from-orange-400 to-orange-600",
                  caseItem.color === 'green' && "bg-gradient-to-br from-green-400 to-green-600",
                  caseItem.color === 'blue' && "bg-gradient-to-br from-blue-400 to-blue-600",
                  caseItem.color === 'pink' && "bg-gradient-to-br from-pink-400 to-pink-600"
                )}>
                  🏢
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-2xl font-bold text-slate-800">
                      {caseItem.company}
                    </h3>
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">
                      {caseItem.industry}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">
                    {caseItem.title}
                  </h4>
                  <p className="text-slate-600">
                    {caseItem.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h5 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
                    <span className="text-lg">📈</span>
                    数据概况
                  </h5>
                  <div className="space-y-2 text-slate-600">
                    <div className="flex justify-between bg-slate-50 px-4 py-2 rounded-lg">
                      <span>数据源:</span>
                      <span className="font-medium">{caseItem.dataSource}</span>
                    </div>
                    <div className="flex justify-between bg-slate-50 px-4 py-2 rounded-lg">
                      <span>数据规模:</span>
                      <span className="font-medium">{caseItem.dataSize}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
                    <span className="text-lg">🎯</span>
                    核心发现
                  </h5>
                  <ul className="space-y-1">
                    {caseItem.keyInsights.map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600">
                        <span className="text-green-500 font-bold mt-1">✓</span>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
                  <span className="text-lg">🔧</span>
                  技术方法
                </h5>
                <div className="flex flex-wrap gap-2">
                  {caseItem.techniques.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <h5 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <span className="text-lg">✨</span>
                  业务成果
                </h5>
                <div className="flex flex-wrap gap-3">
                  {caseItem.results.map((result, idx) => (
                    <div key={idx} className="bg-white px-4 py-2 rounded-lg shadow-sm">
                      <span className="text-green-700 font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
                  <span className="text-lg">💻</span>
                  示例代码
                </h5>
                <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre leading-relaxed">
                    {caseItem.sampleCode}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 border border-blue-200 shadow-lg">
            <h3 className="text-xl font-bold text-slate-800 text-center mb-6">
              如何学习企业案例
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                <span className="text-2xl">1️⃣</span>
                <div>
                  <h4 className="font-bold text-slate-700 mb-1">理解业务背景</h4>
                  <p className="text-slate-600 text-sm">先了解企业的业务场景和数据特点</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                <span className="text-2xl">2️⃣</span>
                <div>
                  <h4 className="font-bold text-slate-700 mb-1">学习技术方法</h4>
                  <p className="text-slate-600 text-sm">掌握案例中使用的分析方法和代码</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                <span className="text-2xl">3️⃣</span>
                <div>
                  <h4 className="font-bold text-slate-700 mb-1">动手实践</h4>
                  <p className="text-slate-600 text-sm">在类似数据上运行代码并尝试改进</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                <span className="text-2xl">4️⃣</span>
                <div>
                  <h4 className="font-bold text-slate-700 mb-1">思考拓展</h4>
                  <p className="text-slate-600 text-sm">思考这些方法还能应用到哪些场景</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;