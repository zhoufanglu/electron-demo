/**
 * 您的预加载脚本就像是Node.js和您的网页之间的桥梁。
 * 它允许你将特定的 API 和行为暴露到你的网页上，
 * 而不是不安全地把整个 Node.js 的 API暴露。
 * 在本例中，我们将使用预加载脚本从process对象读取版本信息，并用该信息更新网页。
 */
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    console.log(9, selector)
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
/*
第 1 行：首先定义了一个事件监听器，当web页面加载完成后通知你。
第 2 行：接着您定义了一个功能函数用来为index.html中的所有placeholder设置文本。
第 7 行：接下来您遍历了您想展示版本号的组件列表。
第 8 行：最终，您调用 replaceText 来查找index.html中的版本占位符并将其文本值设置为process.versions的值。
*/
