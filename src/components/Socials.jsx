import {
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined,
TwitterOutlined
} from "@ant-design/icons";

function Socials() {
  return (
    <div className="mt-8 flex justify-around md:mt-6">
      <a href="https://www.linkedin.com/in/ashwani-sajwan-18956121a/" target="_blank">
        <LinkedinOutlined
          className="social-icon rounded-full p-2"
          style={{ fontSize: "32px", color: "#00abe0", marginRight: "14px"   }}
        />
      </a>

      <a href="https://github.com/Enter-The-Matrix" target="_blank">
        <GithubOutlined
          className="social-icon rounded-full p-2"
          style={{ fontSize: "32px", color: "#00abe0", marginRight: "14px",  }}
        />
      </a>
      <a href="https://www.instagram.com/i.ashwani.s/" target="_blank">
        <InstagramOutlined
          className="social-icon rounded-full p-2"
          style={{ fontSize: "32px", color: "#00abe0", marginRight: "14px",  }}
        />
      </a>
      <a href="https://twitter.com/SajwanAshwani" target="_blank">
        <TwitterOutlined
          className="social-icon rounded-full p-2"
          style={{ fontSize: "32px", color: "#00abe0", marginRight: "14px",  }}
        />{" "}
      </a>
    </div>
  );
}

export default Socials;
