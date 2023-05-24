import dns from 'dns/promises'

const address = await dns.lookup("www.google.com") // put your DNS here and below
const server = await dns.getServers("www.google.com")
const ipv4 = await dns.resolve4("www.google.com")
const ipv6 = await dns.resolve6("www.google.com")

console.log(`IP Address = ${address.address}`)
console.log(`ipv4 = ${ipv4}`)
console.log(`ipv6 = ${ipv6}`)
console.table(server)

