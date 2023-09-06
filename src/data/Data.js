import {
    CoinIcon,
    LanguageIcon,
    LogoutIcon,
    SettingIcon,
    TagIcon,
    PlaneIcon,
    FaceBookIcon,
    AppChatIcon,
    ShareFriendsIcon,
    TwitterIcon,
    LinkInIcon,
    RobotIcon,
    TeleGramIcon,
    LetterIcon,
    LineIcon,
    PiterrestIcon,
} from '@app/components/Icon';

export const MENU_ITEM = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English (England)',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng việt (Việt Nam)',
                },
                {
                    type: 'language',
                    code: 'kor',
                    title: '한국인 (Korea)',
                },
                {
                    type: 'language',
                    code: 'jap',
                    title: '日本 (Japan)',
                },
                {
                    type: 'language',
                    code: 'chi',
                    title: '中国人 (China)',
                },
                {
                    type: 'language',
                    code: 'fra',
                    title: 'Français (France)',
                },
            ],
        },
    },
    {
        icon: <i className="fa-regular fa-circle-question"></i>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <i className="fa-regular fa-keyboard"></i>,
        title: 'Keyboard shortcuts',
    },
];

export const USER_MENU = [
    {
        icon: <i className="fa-regular fa-user"></i>,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <CoinIcon />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <SettingIcon />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEM,
    {
        action: 'log-out',
        icon: <LogoutIcon />,
        title: 'Log out',
        separate: true,
    },
];

export const POST_DATA = [
    {
        id: '1',
        like: '540.7k',
        coment: '642.7k',
        share: '5407k',
        name: 'Khánh Băng',
        nickname: 'khanhbang130501',
        tick: true,
        desc: 'Lúc đi hết mình lúc về hết buồn',
        hashtag: ['#NónSơn', '#VĩnhLong'],
        music: 'Đi đu đưa đi - Bích Phương',
        videoSrc: 'video1',
    },
    {
        id: '2',
        like: '1405.7k',
        coment: '642.7k',
        share: '100k',
        name: 'Hữu Dinh',
        nickname: 'huudinh09',
        tick: true,
        desc: 'Mắt tím môi đỏ mặt xanh lè',
        hashtag: ['#NónSơn', '#CầnThơ'],
        music: 'Mắt tím môi đỏ - Bray',
        videoSrc: 'video2',
    },
    {
        id: '3',
        like: '760.7k',
        coment: '12.7k',
        share: '278k',
        name: 'Lập Nghiệp',
        nickname: 'NghiepKuto',
        tick: true,
        desc: 'Yêu đương khó quá thì chạy về khóc với anh',
        hashtag: ['#Mobifone', '#CầnThơ'],
        music: 'Chạy về khóc với anh - Erik',
        videoSrc: 'video3',
    },
    {
        id: '4',
        like: '169.7k',
        coment: '897.7k',
        share: '1298k',
        name: 'Hải Yến',
        nickname: 'nghiephy',
        tick: false,
        desc: 'Hay là đôi ta hẹn ước từ hư vô, gặp nhau chỉ khi vừa ngày giờ',
        hashtag: ['#NónSơn', '#VĩnhLong', '#NónSơn', '#VĩnhLong'],
        music: 'Hẹn ước từ hư vô - Mỹ Tâm',
        videoSrc: 'video4',
    },
    {
        id: '5',
        like: '587.7k',
        coment: '28.7k',
        share: '1233k',
        name: 'Châu Quốc Minh',
        nickname: 'minh.chau',
        tick: 'true',
        desc: 'Lúc đi hết mình lúc về hết buồn Lúc đi hết mình lúc về hết buồn Lúc đi hết mình lúc về hết buồn Lúc đi hết mình lúc về hết buồn',
        hashtag: [
            '#Mobifone',
            '#VĩnhLong',
            '#Mobifone',
            '#VĩnhLong',
            '#Mobifone',
            '#VĩnhLong',
            '#Mobifone',
            '#VĩnhLong',
        ],
        music: 'Đi đu đưa đi - Bích Phương',
        videoSrc: 'video5',
    },
];

export const ACTION_SHARE = [
    {
        icon: <TagIcon />,
        title: 'Embed',
        to: '/',
    },
    {
        icon: <PlaneIcon />,
        title: 'Send to friends',
        to: '/',
    },
    {
        icon: <FaceBookIcon />,
        title: 'Share to FaceBook',
        to: '/',
    },
    {
        icon: <AppChatIcon />,
        title: 'Share to WhatsApp',
        to: '/',
    },
    {
        icon: <ShareFriendsIcon />,
        title: 'Copy link',
        to: '/',
    },
    {
        icon: <TwitterIcon />,
        title: 'Share to Twitter',
        to: '/',
    },
    {
        icon: <LinkInIcon />,
        title: 'Share to LinkedIn',
        to: '/',
    },
    {
        icon: <RobotIcon />,
        title: 'Share to Reddit',
        to: '/',
    },
    {
        icon: <TeleGramIcon />,
        title: 'Share to Telegram',
        to: '/',
    },
    {
        icon: <LineIcon />,
        title: 'Share to Line',
        to: '/',
    },
    {
        icon: <PiterrestIcon />,
        title: 'Share to Piterrest',
        to: '/',
    },
    {
        icon: <LetterIcon />,
        title: 'Share to Email',
        to: '/',
    },
];
