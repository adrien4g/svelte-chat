<script>
    import {messages, username} from './store'
    let msgBox = ''
    const onKeyPress = e => {
        if (e.charCode == 13) onSendMsg()
    }
    const onSendMsg = () =>{
        $messages = [...$messages, {
            msg: msgBox,
            username: $username,
            selfMessage: true
        }]
    }
</script>

<main>
    <div id='inputBox'>
        <input 
        id='inputMsg'
        type='text'
        bind:value={msgBox}
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