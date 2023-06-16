import config from "../lib/Config.json";

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-socialsBox">
                {config.socials.map((data, key) => (
                    <a href={data.link} key={key}>
                        <i className={`${data.icon} button`}></i>
                    </a>
                ))}
            </div>
            <p>
                Me and <i className="fa-solid fa-code" /> is a <i className="fa-solid fa-fire" />{" "}
                combination
            </p>
        </div>
    );
};
