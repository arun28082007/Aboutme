'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Trash2, HelpCircle } from 'lucide-react';
import { TERMINAL_COMMANDS } from '@/data/portfolio-data';

interface CommandHistoryItem {
  command: string;
  output: string;
}

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'welcome',
      output: `Welcome to Arun Anand's interactive dev shell!
Type 'help' to see available commands or click the shortcut buttons below.`,
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (cmdToRun?: string) => {
    const raw = cmdToRun !== undefined ? cmdToRun : input;
    const trimmed = raw.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const output =
      TERMINAL_COMMANDS[trimmed] ||
      `Command not found: "${trimmed}". Type 'help' to see available commands.`;

    setHistory((prev) => [...prev, { command: raw, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand();
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="terminal" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="space-y-3 pb-8 border-b-[2.5px] border-black dark:border-white">
        <div className="inline-block px-3 py-1 text-xs font-black uppercase bg-[#10b981] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000]">
          05. DEVELOPER PLAYGROUND
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black dark:text-white">
          INTERACTIVE CLI TERMINAL
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium max-w-xl">
          Prefer command-line interfaces? Query Arun&apos;s repositories, credentials, and contact coordinates straight from the shell.
        </p>
      </div>

      {/* Terminal Window */}
      <div className="mt-8 bg-[#0d0f14] border-[2.5px] border-black dark:border-white shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#fff] overflow-hidden text-zinc-100 font-mono text-xs sm:text-sm">
        {/* Terminal Title Bar */}
        <div className="bg-[#181b24] px-4 py-3 border-b-2 border-black dark:border-zinc-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block border border-black/40" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block border border-black/40" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block border border-black/40" />
            <span className="ml-2 font-bold text-xs text-zinc-300">
              arun@ballia-box: ~/portfolio
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={() => handleCommand('clear')}
              className="text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
              title="Clear terminal screen"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>
        </div>

        {/* Output Screen */}
        <div className="p-4 sm:p-6 min-h-[260px] max-h-[380px] overflow-y-auto space-y-4">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <span className="text-zinc-500">arun@portfolio:~$</span>
                <span>{item.command}</span>
              </div>
              <pre className="text-zinc-300 font-mono text-xs whitespace-pre-wrap leading-relaxed pl-4 border-l-2 border-emerald-500/40">
                {item.output}
              </pre>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-[#14161f] border-t-2 border-black dark:border-zinc-700 flex items-center gap-2">
          <span className="text-emerald-400 font-bold hidden sm:inline">
            arun@portfolio:~$
          </span>
          <span className="text-emerald-400 font-bold sm:hidden">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'bio', 'projects', 'skills', 'education'..."
            className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder:text-zinc-600"
          />
          <button
            onClick={() => handleCommand()}
            className="px-3 py-1.5 bg-[#ffe600] text-black font-black text-xs uppercase border border-black hover:bg-yellow-400 transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>Run</span>
            <Send className="w-3 h-3" />
          </button>
        </div>

        {/* Quick Command Pills for quick tap */}
        <div className="px-4 py-2.5 bg-[#0e1017] border-t border-zinc-800 flex flex-wrap items-center gap-2 text-[11px]">
          <span className="text-zinc-500 font-bold">Quick runs:</span>
          {['help', 'bio', 'projects', 'skills', 'education', 'contact', 'github'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 bg-[#202430] hover:bg-[#ffe600] hover:text-black text-zinc-300 border border-zinc-700 transition-colors cursor-pointer font-mono"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
