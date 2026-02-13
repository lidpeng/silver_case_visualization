// 对话数据
const chatData = [
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
];

// 初始化聊天消息
function initChat() {
  const chatMessages = document.getElementById('chatMessages');
  chatMessages.innerHTML = '';

  chatData.forEach((msg, index) => {
    setTimeout(() => {
      const messageEl = createMessageElement(msg);
      chatMessages.appendChild(messageEl);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, index * 200);
  });
}

// 创建消息元素
function createMessageElement(msg) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${msg.type}`;

  const avatar = msg.type === 'user' ? '👤' : '🤖';

  messageDiv.innerHTML = `
    <div class="message-header">
      <div class="message-avatar">${avatar}</div>
      <div class="message-sender">${msg.sender}</div>
      <div class="message-time">${msg.time}</div>
    </div>
    <div class="message-content">${msg.content}</div>
  `;

  return messageDiv;
}

// 切换蜂群区域
function toggleSwarm() {
  const swarmSection = document.getElementById('swarmSection');
  const toggleBtn = document.getElementById('toggleBtn');

  swarmSection.classList.toggle('collapsed');
}

// 工作流拖动和缩放功能
let workflowState = {
  scale: 1,
  defaultScale: 1,
  isDragging: false,
  startX: 0,
  startY: 0,
  scrollLeft: 0,
  scrollTop: 0
};

function initWorkflowInteraction() {
  const swarmContent = document.getElementById('swarmContent');
  const workflow = document.querySelector('.workflow-diagram-horizontal');

  if (!swarmContent || !workflow) return;

  // 计算并设置默认缩放比例,使内容完全可见
  setTimeout(() => {
    calculateDefaultScale();
  }, 100);

  // 鼠标拖动
  swarmContent.addEventListener('mousedown', (e) => {
    // 只在直接点击容器时启用拖动,避免影响其他元素
    if (e.target === swarmContent || e.target === workflow) {
      workflowState.isDragging = true;
      workflowState.startX = e.pageX - swarmContent.offsetLeft;
      workflowState.startY = e.pageY - swarmContent.offsetTop;
      workflowState.scrollLeft = swarmContent.scrollLeft;
      workflowState.scrollTop = swarmContent.scrollTop;
      swarmContent.style.cursor = 'grabbing';
      e.preventDefault();
    }
  });

  swarmContent.addEventListener('mousemove', (e) => {
    if (!workflowState.isDragging) return;
    e.preventDefault();
    const x = e.pageX - swarmContent.offsetLeft;
    const y = e.pageY - swarmContent.offsetTop;
    const walkX = (x - workflowState.startX) * 2;
    const walkY = (y - workflowState.startY) * 2;
    swarmContent.scrollLeft = workflowState.scrollLeft - walkX;
    swarmContent.scrollTop = workflowState.scrollTop - walkY;
  });

  swarmContent.addEventListener('mouseup', () => {
    workflowState.isDragging = false;
    swarmContent.style.cursor = 'grab';
  });

  swarmContent.addEventListener('mouseleave', () => {
    workflowState.isDragging = false;
    swarmContent.style.cursor = 'grab';
  });

  // 鼠标滚轮缩放
  swarmContent.addEventListener('wheel', (e) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();

      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      workflowState.scale = Math.min(Math.max(0.3, workflowState.scale + delta), 2);

      workflow.style.transform = `scale(${workflowState.scale})`;
      workflow.style.transformOrigin = 'left top';

      // 更新缩放提示
      updateZoomIndicator();
    }
  });

  // 设置初始样式
  swarmContent.style.cursor = 'grab';
}

// 计算默认缩放比例
function calculateDefaultScale() {
  const swarmContent = document.getElementById('swarmContent');
  const workflow = document.querySelector('.workflow-diagram-horizontal');

  if (!swarmContent || !workflow) return;

  // 获取容器和内容的尺寸
  const containerWidth = swarmContent.clientWidth - 48; // 减去padding
  const containerHeight = swarmContent.clientHeight - 32;
  const contentWidth = workflow.scrollWidth;
  const contentHeight = workflow.scrollHeight;

  // 计算宽度和高度的缩放比例
  const scaleX = containerWidth / contentWidth;
  const scaleY = containerHeight / contentHeight;

  // 取较小的比例,确保内容完全可见
  const scale = Math.min(scaleX, scaleY, 1); // 最大不超过1

  workflowState.defaultScale = Math.max(0.3, scale); // 最小0.3
  workflowState.scale = workflowState.defaultScale;

  workflow.style.transform = `scale(${workflowState.scale})`;
  workflow.style.transformOrigin = 'left top';

  // 更新按钮显示
  updateResetButton();
}

// 更新重置按钮的显示
function updateResetButton() {
  const resetBtn = document.getElementById('resetZoomBtn');
  if (resetBtn) {
    resetBtn.textContent = `${Math.round(workflowState.defaultScale * 100)}%`;
  }
}

// 更新缩放指示器
function updateZoomIndicator() {
  let indicator = document.getElementById('zoomIndicator');

  if (!indicator) {
    indicator = document.createElement('div');
    indicator.id = 'zoomIndicator';
    indicator.className = 'zoom-indicator';
    document.getElementById('swarmContent').appendChild(indicator);
  }

  indicator.textContent = `${Math.round(workflowState.scale * 100)}%`;
  indicator.style.opacity = '1';

  // 2秒后淡出
  clearTimeout(indicator.fadeTimeout);
  indicator.fadeTimeout = setTimeout(() => {
    indicator.style.opacity = '0';
  }, 2000);
}

// 重置缩放到默认比例
function resetZoom() {
  const workflow = document.querySelector('.workflow-diagram-horizontal');
  const swarmContent = document.getElementById('swarmContent');

  if (workflow) {
    workflowState.scale = workflowState.defaultScale;
    workflow.style.transform = `scale(${workflowState.scale})`;
    updateZoomIndicator();

    // 重置滚动位置到左上角
    if (swarmContent) {
      swarmContent.scrollLeft = 0;
      swarmContent.scrollTop = 0;
    }
  }
}

// 适应窗口 - 重新计算并应用默认缩放
function fitToWindow() {
  calculateDefaultScale();
  const swarmContent = document.getElementById('swarmContent');
  if (swarmContent) {
    swarmContent.scrollLeft = 0;
    swarmContent.scrollTop = 0;
  }
  updateZoomIndicator();
}

// 放大
function zoomIn() {
  const workflow = document.querySelector('.workflow-diagram-horizontal');
  if (workflow) {
    workflowState.scale = Math.min(2, workflowState.scale + 0.1);
    workflow.style.transform = `scale(${workflowState.scale})`;
    workflow.style.transformOrigin = 'left top';
    updateZoomIndicator();
  }
}

// 缩小
function zoomOut() {
  const workflow = document.querySelector('.workflow-diagram-horizontal');
  if (workflow) {
    workflowState.scale = Math.max(0.5, workflowState.scale - 0.1);
    workflow.style.transform = `scale(${workflowState.scale})`;
    workflow.style.transformOrigin = 'left top';
    updateZoomIndicator();
  }
}

// 刷新预览
function refreshPreview() {
  const iframe = document.getElementById('previewFrame');
  iframe.src = iframe.src;
}

// 在新标签打开
function openInNewTab() {
  window.open('silver-analysis-preview.html', '_blank');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  initChat();
  initWorkflowInteraction();
});
