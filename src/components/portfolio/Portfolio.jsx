import React from "react";
import "./portfolio.css";
import IMG3 from "../../assets/img3.webp";
import IMG4 from "../../assets/img4.webp";
import IMG5 from "../../assets/img5.webp";
import IMG6 from "../../assets/img6.webp";

import TwitterImg from "../../assets/Twitter.jpg";
import IMDbImg from "../../assets/IMDb.png";

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
        title: "IMDb Clone - Made with Next.js and Tailwind CSS",
        github: "https://github.com/remus00/IMDb",
        demo: "https://imdb-clone-hhdflx253-remus00.vercel.app/",
    },
    {
        id: 3,
        image: IMG3,
        title: "Eclipse - Figma dashboard UI kit for data design web apps",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/21455491-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
    },
    {
        id: 4,
        image: IMG4,
        title: "Orion UI kit – data visualization and charts templates for Figma",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/21455483-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
    },
    {
        id: 5,
        image: IMG5,
        title: "Eclipse - Figma dashboard UI kit for data design web apps",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/21518827-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
    },
    {
        id: 6,
        image: IMG6,
        title: "Orion UI kit – data visualization and charts templates for Figma",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/21518922-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
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
