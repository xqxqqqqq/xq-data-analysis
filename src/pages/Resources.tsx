import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-5 text-slate-800">📚 学习资源推荐</h1>
            <p className="text-xl text-slate-600">精心整理的数据分析学习资源，帮助你快速入门和提升</p>
          </div>

          <div className="space-y-10">
            <section className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200">
              <h2 className="text-3xl font-extrabold text-slate-800 mb-8 flex items-center">
                <span className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white mr-5 text-2xl">📖</span>
                推荐书籍
              </h2>
              <div className="space-y-5">
                {[
                  { title: 'Python编程：从入门到实践', author: 'Eric Matthes', desc: '零基础学习Python的最佳入门书籍，讲解清晰，例子丰富', level: '入门', url: 'https://book.douban.com/subject/26279802/' },
                  { title: '利用Python进行数据分析', author: 'Wes McKinney', desc: 'pandas库创始人写的书，数据分析领域的经典之作', level: '进阶', url: 'https://book.douban.com/subject/25779298/' },
                  { title: 'Python数据分析与可视化', author: '范淼', desc: '适合中国读者的数据分析入门书，结合实际案例', level: '入门', url: 'https://book.douban.com/subject/26835704/' },
                  { title: '机器学习实战', author: 'Peter Harrington', desc: '用Python实现机器学习算法的入门书籍', level: '进阶', url: 'https://book.douban.com/subject/24703171/' }
                ].map((book, index) => (
                  <div key={index} className="border border-slate-200 rounded-2xl p-7 hover:border-blue-300 transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-xl text-slate-800">
                        <a href={book.url} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:underline font-semibold">
                          {book.title} →
                        </a>
                      </h3>
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold
                        ${book.level === '入门' ? 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700' : 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700'}
                      `}>
                        {book.level}
                      </span>
                    </div>
                    <p className="text-slate-500 mb-3 text-base">作者：{book.author}</p>
                    <p className="text-slate-700 text-lg">{book.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200">
              <h2 className="text-3xl font-extrabold text-slate-800 mb-8 flex items-center">
                <span className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white mr-5 text-2xl">🎥</span>
                免费课程
              </h2>
              <div className="space-y-5">
                {[
                  { name: '菜鸟教程 - Python3教程', url: 'https://www.runoob.com/python3', desc: '中文免费教程，从基础语法到高级特性，适合零基础学习' },
                  { name: '廖雪峰Python教程', url: 'https://www.liaoxuefeng.com/wiki/1016959663602400', desc: '通俗易懂的中文Python教程，讲解清晰，例子实用' },
                  { name: 'Kaggle Learn', url: 'https://www.kaggle.com/learn', desc: '数据分析和机器学习的免费课程，包含大量实战项目' },
                  { name: 'DataCamp', url: 'https://www.datacamp.com', desc: '提供免费的入门课程，交互式学习体验很好' }
                ].map((course, index) => (
                  <div key={index} className="border border-slate-200 rounded-2xl p-7 hover:border-blue-300 transition-all hover:shadow-lg hover:-translate-y-1">
                    <h3 className="font-bold text-xl text-slate-800 mb-3">
                      <a href={course.url} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:underline font-semibold">
                        {course.name} →
                      </a>
                    </h3>
                    <p className="text-slate-700 text-lg">{course.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200">
              <h2 className="text-3xl font-extrabold text-slate-800 mb-8 flex items-center">
                <span className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mr-5 text-2xl">📊</span>
                数据来源
              </h2>
              <div className="space-y-5">
                {[
                  { name: 'Kaggle', url: 'https://www.kaggle.com/datasets', desc: '全球最大的数据科学社区，海量公开数据集可供使用' },
                  { name: 'UCI机器学习库', url: 'https://archive.ics.uci.edu/ml/', desc: '经典的机器学习数据集仓库，适合练习和研究' },
                  { name: '天池数据集', url: 'https://tianchi.aliyun.com/dataset/', desc: '阿里云天池提供的中文数据集，有很多真实业务场景数据' },
                  { name: '国家统计局', url: 'https://www.stats.gov.cn/', desc: '中国官方统计数据，适合做宏观经济分析' }
                ].map((source, index) => (
                  <div key={index} className="border border-slate-200 rounded-2xl p-7 hover:border-purple-300 transition-all hover:shadow-lg hover:-translate-y-1">
                    <h3 className="font-bold text-xl text-slate-800 mb-3">
                      <a href={source.url} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:underline font-semibold">
                        {source.name} →
                      </a>
                    </h3>
                    <p className="text-slate-700 text-lg">{source.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200">
              <h2 className="text-3xl font-extrabold text-slate-800 mb-8 flex items-center">
                <span className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white mr-5 text-2xl">🛠️</span>
                常用工具
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: 'Anaconda', url: 'https://www.anaconda.com/', desc: 'Python数据科学工具包，一键安装所有常用库' },
                  { name: 'Jupyter Notebook', url: 'https://jupyter.org/', desc: '交互式编程环境，写代码和做笔记两不误' },
                  { name: 'VS Code', url: 'https://code.visualstudio.com/', desc: '轻量级代码编辑器，插件丰富，体验很好' },
                  { name: 'Git/GitHub', url: 'https://github.com/', desc: '版本控制工具，管理代码和协作开发必备' }
                ].map((tool, index) => (
                  <div key={index} className="border border-slate-200 rounded-2xl p-7 hover:border-orange-300 transition-all hover:shadow-lg hover:-translate-y-1">
                    <h3 className="font-bold text-xl text-slate-800 mb-3">
                      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent hover:underline font-semibold">
                        {tool.name} →
                      </a>
                    </h3>
                    <p className="text-slate-700 text-lg">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all shadow-xl"
            >
              返回首页开始学习 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
