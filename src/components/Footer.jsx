import { Button } from "react-bootstrap";

function Footer() {
    return (
        <div className="footer">
            <div className="link-section">
                <Button variant="link" className="link" onClick = {() => handleClick("home")}>About</Button>{' '}
                <Button variant="link" className="link" onClick = {() => handleClick("home")}>Contact</Button>{' '}
                <Button variant="link" className="link" onClick = {() => handleClick("home")}>Sources</Button>{' '}
                <Button variant="link" className="link" onClick = {() => handleClick("home")}>Social Media Icon</Button>{' '}
            </div>
            <div className="disclaimer">
                <h4>Disclaimer</h4>
                <p>All data and images presented on this website are intended for educational and informational purposes only. Data sources are attributed to their respective organizations, including environmental agencies, research institutions, and NGOs. While we strive for accuracy, we recommend consulting original sources for verification and additional details. Images are credited to their respective photographers and organizations where specified. If any copyrighted content is used without proper attribution, please contact us to resolve the matter.</p>
            </div>
        </div>
    )
}

export default Footer;