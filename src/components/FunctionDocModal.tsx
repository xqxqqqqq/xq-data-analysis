import React from 'react';
import { functionDocumentation } from '../data/functionDocs';

interface FunctionDocModalProps {
  functionName: string;
  onClose: () => void;
}

const FunctionDocModal: React.FC<FunctionDocModalProps> = ({ functionName, onClose }) => {
  const doc = functionDocumentation[functionName];

  if (!doc) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">函数说明</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <p className="text-gray-600">暂无该函数的说明文档。</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-auto">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-t-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">{doc.name}</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 text-3xl leading-none"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
              <span className="mr-2">📖</span>
              功能说明
            </h3>
            <p className="text-gray-600 leading-relaxed">{doc.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
              <span className="mr-2">📝</span>
              使用语法
            </h3>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <code className="text-green-400 font-mono text-sm whitespace-pre">
                {doc.syntax}
              </code>
            </div>
          </div>

          {doc.parameters && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <span className="mr-2">⚙️</span>
                参数说明
              </h3>
              <div className="bg-blue-50 rounded-lg p-4">
                <pre className="text-blue-800 font-mono text-sm whitespace-pre-wrap">
                  {doc.parameters}
                </pre>
              </div>
            </div>
          )}

          {doc.returnValue && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <span className="mr-2">✅</span>
                返回值
              </h3>
              <p className="text-gray-600">{doc.returnValue}</p>
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
              <span className="mr-2">💡</span>
              使用示例
            </h3>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 font-mono text-sm whitespace-pre">
                {doc.example}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-b-xl">
          <button
            onClick={onClose}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  );
};

export default FunctionDocModal;
