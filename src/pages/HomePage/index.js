import './style.scss';
import { useState, useEffect, useRef } from "react";

const options = ["components", "artboards", "pages", "templates"];

export default function HomePage() {
    const [option, setOption] = useState(options[0]);
    const selectionContainer = useRef(null);
    const btn = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();

        const button = btn.current
        button.style.animationName="popOut";
        button.addEventListener("animationend", () => {
            button.style.animationName="none"
        });
        setOption(e.target.innerText.toLowerCase())
    }

    const getTotalElementHeight = (e, includeMargin = true) => {
        const styles = window.getComputedStyle(e);
        const box = e.getBoundingClientRect();        // Get height of element including padding
        const margin = !includeMargin ? 0 : parseFloat(styles.marginTop) + parseFloat(styles.marginBottom) || 0;
        return box.height + margin;
    }

    useEffect(() => {
        if(selectionContainer.current === null) return

        // Calculate and set the height of the dropdown (".options-container") for animations once content fully loaded
        // This allows for a smooth expansion animation
        document.fonts.ready.then(() => {
            const container = selectionContainer.current
            const optionElements = Array.from(container.querySelectorAll(".option-item"))
            const maxHeight = optionElements.reduce((acc, curr) => acc + getTotalElementHeight(curr), 0);
            container.style.setProperty("--max-height", maxHeight)
        })
    }, [])

    return (
        <main id="homepage-container">
            <div>
                <header>
                    <h3>Default:</h3>
                </header>

                <div ref={selectionContainer} className="selection-container" tabIndex="0" role="button">
                    <button ref={btn} className="current-selection" tabIndex="0">{option}</button>

                    <div className="options-container">
                        {
                            options.map((opt, i) => {
                                return (
                                    opt !== option &&
                                    <a 
                                        key={i}
                                        role="button"
                                        className="option-item"
                                        tabIndex="0"
                                        href="/#"
                                        onClick={handleClick}
                                    >
                                        <span>{opt}</span>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}
