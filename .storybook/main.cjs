module.exports = {
  "stories": [
    "../src/**/*.stories.mdx", 
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links", 
    "@storybook/addon-essentials", 
    "@storybook/addon-interactions"
  ],
  "framework": {
    name: "@storybook/react-vite",
  },
  "features": {
    "storyStoreV7": true
  },
  docs: {
    docsPage: "automatic"
  },
  /* If orgazination do this */
  /* viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/React-Design-System/'
    }
    return config
  } */
};