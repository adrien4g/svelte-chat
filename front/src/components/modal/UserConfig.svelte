<script>
    let username = ''
    let showModal
    if (localStorage.getItem('username') == null || localStorage.getItem('username') == ""){
        showModal = true
    }else{
        showModal = false
    }
    
    const updateUserConfig = () => {
        if (username.replaceAll(' ', '') == '') return
        localStorage.setItem('username', username)
        username = ''
        showModal = false
    }
    const keypress = (e) => {
        if (e.charCode == 13) updateUserConfig()
    }
</script>
<main>
    <button id='config' on:click={() => showModal = !showModal}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
    </button>
    {#if showModal}
    <div id='background'>
        <div id='modal'>
            <p>Username</p>
            <input id='inputUsername' type='text' bind:value={username} on:keypress={keypress} />
            <div id='divBtn'>
                <button on:click={() => {
                    if (localStorage.getItem('username') != '' && localStorage.getItem('username') != null) {showModal = false}
                }}>Fechar</button>
                <button on:click={updateUserConfig}>Salvar</button>
            </div>
        </div>
    </div>
    {/if}
</main>
<style>
    main #config{
        position: absolute;
        top: 15px;
        left: 15px;
        background: none;
        border: none;
    }
    main #config svg{
        fill: white;
        cursor: pointer;
        border-radius: 100%;
    }
    main #background{
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 20;
    }
    main #background #modal{
        z-index: 25;
        background-color: #a29bfe;
        padding: 20px;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    main #background #modal p{
        color: white;
        font-weight: 700;
    }
    main #background #modal #inputUsername{
        border-radius: 25px;
        width: 100%;
    }
    main #background #modal #divBtn{
        width: 100%;
        display: flex;
        align-items: center;
    }
    main #background #modal #divBtn button{
        border-radius: 25px;
        cursor: pointer;
        flex: 1;
    }
    main #background #modal #divBtn button:nth-child(1){
        margin-right: 5px;
    }

    main #background #modal #divBtn button:nth-child(2){
        margin-left: 5px;
    }
</style>