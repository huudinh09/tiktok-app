import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './ListAccount.module.scss';
import AccountItem from '@app/components/AccountItem/AccountItem';
import Popper from '../Popper/Popper';

const cx = classNames.bind(styles);
function ListAccount({ headerTitle, popperOver = false, numofFollowingAccount = '5' }) {
    const SuggestAccountList = [
        {
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
            bio: '✨ 1998 ✨',
            created_at: '2022-05-05 16:10:05',
            facebook_url: '',
            first_name: 'Đào Lê',
            followers_count: 0,
            followings_count: 0,
            full_name: 'Đào Lê Phương Hoa',
            id: 2,
            instagram_url: '',
            last_name: 'Phương Hoa',
            likes_count: 0,
            nickname: 'hoaahanassii',
            tick: true,
            twitter_url: '',
            updated_at: '2022-05-05 16:11:39',
            website_url: 'https://fullstack.edu.vn/',
            youtube_url: '',
        },
        {
            id: 1,
            first_name: '💃 Nightlife',
            last_name: 'Girl 💃',
            full_name: '💃 Nightlife Girl 💃',
            nickname: 'nightlifegirl',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/1/6273950c4889b.jpg',
            bio: 'Quẩy lên :)',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 15:34:44',
            updated_at: '2022-05-05 16:12:44',
        },
        {
            id: 3,
            first_name: 'Đinh',
            last_name: 'Trang Thảo',
            full_name: 'Đinh Trang Thảo',
            nickname: 'dinhtrangthao03',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/3/6273956f53b19.jpg',
            bio: 'IB FOR JOB ✉ IG: trangthao_2003\nFb: Đinh Trang Thảo',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 16:13:28',
            updated_at: '2022-05-05 16:14:23',
        },
        {
            id: 4,
            first_name: 'Le',
            last_name: 'Bong',
            full_name: 'Le Bong',
            nickname: 'lebong95',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
            bio: '“Cùng lan toả năng lượng tích cực nhé”\n💓\n✨duboshop✨\n📩lebongofficial@gmail.com',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 16:14:57',
            updated_at: '2022-05-05 16:15:53',
        },
        {
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
            bio: '✨ 1998 ✨',
            created_at: '2022-05-05 16:10:05',
            facebook_url: '',
            first_name: 'Đào Lê',
            followers_count: 0,
            followings_count: 0,
            full_name: 'datvilla94',
            id: 2,
            instagram_url: '',
            last_name: 'Phương Hoa',
            likes_count: 0,
            nickname: '🔥Đạt Villa🔥',
            tick: true,
            twitter_url: '',
            updated_at: '2022-05-05 16:11:39',
            website_url: 'https://fullstack.edu.vn/',
            youtube_url: '',
        },
        {
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
            bio: '✨ 1998 ✨',
            created_at: '2022-05-05 16:10:05',
            facebook_url: '',
            first_name: 'Đào Lê',
            followers_count: 0,
            followings_count: 0,
            full_name: 'Đào Lê Phương Hoa',
            id: 2,
            instagram_url: '',
            last_name: 'Phương Hoa',
            likes_count: 0,
            nickname: 'hoaahanassii',
            tick: true,
            twitter_url: '',
            updated_at: '2022-05-05 16:11:39',
            website_url: 'https://fullstack.edu.vn/',
            youtube_url: '',
        },
        {
            id: 1,
            first_name: '💃 Nightlife',
            last_name: 'Girl 💃',
            full_name: '💃 Nightlife Girl 💃',
            nickname: 'nightlifegirl',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/1/6273950c4889b.jpg',
            bio: 'Quẩy lên :)',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 15:34:44',
            updated_at: '2022-05-05 16:12:44',
        },
        {
            id: 3,
            first_name: 'Đinh',
            last_name: 'Trang Thảo',
            full_name: 'Đinh Trang Thảo',
            nickname: 'dinhtrangthao03',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/3/6273956f53b19.jpg',
            bio: 'IB FOR JOB ✉ IG: trangthao_2003\nFb: Đinh Trang Thảo',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 16:13:28',
            updated_at: '2022-05-05 16:14:23',
        },
        {
            id: 4,
            first_name: 'Le',
            last_name: 'Bong',
            full_name: 'Le Bong',
            nickname: 'lebong95',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
            bio: '“Cùng lan toả năng lượng tích cực nhé”\n💓\n✨duboshop✨\n📩lebongofficial@gmail.com',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 16:14:57',
            updated_at: '2022-05-05 16:15:53',
        },
        {
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
            bio: '✨ 1998 ✨',
            created_at: '2022-05-05 16:10:05',
            facebook_url: '',
            first_name: 'Đào Lê',
            followers_count: 0,
            followings_count: 0,
            full_name: 'datvilla94',
            id: 2,
            instagram_url: '',
            last_name: 'Phương Hoa',
            likes_count: 0,
            nickname: '🔥Đạt Villa🔥',
            tick: true,
            twitter_url: '',
            updated_at: '2022-05-05 16:11:39',
            website_url: 'https://fullstack.edu.vn/',
            youtube_url: '',
        },
        {
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
            bio: '✨ 1998 ✨',
            created_at: '2022-05-05 16:10:05',
            facebook_url: '',
            first_name: 'Đào Lê',
            followers_count: 0,
            followings_count: 0,
            full_name: 'Đào Lê Phương Hoa',
            id: 2,
            instagram_url: '',
            last_name: 'Phương Hoa',
            likes_count: 0,
            nickname: 'hoaahanassii',
            tick: true,
            twitter_url: '',
            updated_at: '2022-05-05 16:11:39',
            website_url: 'https://fullstack.edu.vn/',
            youtube_url: '',
        },
        {
            id: 1,
            first_name: '💃 Nightlife',
            last_name: 'Girl 💃',
            full_name: '💃 Nightlife Girl 💃',
            nickname: 'nightlifegirl',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/1/6273950c4889b.jpg',
            bio: 'Quẩy lên :)',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 15:34:44',
            updated_at: '2022-05-05 16:12:44',
        },
        {
            id: 3,
            first_name: 'Đinh',
            last_name: 'Trang Thảo',
            full_name: 'Đinh Trang Thảo',
            nickname: 'dinhtrangthao03',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/3/6273956f53b19.jpg',
            bio: 'IB FOR JOB ✉ IG: trangthao_2003\nFb: Đinh Trang Thảo',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 16:13:28',
            updated_at: '2022-05-05 16:14:23',
        },
        {
            id: 4,
            first_name: 'Le',
            last_name: 'Bong',
            full_name: 'Le Bong',
            nickname: 'lebong95',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
            bio: '“Cùng lan toả năng lượng tích cực nhé”\n💓\n✨duboshop✨\n📩lebongofficial@gmail.com',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 16:14:57',
            updated_at: '2022-05-05 16:15:53',
        },
        {
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
            bio: '✨ 1998 ✨',
            created_at: '2022-05-05 16:10:05',
            facebook_url: '',
            first_name: 'Đào Lê',
            followers_count: 0,
            followings_count: 0,
            full_name: 'datvilla94',
            id: 2,
            instagram_url: '',
            last_name: 'Phương Hoa',
            likes_count: 0,
            nickname: '🔥Đạt Villa🔥',
            tick: true,
            twitter_url: '',
            updated_at: '2022-05-05 16:11:39',
            website_url: 'https://fullstack.edu.vn/',
            youtube_url: '',
        },
        {
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
            bio: '✨ 1998 ✨',
            created_at: '2022-05-05 16:10:05',
            facebook_url: '',
            first_name: 'Đào Lê',
            followers_count: 0,
            followings_count: 0,
            full_name: 'Đào Lê Phương Hoa',
            id: 2,
            instagram_url: '',
            last_name: 'Phương Hoa',
            likes_count: 0,
            nickname: 'hoaahanassii',
            tick: true,
            twitter_url: '',
            updated_at: '2022-05-05 16:11:39',
            website_url: 'https://fullstack.edu.vn/',
            youtube_url: '',
        },
        {
            id: 1,
            first_name: '💃 Nightlife',
            last_name: 'Girl 💃',
            full_name: '💃 Nightlife Girl 💃',
            nickname: 'nightlifegirl',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/1/6273950c4889b.jpg',
            bio: 'Quẩy lên :)',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 15:34:44',
            updated_at: '2022-05-05 16:12:44',
        },
        {
            id: 3,
            first_name: 'Đinh',
            last_name: 'Trang Thảo',
            full_name: 'Đinh Trang Thảo',
            nickname: 'dinhtrangthao03',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/3/6273956f53b19.jpg',
            bio: 'IB FOR JOB ✉ IG: trangthao_2003\nFb: Đinh Trang Thảo',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 16:13:28',
            updated_at: '2022-05-05 16:14:23',
        },
        {
            id: 4,
            first_name: 'Le',
            last_name: 'Bong',
            full_name: 'Le Bong',
            nickname: 'lebong95',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
            bio: '“Cùng lan toả năng lượng tích cực nhé”\n💓\n✨duboshop✨\n📩lebongofficial@gmail.com',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 16:14:57',
            updated_at: '2022-05-05 16:15:53',
        },
        {
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
            bio: '✨ 1998 ✨',
            created_at: '2022-05-05 16:10:05',
            facebook_url: '',
            first_name: 'Đào Lê',
            followers_count: 0,
            followings_count: 0,
            full_name: 'datvilla94',
            id: 2,
            instagram_url: '',
            last_name: 'Phương Hoa',
            likes_count: 0,
            nickname: '🔥Đạt Villa🔥',
            tick: true,
            twitter_url: '',
            updated_at: '2022-05-05 16:11:39',
            website_url: 'https://fullstack.edu.vn/',
            youtube_url: '',
        },
    ];
    const FollowAccountList = [
        {
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
            bio: '✨ 1998 ✨',
            created_at: '2022-05-05 16:10:05',
            facebook_url: '',
            first_name: 'Đào Lê',
            followers_count: 0,
            followings_count: 0,
            full_name: 'vietphuongthoa98',
            id: 2,
            instagram_url: '',
            last_name: 'Phương Hoa',
            likes_count: 0,
            nickname: 'Việt Phương Thoa',
            tick: true,
            twitter_url: '',
            updated_at: '2022-05-05 16:11:39',
            website_url: 'https://fullstack.edu.vn/',
            youtube_url: '',
        },
        {
            id: 1,
            first_name: '💃 Nightlife',
            last_name: 'Girl 💃',
            full_name: '💃 Nightlife Girl 💃',
            nickname: 'nightlifegirl',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/1/6273950c4889b.jpg',
            bio: 'Quẩy lên :)',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 15:34:44',
            updated_at: '2022-05-05 16:12:44',
        },
        {
            id: 3,
            first_name: 'Đinh',
            last_name: 'Trang Thảo',
            full_name: 'Đinh Trang Thảo',
            nickname: 'dinhtrangthao03',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/3/6273956f53b19.jpg',
            bio: 'IB FOR JOB ✉ IG: trangthao_2003\nFb: Đinh Trang Thảo',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 16:13:28',
            updated_at: '2022-05-05 16:14:23',
        },
        {
            id: 4,
            first_name: 'Le',
            last_name: 'Bong',
            full_name: 'Le Bong',
            nickname: 'lebong95',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
            bio: '“Cùng lan toả năng lượng tích cực nhé”\n💓\n✨duboshop✨\n📩lebongofficial@gmail.com',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 16:14:57',
            updated_at: '2022-05-05 16:15:53',
        },
        {
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
            bio: '✨ 1998 ✨',
            created_at: '2022-05-05 16:10:05',
            facebook_url: '',
            first_name: 'Đào Lê',
            followers_count: 0,
            followings_count: 0,
            full_name: 'Đào Lê Phương Hoa',
            id: 2,
            instagram_url: '',
            last_name: 'Phương Hoa',
            likes_count: 0,
            nickname: 'hoaahanassii',
            tick: true,
            twitter_url: '',
            updated_at: '2022-05-05 16:11:39',
            website_url: 'https://fullstack.edu.vn/',
            youtube_url: '',
        },
        {
            id: 1,
            first_name: '💃 Nightlife',
            last_name: 'Girl 💃',
            full_name: '💃 Nightlife Girl 💃',
            nickname: 'nightlifegirl',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/1/6273950c4889b.jpg',
            bio: 'Quẩy lên :)',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 15:34:44',
            updated_at: '2022-05-05 16:12:44',
        },
        {
            id: 3,
            first_name: 'Đinh',
            last_name: 'Trang Thảo',
            full_name: 'Đinh Trang Thảo',
            nickname: 'dinhtrangthao03',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/3/6273956f53b19.jpg',
            bio: 'IB FOR JOB ✉ IG: trangthao_2003\nFb: Đinh Trang Thảo',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 16:13:28',
            updated_at: '2022-05-05 16:14:23',
        },
        {
            id: 4,
            first_name: 'Le',
            last_name: 'Bong',
            full_name: 'Le Bong',
            nickname: 'lebong95',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
            bio: '“Cùng lan toả năng lượng tích cực nhé”\n💓\n✨duboshop✨\n📩lebongofficial@gmail.com',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 16:14:57',
            updated_at: '2022-05-05 16:15:53',
        },
        {
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
            bio: '✨ 1998 ✨',
            created_at: '2022-05-05 16:10:05',
            facebook_url: '',
            first_name: 'Đào Lê',
            followers_count: 0,
            followings_count: 0,
            full_name: 'datvilla94',
            id: 2,
            instagram_url: '',
            last_name: 'Phương Hoa',
            likes_count: 0,
            nickname: '🔥Đạt Villa🔥',
            tick: true,
            twitter_url: '',
            updated_at: '2022-05-05 16:11:39',
            website_url: 'https://fullstack.edu.vn/',
            youtube_url: '',
        },
        {
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
            bio: '✨ 1998 ✨',
            created_at: '2022-05-05 16:10:05',
            facebook_url: '',
            first_name: 'Đào Lê',
            followers_count: 0,
            followings_count: 0,
            full_name: 'Đào Lê Phương Hoa',
            id: 2,
            instagram_url: '',
            last_name: 'Phương Hoa',
            likes_count: 0,
            nickname: 'hoaahanassii',
            tick: true,
            twitter_url: '',
            updated_at: '2022-05-05 16:11:39',
            website_url: 'https://fullstack.edu.vn/',
            youtube_url: '',
        },
        {
            id: 1,
            first_name: '💃 Nightlife',
            last_name: 'Girl 💃',
            full_name: '💃 Nightlife Girl 💃',
            nickname: 'nightlifegirl',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/1/6273950c4889b.jpg',
            bio: 'Quẩy lên :)',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 15:34:44',
            updated_at: '2022-05-05 16:12:44',
        },
        {
            id: 3,
            first_name: 'Đinh',
            last_name: 'Trang Thảo',
            full_name: 'Đinh Trang Thảo',
            nickname: 'dinhtrangthao03',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/3/6273956f53b19.jpg',
            bio: 'IB FOR JOB ✉ IG: trangthao_2003\nFb: Đinh Trang Thảo',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 16:13:28',
            updated_at: '2022-05-05 16:14:23',
        },
        {
            id: 4,
            first_name: 'Le',
            last_name: 'Bong',
            full_name: 'Le Bong',
            nickname: 'lebong95',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
            bio: '“Cùng lan toả năng lượng tích cực nhé”\n💓\n✨duboshop✨\n📩lebongofficial@gmail.com',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 16:14:57',
            updated_at: '2022-05-05 16:15:53',
        },
        {
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
            bio: '✨ 1998 ✨',
            created_at: '2022-05-05 16:10:05',
            facebook_url: '',
            first_name: 'Đào Lê',
            followers_count: 0,
            followings_count: 0,
            full_name: 'datvilla94',
            id: 2,
            instagram_url: '',
            last_name: 'Phương Hoa',
            likes_count: 0,
            nickname: '🔥Đạt Villa🔥',
            tick: true,
            twitter_url: '',
            updated_at: '2022-05-05 16:11:39',
            website_url: 'https://fullstack.edu.vn/',
            youtube_url: '',
        },
        {
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
            bio: '✨ 1998 ✨',
            created_at: '2022-05-05 16:10:05',
            facebook_url: '',
            first_name: 'Đào Lê',
            followers_count: 0,
            followings_count: 0,
            full_name: 'Đào Lê Phương Hoa',
            id: 2,
            instagram_url: '',
            last_name: 'Phương Hoa',
            likes_count: 0,
            nickname: 'hoaahanassii',
            tick: true,
            twitter_url: '',
            updated_at: '2022-05-05 16:11:39',
            website_url: 'https://fullstack.edu.vn/',
            youtube_url: '',
        },
        {
            id: 1,
            first_name: '💃 Nightlife',
            last_name: 'Girl 💃',
            full_name: '💃 Nightlife Girl 💃',
            nickname: 'nightlifegirl',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/1/6273950c4889b.jpg',
            bio: 'Quẩy lên :)',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 15:34:44',
            updated_at: '2022-05-05 16:12:44',
        },
        {
            id: 3,
            first_name: 'Đinh',
            last_name: 'Trang Thảo',
            full_name: 'Đinh Trang Thảo',
            nickname: 'dinhtrangthao03',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/3/6273956f53b19.jpg',
            bio: 'IB FOR JOB ✉ IG: trangthao_2003\nFb: Đinh Trang Thảo',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 16:13:28',
            updated_at: '2022-05-05 16:14:23',
        },
        {
            id: 4,
            first_name: 'Le',
            last_name: 'Bong',
            full_name: 'Le Bong',
            nickname: 'lebong95',
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
            bio: '“Cùng lan toả năng lượng tích cực nhé”\n💓\n✨duboshop✨\n📩lebongofficial@gmail.com',
            tick: false,
            followings_count: 0,
            followers_count: 0,
            likes_count: 0,
            website_url: 'https://fullstack.edu.vn/',
            facebook_url: '',
            youtube_url: '',
            twitter_url: '',
            instagram_url: '',
            created_at: '2022-05-05 16:14:57',
            updated_at: '2022-05-05 16:15:53',
        },
        {
            avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
            bio: '✨ 1998 ✨',
            created_at: '2022-05-05 16:10:05',
            facebook_url: '',
            first_name: 'Đào Lê',
            followers_count: 0,
            followings_count: 0,
            full_name: 'datvilla94',
            id: 2,
            instagram_url: '',
            last_name: 'Phương Hoa',
            likes_count: 0,
            nickname: '🔥Đạt Villa🔥',
            tick: true,
            twitter_url: '',
            updated_at: '2022-05-05 16:11:39',
            website_url: 'https://fullstack.edu.vn/',
            youtube_url: '',
        },
    ];

    const typeofAccoutList = headerTitle.slice(0, headerTitle.search(' '));

    const [currentIndexFollowingAccounts, setCurrentIndexFollowingAccounts] = useState(numofFollowingAccount);
    const [suggestAccountList, setSuggestAccountList] = useState(SuggestAccountList.slice(0, 5));
    const [followAccountList, setFollowAccountList] = useState(
        FollowAccountList.slice(0, currentIndexFollowingAccounts),
    );
    const [showButtonAllLess, setShowButtonAllLess] = useState(true);
    const [showButtonMoreLess, setShowButtonMoreLess] = useState(true);
    // console.log(followAccountList);
    let Comp = popperOver ? Popper : 'div';

    const accountList = typeofAccoutList === 'Following' ? followAccountList : suggestAccountList;

    const hanldeShowAllAccoutList = () => {
        setSuggestAccountList(SuggestAccountList);
        setShowButtonAllLess(false);
    };
    const hanldeShowLessAccoutList = () => {
        if (typeofAccoutList === 'Suggested') {
            setSuggestAccountList(SuggestAccountList.slice(0, numofFollowingAccount));
            setShowButtonAllLess(true);
        } else {
            setFollowAccountList(FollowAccountList.slice(0, numofFollowingAccount));
            setShowButtonMoreLess(true);
            setCurrentIndexFollowingAccounts(numofFollowingAccount);
        }
    };

    const hanldeShowMoreAccoutList = () => {
        setCurrentIndexFollowingAccounts((prev) => {
            const newIndex = parseInt(prev) + parseInt(numofFollowingAccount);
            // console.log(followAccountList.length);
            setFollowAccountList(FollowAccountList.slice(0, newIndex));
            if (newIndex >= FollowAccountList.length) {
                setShowButtonMoreLess(false);
            }
            return newIndex;
        });
    };
    return (
        <div className={cx('wrapper')}>
            <p className={cx('header-title')}>{headerTitle}</p>
            {accountList.map((item, index) => (
                <Comp key={index} data={item}>
                    <AccountItem
                        data={item}
                        classItem={{
                            wrapper: cx('wrapperSuggested'),
                            avatar: cx('avatarSuggested'),
                            info: cx('infoSuggested'),
                            label: cx('lableSuggested'),
                            nickname: cx('nicknameSugessted'),
                        }}
                    />
                </Comp>
            ))}
            {typeofAccoutList === 'Suggested' ? (
                showButtonAllLess ? (
                    <p className={cx('btn-option')} onClick={hanldeShowAllAccoutList}>
                        See all
                    </p>
                ) : (
                    <p className={cx('btn-option')} onClick={hanldeShowLessAccoutList}>
                        See less
                    </p>
                )
            ) : showButtonMoreLess ? (
                <p className={cx('btn-option')} onClick={hanldeShowMoreAccoutList}>
                    See more
                </p>
            ) : (
                <p className={cx('btn-option')} onClick={hanldeShowLessAccoutList}>
                    See less
                </p>
            )}
        </div>
    );
}
export default ListAccount;
