import { EventEmitter } from "events"

const emitter = new EventEmitter()
const name = "friko"

emitter.addListener("hello", (name) => { // listening to event 
    console.log(`hello ${name}`)
})

emitter.addListener("bye", (name) => { // listening to event 
    console.log(`okay good bye ${name}! see ya`)
})

emitter.emit("hello", name) // call the event hello
emitter.emit("bye", name) // call the event bye