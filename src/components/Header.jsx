import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import Routes from '../routes';

function Header() {

    const navigate = useNavigate();

    const handleClick = (to) => {
        const route = Routes.find(route => route.type === to);
        if (route) {
            console.log(route.path);
            navigate(route.path);
        } else {
            alert("Path not found");
        }
    }

    return (
      <header style={{ marginTop: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/home" style={{
            margin: 0,
            fontSize: '2rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #ffcc00, #ff4d00, #00b300)',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
        }}>IndoSphere</a>
        <div>
            <Button variant="info" className="button-text" size="lg" onClick={() => handleClick("home")}>Home</Button>{' '}
            <Button variant="info" className="button-text" size="lg" onClick={() => handleClick("weather")}>Weather</Button>{' '}
            <Button variant="info" className="button-text" size="lg" onClick={() => handleClick("forest")}>Forests</Button>{' '}
            <Button variant="info" className="button-text" size="lg" onClick={() => handleClick("ocean")}>Oceans</Button>{' '}
            <Button variant="info" className="button-text" size="lg" onClick={() => handleClick("impacts")}>Causes & Impacts</Button>{' '}
            <Button variant="info" className="button-text" size="lg" onClick={() => handleClick("future")}>Future</Button>{' '}
            <Button variant="info" className="button-text" size="lg" onClick={() => handleClick("get-involved")}>Get Involved</Button>{' '}
        </div>
    </header>

    );
}

export default Header;