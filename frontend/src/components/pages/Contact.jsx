import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContext } from "../utils/context";

function Contact() {
    const { setActivePage } = useContext(HeaderContext);
    const navigate = useNavigate();
    useEffect(() => {
        setActivePage("contact");
    }, [setActivePage]);
    
    async function handleSubmit(event) {
        event.preventDefault();
      
        const formData = new FormData(event.target);
        const searchParams = new URLSearchParams();
      
        for (const [key, value] of formData.entries()) {
          searchParams.append(key, value);
        }
      
        try {
            const response = await fetch("http://localhost:3000/api/contact/comment/", {
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

            // Redirect to the home page
            navigate("/");

        } catch (error) {
            console.error("Error:", error);
        }
    }
      

    return(
        <div className="contact">
            <div className="pages-title">
                <h1>Contactez-nous<span className="bi bi-chevron-double-right"></span></h1>
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
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