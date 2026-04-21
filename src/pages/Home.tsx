import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部头部区域 */}
      <div className="bg-green-50 py-12 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              数据分析技术实战项目
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              为零基础学生设计的系统化数据分析技能训练课程，从基础到进阶，通过10个实战项目掌握核心技能
            </p>
          </div>
        </div>
      </div>
      
      {/* 项目卡片列表 */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              to={`/project/${project.id}`}
              className="block group h-full"
            >
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                <div className="flex mb-6">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    {project.id}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed text-base flex-grow">
                  {project.description}
                </p>
                <div className="flex justify-end">
                  <span className="text-green-600 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    查看详情
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;