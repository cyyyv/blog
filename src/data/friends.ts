// 友链数据存储
export interface Friend {
    title: string;
    imgurl: string;
    desc: string;
    siteurl: string;
}

export const friends: Friend[] = [
    {
        title: "小白のBlog",
        imgurl: "https://r2cfimg.showby.top/2024/09/19/66eb06a884fb9.jpg",
        desc: "Ciallo～(∠・ω< )⌒★",
        siteurl: "https://www.showby.top/",
    },
    {
        title: "kiyukie'Blog",
        imgurl: "https://cdn.nodeimage.com/i/Q6NDWWd1h3I18zBNTwxFJABm5iKuGkuW.webp",
        desc: "剑气纵横三万里，一剑光寒十九洲",
        siteurl: "https://blog.030666.xyz/",
    },
    {
        title: "MIFENG BLOG",
        imgurl: "https://cdn.mfawa.top/image/logo.svg",
        desc: "路漫漫其修远兮，吾将上下而求索",
        siteurl: "https://blog.imbee.top/",
    },
    {
        title: "AcoFork Blog",
        imgurl: "https://q2.qlogo.cn/headimg_dl?dst_uin=2726730791&spec=0",
        desc: "Protect What You Love",
        siteurl: "https://2x.nz",
    },
    {
        title: "星辰の笔记",
        imgurl: "https://blog.strarry.top/avatar.jpg",
        desc: "Code | Think | Share | Repeat",
        siteurl: "https://blog.strarry.top/",
    },
];