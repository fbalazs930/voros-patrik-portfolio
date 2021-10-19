//poDell === portrait + modell
const images = [
    {
        id: 0,
        src: 'https://i.postimg.cc/nV7srqB5/1.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 1,
        src: 'https://i.postimg.cc/W4KrS3Sn/IMG-6685.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 2,
        src: 'https://i.postimg.cc/nzDmWJPt/IMG-6958.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 3,
        src: 'https://i.postimg.cc/G3BFQBYJ/11.jpg',
        type: 'gastro',
        isFeatured: false
    },
    {
        id: 4,
        src: 'https://i.postimg.cc/HW7MMqD6/18.jpg',
        type: 'landscape',
        isFeatured: false
    },
    {
        id: 5,
        src: 'https://i.postimg.cc/cHzF5LKm/IMG-45341909.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 6,
        src: 'https://i.postimg.cc/Y0NWpx7n/IMG-6688.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 7,
        src: 'https://i.postimg.cc/LsyvS2DY/IMG-7079.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 8,
        src: 'https://i.postimg.cc/Z5m64VQV/12.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 9,
        src: 'https://i.postimg.cc/Fsgymhsr/IMG-6932.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 10,
        src: 'https://i.postimg.cc/rp8ZDbXS/IMG-45441909.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 11,
        src: 'https://i.postimg.cc/xdt8rRrJ/3.jpg',
        type: 'event',
        isFeatured: false
    },
    {
        id: 12,
        src: 'https://i.postimg.cc/KzHTqYNf/IMG-6751.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 13,
        src: 'https://i.postimg.cc/fbLtRFfj/23.jpg',
        type: 'landscape',
        isFeatured: false
    },
    {
        id: 14,
        src: 'https://i.postimg.cc/Kzj9NMYj/IMG-45851909.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 15,
        src: 'https://i.postimg.cc/44cvLzDh/IMG-5988.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 16,
        src: 'https://i.postimg.cc/G34gc8Zc/IMG-5236.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 17,
        src: 'https://i.postimg.cc/jq16vM3T/MG-6186.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 18,
        src: 'https://i.postimg.cc/RCjcbMLr/14.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 19,
        src: 'https://i.postimg.cc/hPXBjXbS/IMG-46471909.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 20,
        src: 'https://i.postimg.cc/FHyjrNrF/IMG-6767.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 21,
        src: 'https://i.postimg.cc/8zTfqsFY/20.jpg',
        type: 'landscape',
        isFeatured: false
    },
    {
        id: 22,
        src: 'https://i.postimg.cc/5Nw30wpM/IMG-6057.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 23,
        src: 'https://i.postimg.cc/T2HzZR8B/IMG-46561909.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 24,
        src: 'https://i.postimg.cc/MGKRjXqB/15.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 25,
        src: 'https://i.postimg.cc/CM9PdMgb/IMG-7067.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 26,
        src: 'https://i.postimg.cc/kGRbkdYm/IMG-5237.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 27,
        src: 'https://i.postimg.cc/6qRGNvLk/16.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 28,
        src: 'https://i.postimg.cc/28BQtngZ/IMG-6776.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 29,
        src: 'https://i.postimg.cc/cC6Vrz3D/IMG-46641909.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 30,
        src: 'https://i.postimg.cc/HnGV3LDB/26.jpg',
        type: 'event',
        isFeatured: false
    },
    {
        id: 31,
        src: 'https://i.postimg.cc/Y2L8ccW0/IMG-7104.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 32,
        src: 'https://i.postimg.cc/SxkGzJtY/IMG-6964.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 33,
        src: 'https://i.postimg.cc/wjYGpMw4/IMG-5220.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 34,
        src: 'https://i.postimg.cc/pXwgLqLZ/IMG-47041909.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 35,
        src: 'https://i.postimg.cc/02qYLzvX/IMG-6504.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 36,
        src: 'https://i.postimg.cc/Fz0jY4yx/IMG-6635.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 37,
        src: 'https://i.postimg.cc/xC6wjQXJ/IMG-47331909.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 38,
        src: 'https://i.postimg.cc/QxGTJfjh/19.jpg',
        type: 'landscape',
        isFeatured: false
    },
    {
        id: 39,
        src: 'https://i.postimg.cc/Njv5RF7M/2.jpg',
        type: 'event',
        isFeatured: false
    },
    {
        id: 40,
        src: 'https://i.postimg.cc/KvFT0C7d/IMG-6972.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 41,
        src: 'https://i.postimg.cc/bJ42MTb0/17.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 42,
        src: 'https://i.postimg.cc/kXbpzKvt/IMG-5207.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 43,
        src: 'https://i.postimg.cc/mrVC9j10/IMG-6812.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 44,
        src: 'https://i.postimg.cc/pLWDL3pD/IMG-6682.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 45,
        src: 'https://i.postimg.cc/bw14DkGj/IMG-47981909.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 46,
        src: 'https://i.postimg.cc/dVnZvvrV/21.jpg',
        type: 'landscape',
        isFeatured: false
    },
    {
        id: 47,
        src: 'https://i.postimg.cc/BtWK3wR1/IMG-5278.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 48,
        src: 'https://i.postimg.cc/KvFT0C7d/IMG-6972.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 49,
        src: 'https://i.postimg.cc/RV7nsw0f/22.jpg',
        type: 'landscape',
        isFeatured: false
    },
    {
        id: 50,
        src: 'https://i.postimg.cc/MGZtgv7J/IMG-7123.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 51,
        src: 'https://i.postimg.cc/ZnzNtMGv/IMG-6626.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 52,
        src: 'https://i.postimg.cc/tgXJmccG/4.jpg',
        type: 'event',
        isFeatured: false
    },
    {
        id: 53,
        src: 'https://i.postimg.cc/vmsF33RB/IMG-5164.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 54,
        src: 'https://i.postimg.cc/FHVDPjJx/IMG-7048.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 55,
        src: 'https://i.postimg.cc/wxDJc9NX/IMG-6555.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 56,
        src: 'https://i.postimg.cc/pr738BYP/IMG-48471909.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 57,
        src: 'https://i.postimg.cc/nLnqMgr4/IMG-6816.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 58,
        src: 'https://i.postimg.cc/3W5JjfG6/10.jpg',
        type: 'gastro',
        isFeatured: false
    },
    {
        id: 59,
        src: 'https://i.postimg.cc/pdyzD8Qr/IMG-6879.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 60,
        src: 'https://i.postimg.cc/pdx4Dr85/IMG-48581909.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 61,
        src: 'https://i.postimg.cc/tTYkCwvr/IMG-7010.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 62,
        src: 'https://i.postimg.cc/DyL19txS/13.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 63,
        src: 'https://i.postimg.cc/FsdMv2Nz/IMG-48631909.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 64,
        src: 'https://i.postimg.cc/QdYWxCL3/MG-6226.png',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 65,
        src: 'https://i.postimg.cc/GpQNzRJ7/IMG-4969.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 66,
        src: 'https://i.postimg.cc/xd4kJRsr/24.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 67,
        src: 'https://i.postimg.cc/VsThKDn8/IMG-5147.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 68,
        src: 'https://i.postimg.cc/9f2YZz8q/IMG-6589.jpg',
        type: 'poDell',
        isFeatured: true
    },
    {
        id: 69,
        src: 'https://i.postimg.cc/PxgWfxwx/IMG-5316.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 70,
        src: 'https://i.postimg.cc/QM47gsdy/9.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 71,
        src: 'https://i.postimg.cc/qRvF5F1k/IMG-5001.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 72,
        src: 'https://i.postimg.cc/9fNPS1Xy/IMG-5739.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 73,
        src: 'https://i.postimg.cc/zvhkTWrK/IMG-6532.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 74,
        src: 'https://i.postimg.cc/1tV8pqT8/25.jpg',
        type: 'event',
        isFeatured: false
    },
    {
        id: 75,
        src: 'https://i.postimg.cc/nhKM2x01/5.jpg',
        type: 'gastro',
        isFeatured: false
    },
    {
        id: 76,
        src: 'https://i.postimg.cc/65sctHr0/IMG-7020.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 77,
        src: 'https://i.postimg.cc/vTpSDZbB/IMG-5119.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 78,
        src: 'https://i.postimg.cc/kgNhXCZJ/IMG-5026.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 79,
        src: 'https://i.postimg.cc/hjvjKdgC/6.jpg',
        type: 'event',
        isFeatured: false
    },
    {
        id: 80,
        src: 'https://i.postimg.cc/YCCWHgsR/MG-6272.png',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 81,
        src: 'https://i.postimg.cc/50rty22f/7.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 82,
        src: 'https://i.postimg.cc/Mp5m0qhP/IMG-5610.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 83,
        src: 'https://i.postimg.cc/269tRxtn/IMG-5049.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 84,
        src: 'https://i.postimg.cc/rw9xm5Xc/8.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 85,
        src: 'https://i.postimg.cc/fy3rw94p/IMG-5085.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 86,
        src: 'https://i.postimg.cc/htWLRfq3/MG-6320.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 87,
        src: 'https://i.postimg.cc/SKf05CqG/IMG-5051.jpg',
        type: 'fest',
        isFeatured: false
    },
    {
        id: 88,
        src: 'https://i.postimg.cc/jjjQZBTs/IMG-6531.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 89,
        src: 'https://i.postimg.cc/zvn3Q1q5/27.jpg',
        type: 'event',
        isFeatured: false
    },
    {
        id: 90,
        src: 'https://i.postimg.cc/sgrT9n1X/IMG-5606.jpg',
        type: 'poDell',
        isFeatured: false
    },
    {
        id: 91,
        src: 'https://i.postimg.cc/mDZxGkgW/IMG-5062.jpg',
        type: 'fest',
        isFeatured: false
    }
]

export default images;