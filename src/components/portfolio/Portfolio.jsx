import React from "react";
import "./portfolio.css";
import TwitterImg from "../../assets/Twitter.jpg";
import IMDbImg from "../../assets/IMDb.png";
import MetaversusImg from "../../assets/metaversus.png";
import CustomShirt from "../../assets/shirt-customizer.png";
import ColorPicker from "../../assets/colorPicker.png";
import CorporateApp from "../../assets/corporate-app.png";

const data = [
    {
        id: 1,
        image: TwitterImg,
        title: "Twitter Clone - Made with Next.js and Tailwind CSS",
        github: "https://github.com/remus00/twitter_clone",
        demo: "https://twitter-clone-5qoa38qc5-remus00.vercel.app/",
    },
    {
        id: 2,
        image: IMDbImg,
        title: "IMDb Clone - A film db made with Next.js and Tailwind CSS",
        github: "https://github.com/remus00/IMDb",
        demo: "https://imdb-clone-hhdflx253-remus00.vercel.app/",
    },
    {
        id: 3,
        image: MetaversusImg,
        title: "A stunning design for a web application made in Next.js",
        github: "https://github.com/remus00/Metaversus_design",
        demo: "https://metaversus-omega-three.vercel.app/",
    },
    {
        id: 4,
        image: CustomShirt,
        title: "Shirt customizer app using a 3D made with Vite.js and Next.js",
        github: "https://github.com/remus00/shirt-customizer",
        demo: "https://shirt-customizer-kohl.vercel.app/",
    },
    {
        id: 5,
        image: CorporateApp,
        title: "A simple React.js + Bootstap app, for learning purpose",
        github: "https://github.com/remus00/Corporate-App",
        demo: "https://corporate-app.vercel.app/",
    },
    {
        id: 6,
        image: ColorPicker,
        title: "A simple React.js hex color picker and shade generator",
        github: "https://github.com/remus00/ColorPicker",
        demo: "https://color-picker-hazel.vercel.app/",
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My recent works</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio_item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a
                                    href={github}
                                    className="btn"
                                    target="_blank"
                                >
                                    Gitbub
                                </a>
                                <a
                                    href={demo}
                                    className="btn btn-primary"
                                    target="_blank"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
