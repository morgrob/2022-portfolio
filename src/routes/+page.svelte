<script lang="ts">
	// import Button, { Label, Icon } from '@smui/button';

	// let clicked = 0;

	// function handleClick(event: CustomEvent | MouseEvent) {
	// 	event = event as MouseEvent;
	// 	if (event.button === 0) {
	// 		clicked++;
	// 	}
	// }

	// function reset() {
	// 	clicked = 0;
	// }

</script>

<!-- <div id="landing">

	<div class="landing-text">
		<h1 style="text-align: left; margin: 0;">Hi, I'm Morgan 👋</h1>
		<h2 style="font-size: 24px; margin-top: 8px;">I'm a digital product designer and frontend developer focused on  
		creating intuitive, science-backed experiences.</h2>
	</div>

	<div class="landing-graphic">
			<svg id="base" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-1{fill:none;stroke:#666;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-1" d="M112.94,276H22.06c-11.63,0-21.06-9.43-21.06-21.06V22.06C1,10.43,10.43,1,22.06,1H112.94c11.63,0,21.06,9.43,21.06,21.06V254.94c0,11.63-9.43,21.06-21.06,21.06Zm16.06-21.24V22.24c0-8.97-7.27-16.24-16.24-16.24H22.24C13.27,6,6,13.27,6,22.24V254.76c0,8.97,7.27,16.24,16.24,16.24H112.76c8.97,0,16.24-7.27,16.24-16.24ZM87,17h0c0-3.31-2.69-6-6-6h-27c-3.31,0-6,2.69-6,6h0c0,3.31,2.69,6,6,6h27c3.31,0,6-2.69,6-6Zm37,237.46v-7.91c0-6.38-5.17-11.54-11.54-11.54H22.54c-6.38,0-11.54,5.17-11.54,11.54v7.91c0,6.38,5.17,11.54,11.54,11.54H112.46c6.38,0,11.54-5.17,11.54-11.54Zm-60.5-30.46c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm8,0c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Z"/></svg>
			<svg id="orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-2{fill:none;stroke:#ff3d00;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-2" d="M118,108v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm-81,30v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm54,30v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Z"/></svg>					
			<svg id="yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-3{fill:none;stroke:#ffeb3b;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-3" d="M118,256v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5ZM37,108v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm54-60v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5ZM37,198v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Z"/></svg>
			<svg id="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-4{fill:none;stroke:#4caf50;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-4" d="M37,256v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5ZM91,108v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm-27,60v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Z"/></svg>
			<svg id="blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-5{fill:none;stroke:#448aff;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-5" d="M64,256v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm0-181.46V41.46c0-4.67-3.79-8.46-8.46-8.46H25.46c-4.67,0-8.46,3.79-8.46,8.46v33.08c0,4.67,3.79,8.46,8.46,8.46h30.08c4.67,0,8.46-3.79,8.46-8.46Zm27,63.46v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm-54,30v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm13.28-110.49c0,5.4-4.38,9.78-9.78,9.78s-9.78-4.38-9.78-9.78,4.38-9.78,9.78-9.78,9.78,4.38,9.78,9.78Zm-9.78-14.17v-3.07m0,34.72v-3.07m14.3-14.3h3.07m-34.72,0h3.07m24.72-9.78l2.24-2.1m-25.32,23.76l2.24-2.1m20.21,.64l2.1,2.24m-23.76-25.32l2.1,2.24m87.28,30.79v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Z"/></svg>
			<svg id="purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-6{fill:none;stroke:#7e57c2;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-6" d="M91,78v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm-27,60v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm54,30v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Z"/></svg>
			<svg id="pink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-7{fill:none;stroke:#ff4081;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-7" d="M64,108v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm54,30v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm-54,60v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm27,58v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5ZM118,48v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Z"/></svg>
	</div>

</div> -->

<!-- <Button on:mousedown={handleClick}>
	<Icon class="material-icons">thumb_up</Icon>
	<Label>Click Me</Label>
</Button>
<p class="mdc-typography--body1">
	{#if clicked}
		You've clicked the button {clicked} time{clicked === 1 ? '' : 's'}. You can
		<a on:click={reset} href="javascript:void(0);">reset it</a>.
	{:else}
		<span class="grayed">You haven't clicked the button.</span>
	{/if}
</p> -->

<style>
	/* .grayed {
		opacity: 0.6;
	} */
	/* #landing {
		display: flex;
		justify-content: space-between;
		height: 90vh;
		width: 100vw;
		border: 1px solid red;
		margin-top: auto;
		margin-bottom: auto;
		margin-bottom: 5vh;
	}
	.landing-text {
		width: 50vw;
		margin-left: 12vw;
		margin-top: auto;
		margin-bottom: auto;
	}
	.landing-graphic {
		width: 35vw;
		display: flex;
		margin-top: 15vh;
	}
	.landing-graphic svg {
		position: absolute;
		width: 35vw;
		margin-left: 5vw;
		margin-top: auto;
		margin-bottom: auto;
	}
	
	#base {
		stroke-dasharray: 1000;
		stroke-dashoffset: 0;
		animation: dash 4s both;
	}
	#orange {
		stroke-dasharray: 1000;
		stroke-dashoffset: 0;
		animation-delay: 0.25s !important;
		animation: dash 2s both;
	}
	#yellow {
		stroke-dasharray: 1000;
		stroke-dashoffset: 0;
		animation-delay: 0.5s !important;
		animation: dash 2s both;
	}
	#green {
		stroke-dasharray: 1000;
		stroke-dashoffset: 0;
		animation-delay: 0.75s !important;
		animation: dash 2s both;
	}
	#blue {
		stroke-dasharray: 1000;
		stroke-dashoffset: 0;
		animation-delay: 1s !important;
		animation: dash 2s both;
	}
	#purple {
		stroke-dasharray: 1000;
		stroke-dashoffset: 0;
		animation-delay: 1.25s !important;
		animation: dash 2s both;
	}
	#pink {
		stroke-dasharray: 1000;
		stroke-dashoffset: 0;
		animation-delay: 1.5s !important;
		animation: dash 2s both;
	}
	@keyframes dash {
		from {
			stroke-dashoffset: 1000;
		}
		to {
			stroke-dashoffset: 0;
		}
	} */
</style>
