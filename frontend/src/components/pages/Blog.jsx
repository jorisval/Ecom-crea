import { useContext, useEffect } from "react";
import { HeaderContext } from "../utils/context";

function Blog() {
    const { setActivePage } = useContext(HeaderContext);
    useEffect(() => {
        setActivePage("blog");
    }, [setActivePage]);
    return(
        <div className="Blog">
            <div className="blog-title">
            <h1>Blog</h1>
        </div>
        <div className="articles">
            <div className="article">
                <img src="../../assets/images/article-1.png" alt=""/>
                <h3>Organize & Manage Tasks & To-Do Lists</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live...</p>
                <span>October 25, 2019</span>
            </div>
            <div className="article">
                <img src="../../assets/images/article-2.png" alt=""/>
                <h3>Organize & Manage Tasks & To-Do Lists</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live...</p>
                <span>October 25, 2019</span>
            </div>
            <div className="article">
                <img src="../../assets/images/article-3.png" alt=""/>
                <h3>Organize & Manage Tasks & To-Do Lists</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live...</p>
                <span>October 25, 2019</span>
            </div>
            <div className="article">
                <img src="../../assets/images/article-4.png" alt=""/>
                <h3>Organize & Manage Tasks & To-Do Lists</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live...</p>
                <span>October 25, 2019</span>
            </div>
            <div className="article">
                <img src="../../assets/images/article-5.png" alt=""/>
                <h3>Organize & Manage Tasks & To-Do Lists</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live...</p>
                <span>October 25, 2019</span>
            </div>
            <div className="article">
                <img src="../../assets/images/article-6.png" alt=""/>
                <h3>Organize & Manage Tasks & To-Do Lists</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live...</p>
                <span>October 25, 2019</span>
            </div>
            <div className="article">
                <img src="../../assets/images/article-7.png" alt=""/>
                <h3>Organize & Manage Tasks & To-Do Lists</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live...</p>
                <span>October 25, 2019</span>
            </div>
            <div className="article">
                <img src="../../assets/images/article-8.png" alt=""/>
                <h3>Organize & Manage Tasks & To-Do Lists</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live...</p>
                <span>October 25, 2019</span>
            </div>
            <div className="article">
                <img src="../../assets/images/article-9.png" alt=""/>
                <h3>Organize & Manage Tasks & To-Do Lists</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live...</p>
                <span>October 25, 2019</span>
            </div>
        </div>
        <div className="buttons-article">
            <button className="previous">Previous</button>
            <button className="next">Next</button>
        </div>
        </div>
    );
}

export default Blog;