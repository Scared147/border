module.exports = {
    title: 'my blogs',
    description: 'YYY',
    base: '/',
    themeConfig: {
        nav: [
            { text: "首页", link: "/" },
            {
                text: "博客",
                items: [
                    { text: "掘金", link: "https://juejin.cn" },
                    { text: "Github", link: "https://github.com" }
                ]
            }
        ],
        sidebar: [
            {
                title: "欢迎学习",
                path: "/",
                collapsable: false,  // 是否折叠
                children: [{ title: "博客简介", path: "/introduct/" }],
            },
            {
                title: "累积",
                path: "/pages/test/1",
                collapsable: false,
                children: [
                    { title: "问题", path: "/pages/test/1" },
                    { title: "帮助", path: "/pages/test/2" },
                ]
            }
        ]
    },


}