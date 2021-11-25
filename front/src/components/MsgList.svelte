<script>
    import {beforeUpdate, afterUpdate} from 'svelte'
    import MsgBox from './MsgBox.svelte'
    import {messages} from '../utils/store'

    let chatList
    let autoscroll
    beforeUpdate(() =>{
        autoscroll = chatList && (chatList.offsetHeight + chatList.scrollTop) > (chatList.scrollHeight - 20)
    })
    afterUpdate(() => {
        const chatList = document.getElementById('msgList')
        if (autoscroll) chatList.scrollTo(0, chatList.scrollHeight)
    })

</script>
<main>
    <div id='msgList'  bind:this={chatList}>
        {#each $messages as currentMessage}
            <MsgBox message={currentMessage.message} username={currentMessage.username} selfMessage={currentMessage.selfMessage} />
        {/each}
    </div>
</main>
<style>
    main{
        margin-bottom: 15px;
        width: 100%;
        height: 100%;
    }
    main #msgList{
        scroll-behavior: smooth;
        background-color: white;
        border-radius: 25px;
        width: 100%;
        height: 80vh;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
        overflow-y: auto;
    }
    main #msgList::-webkit-scrollbar{
        width: 10px;
    }
    main #msgList::-webkit-scrollbar-track{
        border-radius: 25px;
    }
    main #msgList::-webkit-scrollbar-thumb{
        border-radius: 25px;
    }
</style>