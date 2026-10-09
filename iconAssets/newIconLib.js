// newIconLib.js 全新图标库 硬编码版本
const iconLib = {
  baseUrl: "https://lp-kplayer.github.io/English-Player/iconAssets/",
  list: [
    {
      name: "图标_试稿1_蓝金立体",
      fileName: "图标_试稿1_蓝金立体.png",
      get url() { return this.baseUrl + this.fileName; }
    },
    {
      name: "图标_试稿2_明亮扁平",
      fileName: "图标_试稿2_明亮扁平.png",
      get url() { return iconLib.baseUrl + this.fileName; }
    },
    {
      name: "图标_试稿3_金属徽章",
      fileName: "图标_试稿3_金属徽章.png",
      get url() { return iconLib.baseUrl + this.fileName; }
    },
    {
      name: "favicon.ico",
      fileName: "favicon.ico",
      get url() { return iconLib.baseUrl + this.fileName; }
    },
    {
      name: "apple-touch-icon.png",
      fileName: "apple-touch-icon.png",
      get url() { return iconLib.baseUrl + this.fileName; }
    },
    {
      name: "icon-192.png",
      fileName: "icon-192.png",
      get url() { return iconLib.baseUrl + this.fileName; }
    },
    {
      name: "icon-512.png",
      fileName: "icon-512.png",
      get url() { return iconLib.baseUrl + this.fileName; }
    },
    {
      name: "icon-2048.png",
      fileName: "icon-2048.png",
      get url() { return iconLib.baseUrl + this.fileName; }
    }
  ],
  // 根据名字获取图标链接
  getIconUrl(name) {
    const item = this.list.find(item => item.name === name);
    return item ? item.url : "";
  },
  // 渲染所有图标到页面容器
  renderAll(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    container.innerHTML = "";
    this.list.forEach(icon => {
      const div = document.createElement("div");
      div.style.cssText = "display:inline-block;margin:8px;text-align:center;";
      const img = document.createElement("img");
      img.src = icon.url;
      img.style.width = "100px";
      img.style.cursor = "pointer";
      img.title = "点击复制链接";
      // 点击复制链接
      img.onclick = async () => {
        try {
          await navigator.clipboard.writeText(icon.url);
          alert(`已复制：${icon.url}`);
        } catch (err) {
          console.log("复制失败", err);
        }
      };
      const text = document.createElement("div");
      text.style.fontSize = "12px";
      text.textContent = icon.name;
      div.appendChild(img);
      div.appendChild(text);
      container.appendChild(div);
    })
  }
}
