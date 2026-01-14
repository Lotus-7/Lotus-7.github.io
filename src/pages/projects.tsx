import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const PROJECTS = [
  {
    title: "销售复盘工具",
    role: "AI 工程师",
    timeline: "2025",
    problem: "每位新入职的销售，会通过往期销售与用户的聊天记录来学习销售技巧，但缺乏系统性的总结和提炼。",
    solution: "开发了一个销售复盘工具，提供聊天记录，可以分析销售本次开单成功的原因，以及可复用的话术模版存入知识库，新入职的销售人员可以通过知识库进行学习，另外有销售开单失败的复盘工具，帮助销售复盘本次开单不成功的原因，并给出更好的回复方式",
    designPoints: [
      "销售开单成功复盘",
      "话术知识库",
      "销售开单失败复盘"
    ],
    value: "目前公司的销售部已经在使用",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "风格模版写作助手",
    role: "AI 工程师",
    timeline: "2023",
    problem: "普通人不知道如何写提示词让 AI 写作更符合自己的风格，导致生成的文章风格不统一。",
    solution: "用户只需要上传往期的文稿内容分析出风格特征，保存成风格卡片，下次用户输入主题即可按照用户的个人风格去仿写",
    designPoints: [
      "用户只需要上传自己的文稿内容",
      "AI 自动分析出风格特征",
      "用户可以保存风格卡片，并创作新的文案"
    ],
    value: "用于个人写公众号",
    links: {
      demo: "#",
      github: "#"
    }
  }
];

function ProjectCard({ project }) {
  return (
    <div className="bg-[#141517] rounded-3xl p-8 md:p-12 border border-white/5 hover:border-purple-500/30 transition-all mb-16 shadow-2xl shadow-black/50 group">
      <div className="flex flex-col md:flex-row justify-between items-start mb-10 border-b border-white/5 pb-8">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
          <div className="flex space-x-4 text-sm text-slate-500 font-medium uppercase tracking-widest">
            <span>{project.role}</span>
            <span>•</span>
            <span>{project.timeline}</span>
          </div>
        </div>
        <div className="flex space-x-3 mt-6 md:mt-0">
          {project.links.demo && (
            <Link to={project.links.demo} className="px-5 py-2.5 text-sm font-bold rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
              在线演示
            </Link>
          )}
          {project.links.github && (
            <Link to={project.links.github} className="px-5 py-2.5 text-sm font-bold rounded-lg border border-white/10 text-slate-400 hover:text-purple-400 hover:border-purple-400/50 transition-colors">
              GitHub
            </Link>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-purple-500 mb-4">痛点背景</h4>
            <p className="text-slate-300 leading-loose text-lg font-light">
              {project.problem}
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-purple-500 mb-4">解决方案</h4>
            <p className="text-slate-300 leading-loose text-lg font-light">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-purple-500 mb-4">关键设计决策</h4>
            <ul className="space-y-4">
              {project.designPoints.map((point, idx) => (
                <li key={idx} className="flex items-start text-slate-300 leading-relaxed">
                  <span className="mr-3 text-purple-500 mt-1.5 opacity-50">✦</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-purple-900/10 rounded-2xl p-6 border border-purple-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-purple-500/20 blur-3xl rounded-full"></div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-purple-400 mb-3 relative z-10">最终成效</h4>
            <p className="text-purple-200 font-medium text-lg relative z-10">
              {project.value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects(): JSX.Element {
  return (
    <Layout
      title="作品集"
      description="Lotus-7 开发的产品与工具集合">
      <main className="bg-[#0B0C0E] min-h-screen py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">HELLO</h1>
            <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
              放置一些个人工具和思考
              <br/>
              一些解决真实问题构建的实用工具
            </p>
          </div>

          <div className="space-y-8">
            {PROJECTS.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
