<script>
    export let message = ""
    export let username = ""
    export let selfMessage = false
</script>
<main class:selfMessage={selfMessage}>
    <div id='message'>
        <div id='username'>
                {username}
        </div>
        <div id='content'>
            {message}
        </div>
    </div>
</main>
<style>
    main{
        align-self: flex-start;
        margin: 5px 15px 5px 15px;
    }
    main #message{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 150px;
    }
    main #message #username{
        align-self: flex-start;
        text-align: center;
        min-width: 80px;
        margin-left: 10px;
        padding: 5px;
        background-color: #6c5ce7;
        border-radius: 25px;
        color: white;
        animation: userIn 200ms forwards;
        z-index: 15;
    }
    main #message #content{
        text-align: center;
        max-width: 70rem;
        min-width: 5rem;
        color: white;
        padding: 10px 15px 10px 15px;
        background-color: #a29bfe;
        border-radius: 25px;
        opacity: 0;
        animation: contentIn 200ms forwards;
        animation-delay: 150ms;
        overflow-wrap: break-word;
    }
    .selfMessage{
        align-self: flex-end;
    }
    @keyframes userIn{
        from{
            transform: translateY(0px);
            opacity: 0%;
        }
        to{
            transform: translateY(13px);
            opacity: 100%;
        }
    }
    @keyframes contentIn{
        from{
            opacity: 0%;
        }
        to{
            opacity: 100%;
        }
    }
</style>