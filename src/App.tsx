import React, { useState } from 'react';
import {
  Github,
  Instagram,
  Twitter,
  MessageSquare,
  Code2,
  BookOpen,
  Smartphone,
  Bot,
  Lock,
  Brain,
  Gift,
  Calendar,
  Home,
  Trophy,
  Bug,
  Check,
  Copy,
  ExternalLink
} from 'lucide-react';

const GridBox = ({
  title,
  link,
  icon: Icon,
  subtitle = '',
  className = ''
}: {
  title: string;
  link: string;
  icon?: React.ElementType;
  subtitle?: string;
  className?: string;
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`relative h-[180px] rounded-lg bg-[#2A2F35] hover:bg-[#31363F] 
    border border-gray-700 transition-all duration-300 
    flex flex-col items-center justify-center gap-4 p-6
    group hover:scale-[1.02] hover:border-[#a9fd08] ${className}`}
  >
    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
      <ExternalLink className="w-4 h-4 text-gray-400" />
    </div>
    {Icon && (
      <Icon className="w-10 h-10 text-[#a9fd08] group-hover:scale-110 transition-transform duration-300" />
    )}
    <div className="text-center space-y-2">
      <h3 className="font-mono text-lg font-semibold text-gray-200 group-hover:text-white">
        {title}
      </h3>
      {subtitle && (
        <p className="text-sm text-gray-400 group-hover:text-gray-300">
          {subtitle}
        </p>
      )}
    </div>
  </a>
);

const Section = ({ title, children, className = '', cols = 4 }: {
  title: string;
  children: React.ReactNode;
  className?: string;
  cols?: number;
}) => (
  <div className={`space-y-6 ${className}`}>
    <h2 className="font-mono text-2xl font-bold text-[#a9fd08]">{title}</h2>
    <div className={`grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cols}`}>
      {children}
    </div>
  </div>
);

const CodePalette = () => {
  const [copied, setCopied] = useState(false);
  const code = 'npm install @capx/ecosystem';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={copyToClipboard}
      className="font-mono bg-[#2A2F35] rounded-lg p-6 max-w-2xl mx-auto 
        border border-gray-700 hover:border-[#a9fd08] transition-colors duration-300
        group relative overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#a9fd08] via-purple-500 to-[#a9fd08] 
        opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
      <div className="flex items-center justify-between">
        <code className="text-[#a9fd08] text-lg">{code}</code>
        <div
          className="p-2 rounded-md hover:bg-[#31363F] transition-colors duration-300"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <Check className="w-5 h-5 text-green-400" />
          ) : (
            <Copy className="w-5 h-5 text-gray-400 group-hover:text-[#a9fd08]" />
          )}
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-400">
        (or just be a part of it - we're cool either way)
      </p>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-[#1F2327] text-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#a9fd08] opacity-[0.02] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="text-center space-y-8">
            {/* <center> <img src="/capx.png" alt="capx" height="175px" width="400px" /></center> */}
            <h1 className="text-4xl md:text-6xl font-mono font-bold bg-clip-text text-transparent 
              bg-gradient-to-r from-[#a9fd08] to-green-400 animate-gradient">
              Developer Guide
            </h1>
            <p className="text-xl font-mono max-w-2xl mx-auto text-gray-300">
              A one and all place to build AI agents, use it and even trade and co own it
            </p>
            <CodePalette />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* Intro Section */}
        <Section title="Quick Access" cols={3}>
          <GridBox
            title="Capx Website"
            subtitle="Official Capx platform"
            link="https://www.capx.ai/"
            icon={Home}
          />
          <GridBox
            title="Capx Docs"
            subtitle="Documentation & guides"
            link="https://capx-ai.gitbook.io/https-www.capx.ai"
            icon={BookOpen}
          />
          <GridBox
            title="Capx Super App"
            subtitle="Mobile experience"
            link="https://t.me/capxai_bot"
            icon={Smartphone}
          />
        </Section>

        {/* Development Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <Section title="Development Resources" cols={2}>
            <GridBox
              title="Candy"
              subtitle="Build Your AI Agents"
              link="https://www.candy.build"
              icon={Bot}
            />
            <GridBox
              title="Capx Auth"
              subtitle="Authentication service"
              link="https://capx-ai.gitbook.io/capxauth"
              icon={Lock}
            />
            <GridBox
              title="AI Resources"
              subtitle="Development Resources"
              link="https://capx-ai.gitbook.io/https-www.capx.ai/build-ai-agent-guide"
              icon={Brain}
            />
            <GridBox
              title="Trading Agents"
              subtitle="Co own Agents on Super App"
              link="https://t.me/capxai_bot"
              icon={Bot}
            />
          </Section>

          <Section title="AI Agents" cols={2}>
            <GridBox
              title="GigaChad AI"
              subtitle="AI Clarity from TG Chaos"
              link="https://t.me/share/url?url=https://t.me/gigadigest_bot"
              icon={Bot}
            />
            <GridBox
              title="Motivatooor"
              subtitle="AI Powered Todo List"
              link="https://t.me/share/url?url=https://t.me/MotivatooorBot"
              icon={Bot}
            />
            <GridBox
              title="Degengram"
              subtitle="Mint Epic Memes & Farm Degen Karma"
              link="https://t.me/share/url?url=https://t.me/DegenGramBot"
              icon={Bot}
            />
            <GridBox
              title="Assistooor"
              subtitle="Your personal AI Agent to keep track"
              link="https://t.me/share/url?url=https://t.me/assistooorAI_bot"
              icon={Bot}
            />
          </Section>
        </div>

        {/* Community & Engagement */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <Section title="Social Media" cols={4}>
            <GridBox
              title="GitHub"
              subtitle="Open source"
              link="https://github.com/Capx-AI"
              icon={Github}
            />
            <GridBox
              title="Instagram"
              subtitle="Visual updates"
              link="https://www.instagram.com/capx.collective/"
              icon={Instagram}
            />
            <GridBox
              title="Twitter"
              subtitle="Latest updates"
              link="https://x.com/0xCapx"
              icon={Twitter}
            />
            <GridBox
              title="Discord"
              subtitle="Community chat"
              link="https://discord.com/invite/capx"
              icon={MessageSquare}
            />
          </Section>

          <Section title="Testnet Incentives" cols={2}>
            <GridBox
              title="Intract Quests"
              subtitle="Complete Quests "
              link="https://quest.intract.io/quest/678a250eee5284da6099e86f"
              icon={Gift}
            />
            <GridBox
              title="Galxe Quest"
              subtitle="Complete Quests"
              link="https://app.galxe.com/quest/cmVq4Fkc5Cp9WnDwb5mWUn/GCwoztpV6T"
              icon={Trophy}
            />
          </Section>

          <Section title="Programs" cols={4}>
            <GridBox
              title="Capx Casa"
              subtitle="Developer house"
              link="https://capx.casa/"
              icon={Home}
            />
            <GridBox
              title="AI Builders"
              subtitle="Build AI agents"
              link="https://capx-ai.gitbook.io/https-www.capx.ai/capx-ecosystem/capx-ai-builders-program"
              icon={Brain}
            />
            <GridBox
              title="Bounties"
              subtitle="Earn rewards"
              link="https://capx-ai.gitbook.io/https-www.capx.ai/capx-ecosystem/bounty"
              icon={Bug}
            />
            <GridBox
              title="Events"
              subtitle="Upcoming activities"
              link="https://capx-ai.gitbook.io/https-www.capx.ai/events/upcoming-events"
              icon={Calendar}
            />
          </Section>
        </div>
      </div>
    </div>
  );
}

export default App;