import endpoints from 'config/endpoints'
const prefix = '/'

Object.keys(endpoints).map(k => {
  endpoints[k] += prefix
})

export default {
  ...endpoints,
}
