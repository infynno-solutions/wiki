/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  logo: (
    <img
      src="https://infynno.com/wp-content/uploads/2023/02/logo-white.png"
      alt="Infynno Internal Wiki"
      className="logo"
    />
  ),
  footer: {
    text: (
      <span>
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://infynno.com" target="_blank">
          Infynno Solutions
        </a>
        .
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Infynno Internal Wiki",
    };
  },
};
