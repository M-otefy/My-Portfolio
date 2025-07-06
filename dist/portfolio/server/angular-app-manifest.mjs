
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
    'index.csr.html': {size: 5964, hash: '221b644f4a09d57adfae7ab0ac395f19d9ef72a051bfb945cce97d2072dd9f15', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1944, hash: '20dfeb387dd4a7a0ad30bfadf63cc7cd4bbe9b3ead6167ff6d54f438663cb489', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20671, hash: '53d6ae4348cdcf6b8699c6c251680a7b36c0639ba1e73f74cfae97ec4ebb9624', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 24409, hash: 'e0d9cffcdb853a4fcb484608e9e20c0449d66079edbbfaeef301e50b854a382d', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 24592, hash: 'c1c0cf96e31006d415a8683343f162a350d8f53e242813fb66be534e4022d9c0', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 22887, hash: '42c1205d03915716c2c92941748458bfc3a9cb46a5c0cad051d0af8609c460c2', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 22097, hash: '38edfe6d7fbc958e4fa0bc760d46a7332ec47229dab537f8a653d6c8c0dfb67d', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
