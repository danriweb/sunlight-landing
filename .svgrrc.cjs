/** @type {import('@svgr/core').Config} */
module.exports = {
  typescript: true,
  prettier: false,
  svgo: true,
  svgoConfig: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false,
            cleanupIds: false,
          },
        },
      },
      {
        name: "addViewBox",
        fn: () => ({
          element: {
            enter(node) {
              if (node.name === "svg" && !node.attributes.viewBox && node.attributes.width && node.attributes.height) {
                node.attributes.viewBox = `0 0 ${node.attributes.width} ${node.attributes.height}`;
              }
            },
          },
        }),
      },
      {
        name: "prefixIds",
      },
    ],
  },
};
