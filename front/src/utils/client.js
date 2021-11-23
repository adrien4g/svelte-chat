var PORT=3639
var HOST = '10.83.10.98'

export const socket = new WebSocket(`ws://${HOST}:${PORT}`)

export const sendMessage = (msg) => {
    if (socket.readyState <= 1){
        socket.send(JSON.stringify({
            message: msg,
            username: localStorage.getItem('username'),
            selfMessage: false
        }))
    }
}
