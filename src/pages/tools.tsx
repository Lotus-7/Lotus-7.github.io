import React, { useState } from 'react';
import Layout from '@theme/Layout';

// --- Tool 1: JSON Formatter ---
function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState(false);

  const format = (val) => {
    setInput(val);
    try {
      if (!val.trim()) {
        setOutput('');
        setError(false);
        return;
      }
      const parsed = JSON.parse(val);
      setOutput(JSON.stringify(parsed, null, 2));
      setError(false);
    } catch (e) {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-purple-500">{}</span> JSON 美化器
        </h3>
        <p className="text-sm text-slate-400">专治 JSON 格式强迫症。</p>
      </div>
      <div className="flex-1 space-y-2">
        <textarea
          className={`w-full h-32 p-4 rounded-xl bg-[#0B0C0E] border ${error ? 'border-red-500' : 'border-white/10'} text-xs font-mono focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
          placeholder="把乱糟糟的 JSON 扔进来..."
          value={input}
          onChange={(e) => format(e.target.value)}
        />
        <pre className="w-full h-32 p-4 rounded-xl bg-[#1A1B1E] border border-white/5 text-xs font-mono overflow-auto text-slate-300">
          {output || (error ? 'JSON 格式有误，再检查一下？' : '变漂亮的 JSON 会出现在这里...')}
        </pre>
      </div>
    </div>
  );
}

// --- Tool 2: Token Estimator ---
function TokenEstimator() {
  const [text, setText] = useState('');

  // 粗略估算: 1 token ~= 4 chars or 0.75 words (英文)
  // 中文环境下通常 1 汉字 ~= 0.6 ~ 2 tokens 不等，这里取个经验值 1.5 左右用于估算
  const charCount = text.length;
  // 简单粗暴估算
  const tokenCount = Math.ceil(charCount * 1.2);

  return (
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
           Token 估算器
        </h3>
        <p className="text-sm text-slate-400">算算这一段话发给 GPT-4 要多少钱。</p>
      </div>
      <textarea
        className="w-full flex-1 p-4 rounded-xl bg-[#0B0C0E] border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4 resize-none text-slate-300"
        placeholder="输入文本..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ minHeight: '120px' }}
      />
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="bg-white/5 p-3 rounded-lg border border-white/5">
          <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">字符数</div>
          <div className="font-mono font-bold text-white">{charCount}</div>
        </div>
        <div className="bg-purple-500/10 p-3 rounded-lg border border-purple-500/20">
          <div className="text-xs text-purple-400 uppercase tracking-wider mb-1">预估 Token</div>
          <div className="font-mono font-bold text-purple-300">~{tokenCount}</div>
        </div>
      </div>
    </div>
  );
}

// --- Tool 3: Aspect Ratio Calculator ---
function AspectRatio() {
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(1080);

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const divisor = gcd(width, height);
  const ratioW = width / divisor;
  const ratioH = height / divisor;

  return (
    <div className="flex flex-col h-full">
       <div className="mb-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
           宽高比计算器
        </h3>
        <p className="text-sm text-slate-400">别再按计算器除来除去验证 16:9 了。</p>
      </div>
      <div className="flex space-x-4 mb-6">
        <div className="flex-1">
          <label className="text-xs text-slate-500 mb-2 block uppercase font-bold tracking-wider">宽度</label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="w-full p-3 rounded-lg bg-[#0B0C0E] border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="flex-1">
          <label className="text-xs text-slate-500 mb-2 block uppercase font-bold tracking-wider">高度</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-full p-3 rounded-lg bg-[#0B0C0E] border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
      <div className="mt-auto bg-white/5 p-6 rounded-xl flex justify-between items-center border border-white/5">
        <span className="text-sm text-slate-400">比例结果</span>
        <span className="text-2xl font-bold text-white font-mono tracking-tight">{ratioW}:{ratioH}</span>
      </div>
    </div>
  );
}

export default function Tools(): JSX.Element {
  return (
    <Layout
      title="小工具"
      description="Lotus-7 的私人工具集">
      <main className="bg-[#0B0C0E] min-h-screen py-24">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">小工具</h1>
            <p className="text-xl text-slate-400 font-light">
              一些实用小工具<br/>
              一些解决小问题的工具
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#141517] p-8 rounded-3xl border border-white/5 shadow-2xl shadow-black/50 h-[28rem] hover:border-purple-500/30 transition-colors">
              <JsonFormatter />
            </div>
            <div className="bg-[#141517] p-8 rounded-3xl border border-white/5 shadow-2xl shadow-black/50 h-[28rem] hover:border-purple-500/30 transition-colors">
              <TokenEstimator />
            </div>
             <div className="bg-[#141517] p-8 rounded-3xl border border-white/5 shadow-2xl shadow-black/50 h-[28rem] hover:border-purple-500/30 transition-colors">
              <AspectRatio />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
