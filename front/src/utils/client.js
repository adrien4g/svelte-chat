var PORT = 3639
var HOST = '10.83.10.98'

import {messages, deg} from '../components/store'

export const socket = new WebSocket(`ws://${HOST}:${PORT}`)

export const sendMessage = (msg) => {
    if (socket.readyState <= 1){
        const audio = new Audio('https://proxy.notificationsounds.com/notification-sounds/just-maybe-577/download/file-sounds-1124-just-maybe.mp3')
        audio.play()
        socket.send(JSON.stringify({
            message: msg,
            username: localStorage.getItem('username'),
            selfMessage: false
        }))
    }
}

socket.addEventListener('message', msg => {
    const audio = new Audio('https://proxy.notificationsounds.com/notification-sounds/for-sure-576/download/file-sounds-1123-for-sure.mp3')
    audio.play()
    messages.update(value => [...value, JSON.parse(msg.data)])
    Notification.requestPermission( permission => {
        if (permission == 'granted'){
            let not = new Notification(
                "Opa", {
                    body: 'Mensageeeemm'
                }
            )
        }
    })
    degManager()
})

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