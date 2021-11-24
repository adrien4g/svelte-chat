<script>
	import InputMsg from './components/InputMsg.svelte'
	import MsgList from './components/MsgList.svelte'
	import UserConfig from './components/modal/UserConfig.svelte'
	import {deg} from './components/store'
</script>

<main style="--deg:{$deg}deg">
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
		background: rgb(203,136,244);
		background: linear-gradient(var(--deg), rgba(203,136,244,1) 0%, rgba(110,251,188,1) 51%, rgba(0,212,255,1) 100%);
		transition: background 1000ms;
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