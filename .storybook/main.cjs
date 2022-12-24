module.exports = {
  "stories": [
    "../src/**/*.stories.mdx", 
    "../src/**/*.stories.@(tsx)"
  ],
  "addons": [
    "@storybook/addon-links", 
    "@storybook/addon-essentials", 
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true,
    "interactionsDebugger": true
  },
  "staticDirs": [
    "../public"
  ],
  /* If orgazination do this */
  /* viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/React-Design-System/'
    }
    return config
  } */
};