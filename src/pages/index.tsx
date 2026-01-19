import React, { useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

// --- 动态星星背景组件 ---
const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random(),
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'white';

      stars.forEach((star) => {
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }
        // 闪烁效果
        star.opacity += (Math.random() - 0.5) * 0.05;
        if (star.opacity < 0.1) star.opacity = 0.1;
        if (star.opacity > 1) star.opacity = 1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-40" />;
};

// --- 趣味像素小怪兽 ---
const PixelMonster = () => (
  <div className="w-12 h-12 text-purple-500 animate-bounce cursor-pointer hover:text-purple-400 transition-colors">
    <svg viewBox="0 0 24 24" fill="currentColor" shapeRendering="crispEdges">
      <path d="M4 2h16v2H4zM2 4h20v2H2zM2 6h2v12H2zM20 6h2v12h-2zM4 18h16v2H4zM2 20h20v2H2zM6 8h4v4H6zM14 8h4v4h-4zM8 10h2v2H8zM16 10h2v2h-2z"/>
    </svg>
  </div>
);

function Hero() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden min-h-[80vh] flex items-center">
      <StarField />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="flex flex-col items-start space-y-8">

          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-4 backdrop-blur-sm hover:bg-purple-500/20 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span className="text-purple-300 text-sm font-medium tracking-wide">正在寻找有趣的问题...</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-none">
            构建 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 animate-gradient bg-300%">
              有灵魂的产品
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed font-light">
            我是 <strong className="text-white font-medium">Lotus-7</strong>。
            比起写代码，我更喜欢<span className="text-purple-400 border-b border-purple-500/30 pb-0.5">创造体验</span>。
            <br className="hidden md:block"/>
            游走在设计与算法的边缘，试图教会计算机懂得人类的幽默感。
          </p>

          <div className="flex flex-wrap gap-4 pt-8">
            <Link
              to="/projects"
              className="px-8 py-4 rounded-xl bg-white text-black font-bold text-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
              看看我的作品
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 hover:text-white transition-all duration-300 backdrop-blur-sm">
              我是谁？
            </Link>
          </div>
        </div>
      </div>

      {/* 底部渐变遮罩，让星星自然淡出 */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0B0C0E] to-transparent pointer-events-none"></div>
    </section>
  );
}

const FEATURED_PROJECTS = [
  {
    title: 'AI 流程自动化',
    description: '不用写一行代码，拖拖拽拽就能搞定复杂的 LLM 工作流。为了偷懒，我先造了这个工具。',
    tags: ['Next.js', '偷懒神器', 'React Flow'],
    link: '/projects',
  },
  {
    title: 'Design System OS',
    description: '设计系统的中央处理器。让设计师和开发者的吵架次数减少了 80%。',
    tags: ['TypeScript', 'Figma API', '和平使者'],
    link: '/projects',
  },
  {
    title: 'Smart Notes',
    description: '它知道你在想什么。一个会自己把笔记连起来的第二大脑，比我记性好多了。',
    tags: ['本地优先', 'Vector DB', '第二大脑'],
    link: '/projects',
  },
];

function FeaturedProjects() {
  return (
    <section className="py-24 bg-[#0B0C0E] border-t border-white/5 relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-3">精选作品</h2>
            <p className="text-slate-400 text-lg">都是为了解决我自己的痛点而诞生的。</p>
          </div>
          <Link to="/projects" className="text-purple-400 hover:text-purple-300 font-medium hidden md:block transition-colors">
            查看全部仓库 →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <div key={idx} className="group relative bg-[#141517] rounded-3xl p-8 border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/20">
              <div className="mb-6">
                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  <PixelMonster />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/5 text-slate-300 rounded-full border border-white/5 group-hover:border-purple-500/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to={project.link} className="absolute inset-0" aria-label={`View ${project.title}`} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link to="/projects" className="text-purple-400 font-medium">
            查看全部仓库 →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="首页"
      description="Lotus-7 的个人作品集">
      <main className="bg-[#0B0C0E] text-slate-200">
        <Hero />
        <FeaturedProjects />
        <section className="py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10 pointer-events-none"></div>
          <div className="container mx-auto px-4 max-w-2xl relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">想搞点有意思的事？</h2>
            <p className="text-slate-400 mb-10 text-xl font-light">
              无论是聊聊 AI，还是吐槽某个难用的产品，<br/>
              或者只是一起喝杯咖啡。
            </p>
            <Link
              to="mailto:contact@lotus-7.com"
              className="inline-block px-10 py-5 rounded-full bg-white text-black font-bold text-xl hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              发个信号 📶
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
