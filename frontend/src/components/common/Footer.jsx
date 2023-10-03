import { useState } from "react";
import Logo from "../../assets/images/logo-ecom-crea.png";
import ThankYouPopup from "../pages/Thank-you-newsletter";
import { BASE_URL } from '../../config';

function Footer() {
    const [showThankYouPopup, setShowThankYouPopup] = useState(false);
    async function handleSubmit(event) {
        event.preventDefault();
      
        const formData = new FormData(event.target);
        const searchParams = new URLSearchParams();
      
        for (const [key, value] of formData.entries()) {
          searchParams.append(key, value);
        }
      
        try {
            const response = await fetch(`${BASE_URL}/api/newsletter`, {
                method: "POST",
                body: searchParams,
                headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                },
            });
      
            const data = await response.json();
            console.log(data);

            // Reset the form
            event.target.reset();

            // Show thank you popup
            setShowThankYouPopup(true);

        } catch (error) {
            console.error("Error:", error);
        }
    }

    const handleCloseThankYouPopup = () => {
        setShowThankYouPopup(false);
      };

    return (
        <div className="footer">
            {showThankYouPopup && (
                <ThankYouPopup onClose={handleCloseThankYouPopup} />
            )}
            <div className="footer__part-1">
                <div className="media">
                    <img src={Logo} alt=""/>
                    <ul>
                        <li><a href="#b"><i className="bi bi-instagram"></i> Instagram</a></li>
                        <li><a href="#b"><i className="bi bi-whatsapp"></i> Whatsapp</a></li>
                    </ul>
                </div>
                <div className="support">
                    <h3>Contact & Support</h3>
                    <ul>
                        <li><a href="#b"><i className="bi"></i>+33 7 80 70 82 87</a></li>
                        <li><a href="#b"><i className="bi"></i>info@ecom-crea.com</a></li>
                        <li><a href="#b"><i className="bi"></i>Lun-Ven 9H00-18H00</a></li>
                    </ul>
                </div>
                <div className="legal">
                    <h3>Mentions légales</h3>
                    <ul>
                        <li><a href="#b"><i className="bi"></i>Conditions Générales De Vente</a></li>
                        <li><a href="#b"><i className="bi"></i>Politique de confidentialité</a></li>
                        <li><a href="#b"><i className="bi"></i>Politique De Retour & Remboursement</a></li>
                    </ul>
                </div>
                <div className="newsletter">
                    <h3>Newsleter</h3>
                    <p>Inscrivez-vous à notre newsletter et recevez votre offre de bienvenue !</p>
                    <form onSubmit={handleSubmit}>
                        <input type="email" id="email" name="email" placeholder="Email"/>
                        <input type="submit" value="S'inscrire"/>
                    </form>
                </div>
            </div>
            <div className="footer__part-2">
                <p>© 2022 Ecom-crea | Tous droits réservés.</p>
            </div>
        </div>
    );
}

export default Footer;