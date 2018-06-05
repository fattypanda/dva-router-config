let config = {
  resolveUrlParams: true,
}

/**
 *
 * @param {object} opts
 * @param {string} resolveUrlParams 是否解析URL参数
 */
export function use (opts = {}) {
  config = {...config, ...opts};
}

export default config;
