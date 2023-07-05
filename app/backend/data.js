'use client'
import Heroimage1 from '../assets/img/banner/banner1.png';
import Heroimage2 from '../assets/img/banner/banner2.png';
import img1 from '../assets/img/images/banner1.svg';
import img2 from '../assets/img/images/banner2.svg';
import ourfeaturesimg from '../assets/img/images/ourfeaturesimg.png';


let Financialsector = {
    id: 1,
    title: `Your Finance and
        Technology partner
        For your next projects.`,
    desc: "It doesn't matter, what the challanges your team of finance and technology is facing, we serve multiple, with 100% project completion rate. Hire the best programmer and financial person for your next project.",
    btn: "Contact with us",
    img: img1,
    link: "https://www.facebook.com/KUSHFintech",
}


let financepage = {
    id: 1,
    title: `Your Finance
        In Right Hand`,
    desc: "Finance is crutial for any organization to grow. We help you to manage your finance in a better way.",
    btn: "Contact with us",
    img: img2,
    link: "https://www.facebook.com/KUSHFintech",
}

let techbannerpage = {
    id: 1,
    title: `We Work
        Your Ideas`,
    desc: "Technology is the new business model. It’s the new way of solving problems, and It’s the new way of thinking. It’s the new way of doing business.",
    btn: "Contact with us",
    img: Heroimage1,
    link: "https://www.facebook.com/KUSHFintech",
}

let technologybannerpage = {
    id: 1,
    title: `Our Company working on these technology`,
    desc: "Technology is the new business model. It’s the new way of solving problems, and It’s the new way of thinking. It’s the new way of doing business.",
    btn: "Contact with us",
    img: Heroimage1,
    link: "https://www.facebook.com/KUSHFintech",
}

let contactbannerpage = {
    id: 1,
    title: `Contact with us`,
    desc: "The best way to Join with our company",
    btn: "Contact with us",
    img: Heroimage1,
    link: "https://www.facebook.com/KUSHFintech",
}

let navlinks = [
    {
        id: 1,
        name: "Financial services",
        link: "/financial-services"
    },
    {
        id: 2,
        name: "Tech services",
        link: "/technical-services"
    },
    {
        id: 3,
        name: "Technology Used",
        link: "/technology"
    },
    {
        id: 4,
        name: "Signup Now",
        link: "/contact"
    }
]

let technologyused = [
    {
        id: 1,
        title: 'web development',
        description: 'Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.',
        link: "/Blog/web-development",
        category: "web-development",
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEBMVFhUVFxUVGBgXFxUYFRcVFRcWGBcVFxgYHyggGRonHRYXITEhJSorLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGi0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJ8BPgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQUGAgQHAwj/xABKEAACAQMCAgcEBAsDCwUAAAABAgMABBESIQUxBhMiQVFhcQcygZEUI6HBM0JSYnKCkrGy0fAVFtIkRFNUY3OTwtPh8TSDoqOz/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAECAwQFBgf/xAAyEQACAQIFAAgGAgIDAAAAAAAAAQIDEQQSITFRBUFhcYGRobETIkLB4fAj0RTxMlJi/9oADAMBAAIRAxEAPwCo423/AK+VYnHI/P1rI45fHPrS2zg+le8PLhnfGPIfdmkCTn+vhQG+fdRkkH5/186Qxadt9vWggZwfT1Ph91GCR9n/AIoxvvzHP4d3rQNCyTn591LA2Bz/ANqM5ztvz2pgDbPP+sZpjAk75/o0E49McvWkT+Vk0eh8fkKAD7vl86xPcD9nnT5+WTS1ZoGGc9x/8UufdQfAmsTvgUwDOcmmTmsTvTJp2GImg/ZUzddH3WGOVdTa4utPY0xqmcHEhbDsDjKgZ3rA9GLvl1QzqKYEkRbIlaEkrqyF6xGXV7u3PGDVar02r5lxvb3sWunJdREUqm7joxOMdWFkAijlYq8XZEg7sOdY/OXIrF+it4NuqB304WWFznWYzkK5wA4Kk8gRviksRSf1rzXtuHw58EKTWJqYPRq6GcooA8ZYeWI2LDt9pAssZLDIAbOdjjag6IXDSmMlAiStC8iMkiq65HuhtWMjG4GM4ODtQ8RSX1LzQ1SnwVw0VIPwWcSLEUAkZdYXXHsukvlzqwnZBY6sYG5r3v8AgTwwCaUgFpOrCq0b5HVpIH1K5yCsi4wCDnORkZn8WF0sy1267+XvsGSXBD0UUVYIRrGmaVIAp0qKACmaKRpoYjWBrI1jTGFFFFAwoooNACNFFFAya78YyP68KQJzgjfu9e6gcu/fakOXP0qkwjDHfx8e/wA6WramM4+/vPlnvrHUcbeO9AwbJGfDajTuDnzPj6/fSJOAfDw8aCDnPxpjESMHAx/L+sU/Dx/rFY58M0E/OmMAcf140elLNFAAT86R3pGl50DClnvrovRbhsFxa20zxpi1mm686VBeJY2mUyflLkKu/dmtziPDLeMGdYo9F7PYiAaFISNgskugY7IPaU48QKwvHwjNws7rT1t7fN3abmpYWTSd/wBtf8HLc066zcwwNxWC3C2bIJpQYo4AsigQOQJSRpcZ39QKr/Tq3hNrBNCkDfWyxvLBH1SahkrEY+ZIAJ1Y7vOpU8bnnGOVrMk7997dSX0891xyw2WLebb9+5VIuMzKQwK5EfU4KIwMXPSVYEHc538q2P7z3WsydYNRzk6U75mmO2MYMjsceBxy2q3W1wkNvwxVs7eY3XWrJriVpG0yoo0tzBAc778h4VKJw21tY7zSLRRHedWj3EXXKqtDGxiH42zEgb9xzVM8RTWjpc221tJx7WtfMujSm/r7/K/ic+HSm6C6QyBcaQBFEAq6QuFwvZGkAbeFecfSa6VtSyYO5yFT8aYznu5GRiceBxy2q5cE4VDex2M+iNVgmmS50oFRkjUzIzgDdSqhTnnqr1t7iA2H0nRZQtLcT46+BX7PaKRJpHZIGAPSm61JPKqWt7NW67ytstb5b9zRFU5PXN2+3b22KJJx+4bPbA1CQHCoBiVY1fGBtkRJ8vM1snpdd79tASxbaKIbly5Oy97lm9WNTPGOFws3CI9KoJ4YFkZQqs2t1VnY97YPM1OIsNxd3fD3tIIoII5SjpHpmjMenTKZOZ1ZzvzyOe+ZSrUcql8NNWb6tEpZbrnXjq8Lkac7tZv21/Y5+/HJy8b6lBiQxoAkYQIwYMmjGCCGbII7zXhf8WlmULIw0htQAVVCnQkYChQMKEjQADYYrpjRWkVrbm5SzWKSwjZhoX6Y07Ls6FRq3/KzzzRddGYLqCzSKONJY47OWZlUKWgnQh3YgdpgYmOT99RWNpRabhZbXsvw991y+dCX+PN6ZjktI12Q2tq94siQQJE3CjcqGhQxKzSArI6AbkKdzzxmovhX0ORL+S6W2eIG0i62CIRpGJcoZIwwypUsCfHT38qmukLq+R/Tp16tK3HqJ4a31ftrnL6K6TxWz/s5eHo0Fu8jG5ikLxK6yKZ4tEm/M6MaSc4DEVB+0q4UXctvHDBEkLYXqolRiGRCdZX3t+VW0sUqskorR5ne/VF29d13kJUcqu3xp3oqVKinWwoA1iaZrE0xmJooooJBRRRQAUjTNKgAoopGgZMk53/786bfZ8qSkk47vCsQc7VUYgbwpseW+42pA91LNADY+FI880qKZIKWaCaVABmlRSJoGFKilTA37LjM8McsUUhWOYYkXCkMMEcyMjYnlivSbjtyywo0pK25BhGF7BGMd2/Ic81GU6j8OF72Xl2W9tO7QsU5Wtcn7jprfuyO1wS0bF0PVwjSxVkJ2Tfssw3zzrR4v0guboKtxKXVMlVwiqCeZ0oAM+dRlFRjh6UWnGCTXCWnoSdSb3bJyy6YX0MSwxXDJGoIUBY8gEknDadXMnvrz4X0qvLZWWCYqHcyNlY3LOQAWJdSc7CoY1iTQ6FJ3+SOu+i17+RqpPTVknBx+5jWZElIW4z1owuH1Zz3dnOo+7jnXtwzpbe28Yigl0RgkhdETbtzOWUms+inRO44g5WEBUXGuVs6Fz3D8psdw+OK6hw/2SWSL9c80rd51BF+CqMj4k1hxWKwlJ5KiTfWrJ9179dttVpY0UqVWauvc5YOlt51AtuvPVBOqCaItkAwFDadXLvzms73pjfzRGGW4doyApGEDMo7mcKGYepOe+uicZ9kEDKTaTPG/csmGjPlkAMPXf0rlPGeFTWkrQ3CFXX5FTyZT3qfH17wRUsLWwmIf8cY3TvZxV787b9q9BVIVqa+Zu3eK/4jLMIxK+oRRrFHso0xr7q7AZxnmcmttekt2M4mYZgFscKg+oXlHy7snte9vzqIorc6cHo0vIpU5LZkzbdKr2N0eOYq0cIt1OiM6YFIIjwVwRkDc7+dY3/SW7mEiyzahMIxINEY1CIkp7qjGCTyx51DUUvg082bKr82V+eOde8fxJWtdkjdcbuJFhWSUsLcYhBC9gdnYHGT7q888q8OI30k8jSzNrkc5ZsAZIAHJQANgOQrVoqUYRjskvzq/XUTk3uFM0UjU0IVYVkaxpjQUUUUDCiig0AI0UUUDE1KmaVAEy1JjRSqoxDJrEmnWNSsNBSp0GgYqKKxosAGlRToGFY0UU0MKDRSoGFKnSNAxU4YWdlRBlnZUUeLMQAPmRSqT6Lgi8tWIOlZoGPoJFJPyqFRuMHJcP2JRtdXPojo9weOzt44IhsgAJ72b8Zz5k5NUjhPBWuZbgNJdLouJV1Ky9WArbLgnVn0GMYrpVc04tYNHPcddZyyRSzdYksR7S5HLsgnSSdwcfurx2Gk25a6vr699ete51sQklF227/snYkeAWPVcQ6tXnZRC7nrSdyWVQQPDfvGedP2scAW4smmA+ttwZFPf1Y/CKfLT2vVRWx0Ugma4aaS3eBBCkMYY5bSpHPOGzsOYFTXSl8WV0SM/UTDHiSjAD4k4pyqyhiIyT1Vvzt32YqUYuk9NNedvHzPmMUGsmjYcwRWFezOWmmroKKKKACiinQAGsKyNYmpEjGiiigYUUUUAFI0zSoAKTU6RoGKiiigZL0UUVWYRGsaypUyQUqDSoAKDSpGgYqKKdABSoopkgNKimiknA50BtqKpLhPAprh1VRjWSATtkqNR38hv41f+hPs5zpmvQQDusXInwLd6jy5+nI2bpAqLeWUMahVSK6cKoAAH1SjAH6Rrj4rpaMHkpavnq8OfY10sLKSzS0Xr+PFFc4P0BgjwZiZG8BkD58z9npVljsYoxpjjRB+aoHzxzrxvuP2kD6J7iGNsZ0u6hsHkcGtf+9/D/8AXLb/AIqfzrhVcRVqu85N/vGx0IUoQ/4r+/Pf1Lfwq/Ei6WPbHPzA/GFel/DI2OrbGzfjFdzyOwORzGNuec5Aqmf3q4eTte2w8+ujB/fW1H05tRt9PtT6yxf4qzuJdct9nGyrhzk5O+SdiTjnWjxS51fVp49o+ndVefpjavsb+2x4CaIffmvaDpFYD/PLb/jRf4qLBc2bzgVvOProkYnvxhv2hg1xvivBEfis1hbLjSAVbV/sUkYHbxYgfDPjXYx0jsv9btv+NF/irmXBrlD0gurhnQRFZAshdAjYWJBpbODkA/KtVDF1qL+SXhuvJ/7KKlCnU1a15WjKhxThM1uxWZCpHiPt9PPlWhXeuI3FlOhSWWBh/vI8jzBzkGuW9KejSQnVbypIhOwV0LDywD+7b05V38H0nCs8k9Jej7vyYK2HlT13XPHf/a8bFXpmika6qKRVgayNY0xoKKKKBhRRQaAEaKKKBialTNKgApGmaVAyYrGiioGIKKKRoGFY0UUDEaVFFADpU6VMkgpGrT0a6C3d4A6qI4jykkyAw8UUDLeuw86s7ex58bXi58DEQPnr+6slTH4anLLKav4v2TL44epJXSOXqudhXYvZ70HEKC5ulzIRqRCPc22LDx8B3c+fLX6GezmSC4Ml3oZY8FNJ1K57icgEAYzgjc4866LfSaY2I7gfnjb7a5HSfSSmvhUXddbXsvv5cmrC4V3zzW2y+7+3nwOBxsM9wFco9sPSKWzvbdoCusW8gOoahpkkHd/7dasnTm5S4w0cpVJHBAjbfTqCYbHLc7+YqG9rqTXF7FIsUjJ9HiXWEYrnXKWGQMAjVyz3Vw6Tbl8ysbJSzLQXA7K3uxfX3EYjLoZPcd491jw4UKwG/YxnlisnXgAQM1lcDZSR176gG5HBk3+GaOGLo4FcyDnPcsR+iHjU/YjVGwpCqYnR2KKo1iIyR9lRntYwPH4nPhVt9xySUdOPW/4M2vuj3+o33wlB/fNSF30d77TiA/XT/q1qSXViR2dIP50K8vPC4Bz4A8qiL24AYmMwleQAhTOMczqiA+Hn301ftKs/cW2KLo82P8m4iM7jJG4PeO2c1lPbdGlJU/TgR+SyMPmCRUBf2rHqB9XkwxDILasnqxh87A7kAL51o3bsjaZFZSO4qRyyMjt8qnl7xObRY2tujR5ScRX9VD/yGshw/o0f864gP1F/6Jqri7Xv1fDX/wBSs1uozjOrzGp8Y3z+MfGjL3hnXCLvwLobwK9k6q1ur5n0l8MqINIIBOWhx3it7pF7KrO2tp7iOa51QxSSLlocakUlc4jBxkDlg14+yeMfT3YDAW1QAb/jmJhz8u+r17SJwvDLvfnEV/aIX76i00yyLTV7HI24HK9lDee9rDa8DvDsoJ8yAN/HbwqBrs/QiBTwy2VwCrQjIPIh8kj7ahJfZRPLMxR0iiO4L5L7/mD7yOXnXdwPSkcjjXlZrr5XHeYqmFcWlBae344OY0V1O59jMoXMd3GzeDRMgP6wZsfKqF0h6OXNk+i5jK591hvG+PyWGx9OY8K6VHG0K7tTkm+NU/VIrnRnBXaImiiitRWFI0zSoAKTU6RoGKiiigYjRRRQMlzSooqBhCsaZrGgYUjTrGgYU6VM0AKrb7Neji3l19aMwwgO47mJOFQ+RIJPkpHfVSrr/sQC9RcfldYmf0dHZ+3VWLpGrKlhpSjvt5/unaasNBSqpMtHSSadHt0tnWPrGdDlVK8gV5g45HlUJPxa6VGb6fbsVz2VVdRI7hlOdTHTVwi28p1ARzoSVAJC6W1EZ27u+oHiHGVaCVPpJmMgAjXqtBXtA7kAZONv/NfPMTUyyl8zXGvZxdPfhPuPb4Glnpw/jTT0by3+p3u8rWkX1uOmz6leOFuzRRNIcsY0JPLLFQTsPPNePFj9XIvipx8q3oE0qq+AA+QqC47Hc/SIWhdeq0ussbLnUMHQytnskN5bj0rpRVtDht3bZHXidttjyH7q1uPXHU2k0m/Zgkf4hGP76lmsxq1GQj4r/Ko32qTLFwi5IxuiRjb/AEjoh+xjVl9UV2OQniiDhNvbIWBBdnYjCqWeTbbfI6xTsOXwqRtLyMoVeGZk0nGEDLjSBggHI93kcH0NVzjNqIIYozudKvuMdolQQFPcNJGe8EeNT3BmnliDxtIqEYUGNHXs5GkNjOcqd/SrKiUWUKblfw+5VON3ULv9QiKvcQCp9MaiCPPAqNyKuF7xXiMZZGjDDcArHqBHLIK5AyD9tQt5xW7K6ZWfScggoF8QRnSPPapkJdptcMme4mGo4LOi7HcACRsrrzuNAwPQV6dKLUk9Y0srkEL9ZCyEA/7QKFbc8tvKjolFqdFHNmbHPA6tNWSVIZRhjuDzPrXr0kheMMJNXaYcpZ2U9++tNOeyNtWRgU1oxb7lZxTxXpqT8lv2x/hokwfdB+JB/cBUitnUPZan+U3B5aYoExz5Aj/lqc9q0uOFz+ZhH/3R/wAqgfZbeQxz3aSHSzMMEjChUZl3PccuKmPbPheFsQch5YgCOR3L7H0WoS0Zqp6xLN7OrIfQ7VmGyQQgD87q1JPwzU5xq6eMroOAQc7A8sePrWPRCPTZwr4Io+QxWXG4g2jJ0jtDJ5ZI2z8RXH6Sc/8AHm6btLSzvbrXX3GyjbMkzCSWVVJaVds7YG+PDavXjXCIry3aCcZV157ZVsbOvgwNeU8qsrjUpBOFA3Yk6dx5VNVXgZSVabjJtK1rtuzzS5btsuNLMlVXyq65+x8p8W4e9vPJBJ70Tsh8Dg7MPIjBHka06uHtbC/2rcaeeIdX6XVJ/wAumqea+m0JupSjN7tJ+aODUSjJpCNFFFWkQrGmaVABSNM0qBoKKKxoGTFFFI1AxCpUUUDEaVFFABRTNKgaCrj7MOkS2lyVlIWKcKjMeSuCdDHy3YHw1Z7qp1Kq61GNam6ctn+/kshNwkpI+pbgtpOgBjtgE4Byd8n0qJihljLMlvEGIByiqpzpGVJz2jnIztXIeinT+6tQsRxNENgrk6lHgjjcDyIOO7Fdai6TAj8Hg/pbfPFeRxeBqYeSUrPez7vVHZo4iNRO3iv3Rk/nbNV2+gupJWZJokj2CjqSzgAd7GTB3yfdHOsLu6M6lZACh/FxkHG4znnWvHayJ+AmZfzX+tT5MdQ+DAVmUSxswu+i4nIa4mZmUYBEcAwM5wCUJxnzqne2G1Ftw1IlkkYPOiaWKBQAJJCdKqN8qPnV7/tSaP8ADQEr+XAdYx4mM4fPkoauYe3DjkU6WscLhsNK7jcMpCoqhlIBU9ttiO6pK9yLta5zu9v3nVGkOSo6sHxC75PnuBVw4Zxdre3jQwS4VCCyjUM5Zmzj3R2sEc+feKpdreQqgWSAuQWOpZSh38tLDuHyqTXpP2sjr48cgjxlR8DGMnzNWSbZQopFhl6bQ5GlGPug57OACD3at/lUL0l6QC5SNF6wBBv2uwScZymNztsdsZxitWbjET7u0pPi8FtI37RwSPLNYTS2zj8MF9LbT4/kMfGhA7m90eAGgmUQ7SkSHRsT1a6e3tuFbz2NanHLJVbWkqyg+8yhFx3AkKe/c/vqU6P3FrGw1TJICmgKY5BlusLd6EcjivDjVgkkmYZLZRjlr6snmclTsPD4VKz3IFeFetoMug8WX94qTHRm6O6orDxWWIjv/O8j8q97Xo1eLIhMD7Mp20tyIPJSc1JtEXGXBKdCbqKJzJKWZpXePQBkhewxkz46iBjyzyFWD2w8Rjm4fD9HbKSXAGO/KRSKBzOMbg/Cq70StWjn7assgDfVFGUgdlg+TnmNQAAzttmtbpdGPpccWlQWnRm05wSxVd8953PP8Y0Tgmk+C2lOSVuTvXALoIeqY7H3fXGCPs/fUhcXUwZgsBdQMg60XO3LB7858O6q/IgPMVvW/FpEGGAceZw3z76yWNRsrPMiswt1yN9iASO1sMZycADO2STgbb+l9xhbe3e4uwIlQEkZDE/kqPFjyA8aiuOdK2ggeVIQxUDYvgbkDuHnXDek3Sm6v3DXD9ld1jUaY0z3hcnJ8ySd63YDo6WI12inrz4LnyKateMHbrNHjPEnubiW4k96Vy+PAH3Vz3gKAPhWiadKvYRiopJbI5jd3dhRRSNMBUUUGgYjRRRQMVKiimhpExWNOkTVZhFSNOsaBhWVKgmgBUUUUyQGlRRQM9bT319fuNWq09pdqhJZZnypACovPx7TCqnbHDr611ax4XAANMab4/FFcPplaw8fsbME/ml3L7kFae1eEBdNpcORnO0e+TtyJ7q2m9rNyWzDwqUjuyzg/JY/vq6WPCfzQo8x91TMFki92T5/yrgvKdLUq/QjjF7eiV7m1FuilRGCHy2dRYlm5gdkbDxqv+1jokZ2jmNwkSxoynWNsls51ZHl3V0yZnHuqD8Rz9D3VQ/aXwOe7t1CRszKdRX6v5Bte49R/KhPUHscXl4Fj3Li3cHliRVJ9A5BrzbgNxvhA2OelkbHrpJqXuejd5GTm1mJ0BVAXUFGMbkZHcDzPM7nnUXLEYyglR1VQSS8bgFiDk9oA+AGwxgd/aqdyqxrScKnX3on/Yb+VazxMPeUj1GK2YrvCgrJpJbfBIwoAGOyc4/7ADYmt3+0ZAX0yvhcFe3ke8Cc76e/cd5wF2pjymnw3iHVSB9AYAglc45EEYPdyrfteKW4lUyJJ1WrLACMyad8pk+8PUj4d7N9J2AzDDruzrGcEA5O69rG3LmcDuIrzN32SzwxZBKsDEAVxjJwpB22Bz+M4BxtmSm7WI5C92/tItjMQ4cW5UKF6pNSHvOVJJHL07vGsuKcb4PcIo1oHA59XLGQ2NiTpAYZ5jIyCaoZaMsVa3jyBq7LSAkadZ/GOCF7sHJ8t68pGt9OowOAdsrKDg7EjtJ3AjfvNUuCz51o+wvVaahkeq7S4Ca2ibXb3UAJkj1HrFyYlO4Afv2BPqceA0eNXcc/EbWKBgUW5jAZCCCGeEhttsjdf1K8rTogjIrkSDUM6WK5XPoN9qnOiPQlVu4ZdT4jcPg6cdncd3jirXOWWz1KsqzXSsdRsrIxoFaR5CPxnxqPrgCvYxVsUYqgtIHpRF/ks3p94rhFd46cSabKY+IUfN1rgtel6EX8Mn/6+yOdin/JbsXuwNFFFdkoCsadbH0CX/RSfst/Kk5JbsdjWpGs5YypwwIPgQQfkawouMKVOsTTAKKKKZIlyaxooqswiNMUUjQAE0qZpUEkFI06VMArGsqRoGCtgg+G9de6O9LLGOKNXYLKqKGzgnIGM8yQDz5VyCt3hfB4bq4iWfUEZWVmX3wYtxjO24PfnlXK6XpZ6Obh+j0/o04WeWqlzp9/7O9WnHraTdJVPzH7xUhHco3usp9CDXO7L2aWSANE0wyM6hK6k+eFwPsrc/ug6/grucfpPr/jzXmbI62pfwa17ttjVIThfEE/B3St+nGo/g00xe8UT3lhk9HdP4tVFhX7CYuATWowPifnUa/SGdfw1qf1JIm/i014t0ztR+FDx/pLn/8AMtTFdG5cWUb+/HG/6SI37xUbJ0Xs2P8A6SD4Rhf4cVL2PGbWf8E+f1XH8QqRRAOVFxlUfoNZlxJ1bKwwRpkkwNPugAnAA7gNu6tOPoBbpqKO+XxnWI3UjOcaWXHPBzzGNiN6uzJWDJRcRz7ins/EjIVmCKqhSqx4yNRZuT4BOT3Y9a9OG9CIkkDOAVU6lAeQrr25o+e4Dv5qKvRSgR07hYjPotTfCbMIM43P7u4ffXlBDk/aalo1pNjRlinWQFFRGUr2q3ei0CZ3dvsUYP2stcbNX32tcR13AiHKMD9o9rP/AMsfq1Qq9d0XT+Hho9uvn+LHLrPNUk/Dy/NwoNFI10Cs2eGfhov94n8QrpVnwexMQZLWKWNUty8vXbBpRH1mrOT2S52U+R04yeWo5BBGxBBB8CNwa2v7RIBUJGAcZADgNjlkBsGseJoTqWyyt4tezX62XU5qK1LZb8K4e91cJNKscKa0gbXtvcS6XBz21CqR3jtg+FK56PcMZmaO9WNDJ2U1I2iMqCE7Taiwz7x7OxXOqqTLMWOSAMDAAGABzwPiSfjWNP8Ax6l7qpJdmj8det7t835H8RbZUXFOjnD23+nquXjA1dXkK4hJVhqzqHWP2wNA6ogkGnZcB4eMtJcKwZJFVDNAGWQLPzYPpBDJDhidDdZkEiqWaKbw9Rq3xX5L7WBTX/VFyfozYDGm/VsvMuxiXKxibQO0wCFurjw7dg9aN+Wa/wBIo4VupltiDCHIjIbUNO2MMSc/M1GUqthSlGV5Tb77c9nkEpJqyR//2Q==',
    }, {
        id: 2,
        title: 'App development',
        description: 'Mobile app development is the act or process by which a mobile app is developed for one or more mobile devices, which can include personal digital ...',
        link: "/Blog/app-development",
        category: "app-development",
        image: 'data:image/jpeg;base64,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',
    }, {
        id: 3,
        title: 'Graphics design',
        description: 'Graphic design exhibition - Discover the best of Italian design at ADI Design Museum. The collection hosts the best products and Italian design pieces. Organize your visit',
        image: 'https://i0.wp.com/www.fliptotech.ng/wp-content/uploads/2022/05/Flip-to-tech-1.jpg?fit=1200%2C720&ssl=1',
        link: "/Blog/Graphics-design",
        category: "Graphics-design",
    },
]

let techServices = [
    {
        id: 1,
        title: 'Web Development',
        description: 'We build scalable responsive websites',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&h=1200&q=80',
        link: "/Blog/web-development",
        category: "web-development",
    },
    {
        id: 2,
        title: 'Mobile App Development',
        description: 'A mobile app that will boost your business, know how we work to develop your next successful application.',
        image: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
        link: "/Blog/app-development",
        category: "app-development",
    },
    {
        id: 4,
        title: 'Cloud Computing',
        description: 'Keeping your online presence all the time is most important, and here we provide robust cloud services',
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80',
        link: "Blog/cloud-computing",
        category: "cloud-computing",
    }
]

let companyfooter = [
    {
        id: 1,
        title: "About us",
        link: "/financial-services"
    },
    {
        id: 2,
        title: "Our Teams",
        link: "/"
    },
    {
        id: 3,
        title: "Careers",
        link: "/"
    },
    {
        id: 4,
        title: "Terms & Conditions",
        link: "/"
    },
    {
        id: 5,
        title: "Contact",
        link: "/contact"
    }
]

let Financialdata = [
    {
        id: 1,
        title: 'Financial Projection',
        description: 'We help you project the expected revenues, expenses, and cash flows of a business over a forecast period.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        link: "/financial-services",
        category: "financial-services",
    }, {
        id: 2,
        title: 'Business Consulting',
        description: "Our Business Consulting Services are structured to address a company's end-to-end business needs.",
        image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        link: "/financial-services",
        category: "financial-services",
    }, {
        id: 3,
        title: 'Startup Establishment',
        description: 'When planning to expand your startup, choosing the right partner to tackle the linguistic aspect of the process is crucial.',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80',
        link: "/financial-services",
        category: "financial-services",
    },
]


let Ourfeaturesdata = [
    {
        id: 1,
        title: "Continuous Review",
        desc: "We continuosly takes feedback from our client and keep them updated about the project progress.",
        link: "/",
        img: ourfeaturesimg,
    },
    {
        id: 2,
        title: "Project Planning",
        desc: "Planning is most important than just starting executing.",
        link: "/",
        img: ourfeaturesimg,
    },
    {
        id: 3,
        title: "Adapt Changes",
        desc: "We take requirement changes seriously and adapt with it.",
        link: "/",
        img: ourfeaturesimg,
    }
]


export { Financialsector, navlinks, technologyused, techServices, Financialdata, financepage, techbannerpage, technologybannerpage, contactbannerpage, Ourfeaturesdata, companyfooter };