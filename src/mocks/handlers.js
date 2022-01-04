import {rest} from 'msw'

export const handlers = [
    rest.get(`https://www.reddit.com/r/popular.json`, (req,res,ctx)=>{
        return res(ctx.json({
            data: {
                children: [
                    {
                        data: {
                            title: "What movie do you HAVE to finish watching anytime you stumble across it while channel surfing?",
                            author: 'henry',
                            ups: 10000,
                            num_comments: 99,
                            img: 'link here',
                            link: 'link here',}
                        
                    },
                    {
                        data: {
                            title: "ham sniffer",
                            author: 'pikachu',
                            ups: 99000,
                            num_comments: 9987,
                            img: 'link here',
                            link: 'link here',}
                    },
                ]}
            }
        ))
    }),

    rest.get(`https://www.reddit.com/r/askreddit.json`, (req,res,ctx)=>{
        return res(ctx.json({
            data: {
                children: [
                    {
                        data: {
                            title: "What's something you find weird that is 100% normal?",
                            author: 't2_axo14s49',
                            ups: 11302,
                            num_comments: 11302,
                            img: 'link here',
                            link: 'link here'
                        }

                    },
                    {
                        data: {
                            title: "What's more fucked up than people think?",
                            author: 't3_rn9wn0',
                            ups: 3376,
                            num_comments: 112,
                            img: 'link here',
                            link: 'link here',
                        }
                    },
                ]
            }
        }
        ))
    }),

    rest.get(`https://www.reddit.com/search.json`, async(req,res,ctx)=>{
        return res(ctx.json({
            data: {
                children: {
                    data: {
                        title: "Best customer to date! She let me pick out whatever halloween candy I wanted …",
                        author: 'kateeee182',
                        ups: 78,
                        num_comments: 20,
                        img: 'link here',
                        link: 'link here',
                    }
                }
            }
        }))
    })
]
