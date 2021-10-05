const images = [
    {
        id: 0,
        src: 'https://i.postimg.cc/nV7srqB5/1.jpg',
        type: 'portrait',
        isFeatured: true
    },
    {
        id: 0,
        src: 'https://i.postimg.cc/W4KrS3Sn/IMG-6685.jpg',
        type: 'modell',
        isFeatured: true
    },
    {
        id: 0,
        src: 'https://i.postimg.cc/nzDmWJPt/IMG-6958.jpg',
        type: 'modell',
        isFeatured: true
    },
    {
        id: 1,
        src: 'https://i.postimg.cc/G3BFQBYJ/11.jpg',
        type: 'gastro',
        isFeatured: false
    },
    {
        id: 2,
        src: 'https://i.postimg.cc/HW7MMqD6/18.jpg',
        type: 'landscape',
        isFeatured: true
    },
    {
        id: 2,
        src: 'https://i.postimg.cc/Y0NWpx7n/IMG-6688.jpg',
        type: 'modell',
        isFeatured: true
    },
    {
        id: 3,
        src: 'https://i.postimg.cc/Z5m64VQV/12.jpg',
        type: 'portrait',
        isFeatured: false
    },
    {
        id: 3,
        src: 'https://i.postimg.cc/Fsgymhsr/IMG-6932.jpg',
        type: 'portrait',
        isFeatured: false
    },
    {
        id: 4,
        src: 'https://i.postimg.cc/xdt8rRrJ/3.jpg',
        type: 'event',
        isFeatured: false
    },
    {
        id: 4,
        src: 'https://i.postimg.cc/KzHTqYNf/IMG-6751.jpg',
        type: 'modell',
        isFeatured: false
    },
    {
        id: 5,
        src: 'https://i.postimg.cc/fbLtRFfj/23.jpg',
        type: 'landscape',
        isFeatured: false
    },
    {
        id: 5,
        src: 'https://i.postimg.cc/44cvLzDh/IMG-5988.jpg',
        type: 'modell',
        isFeatured: false
    },
    {
        id: 5,
        src: 'https://i.postimg.cc/G34gc8Zc/IMG-5236.jpg',
        type: 'modell',
        isFeatured: false
    },
    {
        id: 6,
        src: 'https://i.postimg.cc/RCjcbMLr/14.jpg',
        type: 'portrait',
        isFeatured: false
    },
    {
        id: 6,
        src: 'https://i.postimg.cc/FHyjrNrF/IMG-6767.jpg',
        type: 'modell',
        isFeatured: false
    },
    {
        id: 7,
        src: 'https://i.postimg.cc/8zTfqsFY/20.jpg',
        type: 'landscape',
        isFeatured: true
    },
    {
        id: 7,
        src: 'https://i.postimg.cc/5Nw30wpM/IMG-6057.jpg',
        type: 'modell',
        isFeatured: true
    },
    {
        id: 8,
        src: 'https://i.postimg.cc/MGKRjXqB/15.jpg',
        type: 'portrait',
        isFeatured: false
    },
    {
        id: 8,
        src: 'https://i.postimg.cc/kGRbkdYm/IMG-5237.jpg',
        type: 'modell',
        isFeatured: false
    },
    {
        id: 9,
        src: 'https://i.postimg.cc/6qRGNvLk/16.jpg',
        type: 'portrait',
        isFeatured: false
    },
    {
        id: 9,
        src: 'https://i.postimg.cc/28BQtngZ/IMG-6776.jpg',
        type: 'modell',
        isFeatured: false
    },
    {
        id: 10,
        src: 'https://i.postimg.cc/HnGV3LDB/26.jpg',
        type: 'event',
        isFeatured: false
    },
    {
        id: 10,
        src: 'https://i.postimg.cc/SxkGzJtY/IMG-6964.jpg',
        type: 'modell',
        isFeatured: false
    },
    {
        id: 10,
        src: 'https://i.postimg.cc/02qYLzvX/IMG-6504.jpg',
        type: 'modell',
        isFeatured: false
    },
    {
        id: 10,
        src: 'https://i.postimg.cc/Fz0jY4yx/IMG-6635.jpg',
        type: 'modell',
        isFeatured: false
    },
    {
        id: 11,
        src: 'https://i.postimg.cc/QxGTJfjh/19.jpg',
        type: 'landscape',
        isFeatured: true
    },
    {
        id: 12,
        src: 'https://i.postimg.cc/Njv5RF7M/2.jpg',
        type: 'event',
        isFeatured: false
    },
    {
        id: 12,
        src: 'https://i.postimg.cc/KvFT0C7d/IMG-6972.jpg',
        type: 'modell',
        isFeatured: false
    },
    {
        id: 13,
        src: 'https://i.postimg.cc/bJ42MTb0/17.jpg',
        type: 'portrait',
        isFeatured: false
    },
    {
        id: 13,
        src: 'https://i.postimg.cc/mrVC9j10/IMG-6812.jpg',
        type: 'modell',
        isFeatured: false
    },
    {
        id: 13,
        src: 'https://i.postimg.cc/pLWDL3pD/IMG-6682.jpg',
        type: 'modell',
        isFeatured: false
    },
    {
        id: 14,
        src: 'https://i.postimg.cc/dVnZvvrV/21.jpg',
        type: 'landscape',
        isFeatured: true
    },
    {
        id: 14,
        src: 'https://i.postimg.cc/BtWK3wR1/IMG-5278.jpg',
        type: 'modell',
        isFeatured: true
    },
    {
        id: 14,
        src: 'https://i.postimg.cc/KvFT0C7d/IMG-6972.jpg',
        type: 'modell',
        isFeatured: true
    },
    {
        id: 15,
        src: 'https://i.postimg.cc/RV7nsw0f/22.jpg',
        type: 'landscape',
        isFeatured: true
    },
    {
        id: 15,
        src: 'https://i.postimg.cc/ZnzNtMGv/IMG-6626.jpg',
        type: 'modell',
        isFeatured: true
    },
    {
        id: 16,
        src: 'https://i.postimg.cc/tgXJmccG/4.jpg',
        type: 'event',
        isFeatured: false
    },
    {
        id: 16,
        src: 'https://i.postimg.cc/wxDJc9NX/IMG-6555.jpg',
        type: 'modell',
        isFeatured: false
    },
    {
        id: 16,
        src: 'https://i.postimg.cc/nLnqMgr4/IMG-6816.jpg',
        type: 'modell',
        isFeatured: false
    },
    {
        id: 17,
        src: 'https://i.postimg.cc/3W5JjfG6/10.jpg',
        type: 'gastro',
        isFeatured: false
    },
    {
        id: 17,
        src: 'https://i.postimg.cc/pdyzD8Qr/IMG-6879.jpg',
        type: 'modell',
        isFeatured: false
    },
    {
        id: 17,
        src: 'https://i.postimg.cc/tTYkCwvr/IMG-7010.jpg',
        type: 'modell',
        isFeatured: false
    },
    {
        id: 18,
        src: 'https://i.postimg.cc/DyL19txS/13.jpg',
        type: 'portrait',
        isFeatured: true
    },
    {
        id: 19,
        src: 'https://i.postimg.cc/xd4kJRsr/24.jpg',
        type: 'portrait',
        isFeatured: false
    },
    {
        id: 19,
        src: 'https://i.postimg.cc/9f2YZz8q/IMG-6589.jpg',
        type: 'modell',
        isFeatured: false
    },
    {
        id: 19,
        src: 'https://i.postimg.cc/PxgWfxwx/IMG-5316.jpg',
        type: 'modell',
        isFeatured: false
    },
    {
        id: 20,
        src: 'https://i.postimg.cc/QM47gsdy/9.jpg',
        type: 'portrait',
        isFeatured: true
    },
    {
        id: 20,
        src: 'https://i.postimg.cc/9fNPS1Xy/IMG-5739.jpg',
        type: 'modell',
        isFeatured: true
    },
    {
        id: 21,
        src: 'https://i.postimg.cc/zvhkTWrK/IMG-6532.jpg',
        type: 'modell',
        isFeatured: false
    },
    {
        id: 21,
        src: 'https://i.postimg.cc/1tV8pqT8/25.jpg',
        type: 'event',
        isFeatured: false
    },
    {
        id: 22,
        src: 'https://i.postimg.cc/nhKM2x01/5.jpg',
        type: 'gastro',
        isFeatured: true
    },
    {
        id: 22,
        src: 'https://i.postimg.cc/65sctHr0/IMG-7020.jpg',
        type: 'modell',
        isFeatured: true
    },
    {
        id: 23,
        src: 'https://i.postimg.cc/hjvjKdgC/6.jpg',
        type: 'event',
        isFeatured: false
    },
    {
        id: 24,
        src: 'https://i.postimg.cc/50rty22f/7.jpg',
        type: 'portrait',
        isFeatured: false
    },
    {
        id: 24,
        src: 'https://i.postimg.cc/Mp5m0qhP/IMG-5610.jpg',
        type: 'modell',
        isFeatured: false
    },
    {
        id: 25,
        src: 'https://i.postimg.cc/rw9xm5Xc/8.jpg',
        type: 'portrait',
        isFeatured: true
    },
    {
        id: 25,
        src: 'https://i.postimg.cc/jjjQZBTs/IMG-6531.jpg',
        type: 'modell',
        isFeatured: true
    },
    {
        id: 26,
        src: 'https://i.postimg.cc/zvn3Q1q5/27.jpg',
        type: 'event',
        isFeatured: false
    },
    {
        id: 26,
        src: 'https://i.postimg.cc/sgrT9n1X/IMG-5606.jpg',
        type: 'modell',
        isFeatured: false
    }
]

export default images;