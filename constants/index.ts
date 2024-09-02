
export const concatList = [
    { src: "/assets/logos/wechat.svg", alt: "微信" },
    { src: "/assets/logos/qq.svg", alt: "QQ" },
    { src: "/assets/logos/email.svg", alt: "邮箱" },
    { src: "/assets/logos/call.svg", alt: "电话" },
    { src: "/assets/logos/discord.svg", alt: "Discord" },
    { src: "/assets/logos/telegram.svg", alt: "Telegram" }
];

export const socialSnapList:SocialCardProps[] = [
    {
        socialKey:"gitHub",
        icon: "/assets/logos/github.svg",
        title: "GitHub",
        subtitle: "github.com",
        btnText: "Follow"
    },
    {
        socialKey:"doiuying",
        icon: "/assets/logos/douying.svg",
        title: "抖音",
        subtitle: "douyin.com/",
        btnText: "关注"
    },
    {
        socialKey: "tiktok",
        icon: "/assets/logos/tiktok.svg",
        title: "Tiktok",
        subtitle: "tiktok.com",
        btnText: "Follow"
    },
    {
        socialKey: "channels.weixin",
        icon: "/assets/logos/channels.weixin.svg",
        title: "视频号",
        subtitle: "channels.weixin.com",
        btnText: "关注",
        iconClassName: "text-white bg-[#EDA150] hover:bg-[#EDA150]/90",
        buttonClassName: "text-white bg-[#EDA150] hover:bg-[#EDA150]/90"
    },
    {
        socialKey: "xiaohongshu",
        icon: "/assets/logos/xiaohongshu.svg",
        title: "小红书",
        subtitle: "xiaohongshu.com",
        btnText: "关注",
        iconClassName: "text-white bg-[#FF2E4D] hover:bg-[#FF2E4D]/90",
        buttonClassName: "text-white bg-[#FF2E4D] hover:bg-[#FF2E4D]/90"
    },
    {
        socialKey: "zhihu",
        icon: "/assets/logos/zhihu.svg",
        title: "知乎",
        subtitle: "zhihu.com",
        btnText: "关注",
        iconClassName: "text-white bg-[#FF2E4D] hover:bg-[#FF2E4D]/90",
        buttonClassName: "text-white bg-[#FF2E4D] hover:bg-[#FF2E4D]/90"
    },
    {
        socialKey: "music.l63",
        icon: "/assets/logos/music.l63.svg",
        title: "网易云",
        subtitle: "music.l63.com",
        btnText: "关注",
        iconClassName: "text-white bg-[#FF2E4D] hover:bg-[#FF2E4D]/90",
        buttonClassName: "text-white bg-[#FF2E4D] hover:bg-[#FF2E4D]/90"
    },
    {
        socialKey: "bilibili",
        icon: "/assets/logos/bilibili.svg",
        title: "BiliBili",
        subtitle: "bilibili.com",
        btnText: "关注",
        iconClassName: "text-white bg-[#FF2E4D] hover:bg-[#FF2E4D]/90",
        buttonClassName: "text-white bg-[#FF2E4D] hover:bg-[#FF2E4D]/90"
    },
];


export const workList:WorkCardCardProps[] = [
    {
        icon: "/assets/logos/bonjour-logo.svg",
        name: "Bonjour",
        links: "https://bonjour-lfgyfxn1j-hunterhans-projects.vercel.app/",
        description: "科技创造者的数字名片."
    },
    {
        icon: "/assets/logos/epic-stack.svg",
        name: "The Epic Stack",
        links: "https://pixel-perfect-tailwind-exercise.vercel.app/#",
        description: "The XRMOD Engine is an XR construction system built on the OpenXR protocol. It supports not only VR (Virtual Reality), AR (Augmented Reality), and MR (Mixed Reality), but also traditional screen-based methods."
    },
    {
        icon: "/assets/logos/xrmod.svg",
        name: "XRMOD engine",
        links: "https://docs.phantomsxr.com/what-is-xrmod-engine",
        description: "The XRMOD Engine is an XR construction system built on the OpenXR protocol. It supports not only VR (Virtual Reality), AR (Augmented Reality), and MR (Mixed Reality), but also traditional screen-based methods."
    }
];