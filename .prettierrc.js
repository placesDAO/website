module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  /**
   * Using tabs makes the experience of editing code with a screen reader a little nicer.
   * https://twitter.com/sarah_federman/status/1146544481556033537?lang=en
   */
  useTabs: true,
  semi: false,
  singleQuote: true,

  // import sorting
  importOrder: ["^[./]"],
  importOrderSeparation: true,

  /**
   * Overrides (typically for non js/json files)
   */
  overrides: [
    {
      files: "*.{yml,yaml}",
      options: {
        singleQuote: false,
        useTabs: false,
      },
    },
  ],
};
