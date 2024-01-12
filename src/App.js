import './App.css';
import { Header, Footer } from "./components"
import { HomePage } from "./pages"

export default function App() {
    return (
        <div className="App">
            <Header />
            <HomePage />
            <Footer />
        </div>
    );
}
