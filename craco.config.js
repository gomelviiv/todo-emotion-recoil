/* eslint-disable @typescript-eslint/no-var-requires */
const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './src',
        aliases: {
          configs: './configs/',
          shared: './shared',
          routes: './routes',
          constants: './constants/',
          pages: './pages',
          recoilState: './recoilState',
          assets: './assets',
          utils: './utils',
        },
      },
    },
  ],
};
