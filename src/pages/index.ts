/**
 * Implementation of page is in `/services`
 * I've separated the code with service module for future scalability.
 * Separate common elements used in page implementations such as `/queries`, `/helpers`, `/components` by service name
 * https://softwareengineering.stackexchange.com/questions/338597/folder-by-type-or-folder-by-feature
 */

export { default } from '../services/home/pages/index.vue'
