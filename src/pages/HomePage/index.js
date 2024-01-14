import './style.scss';

const products = [
    {
        category: "dogs",
        image: "https://ouch-cdn2.icons8.com/5ccPOQq69UKQcbmXfjvOScfFc9NXKG0Xu6DPNQ8b0f8/rs:fit:368:247/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTEw/LzFlODdiYzcyLTBl/OWEtNDFlNS05N2Ey/LTMzYTA4MDQ5MWU1/OC5wbmc.png",
        fill: "light",
        themeColor: "linear-gradient(45deg, #463631 0%, #976C5B 100%)",
        textColor: "var(--theme-white)",
        subcategories: ["Food & Treats", "Toys", "Beds & Furniture", "Outdoor Supplies", "Clothing"],
    },
    {
        category: "cats",
        image: "https://ouch-cdn2.icons8.com/RjiKOF2gGKiIVnIMFi0O1a4aU7DoHfhbkXr2JbUYZ3A/rs:fit:368:313/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzEy/LzliNDQ3MmVlLWZh/YjMtNDQwNy1iOWVh/LWMwOTdlYWNjNWE3/NS5wbmc.png",
        fill: "dark",
        themeColor: "linear-gradient(45deg, #F6AE6C 0%, #ECBD73 100%)",
        textColor: "var(--theme-brown)",
        subcategories: ["Food & Treats", "Toys", "Beds & Furniture"],
    },
    {
        category: "birds",
        image: "https://ouch-cdn2.icons8.com/DF-XRInvbvWS9fQSpWc_SegC3meXZK8BmE-PjrdrF3Q/rs:fit:368:396/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzI3/LzQyYWIyNzliLWJj/ZDgtNGEyMC04MGRi/LTk3MzU4YWFmNTVk/OS5wbmc.png",
        fill: "dark",
        themeColor: "linear-gradient(45deg, #EFEFEF 0%, #F2F2F2 100%)",
        textColor: "var(--theme-brown)",
        subcategories: ["Food & Treats", "Toys", "Furniture"],
    },
    {
        category: "fish",
        image: "https://ouch-cdn2.icons8.com/41Pv7w9rcbn7II_gB2vwvVCQRYE5mvpca1ZbsvMujR0/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjE5/LzRlZjE1YTgyLTI3/NjYtNDlkNC1hMGE3/LWY4ZjRmNzhjM2M5/NS5wbmc.png",
        fill: "light",
        themeColor: "linear-gradient(45deg, #1E4782 0%, #709DDF 100%)",
        textColor: "var(--theme-white)",
        subcategories: ["Food", "Aquariums", "Rocks & Decorations"],
    },
        ];


const services = [
    {
        category: "grooming",
        title: "Dog Grooming",
        subtitle: "Tail-wagging transformations are our specialty.",
        prices: [
            {service: "Coat Care", price: 80},
            {service: "Nail Care", price: 16},
            {service: "Doggie Deluxe Special", price: 160},
        ],
        image: "https://ouch-cdn2.icons8.com/T11rfGmMKgcStJyAFKNgtOfE79cadabx0DVMnvzA9Pk/rs:fit:368:313/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDQx/LzFlYWU4MWY3LWQ1/ZjYtNDM2Ny1hZjM5/LWVmNTFmMGM5Njk4/MS5wbmc.png",
        themeColor: "linear-gradient(45deg, #45828C 0%, #A7D4D8 100%)",
    },
    {
        category: "boarding",
        title: "Dog Boarding",
        subtitle: "Where fun and care never take a day off.",
        prices: [
            {service: "Doggie Daycare", price: 80},
            {service: "Short Term Boarding", price: 80},
        ],
        image: "https://ouch-cdn2.icons8.com/F5Ea1suZtMYimKDkJr0CJLO_1bju6-bTyT1EuDKEg8s/rs:fit:368:254/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjcx/LzVjMzE4NWM0LWZh/NTMtNGQ1OS05ZTM2/LTZjYzBhNGU3ODg0/NC5wbmc.png",
        themeColor: "linear-gradient(45deg, #EDDAA9 0%, #B87D93 100%)",
    },
];

export default function HomePage() {
    return (
        <main id="homepage-container">
            <section className="hero">
                <h1>Your <span>One-Stop</span> Shop for Every Pet's Needs!</h1>

                <div className="btn-group">
                    <button className="btn-filled-dark">
                        <svg id="shopping-cart-icon" className="icon" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                        </svg>

                        <span>Shop All Products</span>
                    </button>

                    <button className="btn-outline-dark btn-hover-color">
                        <svg id="calendar-cart-icon" className="icon" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                            <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/>
                        </svg>

                        <span>Book a Service</span>
                    </button>
                </div>
            </section>

            <section id="products" className="page-section">
                <h2>Shop by Pet</h2>

                <ul className="shop-pets">
                    {
                        products.map((product, i) => {
                            const {category, image, fill, themeColor, textColor, subcategories} = product;
                            const subList = subcategories.map((cat, i) => {
                                return (
                                    <li key={cat + i}>
                                        <a href="#">{cat}</a>
                                    </li>
                                )
                            });
                            return (
                                <li key={i} className={`card-large ${fill}`}id="sup-dog" style={{
                                    background: themeColor,
                                }}>
                                    <div className="card-image">
                                        <img src={image} alt={category + "products"}/>
                                    </div>

                                    <ul>
                                        {category}
                                        {subList}

                                        <button className={`${fill}`}>
                                            <span>Shop All</span>

                                            <svg id="arrow-icon" className="icon" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                                            </svg>
                                        </button>
                                    </ul>
                                </li>
                            );
                        })
                    }
                </ul>
            </section>

            <section id="services-section">
                <h2>Our Services</h2>

                <ul className="services">
                    {
                        services.map((service, i) => {
                            const {category, title, subtitle, prices, image, themeColor} = service;
                            const priceList = prices.map((item, i) => {
                                const {service, price} = item;
                                return (
                                    <li key={i}>
                                        <a href="#">{service}</a>
                                        <span>$ {price}</span>
                                    </li>
                                )
                            })
                            return (
                                <li key={i} className="card-large card-dark card-wide" id={`serv-${category}`}>
                                    <div className="card-image" style={{
                                        background: themeColor
                                    }}>
                                        <img src={image} alt={category} />
                                    </div>

                                    <ul>
                                        <span className="title">{title}</span>

                                        <span className="subtitle">{subtitle}</span>

                                        {priceList}

                                        <button className="btn-outline-dark btn-hover-color">
                                            <svg id="calendar-cart-icon" className="icon" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/>
                                            </svg>

                                            <span>Book Now</span>
                                        </button>
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>

            <section id="locate">

                <div>
                    <h2>Location &amp; Hours</h2>
                    <p>Our knowledgeable and friendly staff is always ready to assist you in making the best choices for your furry, feathered, or finned friends.</p>
                    <div className="btn-group">
                        <button className="btn-filled-dark"><span className="material-symbols-outlined">
        pin_drop
        </span>Find a Store</button>
                        <button className="btn-outline-dark btn-hover-color"><span className="material-symbols-outlined">
        contact_support
        </span> Contact Us</button>
                    </div>
                </div>
            </section>
        </main>
    );
}
