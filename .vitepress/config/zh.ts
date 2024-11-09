import { defineConfig, type DefaultTheme } from 'vitepress'
import { forewordIcon, school, tools, backend, frontend, chatgpt, learn_408, hard_worker, run_bag, acm } from '../theme/icons/svg-path'

export const zh = defineConfig({
    lang: 'zh-Hans',
    title: "HAUE CS WIKI",
    description: "河工计算机学习指南",
    themeConfig: {
        //顶部导航栏选项
        nav: nav(),

        //侧边导航栏选项
        sidebar: sidebar(),

        editLink: {
            pattern: 'https://github.com/haueosc/haue-cs-wiki/edit/dev-vitepress/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航',
            level: 'deep'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }
        },
        

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        { text: '首页', link: '/Main' },
        { text: '名人墙', link: '/Wall' },
        { text: 'HAUE OJ', link: 'http://www.haueacm.top/' },
    ]
}

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '前言',
            collapsed: true,
            items: [
                { text: '入门须知', link: '/前言/入门须知', },
            ]
        },
        {
            text: forewordIcon + '新手入门',
            collapsed: true,
            items: [
                { text: '河工计算机学院专业介绍', link: '/新手入门/河工计算机学院专业介绍', },
                { text: '小白如何选择笔记本电脑', link: '/新手入门/小白如何选择笔记本电脑', },
                { text: '转专业二三事', link: '/新手入门/转专业二三事', },
            ]
        },
        {
            text: acm + '竞赛经验',
            collapsed: true,
            items: [
                { text: '竞赛介绍', link: '/竞赛经验/竞赛介绍', },
                { text: '算法竞赛学习指南', link: '/竞赛经验/算法竞赛学习指南', },
                { text: 'CTF竞赛学习指南', link: '/竞赛经验/CTF竞赛学习指南', },
            ]
        },
        {
            text: tools + '开发工具',
            collapsed: true,
            items: [
                { text: '科学上网', link: '/开发工具/科学上网', },
                { text: 'JetBrains全家桶', link: '/开发工具/JetBrains全家桶', },
            ]
        },
        {
            text: school + '学科课程',
            collapsed: true,
            items: [
                {
                    text: '语言基础',
                    collapsed: true,
                    items: [
                        { text: 'C语言基础', link: '/学科课程/语言基础/C语言基础' },
                        { text: 'C++语法基础', link: '/学科课程/语言基础/C++语法基础' },
                        { text: 'Java语法基础', link: '/学科课程/语言基础/Java语法基础' },
                        { text: 'Python语法基础', link: '/学科课程/语言基础/Python语法基础' },
                    ]
                },
                {
                    text: '计算机基础',
                    collapsed: true,
                    items: [
                        { text: '数据结构', link: '/学科课程/计算机基础/数据结构' },
                        { text: '计算机组成原理', link: '/学科课程/计算机基础/计算机组成原理' },
                        { text: '计算机网络', link: '/学科课程/计算机基础/计算机网络' },
                        { text: '操作系统', link: '/学科课程/计算机基础/操作系统' },
                    ]
                },
                {
                    text: '专业课程',
                    collapsed: true,
                    items: [
                        { text: '数据库原理', link: '/学科课程/专业课程/数据库原理' },
                        { text: '编译原理', link: '/学科课程/专业课程/编译原理' },
                    ]
                },
            ]
        },
        {
            text: backend + '后端开发',
            collapsed: true,
            items: [
                {
                    text: 'Java技术栈',
                    collapsed: true,
                    items: [
                        { text: '预防针', link: '/后端开发/Java技术栈/预防针' },
                        { text: '基础阶段', link: '/后端开发/Java技术栈/基础阶段' },
                        { text: '提高阶段', link: '/后端开发/Java技术栈/提高阶段' },
                        { text: '进阶阶段', link: '/后端开发/Java技术栈/进阶阶段' },
                    ]
                },
                {
                    text: 'Python技术栈',
                    collapsed: true,
                    items: [
                        { text: 'Django框架', link: '/后端开发/Python技术栈/Django框架' },
                        { text: 'Flask框架', link: '/后端开发/Python技术栈/Flask框架' },
                    ]
                }
            ]
        },
        {
            text: frontend + '前端开发',
            collapsed: true,
            items: [
                {
                    text: '前端开发基础',
                    collapsed: true,
                    items: [
                        { text: 'HTML基础', link: '/前端开发/前端开发基础/HTML基础' },
                        { text: 'CSS基础', link: '/前端开发/前端开发基础/CSS基础' },
                        { text: 'JavaScript基础', link: '/前端开发/前端开发基础/JavaScript基础' }
                    ]
                },
                {
                    text: 'Vue技术栈',
                    collapsed: true,
                    items: [
                        { text: 'Vue基础', link: '/前端开发/Vue技术栈/Vue基础' },
                    ]
                },
                {
                    text: 'React技术栈',
                    collapsed: true,
                    items: [
                        { text: 'React基础', link: '/前端开发/React技术栈/React基础' },
                    ]
                }
            ]
        },
        {
            text: chatgpt + '人工智能',
            collapsed: true,
            items: [
                { text: '机器学习', link: '/人工智能/机器学习', },
            ]
        },
        {
            text: learn_408 + '考研经验',
            collapsed: true,
            items: [
                { text: '24届考研上岸211', link: '/工作经验/预防针', },
            ]
        },
        {
            text: hard_worker + '工作经验',
            collapsed: true,
            items: [
                { text: '预防针', link: '/工作经验/预防针', },
                { text: '找工作指南', link: '/工作经验/找工作指南', },
                { text: '简历技巧', link: '/工作经验/简历技巧', },
                { text: '面试技巧', link: '/工作经验/面试技巧', },
                { text: '薪资拆解', link: '/工作经验/薪资拆解', },
                {
                    text: '案例分享',
                    collapsed: true,
                    items: [
                        { text: '二本如何进大厂', link: '/工作经验/案例分享/二本如何进大厂' },
                    ]
                },
            ]
        },
        {
            text: run_bag + '考公留学',
            collapsed: true,
            items: [
                { text: '考公指南', link: '/考公留学/考公指南', },
                { text: '润学指南', link: '/考公留学/润学指南', },
            ]
        },
    ]
}

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
    root: {
        translations: {
            button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
            },
            modal: {
                displayDetails: '显示详细信息',
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                }
            }
        }
    }
}
