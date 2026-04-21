import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { projects } from '@/data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === parseInt(id || '1'));
  const [showPracticeAnswers, setShowPracticeAnswers] = useState(false);
  const [showAssessmentAnswers, setShowAssessmentAnswers] = useState(false);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            项目不存在
          </h2>
          <Link 
            to="/"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-green-600 text-center">数据分析技术实战项目</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* 返回按钮 */}
        <Link 
          to="/"
          className="inline-block mb-8 bg-green-50 text-green-600 px-6 py-3 rounded-lg hover:bg-green-100 transition-colors flex items-center w-max"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回项目列表
        </Link>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-md">
          {/* 项目标题 */}
          <div className="flex items-center mb-8">
            <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mr-5 text-2xl font-bold">
              {project.id}
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              {project.title}
            </h2>
          </div>

          {/* 项目基本信息 */}
          <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 学习目标 */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                <span className="mr-2">🎯</span> 学习目标
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {project.goal}
              </p>
            </div>

            {/* 预计学习时长 */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                <span className="mr-2">⏱️</span> 预计学习时长
              </h3>
              <p className="text-gray-600 leading-relaxed">
                约 2-3 小时
              </p>
            </div>

            {/* 前置知识要求 */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-100 md:col-span-2">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                <span className="mr-2">📚</span> 前置知识要求
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.prerequisites.tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="bg-white text-green-600 px-4 py-2 rounded-full text-sm font-medium border border-green-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 页面目录 */}
          <div className="mb-10 p-6 bg-green-50 rounded-xl border border-green-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">📑</span> 目录
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <a href="#overview" className="flex items-center text-green-700 hover:underline">
                <span className="mr-2">🎯</span> 项目概述
              </a>
              <a href="#prerequisites" className="flex items-center text-green-700 hover:underline">
                <span className="mr-2">🛠️</span> 所需工具
              </a>
              <a href="#steps" className="flex items-center text-green-700 hover:underline">
                <span className="mr-2">📊</span> 学习步骤
              </a>
              <a href="#practice" className="flex items-center text-green-700 hover:underline">
                <span className="mr-2">✏️</span> 实操练习
              </a>
              <a href="#assessment" className="flex items-center text-green-700 hover:underline">
                <span className="mr-2">📝</span> 学习成果检查
              </a>
              <a href="#summary" className="flex items-center text-green-700 hover:underline">
                <span className="mr-2">📋</span> 核心知识点总结
              </a>
              <a href="#faq" className="flex items-center text-green-700 hover:underline">
                <span className="mr-2">❓</span> 常见问题与报错
              </a>
              <a href="#advanced" className="flex items-center text-green-700 hover:underline">
                <span className="mr-2">🚀</span> 拓展进阶练习
              </a>
            </div>
          </div>

          {/* 项目总览 */}
          <div id="overview" className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">🎯</span> 项目概述
            </h3>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <p className="text-gray-600 leading-relaxed">
                {project.overview}
              </p>
            </div>
          </div>

          {/* 前置准备 */}
          <div id="prerequisites" className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">🛠️</span> 所需工具
            </h3>
            <div className="bg-white rounded-xl p-6 border border-gray-100 space-y-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-3">工具清单</h4>
                <div className="flex flex-wrap gap-3">
                  {project.prerequisites.tools.map((tool, index) => (
                    <span 
                      key={index}
                      className="bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-3">数据集</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {project.prerequisites.datasets.map((dataset, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1">📁</span>
                      <span>{dataset}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 分步学习内容 */}
          <div id="steps" className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">📊</span> 学习步骤
            </h3>
            {project.stepByStep.map((step, index) => (
              <div key={index} className="mb-8 bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-medium text-gray-800">
                    {step.title}
                  </h4>
                </div>
                
                {/* 内容拆分成短句 */}
                <div className="mb-4 text-gray-600 leading-relaxed">
                  {step.content.split('。').filter(s => s.trim()).map((sentence, i) => (
                    <p key={i} className="mb-2">{sentence}。</p>
                  ))}
                </div>
                
                {/* 代码块 */}
                {step.code && (
                  <div className="mt-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 overflow-x-auto">
                      <pre className="text-sm text-gray-800 whitespace-pre">{step.code}</pre>
                    </div>
                    <div className="mt-2 p-3 bg-yellow-50 rounded-lg border border-yellow-100 text-sm text-yellow-800">
                      <span className="font-medium">小贴士：</span> 复制代码到Jupyter Notebook中运行，观察结果。
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 实操练习任务 */}
          <div id="practice" className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">✏️</span> 实操练习
            </h3>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <ul className="list-decimal list-inside text-gray-600 space-y-6 mb-6">
                {project.practiceTasks.map((task, index) => (
                  <li key={index} className="flex flex-col">
                    <span className="mb-2">{task}</span>
                    {project.practiceTaskLinks && project.practiceTaskLinks[index] && (
                      <a 
                        href={project.practiceTaskLinks[index]} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-1 text-blue-600 hover:underline flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        查看练习资源
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => setShowPracticeAnswers(!showPracticeAnswers)}
                className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {showPracticeAnswers ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  )}
                </svg>
                {showPracticeAnswers ? '隐藏练习答案' : '查看练习答案'}
              </button>
              
              {showPracticeAnswers && project.practiceTaskAnswers && (
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-medium text-yellow-800 mb-3">练习答案</h4>
                  {project.practiceTaskAnswers.map((answer, index) => (
                    <div key={index} className="mb-6 last:mb-0">
                      <h5 className="font-medium text-gray-700 mb-2">练习{index + 1}答案</h5>
                      <div className="bg-white p-4 rounded border border-gray-200 overflow-x-auto">
                        <pre className="text-sm text-gray-800 whitespace-pre-wrap">{answer}</pre>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 学习成果检查 */}
          <div id="assessment" className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">📝</span> 学习成果检查
            </h3>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <ul className="list-disc list-inside text-gray-600 space-y-3 mb-6">
                {project.assessment.map((question, index) => (
                  <li key={index}>{question}</li>
                ))}
              </ul>
              
              <button
                onClick={() => setShowAssessmentAnswers(!showAssessmentAnswers)}
                className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {showAssessmentAnswers ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  )}
                </svg>
                {showAssessmentAnswers ? '隐藏评估答案' : '查看评估答案'}
              </button>
              
              {showAssessmentAnswers && project.assessmentAnswers && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-800 mb-3">评估答案</h4>
                  {project.assessmentAnswers.map((answer, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <h5 className="font-medium text-gray-700 mb-2">问题{index + 1}答案</h5>
                      <div className="bg-white p-4 rounded border border-gray-200">
                        <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">{answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 核心知识点总结 */}
          <div id="summary" className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">📋</span> 核心知识点总结
            </h3>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <ul className="list-disc list-inside text-gray-600 space-y-3">
                {project.learningPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 常见问题与报错解决方法 */}
          <div id="faq" className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">❓</span> 常见问题与报错解决方法
            </h3>
            <div className="bg-white rounded-xl p-6 border border-gray-100 space-y-4">
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                <h4 className="font-medium text-yellow-800 mb-2">常见问题1：数据导入失败</h4>
                <p className="text-gray-600">解决方法：检查文件路径是否正确，确保文件格式与读取方法匹配，例如CSV文件使用read_csv()，Excel文件使用read_excel()。</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                <h4 className="font-medium text-yellow-800 mb-2">常见问题2：代码运行速度慢</h4>
                <p className="text-gray-600">解决方法：对于大型数据集，可以使用Pandas的向量化操作替代循环，或考虑使用Dask等库处理超大规模数据。</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                <h4 className="font-medium text-yellow-800 mb-2">常见问题3：图表中文显示乱码</h4>
                <p className="text-gray-600">解决方法：在Matplotlib中设置中文字体，例如：plt.rcParams['font.sans-serif'] = ['SimHei']，plt.rcParams['axes.unicode_minus'] = False。</p>
              </div>
            </div>
          </div>

          {/* 拓展进阶练习 */}
          <div id="advanced" className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="mr-2">🚀</span> 拓展进阶练习
            </h3>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <ul className="list-decimal list-inside text-gray-600 space-y-4">
                <li className="flex flex-col">
                  <span className="mb-2">1. 尝试使用不同的算法或方法解决同一个问题，比较它们的性能和结果。</span>
                  <div className="mt-1 p-3 bg-green-50 rounded-lg border border-green-100 text-sm text-green-700">
                    <span className="font-medium">提示：</span> 例如在机器学习项目中，可以尝试决策树、随机森林、逻辑回归等不同算法。
                  </div>
                </li>
                <li className="flex flex-col">
                  <span className="mb-2">2. 寻找更多相关数据集，应用所学知识进行分析，验证你的发现是否具有普遍性。</span>
                  <div className="mt-1 p-3 bg-green-50 rounded-lg border border-green-100 text-sm text-green-700">
                    <span className="font-medium">提示：</span> 可以在Kaggle、UCI Machine Learning Repository等平台寻找相关数据集。
                  </div>
                </li>
                <li className="flex flex-col">
                  <span className="mb-2">3. 将你的分析结果整理成一份完整的报告，包括问题定义、数据处理、分析方法、结果和结论。</span>
                  <div className="mt-1 p-3 bg-green-50 rounded-lg border border-green-100 text-sm text-green-700">
                    <span className="font-medium">提示：</span> 可以使用Jupyter Notebook、Markdown或专业报告工具来呈现你的分析。
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* 底部返回按钮 */}
          <div className="mt-12 text-center">
            <Link 
              to="/"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center mx-auto"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回项目列表
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;