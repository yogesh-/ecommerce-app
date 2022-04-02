import "./footer.css";

export const Footer = () => {
  return (
    <div class="footer-home flex-col bottom-static">
      <h1 class="h3">Created by Yogesh Gupta</h1>
      <div class="social" id="social">
        <a href="https://github.com/yogesh-">
          <img class="icons" src="/assets/github.png" alt="github" />
        </a>
        <a href="https://twitter.com/yo_gupta">
          <img class="icons" src="/assets/twitter.png" alt="twitter" />
        </a>
        <a href="https://www.linkedin.com/in/yogupta/">
          <img class="icons" src="/assets/linkedin.png" alt="linkedin" />
        </a>
      </div>

      <p class="h5">&#169; 2022 SNEAKERS Pvt Ltd</p>
    </div>
  );
};
