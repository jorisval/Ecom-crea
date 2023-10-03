import { useContext, useEffect } from "react";
import CatalogView from "../layout/catalog-view";
import { HeaderContext } from "../utils/context";
import Hero from "../../assets/images/hero.png";
import BeneEquipe from "../../assets/images/benefice-equipe.png";
import BeneMb from "../../assets/images/benefice-mb.png";
import BeneSav from "../../assets/images/benefice-sav.png";
import IconLearn from "../../assets/images/icone-learn.png";
import IconUpdate from "../../assets/images/icone-update.png";
import IconPrice from "../../assets/images/icone-price.png";
import IconSatisfaction from "../../assets/images/icone-satisfaction.png";
import { useFetch } from "../utils/hooks";
import { Link } from "react-router-dom";
import { HomeContainer } from "../styles/Home";
import { BASE_URL } from '../../config';


function Home() {
    const { setActivePage } = useContext(HeaderContext);
    useEffect(() => {
        setActivePage('home');
    }, [setActivePage]);
    const { data } = useFetch(`${BASE_URL}/api/client-result`);
    
    return(
        <HomeContainer className="home">
            <div className="hero">
                <div className="hero__text">
                    <h1>L'équipe secrète derrière les e-commerçants qui se détentent et chiffrent sans stress</h1>
                    <p className="subtitle">Déléguez puis laissez l'équipe Ecom-crea s'occuper des tâches et concentrez-vous sur l’essentiel !</p>
                    <Link to='/catalog' className="cta-button">Voir catalogue</Link>
                    <div className="steps">
                        <div>
                            <span>1M+</span>
                            <p>Réalisés par nos clients</p>
                        </div>
                        <div>
                            <span>100%</span>
                            <p>Satisfaction</p>
                        </div>
                        <div>
                            <span>7/7</span>
                            <p>Disponibilité</p>
                        </div>
                    </div>
                </div>
                <div className="hero__image">
                    <img src={Hero} alt=""/>
                </div>
            </div>
            <CatalogView />
            <div className="benefice-team">
                <div className="benefice-team__image">
                    <img src={BeneEquipe} alt=""/>
                </div>
                <div className="benefice-team__text">
                    <h2>Dropshippeur ? L'équipe Ecom-crea s'occupe de tout !</h2>
                    <p>Recherche de produits, recherche de marchés inexploités, copywriting, boutique shopify, vidéos pour Facebook ads et Tiktok ads etc... Nous nous occupons de tout pour vous.
                    Notre objectif est de vous décharger de toutes ces tâches pour vous laisser vous occuper de l'essentiel et ainsi faire exploser votre business. </p>
                    <Link to='/catalog'>Découvrir <span className="bi bi-arrow-right"></span></Link>
                </div>
            </div>
            <div className="benefice-mb">
                <div className="benefice-mb__image">
                    <img src={BeneMb} alt=""/>
                </div>
                <div className="benefice-mb__text">
                    <h2>Media buying</h2>
                    <p>Facebook ads, Tiktok ads, Snapchat ads, Google ads, Pinterest ads, Marketink d'influence.. Nous nous occupons également de tout pour vous. 
                    <br/>Laissez-nous mettre à votre disposition notre réseau de professionnels, appliquer les bonnes stratégies à votre business et vous montrer la puissance de réseaux sociaux quand ils sont utilisés de la bonne manière !</p>
                    <Link to='/catalog'>Découvrir <span className="bi bi-arrow-right"></span></Link>
                </div>
            </div>
            <div className="benefice-sav">
                <div className="benefice-sav__image">
                    <img src={BeneSav} alt=""/>
                </div>
                <div className="benefice-sav__text">
                    <h2>Service après vente (SAV)</h2>
                    <p>Un client heureux est un bon embassadeur et revient toujours payer quand il a, de nouveau, besoin de vos produits et service. 
                        Laissez l'équipe Ecom-crea offir une expérience inédite à vos clients et votre chiffre d'affaire vous remerciera !</p>
                        <Link to='/catalog'>Découvrir <span className="bi bi-arrow-right"></span></Link>
                </div>
            </div>
            <div className="result">
                <h2>Les résultats de nos clients parlent pour nous</h2>
                <div className="result__elements">
                    {Array.isArray(data) && data.map((result, index) => {
                        return(
                            <img src={result.imageUrl} key={index} alt=""/>
                        )
                    })}
                </div>
            </div>
            <div className="why">
                <h2>Pourquoi nous ?</h2>
                <div className="why__elements">
                    <div className="why__element">
                        <img src={IconLearn} alt=""/>
                        <p>Nous maîtrisons les meilleurs process et les meilleures stratégies des tops du domaine</p>
                    </div>
                    <div className="why__element">
                        <img src={IconUpdate} alt=""/>
                        <p>Nous continuons toujours de nous mettre à jour et de nous améliorer pour vous</p>
                    </div>
                    <div className="why__element">
                        <img src={IconPrice} alt=""/>
                        <p>Nous avons un rapport Qualité/prix inégalable sur le marché</p>
                    </div>
                    <div className="why__element">
                        <img src={IconSatisfaction} alt=""/>
                        <p>Votre satisfaction est notre priorité et nous faisons tout pour que vous le soyez à 100%</p>
                    </div>
                </div>
            </div>
        </HomeContainer>
    )
}

export default Home