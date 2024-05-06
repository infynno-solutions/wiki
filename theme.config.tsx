// eslint-disable-next-line import/no-anonymous-default-export
export default {
  logo: <span>Infynno Internal Wiki</span>,
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
