import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/home.css";
import "./styles/footer.css";
import "./styles/weather.css";
import "./styles/forest.css";
import "./styles/ocean.css";
import "./styles/impacts.css";
import "./styles/future.css";
import "./styles/involved.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
