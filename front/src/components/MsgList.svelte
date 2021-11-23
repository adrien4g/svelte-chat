<script>
    import MsgBox from './MsgBox.svelte'
    import {messages} from './store'
</script>
<main>
    <div id='msgList'>
        {#each $messages as currentMessage}
            <MsgBox message={currentMessage.msg} username={currentMessage.username} selfMessage={currentMessage.selfMessage} />
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
        background-color: white;
        max-width: 100%;
        border-radius: 25px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: scroll;
    }
</style>