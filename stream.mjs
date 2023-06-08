import fs from 'fs'

const writer = fs.createWriteStream('temp.txt')
writer.write('Hello World')
writer.close()

const reader = fs.createWriteStream('temp.txt')
reader.addListener('data', (data) => {
    console.log(data.toString());
})