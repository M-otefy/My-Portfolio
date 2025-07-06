
export default {
  basePath: 'https://m-otefy.github.io/Portfolio',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
