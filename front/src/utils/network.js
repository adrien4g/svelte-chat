import {messages, users, deg} from './store'

// Start connection
var PORT = 3639
var HOST = '192.168.0.12'
export const socket = new WebSocket(`ws://${HOST}:${PORT}`)

// Handler data
socket.addEventListener('message', data => {
    const audio = new Audio('https://proxy.notificationsounds.com/notification-sounds/for-sure-576/download/file-sounds-1123-for-sure.mp3')
    audio.play()
    degManager()
    data = JSON.parse(data.data)
    let type_function = data.type
    delete data.type
    type_functions[type_function](data)
})

// Type functions
const type_functions = {
    'newMessage':newMessage,
    'newUser':newUser,
    'updateUser': updateUser,
    'removeUser': removeUser
}

function newMessage(message){
    messages.update(value => [...value, message])
}
function newUser(username){
    users.update(value => [...value, username])
}
function updateUser(data){
    users.update(value =>{
        let index = value.indexOf(data.currentName)
        if (~index) {
            value[index] = data.newName
        }
        return value
    })
}
function removeUser(username){
    users.update(value => {
        if (typeof value[username] != 'undefined'){
            let index = value.indexOf(username)
            value.splice(index, 1)
        } 
        return value
    })
}

export const sendMessage = (msg) => {
    if (socket.readyState <= 1){
        const audio = new Audio('https://proxy.notificationsounds.com/notification-sounds/just-maybe-577/download/file-sounds-1124-just-maybe.mp3')
        audio.play()
        socket.send(JSON.stringify({
            message: msg,
            username: localStorage.getItem('username'),
            selfMessage: false,
            type: 'newMessage'
        }))
    }
}



export const degManager = async () => {
    let spin_force = 60
    let duration = 30 //ms
    let count = 0
    while (count <= spin_force){
        deg.update(value => value + 1)
        count += 1
        await new Promise (r => setTimeout(r, duration / spin_force))
    }
}