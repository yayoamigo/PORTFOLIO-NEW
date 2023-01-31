const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/david-zambrano-corral/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="assets/linkedin.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/yayoamigo"
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-8 bg-white rounded" alt="twitter-link" src="assets/git2.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.facebook.com/david.d.corral"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook-link" src="assets/facebook.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com/davidzambrano_coc/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src="assets/instagram.png" />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;