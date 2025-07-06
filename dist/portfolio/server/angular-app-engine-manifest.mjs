
export default {
  basePath: 'https://github.com/M-otefy/Portfolio.git',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
