import config from "../lib/Config.json";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-socialsBox">
          {config.footer.map((data, key) => (
            <a href={data.link} key={key}>
              <i className={`${data.icon} button`}></i>
            </a>
          ))}
        </div>
        <p>
          Everything, everywhere, all of it built by <i>me</i>
          <a>I hope you got the refrence {`:)`}</a>
        </p>
      </div>
    </div>
  );
};
