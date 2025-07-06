
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://m-otefy.github.io/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Portfolio/home",
    "route": "/Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/home"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5833, hash: '5da32d8c8db43c0c2fe9a1ab146e586c1450fc8a683be25ab2cdb82e9ced0d4f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1813, hash: 'f959c0cfe26c2fa4961f4799d68c3dbae193e995fe73ca9af97f07699058bc11', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20540, hash: 'e85496093182349ff4584f8348cd2accc223551d9ef54f8067a96c00cf43efd3', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 24278, hash: 'ab4a2e7195627e7b671f5478f874a8610eaa2ae18830c540aac51e060d95935c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 24461, hash: '84e0304d56744f87a7dec01fd838a1e991126364864498be53248fc43694ea3d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 22756, hash: 'f05368dd569302557c634498933f108c6a78ed72e6132ef78c43ec5e3a91030c', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 21966, hash: 'b78b32f7efb710abef41651e3856a4f68e69885752e4d2c36c513cdcfc08c819', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
