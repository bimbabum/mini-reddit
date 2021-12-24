import {rest} from 'msw'

export const handlers = [
    rest.get(`https://www.reddit.com/r/popular.json`, (req,res,ctx)=>{
        return res(ctx.json([
            {
                kind: "t3",
                data: {
                    approved_at_utc: null,
                    subreddit: "AskReddit",
                    selftext: "",
                    author_fullname: "t2_6fhd1vub",
                    saved: false,
                    mod_reason_title: null,
                    gilded: 0,
                    clicked: false,
                    title: "What movie do you HAVE to finish watching anytime you stumble across it while channel surfing?",
                    link_flair_richtext: [],
                    subreddit_name_prefixed: "r/AskReddit",
                    hidden: false,
                    pwls: 6,
                    link_flair_css_class: null,
                    downs: 0,
                    thumbnail_height: null,
                    top_awarded_type: null,
                    hide_score: false,
                    name: "t3_rmx8t2",
                    quarantine: false,
                    link_flair_text_color: "dark",
                    upvote_ratio: 0.89,
                    author_flair_background_color: null,
                    subreddit_type: "public",
                    ups: 22136,
                    total_awards_received: 37,
                    media_embed: {},
                    thumbnail_width: null,
                    author_flair_template_id: null,
                    is_original_content: false,
                    user_reports: [],
                    secure_media: null,
                    is_reddit_media_domain: false,
                    is_meta: false,
                    category: null,
                    secure_media_embed: {},
                    link_flair_text: null,
                    can_mod_post: false,
                    score: 22136,
                    approved_by: null,
                    is_created_from_ads_ui: false,
                    author_premium: false,
                    thumbnail: "self",
                    edited: false,
                    author_flair_css_class: null,
                    author_flair_richtext: [],
                    gildings: {
                        gid_1: 15
                    },
                    content_categories: null,
                    is_self: true,
                    mod_note: null,
                    created: 1640270991,
                    link_flair_type: "text",
                    wls: 6,
                    removed_by_category: null,
                    banned_by: null,
                    author_flair_type: "text",
                    domain: "self.AskReddit",
                    allow_live_comments: true,
                    selftext_html: null,
                    likes: null,
                    suggested_sort: null,
                    banned_at_utc: null,
                    view_count: null,
                    archived: false,
                    no_follow: false,
                    is_crosspostable: false,
                    pinned: false,
                    over_18: false,
                    all_awardings: [
                        {
                            giver_coin_reward: null,
                            subreddit_id: null,
                            is_new: false,
                            days_of_drip_extension: 0,
                            coin_price: 100,
                            id: "gid_1",
                            penny_donate: null,
                            award_sub_type: "GLOBAL",
                            coin_reward: 0,
                            icon_url: "https://www.redditstatic.com/gold/awards/icon/silver_512.png",
                            days_of_premium: 0,
                            tiers_by_required_awardings: null,
                            resized_icons: [
                                {
                                    url: "https://www.redditstatic.com/gold/awards/icon/silver_16.png",
                                    width: 16,
                                    height: 16
                                },
                                {
                                    url: "https://www.redditstatic.com/gold/awards/icon/silver_32.png",
                                    width: 32,
                                    height: 32
                                },
                                {
                                    url: "https://www.redditstatic.com/gold/awards/icon/silver_48.png",
                                    width: 48,
                                    height: 48
                                },
                                {
                                    url: "https://www.redditstatic.com/gold/awards/icon/silver_64.png",
                                    width: 64,
                                    height: 64
                                },
                                {
                                    url: "https://www.redditstatic.com/gold/awards/icon/silver_128.png",
                                    width: 128,
                                    height: 128
                                }
                            ],
                            icon_width: 512,
                            static_icon_width: 512,
                            start_date: null,
                            is_enabled: true,
                            awardings_required_to_grant_benefits: null,
                            description: "Shows the Silver Award... and that's it.",
                            end_date: null,
                            subreddit_coin_reward: 0,
                            count: 15,
                            static_icon_height: 512,
                            name: "Silver",
                            resized_static_icons: [
                                {
                                    url: "https://www.redditstatic.com/gold/awards/icon/silver_16.png",
                                    width: 16,
                                    height: 16
                                },
                                {
                                    url: "https://www.redditstatic.com/gold/awards/icon/silver_32.png",
                                    width: 32,
                                    height: 32
                                },
                                {
                                    url: "https://www.redditstatic.com/gold/awards/icon/silver_48.png",
                                    width: 48,
                                    height: 48
                                },
                                {
                                    url: "https://www.redditstatic.com/gold/awards/icon/silver_64.png",
                                    width: 64,
                                    height: 64
                                },
                                {
                                    url: "https://www.redditstatic.com/gold/awards/icon/silver_128.png",
                                    width: 128,
                                    height: 128
                                }
                            ],
                            icon_format: null,
                            icon_height: 512,
                            penny_price: null,
                            award_type: "global",
                            static_icon_url: "https://www.redditstatic.com/gold/awards/icon/silver_512.png"
                        },
                        {
                            giver_coin_reward: null,
                            subreddit_id: null,
                            is_new: false,
                            days_of_drip_extension: 0,
                            coin_price: 150,
                            id: "award_f44611f1-b89e-46dc-97fe-892280b13b82",
                            penny_donate: null,
                            award_sub_type: "GLOBAL",
                            coin_reward: 0,
                            icon_url: "https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png",
                            days_of_premium: 0,
                            tiers_by_required_awardings: null,
                            resized_icons: [
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=16&amp;height=16&amp;auto=webp&amp;s=a5662dfbdb402bf67866c050aa76c31c147c2f45",
                                    width: 16,
                                    height: 16
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=32&amp;height=32&amp;auto=webp&amp;s=a6882eb3f380e8e88009789f4d0072e17b8c59f1",
                                    width: 32,
                                    height: 32
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=48&amp;height=48&amp;auto=webp&amp;s=e50064b090879e8a0b55e433f6ee61d5cb5fbe1d",
                                    width: 48,
                                    height: 48
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=64&amp;height=64&amp;auto=webp&amp;s=8e5bb2e76683cb6b161830bcdd9642049d6adc11",
                                    width: 64,
                                    height: 64
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=128&amp;height=128&amp;auto=webp&amp;s=eda4a9246f95f42ee6940cc0ec65306fd20de878",
                                    width: 128,
                                    height: 128
                                }
                            ],
                            icon_width: 2048,
                            static_icon_width: 2048,
                            start_date: null,
                            is_enabled: true,
                            awardings_required_to_grant_benefits: null,
                            description: "Thank you stranger. Shows the award.",
                            end_date: null,
                            subreddit_coin_reward: 0,
                            count: 15,
                            static_icon_height: 2048,
                            name: "Helpful",
                            resized_static_icons: [
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=16&amp;height=16&amp;auto=webp&amp;s=a5662dfbdb402bf67866c050aa76c31c147c2f45",
                                    width: 16,
                                    height: 16
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=32&amp;height=32&amp;auto=webp&amp;s=a6882eb3f380e8e88009789f4d0072e17b8c59f1",
                                    width: 32,
                                    height: 32
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=48&amp;height=48&amp;auto=webp&amp;s=e50064b090879e8a0b55e433f6ee61d5cb5fbe1d",
                                    width: 48,
                                    height: 48
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=64&amp;height=64&amp;auto=webp&amp;s=8e5bb2e76683cb6b161830bcdd9642049d6adc11",
                                    width: 64,
                                    height: 64
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=128&amp;height=128&amp;auto=webp&amp;s=eda4a9246f95f42ee6940cc0ec65306fd20de878",
                                    width: 128,
                                    height: 128
                                }
                            ],
                            icon_format: null,
                            icon_height: 2048,
                            penny_price: null,
                            award_type: "global",
                            static_icon_url: "https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png"
                        },
                        {
                            giver_coin_reward: null,
                            subreddit_id: null,
                            is_new: false,
                            days_of_drip_extension: 0,
                            coin_price: 125,
                            id: "award_5f123e3d-4f48-42f4-9c11-e98b566d5897",
                            penny_donate: null,
                            award_sub_type: "GLOBAL",
                            coin_reward: 0,
                            icon_url: "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png",
                            days_of_premium: 0,
                            tiers_by_required_awardings: null,
                            resized_icons: [
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0",
                                    width: 16,
                                    height: 16
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef",
                                    width: 32,
                                    height: 32
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63",
                                    width: 48,
                                    height: 48
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb",
                                    width: 64,
                                    height: 64
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b",
                                    width: 128,
                                    height: 128
                                }
                            ],
                            icon_width: 2048,
                            static_icon_width: 2048,
                            start_date: null,
                            is_enabled: true,
                            awardings_required_to_grant_benefits: null,
                            description: "When you come across a feel-good thing.",
                            end_date: null,
                            subreddit_coin_reward: 0,
                            count: 7,
                            static_icon_height: 2048,
                            name: "Wholesome",
                            resized_static_icons: [
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0",
                                    width: 16,
                                    height: 16
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef",
                                    width: 32,
                                    height: 32
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63",
                                    width: 48,
                                    height: 48
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb",
                                    width: 64,
                                    height: 64
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b",
                                    width: 128,
                                    height: 128
                                }
                            ],
                            icon_format: null,
                            icon_height: 2048,
                            penny_price: null,
                            award_type: "global",
                            static_icon_url: "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png"
                        }
                    ],
                    awarders: [],
                    media_only: false,
                    can_gild: false,
                    spoiler: false,
                    locked: false,
                    author_flair_text: null,
                    treatment_tags: [],
                    visited: false,
                    removed_by: null,
                    num_reports: null,
                    distinguished: null,
                    subreddit_id: "t5_2qh1i",
                    author_is_blocked: false,
                    mod_reason_by: null,
                    removal_reason: null,
                    link_flair_background_color: "",
                    id: "rmx8t2",
                    is_robot_indexable: true,
                    report_reasons: null,
                    author: "Zilos99",
                    discussion_type: null,
                    num_comments: 9872,
                    send_replies: false,
                    whitelist_status: "all_ads",
                    contest_mode: false,
                    mod_reports: [],
                    author_patreon_flair: false,
                    author_flair_text_color: null,
                    permalink: "/r/AskReddit/comments/rmx8t2/what_movie_do_you_have_to_finish_watching_anytime/",
                    parent_whitelist_status: "all_ads",
                    stickied: false,
                    url: "https://www.reddit.com/r/AskReddit/comments/rmx8t2/what_movie_do_you_have_to_finish_watching_anytime/",
                    subreddit_subscribers: 34383841,
                    created_utc: 1640270991,
                    num_crossposts: 1,
                    media: null,
                    is_video: false
                }
            },
            {
                kind: "t3",
                data: {
                    approved_at_utc: null,
                    subreddit: "comedyheaven",
                    selftext: "",
                    author_fullname: "t2_2magtbkt",
                    saved: false,
                    mod_reason_title: null,
                    gilded: 0,
                    clicked: false,
                    title: "ham sniffer",
                    link_flair_richtext: [],
                    subreddit_name_prefixed: "r/comedyheaven",
                    hidden: false,
                    pwls: 7,
                    link_flair_css_class: null,
                    downs: 0,
                    thumbnail_height: 140,
                    top_awarded_type: null,
                    hide_score: false,
                    name: "t3_rn5ris",
                    quarantine: false,
                    link_flair_text_color: "dark",
                    upvote_ratio: 0.98,
                    author_flair_background_color: null,
                    subreddit_type: "public",
                    ups: 16676,
                    total_awards_received: 15,
                    media_embed: {},
                    thumbnail_width: 140,
                    author_flair_template_id: null,
                    is_original_content: false,
                    user_reports: [],
                    secure_media: null,
                    is_reddit_media_domain: true,
                    is_meta: false,
                    category: null,
                    secure_media_embed: {},
                    link_flair_text: null,
                    can_mod_post: false,
                    score: 16676,
                    approved_by: null,
                    is_created_from_ads_ui: false,
                    author_premium: false,
                    thumbnail: "https://b.thumbs.redditmedia.com/zUD91a28lQZAJgARi7aL8qseh0IpdZb8_jF-X1fxS6s.jpg",
                    edited: false,
                    author_flair_css_class: null,
                    author_flair_richtext: [],
                    gildings: {
                        gid_1: 3
                    },
                    post_hint: "image",
                    content_categories: null,
                    is_self: false,
                    mod_note: null,
                    created: 1640294708,
                    link_flair_type: "text",
                    wls: 7,
                    removed_by_category: null,
                    banned_by: null,
                    author_flair_type: "text",
                    domain: "i.redd.it",
                    allow_live_comments: true,
                    selftext_html: null,
                    likes: null,
                    suggested_sort: null,
                    banned_at_utc: null,
                    url_overridden_by_dest: "https://i.redd.it/xmdbxtcq0d781.png",
                    view_count: null,
                    archived: false,
                    no_follow: false,
                    is_crosspostable: false,
                    pinned: false,
                    over_18: false,
                    preview: {
                        images: [
                            {
                                source: {
                                    url: "https://preview.redd.it/xmdbxtcq0d781.png?auto=webp&amp;s=2c90faaedcf7bfa53717ee92e3194ab4f7a65837",
                                    width: 394,
                                    height: 635
                                },
                                resolutions: [
                                    {
                                        url: "https://preview.redd.it/xmdbxtcq0d781.png?width=108&amp;crop=smart&amp;auto=webp&amp;s=6c29a76ae5144b79ea1a394e7d9550a822c34fc9",
                                        width: 108,
                                        height: 174
                                    },
                                    {
                                        url: "https://preview.redd.it/xmdbxtcq0d781.png?width=216&amp;crop=smart&amp;auto=webp&amp;s=45fe5735de66f1c2e708396277686a678d81b574",
                                        width: 216,
                                        height: 348
                                    },
                                    {
                                        url: "https://preview.redd.it/xmdbxtcq0d781.png?width=320&amp;crop=smart&amp;auto=webp&amp;s=9774cdcb2e0998d1f581c50afb3e65e0df8e19e0",
                                        width: 320,
                                        height: 515
                                    }
                                ],
                                variants: {},
                                id: "eRZt-VvXmpGPbmqbknr-8c7183KaQp5JHnb-_OOEl4g"
                            }
                        ],
                        enabled: true
                    },
                    all_awardings: [
                        {
                            giver_coin_reward: null,
                            subreddit_id: null,
                            is_new: false,
                            days_of_drip_extension: 0,
                            coin_price: 100,
                            id: "gid_1",
                            penny_donate: null,
                            award_sub_type: "GLOBAL",
                            coin_reward: 0,
                            icon_url: "https://www.redditstatic.com/gold/awards/icon/silver_512.png",
                            days_of_premium: 0,
                            tiers_by_required_awardings: null,
                            resized_icons: [
                                {
                                    url: "https://www.redditstatic.com/gold/awards/icon/silver_16.png",
                                    width: 16,
                                    height: 16
                                },
                                {
                                    url: "https://www.redditstatic.com/gold/awards/icon/silver_32.png",
                                    width: 32,
                                    height: 32
                                },
                                {
                                    url: "https://www.redditstatic.com/gold/awards/icon/silver_48.png",
                                    width: 48,
                                    height: 48
                                },
                                {
                                    url: "https://www.redditstatic.com/gold/awards/icon/silver_64.png",
                                    width: 64,
                                    height: 64
                                },
                                {
                                    url: "https://www.redditstatic.com/gold/awards/icon/silver_128.png",
                                    width: 128,
                                    height: 128
                                }
                            ],
                            icon_width: 512,
                            static_icon_width: 512,
                            start_date: null,
                            is_enabled: true,
                            awardings_required_to_grant_benefits: null,
                            description: "Shows the Silver Award... and that's it.",
                            end_date: null,
                            subreddit_coin_reward: 0,
                            count: 3,
                            static_icon_height: 512,
                            name: "Silver",
                            resized_static_icons: [
                                {
                                    url: "https://www.redditstatic.com/gold/awards/icon/silver_16.png",
                                    width: 16,
                                    height: 16
                                },
                                {
                                    url: "https://www.redditstatic.com/gold/awards/icon/silver_32.png",
                                    width: 32,
                                    height: 32
                                },
                                {
                                    url: "https://www.redditstatic.com/gold/awards/icon/silver_48.png",
                                    width: 48,
                                    height: 48
                                },
                                {
                                    url: "https://www.redditstatic.com/gold/awards/icon/silver_64.png",
                                    width: 64,
                                    height: 64
                                },
                                {
                                    url: "https://www.redditstatic.com/gold/awards/icon/silver_128.png",
                                    width: 128,
                                    height: 128
                                }
                            ],
                            icon_format: null,
                            icon_height: 512,
                            penny_price: null,
                            award_type: "global",
                            static_icon_url: "https://www.redditstatic.com/gold/awards/icon/silver_512.png"
                        },
                        {
                            giver_coin_reward: null,
                            subreddit_id: null,
                            is_new: false,
                            days_of_drip_extension: 0,
                            coin_price: 150,
                            id: "award_f44611f1-b89e-46dc-97fe-892280b13b82",
                            penny_donate: null,
                            award_sub_type: "GLOBAL",
                            coin_reward: 0,
                            icon_url: "https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png",
                            days_of_premium: 0,
                            tiers_by_required_awardings: null,
                            resized_icons: [
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=16&amp;height=16&amp;auto=webp&amp;s=a5662dfbdb402bf67866c050aa76c31c147c2f45",
                                    width: 16,
                                    height: 16
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=32&amp;height=32&amp;auto=webp&amp;s=a6882eb3f380e8e88009789f4d0072e17b8c59f1",
                                    width: 32,
                                    height: 32
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=48&amp;height=48&amp;auto=webp&amp;s=e50064b090879e8a0b55e433f6ee61d5cb5fbe1d",
                                    width: 48,
                                    height: 48
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=64&amp;height=64&amp;auto=webp&amp;s=8e5bb2e76683cb6b161830bcdd9642049d6adc11",
                                    width: 64,
                                    height: 64
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=128&amp;height=128&amp;auto=webp&amp;s=eda4a9246f95f42ee6940cc0ec65306fd20de878",
                                    width: 128,
                                    height: 128
                                }
                            ],
                            icon_width: 2048,
                            static_icon_width: 2048,
                            start_date: null,
                            is_enabled: true,
                            awardings_required_to_grant_benefits: null,
                            description: "Thank you stranger. Shows the award.",
                            end_date: null,
                            subreddit_coin_reward: 0,
                            count: 5,
                            static_icon_height: 2048,
                            name: "Helpful",
                            resized_static_icons: [
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=16&amp;height=16&amp;auto=webp&amp;s=a5662dfbdb402bf67866c050aa76c31c147c2f45",
                                    width: 16,
                                    height: 16
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=32&amp;height=32&amp;auto=webp&amp;s=a6882eb3f380e8e88009789f4d0072e17b8c59f1",
                                    width: 32,
                                    height: 32
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=48&amp;height=48&amp;auto=webp&amp;s=e50064b090879e8a0b55e433f6ee61d5cb5fbe1d",
                                    width: 48,
                                    height: 48
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=64&amp;height=64&amp;auto=webp&amp;s=8e5bb2e76683cb6b161830bcdd9642049d6adc11",
                                    width: 64,
                                    height: 64
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=128&amp;height=128&amp;auto=webp&amp;s=eda4a9246f95f42ee6940cc0ec65306fd20de878",
                                    width: 128,
                                    height: 128
                                }
                            ],
                            icon_format: null,
                            icon_height: 2048,
                            penny_price: null,
                            award_type: "global",
                            static_icon_url: "https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png"
                        },
                        {
                            giver_coin_reward: null,
                            subreddit_id: null,
                            is_new: false,
                            days_of_drip_extension: 0,
                            coin_price: 125,
                            id: "award_5f123e3d-4f48-42f4-9c11-e98b566d5897",
                            penny_donate: null,
                            award_sub_type: "GLOBAL",
                            coin_reward: 0,
                            icon_url: "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png",
                            days_of_premium: 0,
                            tiers_by_required_awardings: null,
                            resized_icons: [
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0",
                                    width: 16,
                                    height: 16
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef",
                                    width: 32,
                                    height: 32
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63",
                                    width: 48,
                                    height: 48
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb",
                                    width: 64,
                                    height: 64
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b",
                                    width: 128,
                                    height: 128
                                }
                            ],
                            icon_width: 2048,
                            static_icon_width: 2048,
                            start_date: null,
                            is_enabled: true,
                            awardings_required_to_grant_benefits: null,
                            description: "When you come across a feel-good thing.",
                            end_date: null,
                            subreddit_coin_reward: 0,
                            count: 7,
                            static_icon_height: 2048,
                            name: "Wholesome",
                            resized_static_icons: [
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0",
                                    width: 16,
                                    height: 16
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef",
                                    width: 32,
                                    height: 32
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63",
                                    width: 48,
                                    height: 48
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb",
                                    width: 64,
                                    height: 64
                                },
                                {
                                    url: "https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b",
                                    width: 128,
                                    height: 128
                                }
                            ],
                            icon_format: null,
                            icon_height: 2048,
                            penny_price: null,
                            award_type: "global",
                            static_icon_url: "https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png"
                        }
                    ],
                    awarders: [],
                    media_only: false,
                    can_gild: false,
                    spoiler: false,
                    locked: false,
                    author_flair_text: null,
                    treatment_tags: [],
                    visited: false,
                    removed_by: null,
                    num_reports: null,
                    distinguished: null,
                    subreddit_id: "t5_h1pmw",
                    author_is_blocked: false,
                    mod_reason_by: null,
                    removal_reason: null,
                    link_flair_background_color: "",
                    id: "rn5ris",
                    is_robot_indexable: true,
                    report_reasons: null,
                    author: "Electronic_Egg",
                    discussion_type: null,
                    num_comments: 270,
                    send_replies: true,
                    whitelist_status: "some_ads",
                    contest_mode: false,
                    mod_reports: [],
                    author_patreon_flair: false,
                    author_flair_text_color: null,
                    permalink: "/r/comedyheaven/comments/rn5ris/ham_sniffer/",
                    parent_whitelist_status: "some_ads",
                    stickied: false,
                    url: "https://i.redd.it/xmdbxtcq0d781.png",
                    subreddit_subscribers: 1624475,
                    created_utc: 1640294708,
                    num_crossposts: 5,
                    media: null,
                    is_video: false
                }
            },
        ]))
    })
]