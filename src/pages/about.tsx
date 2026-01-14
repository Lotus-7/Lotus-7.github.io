import React from 'react';
import Layout from '@theme/Layout';

export default function About(): JSX.Element {
  return (
    <Layout
      title="我是谁"
      description="关于 Lotus-7">
      <main className="bg-[#0B0C0E] min-h-screen py-24 text-slate-300">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight leading-tight">
            AI 时代的 <br/>
            <span className="text-slate-500">野生设计工程师</span>
          </h1>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl leading-relaxed text-slate-300 mb-8 font-light">
              你好，我是 Lotus-7，一个试图模糊“设计”和“开发”边界的家伙
            </p>

            <p className="leading-relaxed">
              在这个 AI 像魔法一样爆发的年代，我坚信最好的产品人必须同时懂得<strong>如何画出梦想</strong>（设计）以及<strong>如何实现魔法</strong>（工程）。
              我不想只做一个画图的，也不想只做一个写接口的。我想做那个把魔法封装成按钮的人。
            </p>

            <hr className="my-12 border-white/10" />

            <h3 className="text-2xl font-bold text-white mb-6">我现在沉迷什么？</h3>
            <p>
              目前，我完全沉迷于 <strong>Local-First AI（本地优先的 AI）</strong>。
              我相信未来的软件应该是私密的、极速的，而且是完全属于用户的。
              我们正在从“租用软件”的 SaaS 时代，回归到“拥有工具”的工匠时代。
            </p>
            <p>
              我的日常就是在研究怎么把复杂的 LLM 推理过程，塞进一个简单到连我奶奶都会用的界面里。
              这很难，但如果不难，还要我干嘛呢？
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-6">为什么走这条路？</h3>
            <p>
              现在有了 AI，我发现我们拥有了一种全新的原材料——它既像粘土一样可塑，又像顽童一样不可控。
              驯服这种不确定性，是这个十年最性感的设计挑战。
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-6">交个朋友？</h3>
            <p>
              我喜欢和那些在乎细节、但也懂得什么时候该妥协发布的小团队合作。
              如果你正在造一些给创造者用的工具，或者只是想吐槽现在的 AI 产品有多难用，
              欢迎随时找我。
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
