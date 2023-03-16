module.exports = (on, config) => {
  if (config.testingType === 'component') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@cypress/react/plugins/react-scripts')(on, config);
  }
  return config;
};
