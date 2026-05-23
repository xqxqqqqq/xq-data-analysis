import { Link } from "react-router-dom";
import CodeEditor from '@/components/CodeEditor';

export default function BeginnerGuide() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* 返回按钮 */}
        <Link 
          to="/"
          className="inline-block mb-10 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all flex items-center w-max font-semibold text-lg shadow-md hover:shadow-lg"
        >
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回项目列表
        </Link>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-12 shadow-xl border border-slate-200">
          <h1 className="text-4xl font-extrabold text-slate-800 mb-10 text-center">
            🚀 零基础入门指南
          </h1>

          {/* 介绍 */}
          <div className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
            <h2 className="text-2xl font-bold mb-5 text-slate-800">
              📋 欢迎来到数据分析入门之旅！
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5 text-lg">
              如果你是第一次接触编程和数据分析，别担心！本指南会一步一步教你，
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">最重要的是：你现在可以直接在网页里写代码运行，不用安装任何东西！</span>
            </p>
            <div className="flex flex-wrap gap-6 mt-6">
              <div className="flex items-center">
                <span className="text-blue-600 mr-3 text-2xl">✅</span>
                <span className="text-slate-700 text-lg">不需要任何编程基础</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-3 text-2xl">✅</span>
                <span className="text-slate-700 text-lg">通俗易懂的语言</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-3 text-2xl">✅</span>
                <span className="text-slate-700 text-lg">在网页里直接写代码运行！</span>
              </div>
            </div>
          </div>

          {/* 目录 */}
          <div className="mb-12 p-8 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold mb-5 text-slate-800 flex items-center">
              <span className="mr-3 text-2xl">📑</span> 本指南内容
            </h3>
            <div className="space-y-3">
              <a href="#setup" className="block text-blue-600 hover:underline font-semibold text-lg hover:translate-x-2 transition-transform">
                1️⃣ 环境搭建 - 安装Python和必要工具
              </a>
              <a href="#python" className="block text-blue-600 hover:underline font-semibold text-lg hover:translate-x-2 transition-transform">
                2️⃣ Python基础 - 编程入门必备知识
              </a>
              <a href="#jupyter" className="block text-blue-600 hover:underline font-semibold text-lg hover:translate-x-2 transition-transform">
                3️⃣ Jupyter Notebook - 数据分析工作台
              </a>
              <a href="#next" className="block text-blue-600 hover:underline font-semibold text-lg hover:translate-x-2 transition-transform">
                4️⃣ 下一步 - 开始项目学习
              </a>
            </div>
          </div>

          {/* 环境搭建 */}
          <div id="setup" className="mb-16">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-8 flex items-center">
              <span className="mr-4 text-3xl">💻</span> 1. 环境搭建
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
                <h3 className="text-xl font-bold mb-4 text-blue-800">🎉 好消息！现在可以不用安装Python了！</h3>
                <p className="text-blue-700 leading-relaxed mb-5 text-lg">
                  我们的网站现在支持<strong>在线编程</strong>！你可以直接在网页里写代码、运行代码，
                  不需要在电脑上安装任何东西。非常适合零基础学习者快速上手！
                </p>
                <div className="flex flex-wrap gap-6 mt-6">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3 text-2xl">✅</span>
                    <span className="text-blue-700 text-lg">不用下载安装</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3 text-2xl">✅</span>
                    <span className="text-blue-700 text-lg">网页里直接运行</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3 text-2xl">✅</span>
                    <span className="text-blue-700 text-lg">手机电脑都能用</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-slate-800">📦 什么是Python？</h3>
                <p className="text-slate-700 leading-relaxed mb-5 text-lg">
                  Python是一种编程语言，就像一门语言一样，我们用它来告诉电脑要做什么。
                  它非常适合数据分析，因为有很多现成的工具可以使用！
                </p>
                <div className="p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-yellow-200">
                  <p className="text-sm text-yellow-800 text-lg">
                    💡 小白贴士：别担心，你不需要成为Python专家就能开始我们的项目！
                    只要跟着指南一步步来就可以了。
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-slate-800">📦 可选：在电脑上安装Python（进阶）</h3>
                <p className="text-slate-700 mb-5 text-lg">
                  如果你想在自己的电脑上运行更复杂的项目，可以安装Python（这一步是可选的）：
                </p>
                <ol className="list-decimal list-inside text-slate-700 space-y-3 text-lg">
                  <li>打开浏览器，访问：<a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">https://www.python.org/downloads/</a></li>
                  <li>点击黄色的"Download Python"按钮下载最新版本</li>
                  <li>下载完成后，双击运行安装程序</li>
                  <li>
                    <strong>重要：</strong>在安装界面，一定要勾选"Add Python to PATH"选项！
                  </li>
                  <li>点击"Install Now"开始安装</li>
                  <li>等待安装完成，看到"Setup was successful"就说明成功了！</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Python基础 */}
          <div id="python" className="mb-16">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-8 flex items-center">
              <span className="mr-4 text-3xl">🐍</span> 2. Python基础
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
                <h3 className="text-xl font-bold mb-5 text-slate-800">📚 你需要知道的Python知识</h3>
                <p className="text-slate-700 mb-6 text-lg">
                  别紧张！我们只需要知道一些最基础的Python知识就够了：
                </p>
                <div className="space-y-6">
                  {/* 在线编程示例 */}
                  <div className="mb-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">🖥️</span>
                      </div>
                      <h4 className="font-bold text-slate-800 text-2xl">在线动手试试！（不用安装Python）</h4>
                    </div>
                    <p className="text-slate-700 mb-6 text-lg">
                      点击"示例"按钮加载示例代码，然后点击上方的"运行代码"按钮，就能看到结果！也可以自己写代码！
                    </p>
                    <CodeEditor 
                      initialCode=""
                      examples={[{name: "Python基础示例", code: `# 1️⃣ 变量示例
name = "小明"     # 文字要用引号括起来
age = 25         # 数字直接写
score = 98.5

print(name)      # 显示：小明
print(age)       # 显示：25

# 2️⃣ 列表示例
fruits = ["苹果", "香蕉", "橙子"]
numbers = [1, 2, 3, 4, 5]

print(fruits)    # 显示列表内容
print(fruits[0]) # 显示第一个元素：苹果

# 3️⃣ 简单计算
print("年龄 + 5 =", age + 5)
print("平均分数 =", (score + 90) / 2)`}]}
                      title="Python基础练习场"
                    />
                    <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                      <p className="text-sm text-blue-800 text-lg">
                        💡 试试看：点击"示例"按钮加载示例，然后把 <code className="bg-white px-3 py-1 rounded font-mono">name = "小明"</code> 改成你自己的名字，
                        或者把 <code className="bg-white px-3 py-1 rounded font-mono">age = 25</code> 改成其他数字，再点击运行看看！
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3 text-xl">1️⃣ 变量（Variable）</h4>
                    <p className="text-slate-700 mb-2 text-lg">
                      变量就像一个盒子，可以放数字、文字等各种东西。
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3 text-xl">2️⃣ 列表（List）</h4>
                    <p className="text-slate-700 mb-2 text-lg">
                      列表就像一个购物清单，可以放很多东西。
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3 text-xl">3️⃣ 导入库（Import）</h4>
                    <p className="text-slate-700 mb-2 text-lg">
                      我们可以使用别人写好的工具，叫做"库"。
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-800 text-lg">
                  💡 小白贴士：不用担心记不住！我们的项目里有详细的注释，
                  照着代码敲就行，做多了自然就会了。
                </p>
              </div>
            </div>
          </div>

          {/* Jupyter Notebook */}
          <div id="jupyter" className="mb-16">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-8 flex items-center">
              <span className="mr-4 text-3xl">📓</span> 3. Jupyter Notebook 使用教程
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-slate-800">❓ 什么是Jupyter Notebook？</h3>
                <p className="text-slate-700 leading-relaxed mb-5 text-lg">
                  Jupyter Notebook是做数据分析最常用的工具，它就像一个电子笔记本，
                  可以一边写代码、一边写笔记，还能直接看到运行结果！
                </p>
                <div className="p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-yellow-200">
                  <p className="text-sm text-yellow-800 text-xl font-semibold mb-3">
                    🎯 为什么要用Jupyter Notebook？
                  </p>
                  <ul className="text-sm text-yellow-800 list-disc list-inside mt-3 space-y-2 text-lg">
                    <li>可以写一行代码、运行一行，很适合学习</li>
                    <li>可以记录学习过程和分析思路</li>
                    <li>可以直接在浏览器里使用，很方便</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-slate-800">🚀 如何启动Jupyter Notebook？</h3>
                <ol className="list-decimal list-inside text-slate-700 space-y-4 text-lg">
                  <li>打开命令提示符（Windows）或终端（Mac）</li>
                  <li>输入命令：<code className="bg-slate-100 px-4 py-2 rounded mx-2 font-mono text-base">jupyter notebook</code>，按回车</li>
                  <li>等待几秒钟，浏览器会自动打开一个页面</li>
                  <li>点击右上角的"New" → "Python 3"创建新笔记本</li>
                  <li>恭喜！你可以开始写代码了！</li>
                </ol>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-slate-800">⌨️ 基本操作技巧</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-3 text-lg">📝 运行代码</h4>
                    <p className="text-slate-700 text-base mb-2">
                      在代码格子里写完代码后，按 <code className="bg-white px-3 py-1 rounded font-mono">Shift + Enter</code> 运行
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-3 text-lg">➕ 添加格子</h4>
                    <p className="text-slate-700 text-base mb-2">
                      点击菜单 "Insert" → "Insert Cell Below"
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-3 text-lg">📝 写笔记</h4>
                    <p className="text-slate-700 text-base mb-2">
                      把格子类型从"Code"改成"Markdown"就可以写笔记
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-3 text-lg">💾 保存文件</h4>
                    <p className="text-slate-700 text-base mb-2">
                      按 <code className="bg-white px-3 py-1 rounded font-mono">Ctrl + S</code> 保存笔记本
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 下一步 */}
          <div id="next" className="mb-10">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-8 flex items-center">
              <span className="mr-4 text-3xl">▶️</span> 4. 下一步：开始项目学习
            </h2>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md mb-8">
              <h3 className="text-xl font-bold mb-5 text-slate-800">🎯 恭喜你完成了入门！</h3>
              <p className="text-slate-700 mb-6 text-lg">
                现在你已经准备好了，可以开始我们的数据分析实战项目了！
              </p>
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 mb-6">
                <p className="text-sm text-blue-800 font-semibold mb-3 text-xl">📋 学习顺序建议：</p>
                <ol className="list-decimal list-inside text-sm text-blue-800 space-y-2 text-lg">
                  <li>项目1：数据感知与基础处理（必学！）</li>
                  <li>项目2：数据可视化基础（必学！）</li>
                  <li>项目3：探索性数据分析（EDA）</li>
                  <li>根据兴趣选择后续项目</li>
                </ol>
              </div>
              <p className="text-slate-700 text-lg">
                不用担心，每个项目都有详细的步骤说明和完整的代码示例，
                只要跟着做就可以了！
              </p>
            </div>

            {/* 开始按钮 */}
            <div className="text-center">
              <Link 
                to="/"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all shadow-xl"
              >
                🚀 开始项目学习
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
