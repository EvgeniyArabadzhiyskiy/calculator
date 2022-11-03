//    Routes

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOT = "/";

export const PATH_PAGE = {
  homeFC: ROOT, //             '/'
  homeCC: path(ROOT, "homecc"), //            '/homecc'
  settings: path(ROOT, "settings"), //          '/settings'
};

// console.log(PATH_PAGE.settings);         '/settings'
