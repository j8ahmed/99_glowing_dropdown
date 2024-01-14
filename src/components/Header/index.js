import './style.scss';

const menuItems = [
    {
        name: "products",
        categories: [
            {
                category: "dogs",
                image: "https://ouch-cdn2.icons8.com/qPvaAv2gxwM3l0z7dl_eoh9v6h58HlzewBUfEgX6AZE/rs:fit:368:386/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTIv/ZmM4YjNlYmItMDNj/Ni00NGM3LTliNGUt/YTUyOWUzOGU4NTE2/LnBuZw.png",
                themeColor: "linear-gradient(45deg, #463631 0%, #976C5B 100%)",
            },
            {
                category: "cats",
                image: "https://ouch-cdn2.icons8.com/US6gJ6fHUOJqruLB7KDe5zEa82iDSp7OdO-bv-aLtvU/rs:fit:368:310/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjU5/LzdmOWU1ZjU0LTMx/ZDQtNDgwNS1iM2E2/LWM3NzgyMTcyNzJh/NC5wbmc.png",
                themeColor: "linear-gradient(45deg, #F6AE6C 0%, #ECBD73 100%)",
            },
            {
                category: "birds",
                image: "https://ouch-cdn2.icons8.com/6OkSfKKP476ZKzGJoDlXfXuWzX-vjlDRotIVMTz3lmo/rs:fit:368:396/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzA1/LzRkNmI1YjIwLTQy/YWQtNDVlMC05ZDI5/LTA0MTkyMWZkNWE1/NS5wbmc.png",
                themeColor: "linear-gradient(45deg, #EFEFEF 0%, #F2F2F2 100%)",
            },
            {
                category: "fish",
                image: "https://ouch-cdn2.icons8.com/41Pv7w9rcbn7II_gB2vwvVCQRYE5mvpca1ZbsvMujR0/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjE5/LzRlZjE1YTgyLTI3/NjYtNDlkNC1hMGE3/LWY4ZjRmNzhjM2M5/NS5wbmc.png",
                themeColor: "linear-gradient(45deg, #1E4782 0%, #709DDF 100%)",
            },
        ]
    },
    {
        name: "services",
        categories: [
            {
                category: "grooming",
                image: "https://ouch-cdn2.icons8.com/T11rfGmMKgcStJyAFKNgtOfE79cadabx0DVMnvzA9Pk/rs:fit:368:313/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDQx/LzFlYWU4MWY3LWQ1/ZjYtNDM2Ny1hZjM5/LWVmNTFmMGM5Njk4/MS5wbmc.png",
                themeColor: "linear-gradient(45deg, #45828C 0%, #A7D4D8 100%)",
            },
            {
                category: "boarding",
                image: "https://ouch-cdn2.icons8.com/F5Ea1suZtMYimKDkJr0CJLO_1bju6-bTyT1EuDKEg8s/rs:fit:368:254/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjcx/LzVjMzE4NWM0LWZh/NTMtNGQ1OS05ZTM2/LTZjYzBhNGU3ODg0/NC5wbmc.png",
                themeColor: "linear-gradient(45deg, #EDDAA9 0%, #B87D93 100%)",
            },
        ]
    },
    {
        name: "Location & Hours",
        categories: [
        ]
    },
    {
        name: "About Us",
        categories: [
        ]
    },
]

export default function Header() {
    return (
        <header id="main-header">
            <h4 id="notice-header">Get free delivery on orders over $80</h4>

            <nav className="main-menu-nav">
                <div id="logo">
                    <span>Pet Store</span>
                </div>

                <ul className="navigation-menu">
                {
                    menuItems.map((item, i) => {
                        const subMenu = item.categories.map((product, i) => {
                            const {category, image, themeColor} = product;
                            return (
                                <li key={i} className="sub-nav-item" id={`sup-${category}"`}>
                                    <div className="card-image" style={{background: themeColor}}><img src={image} alt={category} /></div>

                                    <a href="#empty">
                                        <span>{category}</span>

                                        <span>
                                            {item.name === "services" ? "More Info" : "Shop All"}
                                            <svg id="arrow-icon" className="icon" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                            )
                        })
                        return (
                            <li key={item.name + i}>
                                <a href="#empty">{item.name}</a>

                                {
                                    !!subMenu.length
                                    &&
                                    <ul className="subnav">{subMenu}</ul>
                                }
                            </li>
                        )
                    })
                }
                </ul>

                <div id="utility">
                    <svg id="search-icon" className="icon" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                    </svg>

                    <svg id="shopping-cart-icon" className="icon" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                    </svg>
                </div>
            </nav>
        </header>
    );
}
