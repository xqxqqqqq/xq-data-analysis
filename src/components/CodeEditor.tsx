import { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Copy, Check, Loader2, RefreshCw, Trash2, FileCode, Lightbulb, BookOpen, HelpCircle } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

interface CodeEditorProps {
  initialCode?: string;
  title?: string;
  readOnly?: boolean;
  examples?: Array<{ name: string; code: string }>;
  stepHints?: Array<{ name: string; description: string; example: string }>;
}

// Python 代码提示
const PYTHON_HINTS = {
  'pd': [
    { label: 'DataFrame()', description: '创建数据框' },
    { label: 'read_csv()', description: '读取CSV文件' },
    { label: 'head()', description: '查看前几行' },
    { label: 'info()', description: '查看数据信息' },
    { label: 'describe()', description: '数据统计摘要' },
    { label: 'groupby()', description: '分组聚合' },
    { label: 'merge()', description: '合并数据' },
    { label: 'pivot_table()', description: '创建透视表' },
  ],
  'np': [
    { label: 'array()', description: '创建数组' },
    { label: 'random.randint()', description: '随机整数' },
    { label: 'random.choice()', description: '随机选择' },
    { label: 'mean()', description: '计算均值' },
    { label: 'sum()', description: '求和' },
  ],
  'df': [
    { label: '.shape', description: '数据形状' },
    { label: '.columns', description: '列名' },
    { label: '.dtypes', description: '数据类型' },
    { label: '.head()', description: '前5行' },
    { label: '.tail()', description: '后5行' },
    { label: '.info()', description: '数据信息' },
    { label: '.describe()', description: '统计摘要' },
    { label: '.isnull()', description: '缺失值' },
    { label: '.fillna()', description: '填充缺失值' },
    { label: '.dropna()', description: '删除缺失值' },
    { label: '.groupby()', description: '分组' },
    { label: '.sort_values()', description: '排序' },
    { label: '.loc[]', description: '标签索引' },
    { label: '.iloc[]', description: '位置索引' },
  ],
};

const DEFAULT_EXAMPLES = [
  {
    name: 'Hello World 🌍',
    code: `# Hello World 示例
print('Hello, 数据分析! 👋')
print('欢迎来到在线编程世界 🎉')
print('让我们开始学习吧！')`
  },
  {
    name: '变量与计算 🧮',
    code: `# 变量和简单计算
name = '小明'
age = 25
score = 95.5

print(f'姓名: {name}')
print(f'年龄: {age}')
print(f'分数: {score}')
print(f'5年后年龄: {age + 5}')`
  },
];

export default function CodeEditor({ 
  initialCode = "", 
  title = "在线代码编辑器", 
  readOnly = false,
  examples = DEFAULT_EXAMPLES,
  stepHints = []
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode || "");
  const [output, setOutput] = useState("📤 输出结果将显示在这里...");
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showExamples, setShowExamples] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [showStepHints, setShowStepHints] = useState(false);
  const [currentHint, setCurrentHint] = useState<string>('pd');
  const [cursorPosition, setCursorPosition] = useState({ line: 1, column: 1 });
  const [selectedFunction, setSelectedFunction] = useState<string | null>(null);
  
  const pyodideRef = useRef<any>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 监听光标位置并显示代码提示
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const cursorPos = e.target.selectionStart;
    setCode(value);
    
    // 计算光标位置
    const lines = value.substring(0, cursorPos).split('\n');
    setCursorPosition({
      line: lines.length,
      column: lines[lines.length - 1].length + 1
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.currentTarget as HTMLTextAreaElement;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const newCode = code.substring(0, start) + '    ' + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 4;
        }
      }, 0);
    }
  };

  useEffect(() => {
    let mounted = true;
    let timeout: ReturnType<typeof setTimeout>;
    
    const showProgress = () => {
      setLoadingProgress(prev => {
        if (prev < 90) return prev + 10;
        return prev;
      });
    };

    const loadPyodide = async () => {
      try {
        setIsLoading(true);
        setLoadError(false);
        
        timeout = setInterval(showProgress, 500);
        
        console.log('加载 Python 环境...');
        
        // 简单模拟，实际项目中会加载真正的Pyodide
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if (!mounted) return;
        
        console.log('✅ Python 环境加载成功');
        setIsLoading(false);
        setIsReady(true);
        
        const hintText = examples.length > 1 
          ? '点击上方的 "示例" 按钮选择示例代码，或自己写代码，然后点击 "运行代码"！'
          : '点击上方的 "示例" 按钮加载示例代码，或自己写代码，然后点击 "运行代码"！';
        setOutput(`✅ Python 环境加载成功！🎉\n\n${hintText}\n\n💡 小提示：点击 "核心函数" 按钮可以查看本步骤用到的函数介绍！`);
        
      } catch (error) {
        console.error('加载失败:', error);
        setIsLoading(false);
        setLoadError(true);
        setOutput(`❌ 加载失败: ${error}`);
      } finally {
        if (timeout) clearInterval(timeout);
      }
    };

    loadPyodide();

    return () => {
      mounted = false;
      if (timeout) clearInterval(timeout);
    };
  }, []);

  const [loadingProgress, setLoadingProgress] = useState(0);

  const runCode = async () => {
    if (!isReady || isLoading) return;

    setHasError(false);
    setOutput("⏳ 代码正在运行...请稍等...");
    
    try {
      // 模拟代码运行
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // 简单的模拟输出
      let simulatedOutput = "";
      const lines = code.split('\n');
      
      for (const line of lines) {
        if (line.trim().startsWith('print(')) {
          try {
            const expr = line.trim().slice(6, -1);
            if (expr.includes("'") || expr.includes('"')) {
              const content = expr.replace(/['"]/g, '');
              simulatedOutput += content + '\n';
            } else {
              simulatedOutput += `执行: ${expr}\n`;
            }
          } catch (e) {
            simulatedOutput += line + '\n';
          }
        }
      }
      
      if (simulatedOutput) {
        setOutput(simulatedOutput.trim());
      } else {
        setOutput("✅ 代码执行完成！");
      }
      
    } catch (error) {
      console.error('执行错误:', error);
      setHasError(true);
      setOutput(`❌ 代码执行错误: ${error}`);
    }
  };

  const retryLoad = () => {
    window.location.reload();
  };

  const loadExample = (exampleCode: string) => {
    setCode(exampleCode);
    setShowExamples(false);
  };

  const insertHint = (hintText: string) => {
    const cursor = textareaRef.current?.selectionStart || code.length;
    const before = code.substring(0, cursor);
    const after = code.substring(cursor);
    
    // 检查是否需要去掉前缀
    let insertText = hintText;
    if (before.endsWith('pd') && hintText.startsWith('.')) {
      insertText = hintText;
    } else if (before.endsWith('np') && hintText.startsWith('.')) {
      insertText = hintText;
    } else if (before.endsWith('df') && hintText.startsWith('.')) {
      insertText = hintText;
    } else if ((before.endsWith('pd.') || before.endsWith('np.') || before.endsWith('df.')) && hintText.match(/^\w+/)) {
      // 已经有了前缀，只插入函数名
      insertText = hintText;
    } else if (!before.endsWith(' ') && !before.endsWith('\n') && cursor > 0) {
      insertText = ' ' + hintText;
    }
    
    const newCode = before + insertText + after;
    setCode(newCode);
    
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.selectionStart = textareaRef.current.selectionEnd = cursor + insertText.length;
      }
    }, 0);
  };

  return (
    <div className="w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700" style={{scrollbarWidth: 'none'}}>
      <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors" />
          </div>
          <h3 className="text-slate-300 text-sm font-medium font-mono">{title}</h3>
        </div>
        <div className="flex items-center gap-2">
          {loadError ? (
            <button
              onClick={retryLoad}
              className="flex items-center gap-1 bg-red-500/20 text-red-400 text-xs px-3 py-1 rounded-full hover:bg-red-500/30 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              重新加载
            </button>
          ) : (
            <div className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all",
              isReady ? "bg-green-500/20 text-green-400" : "bg-slate-700/50 text-slate-400"
            )}>
              {!isReady && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
              {isReady && <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />}
              <span>{isReady ? "Python 就绪" : "加载中..."}</span>
              {isReady && <Check className="w-3.5 h-3.5" />}
            </div>
          )}
        </div>
      </div>

      {!isReady && !loadError && (
        <div className="h-1 bg-slate-800">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
      )}

      {/* 上输入下输出布局 */}
      <div className="flex flex-col h-full">
        {/* 顶部工具栏 */}
        <div className="bg-slate-800 px-4 py-2 flex items-center border-b border-slate-700 overflow-x-auto" style={{scrollbarWidth: 'none'}}>
          <div className="flex items-center gap-3 flex-shrink-0">
            {isReady && (
              <span className="flex items-center gap-1 text-xs text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Python就绪
              </span>
            )}
          </div>
          <div className="flex gap-2 ml-auto">
            {stepHints && stepHints.length > 0 && (
              <button
                onClick={() => setShowStepHints(!showStepHints)}
                className={cn(
                  "px-3 py-1.5 rounded-md text-xs transition-colors flex items-center gap-1.5",
                  showStepHints 
                    ? "bg-orange-600 text-white" 
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                )}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                核心函数
              </button>
            )}
            <button
              onClick={() => setShowExamples(!showExamples)}
              className={cn(
                "px-3 py-1.5 rounded-md text-xs transition-colors flex items-center gap-1.5",
                showExamples 
                  ? "bg-blue-600 text-white" 
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              )}
            >
              <BookOpen className="w-3.5 h-3.5" />
              示例
            </button>
            <button
              onClick={() => setShowHints(!showHints)}
              className={cn(
                "px-3 py-1.5 rounded-md text-xs transition-colors flex items-center gap-1.5",
                showHints 
                  ? "bg-yellow-600 text-white" 
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              )}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              提示
            </button>
            <button
              onClick={() => {
                setCode('');
                setOutput('');
                setHasError(false);
              }}
              className="px-3 py-1.5 rounded-md text-xs bg-slate-700 text-slate-300 hover:bg-red-900 hover:text-red-300 transition-colors flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" />
              清空
            </button>
            <button
              onClick={runCode}
              disabled={isLoading || !isReady}
              className={cn(
                "px-4 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5",
                isReady && !isLoading
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-md active:scale-95"
                  : "bg-slate-700 text-slate-400 cursor-not-allowed"
              )}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  运行中...
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  运行
                </>
              )}
            </button>
          </div>
        </div>

        {/* 弹出面板区域 */}
        {showStepHints && stepHints && stepHints.length > 0 && (
          <div className="bg-gradient-to-r from-orange-900/40 to-amber-900/40 border-b border-slate-700 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-orange-300 font-semibold">🎯 本步骤核心函数</span>
              <button 
                onClick={() => setShowStepHints(false)}
                className="text-xs text-slate-400 hover:text-slate-200"
              >
                ✕ 关闭
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {stepHints.map((hint, index) => (
                <div 
                  key={index}
                  className={cn(
                    "bg-slate-800/70 rounded-lg border border-slate-700 p-2.5 cursor-pointer hover:border-orange-500 transition-all",
                    selectedFunction === hint.name && "border-orange-500 ring-1 ring-orange-500"
                  )}
                  onClick={() => setSelectedFunction(selectedFunction === hint.name ? null : hint.name)}
                >
                  <div className="font-mono font-bold text-orange-400 text-sm mb-1">{hint.name}</div>
                  {selectedFunction === hint.name && (
                    <div className="mt-2 pt-2 border-t border-slate-700">
                      <p className="text-slate-300 text-xs mb-1.5">{hint.description}</p>
                      <div className="bg-slate-900 rounded p-2 text-xs text-green-400 font-mono overflow-x-auto">
                        {hint.example}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {showExamples && (
          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border-b border-slate-700 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-blue-300 font-semibold">📚 选择示例代码</span>
              <button 
                onClick={() => setShowExamples(false)}
                className="text-xs text-slate-400 hover:text-slate-200"
              >
                ✕ 关闭
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => loadExample(example.code)}
                  className="px-3 py-2 bg-slate-700/60 hover:bg-blue-600 text-slate-200 hover:text-white text-sm rounded-lg transition-all text-left"
                >
                  {example.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {showHints && (
          <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border-b border-slate-700 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-yellow-300 font-semibold">💡 代码提示</span>
              <div className="flex items-center gap-1.5">
                {(['pd', 'np', 'df'] as const).map((category) => (
                  <button
                    key={category}
                    onClick={() => setCurrentHint(category)}
                    className={cn(
                      "px-2 py-1 rounded text-xs font-medium transition-all",
                      currentHint === category
                        ? "bg-yellow-600 text-white"
                        : "bg-slate-700/70 text-slate-300 hover:bg-slate-600"
                    )}
                  >
                    {category === 'pd' ? 'Pandas' : category === 'np' ? 'NumPy' : 'DataFrame'}
                  </button>
                ))}
                <button 
                  onClick={() => setShowHints(false)}
                  className="text-xs text-slate-400 hover:text-slate-200 ml-2"
                >
                  ✕ 关闭
                </button>
              </div>
            </div>
            {currentHint && PYTHON_HINTS[currentHint as keyof typeof PYTHON_HINTS] && (
              <div className="grid grid-cols-3 gap-1.5">
                {PYTHON_HINTS[currentHint as keyof typeof PYTHON_HINTS].map((hint, index) => (
                  <button
                    key={index}
                    onClick={() => insertHint(hint.label)}
                    className="px-2.5 py-1.5 bg-slate-700/60 hover:bg-yellow-600 text-slate-200 hover:text-white text-xs rounded-lg transition-all text-left"
                  >
                    <div className="font-mono font-semibold">{hint.label}</div>
                    <div className="text-xs text-slate-400 group-hover:text-yellow-200 truncate">{hint.description}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 代码输入区和输出区 */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* 代码输入区 - 固定最大高度 */}
          <div className="flex-1 min-h-[200px] max-h-[45%] overflow-auto bg-slate-900" style={{scrollbarWidth: 'none'}}>
            <textarea
              ref={textareaRef}
              value={code}
              onChange={handleTextareaChange}
              onKeyDown={handleKeyDown}
              disabled={readOnly}
              className="w-full h-full bg-transparent text-white p-4 font-mono text-sm resize-none focus:outline-none leading-6"
              spellCheck={false}
              style={{ whiteSpace: 'pre', scrollbarWidth: 'none' }}
              placeholder="# 在此输入 Python 代码... 或点击上方的 &quot;示例&quot; 按钮选择示例代码

💡 点击 &quot;核心函数&quot; 查看本步骤用到的函数介绍！"
            />
          </div>
          
          {/* 输出区 - 固定最小高度，可滚动 */}
          <div className="min-h-[30%] max-h-[55%] border-t border-slate-700 bg-slate-950 flex flex-col">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-slate-700/50 flex-shrink-0">
              <span className="text-xs text-slate-400 font-mono">📤 输出结果</span>
            </div>
            <div 
              ref={outputRef}
              className="flex-1 p-4 overflow-y-auto"
              style={{scrollbarWidth: 'none'}}
            >
              <pre className={cn(
                "font-mono text-sm whitespace-pre-wrap break-words leading-relaxed",
                hasError ? "text-red-400" : "text-green-400"
              )}>
                {output}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
