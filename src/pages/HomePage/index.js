import './style.scss';
import { useState } from "react";

const options = ["artboards", "pages", "templates"];

export default function HomePage() {
    const [option, setOption] = useState("Artboards");

    const handleClick = (e) => {
        e.preventDefault();

        console.log(e.target.value)
        //setOption()
    }

    return (
        <main id="homepage-container">
            <div className="select" tabIndex="0" role="button">
                <button tabIndex="0" onClick={handleClick}>Components</button>

                <div>
                    {
                        options.map((opt, i) => {
                            return (
                                <a key={i} role="button" tabIndex="0" href="#">
                                    <span>{opt}</span>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    );
}
