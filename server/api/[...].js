// this [...] is a catch-all api route
// will be used for any api call made from a component
// Nuxt automatically makes this an api endpoint!
export default defineEventHandler((event) => {
  return $fetch(`https://api.coinlore.net${event.node.req.url}`)
})
