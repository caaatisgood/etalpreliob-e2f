import config from 'config'

export const hello = () => {
  return fetch(config.helloEndpoint)
    .then(response => response.json())
    .then(response => response.result || response)
}
