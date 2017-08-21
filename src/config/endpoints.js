const endpoints = {
  helloEndpoint: '/hello',
}

export default (prefix) => {
  if (prefix) {
    Object.keys(endpoints).map(k => {
      endpoints[k] = prefix + endpoints[k]
    })
  }
  return endpoints
}
