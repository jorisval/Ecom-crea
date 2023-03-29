import { useContext, useEffect } from "react";
import { HeaderContext } from "../utils/context";

function Contact() {
    const { setActivePage } = useContext(HeaderContext);
    useEffect(() => {
        setActivePage("contact");
    }, [setActivePage]);
    return(
        <div className="contact">
            <div className="pages-title">
                <h1>Contactez-nous<span className="bi bi-chevron-double-right"></span></h1>
            </div>
            <div className="contact-form">
                <form method="post" action="">
                    <div><input type="text" name="name" id="name" placeholder="Nom"/></div>
                    <div><input type="email" name="email" id="email" placeholder="Email"/></div>
                    <div><textarea name="comment" id="comment" rows="6" placeholder="Commentaire..."></textarea></div>
                    <div className="checkbox"><input type="checkbox" name="agree" id="agree"/><label for="">Dans le but de ma demande personnelle via le formulaire, j'accepte à ce que mes données soient utilisées afin de me recontacter. Vos informations ne seront en aucun cas conservées à des fins commerciales.</label></div>
                    <div><input type="submit" value="Send"/></div>
                </form>
            </div>
        </div>
    );
}

export default Contact;