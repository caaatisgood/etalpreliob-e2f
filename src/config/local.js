import endpoints from 'config/endpoints'
const prefix = '/mock'

Object.keys(endpoints).map(k => {
  endpoints[k] = prefix + endpoints[k]
})

export default {
  ...endpoints,
}
