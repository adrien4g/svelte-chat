<script>
	import InputMsg from './components/InputMsg.svelte'
	import MsgList from './components/MsgList.svelte'
	import UserConfig from './components/modal/UserConfig.svelte'
</script>

<main>
	<div id='app'>
		<UserConfig />
		<MsgList />
		<InputMsg />
	</div>
</main>

<style>
	:global(body){
		padding: 0
	}
	main{
		background-color: #a29bfe;
		width: 100%;
		height: 100%;
		max-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	main #app{
		width: 90%;
		height: 90%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

</style>