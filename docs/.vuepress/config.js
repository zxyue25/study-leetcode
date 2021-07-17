module.exports = {
  title: "leetcode-javascript",
  description: "Using JavaScript to brush questions in leetcode",
  themeConfig: {
    nav: [],
    sidebar: [
      {
        title: "指南", // 必要的
        path: "/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [],
      },
      {
        title: "simple", // 必要的
        path: "/simple/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/simple/01.html","/simple/14.html","/simple/20.html", "/simple/35.html","/simple/58.html", "/simple/66.html","/simple/121.html","/simple/122.html","/simple/136.html"],
      },
    ],
  },
};
