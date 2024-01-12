import './style.scss';

export default function HomePage() {
    return (
        <main id="homepage-container">
            <section className="hero">
                <h1>Your One-Stop Shop for Every Pet's Needs!</h1>

                <div className="btn-group">
                    <button className="btn-filled-dark"><span className="material-symbols-outlined">
                        shopping_cart
                        </span>Shop All Products
                    </button>

                    <button className="btn-outline-dark btn-hover-color"><span className="material-symbols-outlined">
                        calendar_month
                        </span> Book a Service
                    </button>
                </div>
            </section>
        </main>
    );
}
