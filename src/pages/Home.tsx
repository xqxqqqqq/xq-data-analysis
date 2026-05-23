import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { Star, Clock, ChevronRight, Play, BookOpen, Code } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

// 项目难度和时长配置
const projectConfig: Record<number, { 
  difficulty: '入门' | '进阶' | '高级';
  duration: string;
  icon: string;
}> = {
  1: { difficulty: '入门', duration: '30分钟', icon: '🧹' },
  2: { difficulty: '入门', duration: '30分钟', icon: '📊' },
  3: { difficulty: '进阶', duration: '45分钟', icon: '🔍' },
  4: { difficulty: '进阶', duration: '45分钟', icon: '📈' },
  5: { difficulty: '进阶', duration: '45分钟', icon: '📉' },
  6: { difficulty: '进阶', duration: '45分钟', icon: '🧪' },
  7: { difficulty: '进阶', duration: '45分钟', icon: '🔮' },
  8: { difficulty: '高级', duration: '60分钟', icon: '🤖' },
  9: { difficulty: '高级', duration: '60分钟', icon: '⚡' },
  10: { difficulty: '高级', duration: '60分钟', icon: '🎯' },
};

const difficultyColors = {
  '入门': { bg: 'bg-gradient-to-r from-blue-100 to-indigo-100', text: 'text-blue-700', border: 'border-blue-200', glow: 'shadow-blue-200' },
  '进阶': { bg: 'bg-gradient-to-r from-purple-100 to-pink-100', text: 'text-purple-700', border: 'border-purple-200', glow: 'shadow-purple-200' },
  '高级': { bg: 'bg-gradient-to-r from-orange-100 to-red-100', text: 'text-orange-700', border: 'border-orange-200', glow: 'shadow-orange-200' },
};

const Home = () => {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-slate-800 leading-tight mb-8">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">数据分析</span>实战训练营
          </h1>
          
          <div className="mb-10">
            <p className="text-2xl text-slate-600 leading-relaxed">
              10个精选实战项目，<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">0基础也能学会</span>！
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 text-slate-700 text-lg bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg">
              <span className="text-2xl">⚡</span>
              <span className="font-medium">无需安装，网页直接编程</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700 text-lg bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg">
              <span className="text-2xl">📚</span>
              <span className="font-medium">循序渐进，从入门到精通</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700 text-lg bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg">
              <span className="text-2xl">💪</span>
              <span className="font-medium">真实项目，练完就能上手</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="text-base bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-4 py-2 rounded-full border border-green-200">
              ✅ 免费学习
            </span>
            <span className="text-base bg-gradient-to-r from-yellow-50 to-amber-50 text-yellow-700 px-4 py-2 rounded-full border border-yellow-200">
              🏆 10个实战项目
            </span>
            <span className="text-base bg-gradient-to-r from-pink-50 to-rose-50 text-pink-700 px-4 py-2 rounded-full border border-pink-200">
              📊 每个项目都有数据集
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/project/1" 
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all shadow-lg"
            >
              <span className="flex items-center justify-center gap-2">
                <Play className="w-6 h-6" />
                开始第一个项目
              </span>
            </Link>
            <Link 
              to="/beginner-guide" 
              className="bg-white text-blue-600 border-2 border-blue-600 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 hover:shadow-lg transition-all"
            >
              <span className="flex items-center justify-center gap-2">
                <BookOpen className="w-6 h-6" />
                零基础入门
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* 学习路径提示 */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 shadow-lg">
            <h3 className="text-xl font-bold text-slate-800 text-center mb-6">学习路线图</h3>
            <div className="flex flex-wrap justify-center items-center gap-6 text-slate-700">
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold">入门</span>
                <span className="text-lg">(2个项目)</span>
              </div>
              <span className="text-xl text-slate-400">→</span>
              <div className="flex items-center gap-3">
                <span className="bg-purple-500 text-white px-4 py-2 rounded-full font-bold">进阶</span>
                <span className="text-lg">(5个项目)</span>
              </div>
              <span className="text-xl text-slate-400">→</span>
              <div className="flex items-center gap-3">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full font-bold">高级</span>
                <span className="text-lg">(3个项目)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 项目列表 */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-4">
              选择一个项目开始学习
            </h2>
            <p className="text-slate-600 text-xl">
              共 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold text-2xl">10</span> 个项目，难度递进
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 [&>*]:h-full">
            {projects.map((project, index) => {
              const config = projectConfig[project.id];
              const colors = difficultyColors[config.difficulty];
              
              return (
                <Link 
                  key={project.id} 
                  to={`/project/${project.id}`}
                  className="block group h-full"
                >
                  <div 
                    className={cn(
                      "bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 border-2 h-full flex flex-col",
                      "hover:shadow-xl hover:-translate-y-2",
                      "group-hover:border-blue-300 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-indigo-50",
                      colors.border
                    )}
                  >
                    <div className="flex flex-col h-full">
                      {/* 顶部：项目编号+难度+时长 */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            项目{project.id}
                          </span>
                          <span className={cn(
                            "px-4 py-2 rounded-full text-sm font-semibold",
                            colors.bg,
                            colors.text
                          )}>
                            {config.difficulty}
                          </span>
                        </div>
                        <span className="flex items-center gap-2 text-slate-500 text-base bg-slate-100 px-3 py-1 rounded-full">
                          ⏱️ {config.duration}
                        </span>
                      </div>
                      
                      {/* 中部：图标+标题+描述 */}
                      <div className="flex items-start gap-4 mb-auto">
                        <div className="text-3xl flex-shrink-0 pt-1">
                          {config.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-slate-600 text-base leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* 底部：技术栈+操作按钮 */}
                      <div className="flex items-center justify-between gap-4 mt-8">
                        <div className="flex flex-wrap gap-2 flex-1 min-w-0">
                          {project.tools.slice(0, 3).map((tool, idx) => (
                            <span 
                              key={`${project.id}-${idx}`}
                              className="text-xs bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 px-2.5 py-1.5 rounded-lg font-medium"
                            >
                              {idx === 0 ? '🐍' : idx === 1 ? '📊' : '🔢'} {tool}
                            </span>
                          ))}
                        </div>
                        <span className="flex items-center gap-2 text-blue-600 font-bold text-base group-hover:gap-3 transition-all bg-blue-50 px-4 py-2 rounded-full whitespace-nowrap flex-shrink-0">
                          开始学习
                          <ChevronRight className="w-5 h-5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-10 border border-blue-200 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                不知道从哪里开始？
              </h3>
              <p className="text-slate-700 text-lg mb-8 max-w-3xl mx-auto">
                建议从「数据感知与基础处理」开始，这是最简单的入门项目！
                或者点击「零基础入门」先打好基础
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl border border-blue-200 flex items-center gap-2">
                  <span className="text-2xl">1️⃣</span>
                  <span className="font-bold text-slate-700">入门指南</span>
                </div>
                <span className="text-xl text-slate-400">→</span>
                <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl border border-purple-200 flex items-center gap-2">
                  <span className="text-2xl">2️⃣</span>
                  <span className="font-bold text-slate-700">项目练习</span>
                </div>
                <span className="text-xl text-slate-400">→</span>
                <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl border border-orange-200 flex items-center gap-2">
                  <span className="text-2xl">3️⃣</span>
                  <span className="font-bold text-slate-700">实战达人</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                <Link 
                  to="/beginner-guide"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all"
                >
                  <span className="flex items-center justify-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    零基础入门教程
                  </span>
                </Link>
                <Link 
                  to="/resources"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 hover:shadow-lg transition-all"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Code className="w-5 h-5" />
                    学习资源推荐
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 shadow-lg">
              <h4 className="text-lg font-bold text-slate-800 mb-4">
                完成所有项目后，你将获得：
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-white/80 backdrop-blur-sm px-5 py-3 rounded-xl border border-green-200 flex items-center gap-2">
                  ✅ 数据清洗技能
                </span>
                <span className="bg-white/80 backdrop-blur-sm px-5 py-3 rounded-xl border border-green-200 flex items-center gap-2">
                  ✅ 数据分析思维
                </span>
                <span className="bg-white/80 backdrop-blur-sm px-5 py-3 rounded-xl border border-green-200 flex items-center gap-2">
                  ✅ 可视化技能
                </span>
                <span className="bg-white/80 backdrop-blur-sm px-5 py-3 rounded-xl border border-green-200 flex items-center gap-2">
                  ✅ 实战经验
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
