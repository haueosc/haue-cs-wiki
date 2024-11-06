import { defineConfig, type DefaultTheme } from 'vitepress'
import { forewordIcon, envIcon, grammarIcon, algoIcon, linuxIcon } from '../theme/icons/svg-path'

export const zh = defineConfig({
    lang: 'zh-Hans',
    title: "HAUE-CS-WIKI",
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
                dateStyle: 'short',
                timeStyle: 'medium'
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
        { text: 'Hello 算法', link: 'https://www.hello-algo.com/' },
        { text: 'Oi Wiki', link: 'https://oi-wiki.org/' },
        { text: 'HAUE OJ', link: 'http://www.haueacm.top/' },
    ]
}

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: forewordIcon + '序言',
            collapsed: false,
            items: [
                { text: '编写初衷', link: '/Foreword/intention', },
                { text: '入门须知', link: '/Foreword/prerequisites', },
            ]
        },
        {
            text: envIcon + '环境搭建',
            collapsed: false,
            items: [
                { text: '引入', link: '/Environment/introduction' },
                { text: '准备', link: '/Environment/pre-knowledges' },
                {
                    text: 'C/C++',
                    collapsed: true,
                    items: [
                        { text: '概述', link: '/Environment/c-cpp/overview' },
                        { text: 'Dev C++', link: '/Environment/c-cpp/bloodshed-devcpp' },
                        { text: '小熊猫Dev C++', link: '/Environment/c-cpp/red-panda' },
                        { text: 'CodeBlocks', link: '/Environment/c-cpp/codeblocks' },
                        { text: 'Visual Studio', link: '/Environment/c-cpp/visual-studio' },
                        { text: 'Visual Studio Code', link: '/Environment/c-cpp/vs-code' },
                        { text: 'Sublime Text', link: '/Environment/c-cpp/sublime-text' },
                        { text: 'Vim/Neovim', link: '/Environment/c-cpp/vim-neovim' },
                    ]
                },
                {
                    text: 'Java',
                    collapsed: true,
                    items: [
                        { text: '概述', link: '/Environment/java/overview' },
                        { text: 'Eclipse', link: '/Environment/java/eclipse' },
                        { text: 'IntelliJ IDEA', link: '/Environment/java/idea' },
                        { text: 'Visual Studio Code', link: '/Environment/java/vs-code' },
                        { text: 'Sublime Text', link: '/Environment/java/sublime-text' },
                        { text: 'Vim/Neovim', link: '/Environment/java/vim-neovim' },
                    ]
                },
                {
                    text: 'Python',
                    collapsed: true,
                    items: [
                        { text: '概述', link: '/Environment/python/overview' },
                        { text: 'Thonny', link: '/Environment/python/thonny' },
                        { text: 'PyCharm', link: '/Environment/python/pycharm' },
                        { text: 'Python IDLE', link: '/Environment/python/py-idle' },
                        { text: 'Visual Studio Code', link: '/Environment/python/vs-code' },
                        { text: 'Sublime Text', link: '/Environment/python/sublime-text' },
                        { text: 'Vim/Neovim', link: '/Environment/python/vim-neovim' },
                    ]
                },
            ]
        },
        {
            text: grammarIcon + '语法基础&基础数据结构',
            collapsed: false,
            items: [
                { text: '引入', link: '/Grammar-DataStructure/introduction', },
                {
                    text: 'C语言',
                    collapsed: true,
                    items: [
                        { text: '概述', link: '/Grammar-DataStructure/c/overview' },
                        { text: '数据类型', link: '/Grammar-DataStructure/c/data-type' },
                        { text: '运算符', link: '/Grammar-DataStructure/c/operator' },
                        { text: '流程控制', link: '/Grammar-DataStructure/c/control' },
                        { text: '函数', link: '/Grammar-DataStructure/c/function' },
                        { text: '数组', link: '/Grammar-DataStructure/c/array' },
                        { text: '指针', link: '/Grammar-DataStructure/c/pointer' },
                        { text: '结构体和链表', link: '/Grammar-DataStructure/c/struct' }
                    ]
                },
                {
                    text: 'C++',
                    collapsed: true,
                    items: [
                        { text: '概述', link: '/Grammar-DataStructure/cpp/overview' },
                        { text: '基础语法', link: '/Grammar-DataStructure/cpp/base' },
                        { text: '输入输出', link: '/Grammar-DataStructure/cpp/in-out' },
                        { text: '函数', link: '/Grammar-DataStructure/cpp/function' },
                        { text: '数组与字符串', link: '/Grammar-DataStructure/cpp/array-str' },
                        { text: '指针与引用', link: '/Grammar-DataStructure/cpp/pointer' },
                        { text: '内存管理', link: '/Grammar-DataStructure/cpp/memory' }
                    ]
                },
                {
                    text: 'Python',
                    collapsed: true,
                    items: [
                        { text: '概述', link: '/Grammar-DataStructure/python/overview', },
                    ]
                },
                {
                    text: 'Java',
                    collapsed: true,
                    items: [
                        { text: '概述', link: '/Grammar-DataStructure/java/overview', },
                        { text: '初步体验', link: '/Grammar-DataStructure/java/primer', },
                        { text: '注释', link: '/Grammar-DataStructure/java/annotation', },
                        { text: '变量与运算符', link: '/Grammar-DataStructure/java/var-opt', },
                        { text: '数组', link: '/Grammar-DataStructure/java/array', },
                        {
                            text: '面向对象',
                            collapsed: true,
                            items:
                                [
                                    { text: '概述&面向对象三特性', link: '/Grammar-DataStructure/java/OOP', },
                                    { text: '类与对象', link: '/Grammar-DataStructure/java/ClassAndObject', },
                                    { text: '关键字', link: '/Grammar-DataStructure/java/keyword', }
                                ]
                        },

                        { text: '多线程', link: '/Grammar-DataStructure/java/multithreading', },
                        { text: '线程池', link: '/Grammar-DataStructure/java/threadPoll', },
                    ]
                },
            ]
        },
        {
            text: algoIcon + '算法基础',
            collapsed: false,
            items: [
                { text: '引入', link: '/Algorithm/introduction' },
                { text: 'Hello Algo' },
                { text: 'Oi Wiki' },
            ]
        },
        {
            text: linuxIcon + 'Linux初阶',
            collapsed: false,
            items: [
                { text: '引入', link: '/Linux/introduction' },
                { text: '安装', link: '/Linux/install' },
                { text: '包管理器', link: '/Linux/package-mgr' },
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
