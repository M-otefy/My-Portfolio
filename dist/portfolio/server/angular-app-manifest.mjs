
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/M-otefy/Portfolio.git',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/M-otefy/Portfolio.git/home",
    "route": "/M-otefy/Portfolio.git"
  },
  {
    "renderMode": 2,
    "route": "/M-otefy/Portfolio.git/home"
  },
  {
    "renderMode": 2,
    "route": "/M-otefy/Portfolio.git/about"
  },
  {
    "renderMode": 2,
    "route": "/M-otefy/Portfolio.git/skills"
  },
  {
    "renderMode": 2,
    "route": "/M-otefy/Portfolio.git/projects"
  },
  {
    "renderMode": 2,
    "route": "/M-otefy/Portfolio.git/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5969, hash: '012af925b7e1422d579b44e167606961337252cf7f8d8bd871c0f6924cf29a00', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1949, hash: 'b91abc58209d7bd837d737cbe748f8a07dcc61391c9b663eafeebc05ee6b4241', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 22132, hash: '7583942d142c0ccc7b187ce43c4fea6015d133b4f06271149cb6dfadc00abc4a', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 24444, hash: '161bb81e6a01aff8a90bc5517a9e69c6935b4c254e0b9012f6e69f3598b9a3d0', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 22922, hash: '9f19ea6bfe7738c01e2d870e02803cf0b3ab263db30da40e968b5a8f7837219e', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20706, hash: '3a5d2be258ce51da81bc688b51f525936ced0f72bffaf74a95a5396c94d871b3', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 24627, hash: 'aac5b4c15b22f67edd0f0c10f4d8457c0ed573030cc52ae840aa32481b52c4d1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
