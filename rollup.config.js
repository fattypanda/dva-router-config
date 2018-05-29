import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";

const config = {
  input: "src/utils/routerConfig.js",
  output: {
    file: 'lib/index.js',
    format: 'cjs',
    name: "routerConfig",
    globals: {
      react: "React"
    }
  },
  external: ["react"],
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    commonjs({
      include: /node_modules/
    }),
  ]
};


export default config;
