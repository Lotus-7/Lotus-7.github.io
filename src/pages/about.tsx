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
            一个被 AI 工具"惯坏了"的 <br/>
            <span className="text-slate-500">想法实践者</span>
          </h1>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl leading-relaxed text-slate-300 mb-8 font-light">
              你好，我是小 7，怎么说呢...我现在就是那种脑子里冒出个想法，立马就想把它变成现实的那种人。
            </p>

            <p className="leading-relaxed">
              以前吧，脑子里有个点子，可能还得先学三个月编程，最后想法早就凉透了。但现在有了 AI 编程工具，每天蹦出来的 idea，恨不得马上就能跑起来。
            </p>

            <hr className="my-12 border-white/10" />

            <h3 className="text-2xl font-bold text-white mb-6">享受创造的乐趣</h3>
            <p>
              AI 工具就像给我配了个超级助手，我只需要把想法描述清楚，它就能帮我把基础工作搞定。虽然有时候它也会理解错意思，整出些南辕北辙的东西，但重要的是——它让我从"想法收集者"变成了"想法实践者"
            </p>
            <p>
              现在这种状态挺爽的：有想法就去做，不行就推倒重来，反正成本也不高。这种快速迭代的感觉，让我好像又回到了小时候搭乐高的时候，纯粹地享受创造的乐趣。
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-6">所以，这就是我</h3>
            <p>
              一个被AI工具"惯坏了"的折腾爱好者。如果你也是那种脑子里总有奇奇怪怪想法的人，咱们可以多交流交流。毕竟这年头，光想不做的人太多了，能一起折腾的朋友，可太珍贵了。
            </p>

          </div>
        </div>
      </main>
    </Layout>
  );
}
