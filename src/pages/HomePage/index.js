import './style.scss';

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
        </main>
    );
}
