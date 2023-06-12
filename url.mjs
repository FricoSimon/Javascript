import { URL } from 'url';

const myURL = new URL('https://google.com/search?q=javascript')

console.log(myURL.toString()); // url to string
console.log(myURL.hostname); // hostname
console.log(myURL.pathname); // pathname after hostname
console.log(myURL.searchParams); // search params
console.log(myURL.protocol); // protocol
console.log(myURL.origin); // protocol + hostname