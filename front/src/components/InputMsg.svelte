<script>
    import {messages} from '../utils/store'
    import {sendMessage, degManager} from '../utils/network'
    import EmojiSelector from 'svelte-emoji-selector'

    let msgBox = ''

    const onKeyPress = e => {
        if (e.charCode == 13) onSendMsg()
    }
    const onSendMsg = () =>{
        if (msgBox.replaceAll(' ', '') == '') return
        $messages = [...$messages, {
            message: msgBox,
            username: localStorage.getItem('username'),
            selfMessage: true
        }]        
        degManager()
        sendMessage(msgBox)
        msgBox = ''
    }
    function onEmoji(event) {
        msgBox += event.detail;
    }
</script>

<main>
    <div id='inputBox'>
        <EmojiSelector on:emoji={onEmoji} />
        <input 
        id='inputMsg'
        type='text'
        bind:value={msgBox}
        on:keypress={onKeyPress}
         />
         <button id='btnMsg' on:click={onSendMsg}>Enviar</button>
    </div>
</main>

<style>
    main{
        width: 100%;
    }
    main #inputBox{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    main #inputBox #inputMsg{
        width: 100%;
        border-radius: 25px;
        transition: opacity 200ms;
        outline: none;
        margin-right: 15px;
    }
    main #inputBox #btnMsg{
        border-radius: 25px;
        cursor: pointer;
        transition: opacity 200ms;
    }
</style>