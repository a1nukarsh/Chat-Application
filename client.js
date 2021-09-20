const socket = io('http://localhost:8000')

const form = document.getElementById('send-container')
const msgInp = document.getElementById('msgInp')
const msgContainer = document.getElementById('m-container')

const name = prompt("Enter your name to Join")

console.log(name)

