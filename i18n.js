// 国际化语言数据
const i18nData = {
  zh: {
    // 页面标题和基本信息
    pageTitle: 'OpenClaw Swarm - 白银价格分析案例',
    chatTitle: '💬 对话记录',
    chatInfo: '白银价格分析项目',
    swarmTitle: '🦞 智能体集群工作流',
    previewTitle: '🌐 生成网页预览',

    // 按钮文本
    btnRefresh: '🔄 刷新',
    btnNewTab: '🔗 新标签打开',

    // 工作流阶段
    stageAnalysis: '📋 任务分析',
    stageDecompose: '🔧 任务拆解',
    stageResearch: '🔍 并行调研',
    stageWriting: '✍️ 撰写',
    stageReview: '🔎 审核',
    stageDevelopment: '👨‍💻 开发',

    // 智能体卡片
    agentMain: '主智能体',
    agentResearcher: 'Researcher',
    agentWriter: 'Writer',
    agentReviewer: 'Reviewer',
    agentCoder: 'Coder',

    // 任务描述
    taskAnalyze: '分析用户需求',
    taskDecompose: '拆解为子任务',
    taskObjectiveData: '客观数据',
    taskBullishView: '看多观点',
    taskBearishView: '看空观点',
    taskWriting: '整合撰写',
    taskReview: '事实审核',
    taskDevelopment: '网页开发',

    // 状态
    statusCompleted: '✅ 完成',
    statusTime3Min: '✅ 3分钟',
    statusTime2Min: '✅ 2分钟',
    statusTime1Min: '✅ 1分钟',
    statusTime10Min: '✅ 10分钟',

    // 发送者名称
    senderUser: 'orange',
    senderAgent: '智能体集群',
    senderModerator: '冒险小理',

    // 对话内容
    chatData: [
      {
        type: 'user',
        sender: 'orange',
        time: '2026年2月12日 09:32',
        content: '我要写一篇关于白银价格还能涨多久的文章。从客观数据、看多、看空等不同视角调研、辩论。最后再交给一个 agent 专门负责撰写。再有一人负责审稿,核查内容真实性。最后再让一名开发人员,把数据和文章内容,用一种可交互的网页形式呈现。'
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月12日 09:33',
        content: '这是一个很棒的多角度分析项目!我来帮你编排一个智能体团队来完成这个任务。'
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月12日 09:33',
        content: `现在我来设计这个白银价格分析项目的智能体团队编排方案:

<h3>🪙 白银价格分析项目 - 智能体团队编排</h3>

<strong>任务拆解:</strong>

<table>
<tr><th>阶段</th><th>智能体</th><th>任务</th><th>依赖</th></tr>
<tr><td>1</td><td>🔍 researcher × 3</td><td>并行调研:客观数据、看多观点、看空观点</td><td>无</td></tr>
<tr><td>2</td><td>✍️ writer</td><td>整合资料撰写文章</td><td>阶段1</td></tr>
<tr><td>3</td><td>🔎 reviewer</td><td>审核内容真实性</td><td>阶段2</td></tr>
<tr><td>4</td><td>👨‍💻 coder</td><td>开发交互式网页</td><td>阶段3</td></tr>
</table>

现在开始派发第一阶段的三个并行调研任务。`
      },
      {
        type: 'agent',
        sender: '冒险小理',
        time: '2026年2月12日 09:33',
        content: `已派发 3 个研究员智能体并行调研:

<table>
<tr><th>智能体</th><th>任务</th><th>状态</th></tr>
<tr><td>🔍 researcher #1</td><td>客观数据(价格、供需、宏观)</td><td>⏳ 执行中</td></tr>
<tr><td>🔍 researcher #2</td><td>看多观点(机构预测、论据)</td><td>⏳ 执行中</td></tr>
<tr><td>🔍 researcher #3</td><td>看空观点(风险、历史教训)</td><td>⏳ 执行中</td></tr>
</table>

研究员们正在全网搜索资料,完成后我会收到回报,届时启动下一阶段。预计调研阶段约需 5-10 分钟 ⏳`
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月12日 09:36',
        content: '✅ <strong>看多观点调研完成!</strong> 报告涵盖花旗($150)、高盛($150-180)、瑞银($58-65)等机构目标价,以及供应赤字、新能源需求、金银比修复等核心论据。<br><br>还有 2 个调研任务进行中...'
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月12日 09:36',
        content: '✅ <strong>客观数据调研完成!</strong> 包含白银价格走势(突破$82/盎司)、供需数据(连续6年短缺)、宏观背景及光伏/新能源驱动因素,共13个数据表格。<br><br>还剩 1 个调研任务(看空观点)进行中...'
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月12日 09:36',
        content: '✅ <strong>看空观点调研完成!</strong> 涵盖摩根大通策略师警告、美联储高利率压力、技术替代风险,以及2011年和1980年泡沫破裂的历史教训。<br><br>---<br><br><strong>🎉 第一阶段调研全部完成!</strong> 现在启动第二阶段 - 撰写文章'
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月12日 09:36',
        content: `✍️ <strong>Writer 智能体已开始撰写文章</strong>,将整合三份调研资料,形成一篇客观、深度的分析文章。

<strong>当前进度:</strong>
<pre>
✅ 阶段 1: 并行调研 (已完成)
   ├── 🔍 客观数据 ✓
   ├── 🔍 看多观点 ✓
   └── 🔍 看空观点 ✓

⏳ 阶段 2: ✍️ 撰写文章 (进行中...)

⬚ 阶段 3: 🔎 审核事实
⬚ 阶段 4: 👨‍💻 开发网页
</pre>

文章撰写预计需要 3-5 分钟 ⏳`
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月12日 09:39',
        content: '✅ <strong>文章撰写完成!</strong> 约6500字,涵盖客观数据、多空辩论、深度分析和投资启示,标题《白银价格还能涨多久?——深度供需与宏观博弈分析》。<br><br>现在启动第三阶段 - 事实核查'
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月12日 09:39',
        content: `🔎 <strong>Reviewer 智能体已开始审核文章</strong>,核查数据准确性和内容真实性。

<strong>当前进度:</strong>
<pre>
✅ 阶段 1: 并行调研 (已完成)
✅ 阶段 2: ✍️ 撰写文章 (已完成)
⏳ 阶段 3: 🔎 审核事实 (进行中...)
⬚ 阶段 4: 👨‍💻 开发网页
</pre>

审核预计需要 2-3 分钟 ⏳`
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月12日 09:40',
        content: '✅ <strong>事实核查完成!</strong> 评分 8.5/10,84%数据完全准确,无重大错误。仅需微调2处:2025年涨幅来源标注、金银比更新至最新数据(已跌破50)。<br><br>现在启动最后阶段 - 开发交互式网页'
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月12日 09:40',
        content: `👨‍💻 <strong>Coder 智能体已开始开发交互式网页</strong>,将整合数据可视化、多空对比和文章展示。

<strong>当前进度:</strong>
<pre>
✅ 阶段 1: 并行调研 (已完成) ~3分钟
✅ 阶段 2: ✍️ 撰写文章 (已完成) ~2分钟
✅ 阶段 3: 🔎 审核事实 (已完成) ~1分钟
⏳ 阶段 4: 👨‍💻 开发网页 (进行中...)
</pre>

网页开发预计需要 5-8 分钟 ⏳`
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月12日 11:27',
        content: `✅ <strong>网页开发完成!</strong>

<h3>文件结构</h3>
<pre>
/workspace/silver-analysis/web/
├── index.html      # 主页面
├── css/style.css   # 样式(专业金融风格,深色主题)
└── js/main.js      # 交互逻辑和图表数据
</pre>

<h3>页面功能</h3>
<ul>
<li>🎯 <strong>总览区</strong>: 核心数据卡片(当前价格、供应缺口、金银比、库存覆盖率)</li>
<li>📊 <strong>数据图表</strong>: 价格走势、供应缺口趋势、需求结构饼图、金银比变化(使用 Chart.js)</li>
<li>⚔️ <strong>多空辩论</strong>: 可切换查看看多/看空观点,左右对比展示</li>
<li>📄 <strong>完整报告</strong>: 可滚动阅读的文章摘要</li>
<li>📚 <strong>数据来源</strong>: 引用声明 + 免责声明</li>
</ul>

网页已生成,可以在右侧预览区查看!`
      }
    ]
  },

  en: {
    // Page titles and basic info
    pageTitle: 'OpenClaw Swarm - Silver Price Analysis Case',
    chatTitle: '💬 Chat History',
    chatInfo: 'Silver Price Analysis Project',
    swarmTitle: '🦞 Agent Swarm Workflow',
    previewTitle: '🌐 Generated Webpage Preview',

    // Button text
    btnRefresh: '🔄 Refresh',
    btnNewTab: '🔗 Open in New Tab',

    // Workflow stages
    stageAnalysis: '📋 Task Analysis',
    stageDecompose: '🔧 Task Decomposition',
    stageResearch: '🔍 Parallel Research',
    stageWriting: '✍️ Writing',
    stageReview: '🔎 Review',
    stageDevelopment: '👨‍💻 Development',

    // Agent cards
    agentMain: 'Main Agent',
    agentResearcher: 'Researcher',
    agentWriter: 'Writer',
    agentReviewer: 'Reviewer',
    agentCoder: 'Coder',

    // Task descriptions
    taskAnalyze: 'Analyze user requirements',
    taskDecompose: 'Decompose into subtasks',
    taskObjectiveData: 'Objective Data',
    taskBullishView: 'Bullish View',
    taskBearishView: 'Bearish View',
    taskWriting: 'Integrated Writing',
    taskReview: 'Fact Review',
    taskDevelopment: 'Web Development',

    // Status
    statusCompleted: '✅ Completed',
    statusTime3Min: '✅ 3 min',
    statusTime2Min: '✅ 2 min',
    statusTime1Min: '✅ 1 min',
    statusTime10Min: '✅ 10 min',

    // Sender names
    senderUser: 'orange',
    senderAgent: 'Agent Swarm',
    senderModerator: 'Adventure Xiao Li',

    // Chat data
    chatData: [
      {
        type: 'user',
        sender: 'orange',
        time: 'Feb 12, 2026 09:32',
        content: 'I want to write an article about how long silver prices can continue to rise. Research and debate from different perspectives: objective data, bullish views, and bearish views. Then have an agent write it. Have another person review and verify the content\'s authenticity. Finally, have a developer present the data and article content in an interactive webpage format.'
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 12, 2026 09:33',
        content: 'This is a great multi-perspective analysis project! Let me orchestrate an agent team to complete this task.'
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 12, 2026 09:33',
        content: `Now I'll design the agent team orchestration plan for this silver price analysis project:

<h3>🪙 Silver Price Analysis Project - Agent Team Orchestration</h3>

<strong>Task Breakdown:</strong>

<table>
<tr><th>Phase</th><th>Agent</th><th>Task</th><th>Dependency</th></tr>
<tr><td>1</td><td>🔍 researcher × 3</td><td>Parallel research: objective data, bullish view, bearish view</td><td>None</td></tr>
<tr><td>2</td><td>✍️ writer</td><td>Integrate materials and write article</td><td>Phase 1</td></tr>
<tr><td>3</td><td>🔎 reviewer</td><td>Review content authenticity</td><td>Phase 2</td></tr>
<tr><td>4</td><td>👨‍💻 coder</td><td>Develop interactive webpage</td><td>Phase 3</td></tr>
</table>

Now dispatching three parallel research tasks for phase 1.`
      },
      {
        type: 'agent',
        sender: 'Adventure Xiao Li',
        time: 'Feb 12, 2026 09:33',
        content: `Dispatched 3 researcher agents for parallel research:

<table>
<tr><th>Agent</th><th>Task</th><th>Status</th></tr>
<tr><td>🔍 researcher #1</td><td>Objective data (price, supply/demand, macro)</td><td>⏳ In Progress</td></tr>
<tr><td>🔍 researcher #2</td><td>Bullish views (institutional forecasts, arguments)</td><td>⏳ In Progress</td></tr>
<tr><td>🔍 researcher #3</td><td>Bearish views (risks, historical lessons)</td><td>⏳ In Progress</td></tr>
</table>

Researchers are searching for information across the web. Will report back when complete and launch the next phase. Research phase estimated to take 5-10 minutes ⏳`
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 12, 2026 09:36',
        content: '✅ <strong>Bullish view research completed!</strong> Report covers institutional target prices from Citi ($150), Goldman Sachs ($150-180), UBS ($58-65), and core arguments including supply deficit, new energy demand, and gold-silver ratio recovery.<br><br>2 more research tasks in progress...'
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 12, 2026 09:36',
        content: '✅ <strong>Objective data research completed!</strong> Includes silver price trends (breaking $82/oz), supply/demand data (6 consecutive years of shortage), macro backdrop, and photovoltaic/new energy driving factors, with 13 data tables.<br><br>1 research task (bearish view) still in progress...'
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 12, 2026 09:36',
        content: '✅ <strong>Bearish view research completed!</strong> Covers JPMorgan strategist warnings, Fed high interest rate pressure, technology substitution risks, and historical lessons from the 2011 and 1980 bubble bursts.<br><br>---<br><br><strong>🎉 Phase 1 research fully completed!</strong> Now launching Phase 2 - article writing'
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 12, 2026 09:36',
        content: `✍️ <strong>Writer agent has started writing the article</strong>, integrating three research reports into an objective, in-depth analysis article.

<strong>Current Progress:</strong>
<pre>
✅ Phase 1: Parallel Research (Completed)
   ├── 🔍 Objective Data ✓
   ├── 🔍 Bullish View ✓
   └── 🔍 Bearish View ✓

⏳ Phase 2: ✍️ Article Writing (In Progress...)

⬚ Phase 3: 🔎 Fact Review
⬚ Phase 4: 👨‍💻 Web Development
</pre>

Article writing estimated to take 3-5 minutes ⏳`
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 12, 2026 09:39',
        content: '✅ <strong>Article writing completed!</strong> Approximately 6,500 words covering objective data, bull-bear debate, in-depth analysis, and investment insights, titled "How Long Can Silver Prices Continue to Rise? — In-depth Supply-Demand and Macro Game Analysis".<br><br>Now launching Phase 3 - fact checking'
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 12, 2026 09:39',
        content: `🔎 <strong>Reviewer agent has started reviewing the article</strong>, verifying data accuracy and content authenticity.

<strong>Current Progress:</strong>
<pre>
✅ Phase 1: Parallel Research (Completed)
✅ Phase 2: ✍️ Article Writing (Completed)
⏳ Phase 3: 🔎 Fact Review (In Progress...)
⬚ Phase 4: 👨‍💻 Web Development
</pre>

Review estimated to take 2-3 minutes ⏳`
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 12, 2026 09:40',
        content: '✅ <strong>Fact checking completed!</strong> Score 8.5/10, 84% data completely accurate, no major errors. Only minor adjustments needed: 2025 growth rate source citation, gold-silver ratio updated to latest data (dropped below 50).<br><br>Now launching final phase - developing interactive webpage'
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 12, 2026 09:40',
        content: `👨‍💻 <strong>Coder agent has started developing the interactive webpage</strong>, integrating data visualization, bull-bear comparison, and article display.

<strong>Current Progress:</strong>
<pre>
✅ Phase 1: Parallel Research (Completed) ~3min
✅ Phase 2: ✍️ Article Writing (Completed) ~2min
✅ Phase 3: 🔎 Fact Review (Completed) ~1min
⏳ Phase 4: 👨‍💻 Web Development (In Progress...)
</pre>

Web development estimated to take 5-8 minutes ⏳`
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 12, 2026 11:27',
        content: `✅ <strong>Web development completed!</strong>

<h3>File Structure</h3>
<pre>
/workspace/silver-analysis/web/
├── index.html      # Main page
├── css/style.css   # Styles (professional finance style, dark theme)
└── js/main.js      # Interactive logic and chart data
</pre>

<h3>Page Features</h3>
<ul>
<li>🎯 <strong>Overview Section</strong>: Core data cards (current price, supply deficit, gold-silver ratio, inventory coverage)</li>
<li>📊 <strong>Data Charts</strong>: Price trends, supply deficit trends, demand structure pie chart, gold-silver ratio changes (using Chart.js)</li>
<li>⚔️ <strong>Bull-Bear Debate</strong>: Switchable bullish/bearish views with side-by-side comparison</li>
<li>📄 <strong>Full Report</strong>: Scrollable article summary</li>
<li>📚 <strong>Data Sources</strong>: Reference citations + disclaimer</li>
</ul>

Webpage generated, you can view it in the right preview area!`
      }
    ]
  }
};

// 获取当前语言
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'zh';
}

// 设置语言
function setLanguage(lang) {
  localStorage.setItem('language', lang);
}

// 获取翻译文本
function t(key) {
  const lang = getCurrentLanguage();
  const keys = key.split('.');
  let value = i18nData[lang];

  for (const k of keys) {
    value = value[k];
    if (value === undefined) {
      console.warn(`Translation missing for key: ${key} in language: ${lang}`);
      return key;
    }
  }

  return value;
}
