/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function dUsername (str) {
  const d_map = ['admin', 'editor']
  return d_map.indexOf(str.trim()) >= 0
}
//
export function validMobile (mobile) {
  var reg = /^(?:(?:\+|00)86)?1\d{10}$/
  return reg.test(mobile)
}
