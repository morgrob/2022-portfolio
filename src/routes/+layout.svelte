<script lang="ts">
	import Button from '@smui/button';
	import type { TopAppBarComponentDev } from '@smui/top-app-bar';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import { Label, Icon } from '@smui/common';
	import { Svg } from '@smui/common/elements';
	import { mdiGithub, mdiWeb, mdiHammerWrench, mdiAccount, mdiCircle, mdiTrayArrowDown, mdiDownload, mdiWhiteBalanceSunny, mdiMoonWaxingCrescent } from '@mdi/js';
	import Card, {Content, Media, MediaContent} from '@smui/card';

	import headshot from '$lib/images/morgan.jpeg';
	import logoDark from '$lib/images/logo-white.svg';
	import logoLight from '$lib/images/logo-black.svg';
	import appTeam from '$lib/images/appteam-cover.png';
	import bubbly from '$lib/images/bubbly-cover.png';
	import centible from '$lib/images/centible-cover.png';
	import chromaticWorld from '$lib/images/chromatic-cover.png';
	import convictions from '$lib/images/convictions-cover.png';
	import insomnia from '$lib/images/insomnia-cover.png';
	import intel from '$lib/images/intel-cover.png';
	import tetris from '$lib/images/tetris-cover.png';
	import weather from '$lib/images/weather-cover.png';
	import intelLogo from '$lib/images/intel-logo.png';
	import sharpspring from '$lib/images/sharpspring.png';
	import csxlLogo from '$lib/images/pfp-csxl.png';
	import appTeamLogo from '$lib/images/fall-2022-pfp-2.png';
	import uncCS from '$lib/images/unc-cs.jpg';

	// Import the functions you need from the SDKs you need
	import { initializeApp } from "firebase/app";
	import { getAnalytics } from "firebase/analytics";
	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries

	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig = {
	apiKey: "AIzaSyBY8ULQPuQL6nahRhP7-FDWH65yEfH2iGI",
	authDomain: "portfolio-381b3.firebaseapp.com",
	projectId: "portfolio-381b3",
	storageBucket: "portfolio-381b3.appspot.com",
	messagingSenderId: "261180888397",
	appId: "1:261180888397:web:79376d9c8451f7cabed304",
	measurementId: "G-1C3PBJ6T9H"
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);

	let topAppBar: TopAppBarComponentDev;

	let lightTheme = typeof window === 'undefined' || window.matchMedia('(prefers-color-scheme: light)').matches;;

	// onMount(async () => {
	// 	lightTheme = typeof window === 'undefined' || window.matchMedia('(prefers-color-scheme: light)').matches;
	// })
		
	function switchTheme() {
		lightTheme = !lightTheme;
		let themeLink = document.head.querySelector<HTMLLinkElement>('#theme');
		if (!themeLink) {
			themeLink = document.createElement('link');
			themeLink.rel = 'stylesheet';
			themeLink.id = 'theme';
		}
		themeLink.href = `/smui${lightTheme ? '' : '-dark'}.css`;
		document.head
			.querySelector<HTMLLinkElement>('link[href$="/smui-dark.css"]')
			?.insertAdjacentElement('afterend', themeLink);
	}

	import Tab from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	
	// let tabs = [
	// 	{
	// 	// icon: 'mdiHammerWrench',
	// 	label: 'Experience',
	// 	},
	// 	{
	// 	label: 'Bio',
	// 	// icon: 'mdiAccount',
	// 	},
	// ];
	let active = 'Experience';

	export const prerender = true
</script>

<TopAppBar bind:this={topAppBar} variant="dense" style="background-color: {lightTheme ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.8)'}; backdrop-filter: blur(10px);">
	<Row class="row">
		<Section>
			<img src={lightTheme ? logoLight : logoDark} alt="Logo" style="width: 45px;">
		</Section>
		<Section></Section>
		<Section>
			<ul class="nav">
				<li><a style="color: {lightTheme ? 'black' : 'white'};" href="#about">About</a></li>
				<li><a style="color: {lightTheme ? 'black' : 'white'};" href="#projects">Projects</a></li>
			</ul>
		</Section>
		<Section align="end" toolbar>
			<!-- <IconButton aria-label="GitHub" href="https://github.com/hperrin/svelte-material-ui">
				<Icon component={Svg} viewBox="0 0 24 24">
					<path fill="currentColor" d={mdiGithub} />
				</Icon>
			</IconButton> -->
			<IconButton on:click={switchTheme}>
				<Icon component={Svg} viewBox="0 0 24 24">
					<path fill="{lightTheme ? 'black' : 'white'}" d={lightTheme ? mdiMoonWaxingCrescent : mdiWhiteBalanceSunny} />
				</Icon>
			</IconButton>
		</Section>
	</Row>
</TopAppBar>

<!-- <AutoAdjust {topAppBar} style="display: flex; justify-content: space-between;">
	<div class="container"><slot /></div>
	<div class="container">
		<Button on:click={switchTheme}>
			<Label>{lightTheme ? 'Lights off' : 'Lights on'}</Label>
		</Button>
	</div>
</AutoAdjust> -->

<AutoAdjust {topAppBar} style="display: flex; flex-direction: column; justify-content: space-between;">
	<div id="landing">

		<div class="landing-text">
			<p id="landing-head" style="text-align: left; margin: 0; font-size: 42px;">Hi, I'm Morgan 👋</p>
			<p id="landing-subhead" style="font-size: 24px; margin-top: 8px; color: {lightTheme ? '#757575' : '#9e9e9e'};">I'm a digital product designer and frontend developer focused on  
			creating intuitive, science-backed experiences.</p>
		</div>
	
		<div class="landing-graphic">
			{#if lightTheme}
				<svg id="base" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-1{fill:none;stroke:#757575;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-1" d="M112.94,276H22.06c-11.63,0-21.06-9.43-21.06-21.06V22.06C1,10.43,10.43,1,22.06,1H112.94c11.63,0,21.06,9.43,21.06,21.06V254.94c0,11.63-9.43,21.06-21.06,21.06Zm16.06-21.24V22.24c0-8.97-7.27-16.24-16.24-16.24H22.24C13.27,6,6,13.27,6,22.24V254.76c0,8.97,7.27,16.24,16.24,16.24H112.76c8.97,0,16.24-7.27,16.24-16.24ZM87,17h0c0-3.31-2.69-6-6-6h-27c-3.31,0-6,2.69-6,6h0c0,3.31,2.69,6,6,6h27c3.31,0,6-2.69,6-6Zm37,237.46v-7.91c0-6.38-5.17-11.54-11.54-11.54H22.54c-6.38,0-11.54,5.17-11.54,11.54v7.91c0,6.38,5.17,11.54,11.54,11.54H112.46c6.38,0,11.54-5.17,11.54-11.54Zm-60.5-30.46c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm8,0c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Z"/></svg>
				<svg id="orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-2{fill:none;stroke:#ffab91;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-2" d="M118,108v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm-81,30v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm54,30v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Z"/></svg>					
				<svg id="yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-3{fill:none;stroke:#ffe082;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-3" d="M118,256v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5ZM37,108v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm54-60v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5ZM37,198v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Z"/></svg>
				<svg id="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-4{fill:none;stroke:#a5d6a7;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-4" d="M37,256v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5ZM91,108v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm-27,60v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Z"/></svg>
				<svg id="blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-5{fill:none;stroke:#64b5f6;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-5" d="M64,256v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm0-181.46V41.46c0-4.67-3.79-8.46-8.46-8.46H25.46c-4.67,0-8.46,3.79-8.46,8.46v33.08c0,4.67,3.79,8.46,8.46,8.46h30.08c4.67,0,8.46-3.79,8.46-8.46Zm27,63.46v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm-54,30v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm13.28-110.49c0,5.4-4.38,9.78-9.78,9.78s-9.78-4.38-9.78-9.78,4.38-9.78,9.78-9.78,9.78,4.38,9.78,9.78Zm-9.78-14.17v-3.07m0,34.72v-3.07m14.3-14.3h3.07m-34.72,0h3.07m24.72-9.78l2.24-2.1m-25.32,23.76l2.24-2.1m20.21,.64l2.1,2.24m-23.76-25.32l2.1,2.24m87.28,30.79v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Z"/></svg>
				<svg id="purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-6{fill:none;stroke:#b39ddb;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-6" d="M91,78v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm-27,60v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm54,30v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Z"/></svg>
				<svg id="pink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-7{fill:none;stroke:#f48fb1;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-7" d="M64,108v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm54,30v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm-54,60v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm27,58v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5ZM118,48v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Z"/></svg>
			{:else}
				<svg id="base" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-1{fill:none;stroke:#666;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-1" d="M112.94,276H22.06c-11.63,0-21.06-9.43-21.06-21.06V22.06C1,10.43,10.43,1,22.06,1H112.94c11.63,0,21.06,9.43,21.06,21.06V254.94c0,11.63-9.43,21.06-21.06,21.06Zm16.06-21.24V22.24c0-8.97-7.27-16.24-16.24-16.24H22.24C13.27,6,6,13.27,6,22.24V254.76c0,8.97,7.27,16.24,16.24,16.24H112.76c8.97,0,16.24-7.27,16.24-16.24ZM87,17h0c0-3.31-2.69-6-6-6h-27c-3.31,0-6,2.69-6,6h0c0,3.31,2.69,6,6,6h27c3.31,0,6-2.69,6-6Zm37,237.46v-7.91c0-6.38-5.17-11.54-11.54-11.54H22.54c-6.38,0-11.54,5.17-11.54,11.54v7.91c0,6.38,5.17,11.54,11.54,11.54H112.46c6.38,0,11.54-5.17,11.54-11.54Zm-60.5-30.46c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm8,0c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Z"/></svg>
				<svg id="orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-2{fill:none;stroke:#ff3d00;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-2" d="M118,108v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm-81,30v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm54,30v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Z"/></svg>					
				<svg id="yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-3{fill:none;stroke:#ffeb3b;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-3" d="M118,256v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5ZM37,108v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm54-60v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5ZM37,198v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Z"/></svg>
				<svg id="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-4{fill:none;stroke:#4caf50;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-4" d="M37,256v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5ZM91,108v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm-27,60v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Z"/></svg>
				<svg id="blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-5{fill:none;stroke:#448aff;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-5" d="M64,256v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm0-181.46V41.46c0-4.67-3.79-8.46-8.46-8.46H25.46c-4.67,0-8.46,3.79-8.46,8.46v33.08c0,4.67,3.79,8.46,8.46,8.46h30.08c4.67,0,8.46-3.79,8.46-8.46Zm27,63.46v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm-54,30v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm13.28-110.49c0,5.4-4.38,9.78-9.78,9.78s-9.78-4.38-9.78-9.78,4.38-9.78,9.78-9.78,9.78,4.38,9.78,9.78Zm-9.78-14.17v-3.07m0,34.72v-3.07m14.3-14.3h3.07m-34.72,0h3.07m24.72-9.78l2.24-2.1m-25.32,23.76l2.24-2.1m20.21,.64l2.1,2.24m-23.76-25.32l2.1,2.24m87.28,30.79v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Z"/></svg>
				<svg id="purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-6{fill:none;stroke:#7e57c2;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-6" d="M91,78v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm-27,60v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm54,30v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Z"/></svg>
				<svg id="pink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 306"><defs><style>.cls-7{fill:none;stroke:#ff4081;stroke-miterlimit:10;stroke-width:1.5px;}</style></defs><path class="cls-7" d="M64,108v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm54,30v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm-54,60v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Zm27,58v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5ZM118,48v-10c0-2.76-2.24-5-5-5h-10c-2.76,0-5,2.24-5,5v10c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5Z"/></svg>
			{/if}
		</div>
	
	</div>

	<div id="about">

		<div class="section-header">
			<p><b>👩‍💻 About</b></p>
		</div>

		<div class="about-content">

			<div class="headshot">
				<img src={headshot} alt="Morgan Roberts Headshot">
			</div>

			<div class="tabs">
				<input name="nav" type="radio" class="nav exp-radio" id="exp" checked/>
				<div class="page exp-page">
					<div class="page-contents">
						<p class="skill-head" style="margin-bottom: 10px;">Experience</p>
	
						<div class="experience-instance" style="margin-bottom: -10px;">
							<div class="exp-header">
								<div class="right-side">
									<img src={intelLogo} alt="Intel Logo" style="width: 40px; height: 40px; border-radius: 3px; margin-right: 10px;">
									<p style="line-height: 20px; transform: translateY(-15px); color: {lightTheme ? '#666' : '#bbb'};"><b class="position"  style="color: {lightTheme ? 'black' : 'white'};">UI/UX Design Co-op</b><br/>Intel Olympics Technology Group – <i>San Francisco, CA</i></p>
								</div>
									<p class="left-side grey-text lighten-5" style="transform: translateY(-15px); color: {lightTheme ? '#666' : '#bbb'};">January 2022 - July 2022</p>
							</div>
						
						</div>
	
						<div class="experience-instance" style="margin-bottom: -10px;">
							<div class="exp-header">
								<div class="right-side">
									<img src={sharpspring} alt="UNC CS Logo" style="width: 40px; height: 40px; border-radius: 3px; margin-right: 10px; border: 1px solid gray;">
									<p style="line-height: 20px;transform: translateY(-15px); color: {lightTheme ? '#666' : '#bbb'};"><b class="position" style="color: {lightTheme ? 'black' : 'white'};">Web & Graphics Production Intern</b><br/>SharpSpring Technologies – <i>Gainesville, FL</i></p>
								</div>									
									<p class="left-side" style="transform: translateY(-15px); color: {lightTheme ? '#666' : '#bbb'};">April 2021 - August 2021</p>							
							</div>
					
						</div>
	
						<div class="experience-instance" style="margin-bottom: -10px;">
							<div class="exp-header">
								<div class="right-side">
									<img src={csxlLogo} alt="CSXL Logo" style="width: 40px; height: 40px; border-radius: 3px; margin-right: 10px; border: 1px solid #353535;">
									<p style="line-height: 20px;transform: translateY(-15px); color: {lightTheme ? '#666' : '#bbb'};" class="grey-text lighten-5"><b class="position white-text"  style="color: {lightTheme ? 'black' : 'white'};">UI/UX Design Workshop Lead</b><br/>Computer Science Experience Lab – <i class="grey-text lighten-5">Chapel Hill, NC</i></p>
								</div>
									<p class="left-side grey-text lighten-5" style="transform: translateY(-15px); color: {lightTheme ? '#666' : '#bbb'};">July 2022 - Present</p>
							</div>
						
						</div>
	
						<div class="experience-instance" style="margin-bottom: -10px;">
							<div class="exp-header">
								<div class="right-side">
									<img src={appTeamLogo} alt="App Team Carolina Logo" style="width: 40px; height: 40px; border-radius: 3px; margin-right: 10px;">
									<p style="line-height: 20px; transform: translateY(-15px); color: {lightTheme ? '#666' : '#bbb'};"><b class="position white-text"  style="color: {lightTheme ? 'black' : 'white'};">Chief Design Officer & Production Team Lead</b><br/>App Team Carolina – <i class="grey-text lighten-5">Chapel Hill, NC</i></p>
								</div>
									<p class="left-side" style="transform: translateY(-15px); color: {lightTheme ? '#666' : '#bbb'};">April 2021 - Present</p>
							</div>
						
						</div>
	
						<div class="experience-instance" style="border-bottom: 1px solid #353535; padding-bottom: -10px;">
							<div class="exp-header">
								<div class="right-side">
									<img src={uncCS} alt="UNC CS Logo" style="width: 40px; height: 40px; border-radius: 3px; margin-right: 10px;">
									<p style="line-height: 20px; transform: translateY(-15px); color: {lightTheme ? '#666' : '#bbb'};" class="grey-text lighten-5"><b class="position white-text"  style="color: {lightTheme ? 'black' : 'white'};">Undergraduate Learning Assistant - Web Development</b><br/>UNC Department of Computer Science – <i class="grey-text lighten-5">Chapel Hill, NC</i></p>
								</div>
									<p class="left-side grey-text lighten-5" style="transform: translateY(-15px); color: {lightTheme ? '#666' : '#bbb'};">January 2021 - Present</p>
							</div>
					
						</div>
	
						<br/>
						<p class="skill-head" style="margin-bottom: 10px; margin-top: 0;">Skills</p>
						<div class="skills">
							<ul class="skills-list">
								<li style="background-color: #42a5f550">Accessible Design</li>
								<li style="background-color: #ff408150">Adobe Creative Suite</li>
								<li style="background-color: #42a5f550">Apple HIG</li>
								<li style="background-color: #7c4dff50">Bootstrap</li>
								<li style="background-color: #7c4dff50">CSS</li>
								<li style="background-color: #ff408150">Figma</li>
								<li style="background-color: #7c4dff50">HTML</li>
								<li style="background-color: #7c4dff50">JavaScript</li>
								<li style="background-color: #7c4dff50">jQuery</li>
								<li style="background-color: #7c4dff50">Python</li>
								<li style="background-color: #7c4dff50">R</li>
								<li style="background-color: #7c4dff50">React.js</li>
								<li style="background-color: #ff408150">RStudio</li>
								<li style="background-color: #7c4dff50">SQL</li>
								<li style="background-color: #7c4dff50">Svelte.js</li>
								<li style="background-color: #7c4dff50">SwiftUI</li>
								<li style="background-color: #42a5f550">UI Design</li>
								<li style="background-color: #ff408150">Unity</li>
								<li style="background-color: #42a5f550">UX Research</li>
								<li style="background-color: #ff408150">Visual Studio Code</li>
								<li style="background-color: #ff408150">Xcode</li>
								
							</ul>
							<div class="skills-key" style="padding-left: 0; margin-left: 0;">
								<div class="key-list" style="padding-left: 0; margin-left: 0;">
									<div class="key-item" style="display: flex; font-size: 14px;"><div class="circle" style="transform: translateY(-10px); margin-right: 5px; height: 10px; background-color: #42a5f5; border-radius: 20px;"></div>Special Knowledge</div>
									<div class="key-item" style="display: flex; font-size: 14px;"><div class="circle" style="transform: translateY(-10px); margin-right: 5px; height: 10px; background-color: #7c4dff; border-radius: 20px;"></div> Languages & Frameworks</div>
									<div class="key-item" style="display: flex; font-size: 14px;"><div class="circle" style="transform: translateY(-10px); margin-right: 5px; height: 10px; background-color: #ff4081; border-radius: 20px;"></div> Software</div>
								</div>
							</div>
							<!-- <div class="resume-btn" style="border: 2px solid {lightTheme ? 'black' : 'white'}; display: flex; justify-content: center; width: 275px; border-radius: 5px;">
								<a href="/" style="display: flex; color: {lightTheme ? 'black' : 'white'}; font-weight: 500;">
									<Icon component={Svg} viewBox="0 0 24 24" style="width: 20px; margin: 3px;"><path fill="{lightTheme ? 'black' : 'white'}" d={mdiDownload} /></Icon>
									<p style="margin: 10px 3px; letter-spacing: 1.5px; font-size: 14px;">DOWNLOAD RESUME</p>
								</a>
							</div> -->
							<Button variant="unelevated" style="background-color: rgb(33, 33, 37);">
								<Icon component={Svg} viewBox="0 0 24 24" style="width: 20px; margin-right: 3px;"><path fill="white" d={mdiDownload} /></Icon>
								<Label>
									Download Resume
								</Label>
							</Button>
						</div>
					</div>
				</div>
				<label class="nav" for="exp" style="color: {lightTheme ? 'black' : 'white'};">
					<span>
						<!-- <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> -->
						EXPERIENCE
					</span>
				</label>
			  
				<!-- <input name="nav" type="radio" class="about-radio" id="about" />
				<div class="page about-page">
					<div class="page-contents">
						<h1>About</h1>
						<p>Amet consectetur adipisicing elit. Sed ipsam ad exercitationem, quo quae ullam, quidem laudantium corporis quis minima debitis nesciunt repellat. Quos dolore ex quis voluptas, minus ut?</p>
					</div>
				</div>
				<label class="nav" for="about">
					<span>
					<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
					About
						</span>
				</label> -->
			  
				<input name="nav" type="radio" class="bio-radio" id="bio" />
				<div class="page bio-page">
					<div class="page-contents">
						<p class="title">Hi, I'm Morgan. It's nice to meet you.</p>
						<p class="body" style="color: {lightTheme ? '#666' : '#bbb'};">
							I’m a UI/UX Designer from Chapel Hill, NC, and I am incredibly passionate about 
							creating digital products and experiences that are not only beautiful, but also 
							intuitive and accessible to users of all kinds.
							<br/><br/>
							I am a fourth-year student at the University of North Carolina at Chapel Hill 
							pursuing a B.A. in Interactive Media and a B.S. in Information Science. While I 
							expect to finish my undergraduate studies in May 2023, I hope to complete 
							an M.S. in Information Science at UNC-CH as well, which I expect to complete in 
							May 2025.
							<br/><br/>
							In addition to academics at UNC, I have also been an undergraduate teaching 
							assistant for a web design and development course for the past two years, I teach 
							a variety of workshops to other computer scientists and designers through the 
							Computer Science Experience Lab, and I have been Chief Design Officer and a 
							Production Team Lead of App Team Carolina for the past two years.
							<br/><br/>
							Most recently, I completed a 7-month co-op with Intel's Olympics Technology Group 
							where I worked with a small team to create prototypes of 6 different health and 
							wellness web apps. In this position, I worked with the team to conduct research on 
							the projects, and I was the primary product designer responsible for executing designs 
							in Figma, presenting designs to stakeholders, iterating on designs, and providing design 
							support to developers.
							<br/><br/> 
							While my primary focus is UI/UX Design, I also have programming and frontend 
							development experience, and I love building experiences as well as designing them.
						</p>
					</div>
				</div>
				<label class="nav" for="bio" style="color: {lightTheme ? 'black' : 'white'};">
					<span>
					<!-- <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> -->
					BIO
					</span>
				</label>
			</div>

		</div>

	</div>

	<!-- <div id="experience">
		<div class="section-header">
			<p><b>💻 Experience</b></p>
		</div>

		<div class="layout">
			<input name="nav" type="radio" class="nav home-radio" id="home" />
			<div class="page home-page">
				<div class="page-contents">
					<h1>Home</h1>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas voluptates dolore id aspernatur odit minus quidem deleniti ab rerum exercitationem dolores neque officiis explicabo possimus blanditiis sed, voluptatem ut. Ab?</p>
					<p><label for="about">Learn more</label></p>
				</div>
			</div>
			<label class="nav" for="home">
				<span>
					<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
					Home
				</span>
			</label> -->
		  
			<!-- <input name="nav" type="radio" class="about-radio" id="about" />
			<div class="page about-page">
				<div class="page-contents">
					<h1>About</h1>
					<p>Amet consectetur adipisicing elit. Sed ipsam ad exercitationem, quo quae ullam, quidem laudantium corporis quis minima debitis nesciunt repellat. Quos dolore ex quis voluptas, minus ut?</p>
				</div>
			</div>
			<label class="nav" for="about">
				<span>
				<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
				About
					</span>
			</label> -->
		  
			<!-- <input name="nav" type="radio" class="contact-radio" id="contact" />
			<div class="page contact-page">
				<div class="page-contents">
					<h1>Contact</h1>
					<p>Eaque accusamus magnam error unde nam, atque provident omnis fugiat quam necessitatibus vel nulla sed quibusdam fuga veritatis assumenda alias quidem asperiores?</p>
					<p><a href="#">Get in touch</a></p>
				</div>
			</div>
			<label class="nav" for="contact">
				<span>
				<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
				Contact
				</span>
			</label>
		</div>
	</div> -->

	<div id="projects">

		<div class="section-header">
			<p><b>🖋 Projects</b></p>
		</div>

		<div class="cards">

			<a href="/" class="card-container">

				<Card variant="outlined" style="height: 100%;">
					<Media class="card-media-16x9" aspectRatio="16x9">
					  <MediaContent>
						<img src={intel} alt="app team" style="width: 100%; height: 100%; border-radius: 3px 3px 0px 0px;">
					  </MediaContent>
					</Media>
					<Content style="padding: 0 15px 5px 15px;">
						<p style="margin-bottom: 8px; margin-bottom: 8px; font-size: 20px; color: {lightTheme ? 'black' : 'white'};">Intel Projects</p>
						<p style="font-size: 14px; line-height: 20px; margin-top: 0; color: {lightTheme ? '#757575' : '#9e9e9e'};">
							Check out the projects I worked on during my time at Intel including STREAM, SWING, 
							TREAD, RENDER, ROM, and a dashboard for clinicians to view data about their patients.
						</p>
					</Content>
				</Card>
	
			</a>

			<a href="/" class="card-container">

				<Card variant="outlined" style="height: 100%;">
					<Media class="card-media-16x9" aspectRatio="16x9">
					  <MediaContent>
						<img src={bubbly} alt="app team" style="width: 100%; height: 100%; border-radius: 3px 3px 0px 0px;">
					  </MediaContent>
					</Media>
					<Content style="padding: 0 15px 5px 15px;">
						<p style="margin-bottom: 8px; font-size: 20px; color: {lightTheme ? 'black' : 'white'};">Bubbly: CVI Literacy</p>
						<p style="font-size: 14px; line-height: 20px; margin-top: 0; color: {lightTheme ? '#757575' : '#9e9e9e'};">
							An iPad game consisting of targeted brain training exercises to help improve vision in 
							children and adolescents with Cortical Visual Impairment (CVI).
						</p>
					</Content>
				</Card>
	
			</a>

			<a href="/" class="card-container">

				<Card variant="outlined" style="height: 100%;">
					<Media class="card-media-16x9" aspectRatio="16x9">
					  <MediaContent>
						<img src={insomnia} alt="app team" style="width: 100%; height: 100%; border-radius: 3px 3px 0px 0px;">
					  </MediaContent>
					</Media>
					<Content style="padding: 0 15px 5px 15px;">
						<p style="margin-bottom: 8px; font-size: 20px; color: {lightTheme ? 'black' : 'white'};">Insomnia Cookies App Redesign</p>
						<p style="font-size: 14px; line-height: 20px; margin-top: 0; color: {lightTheme ? '#757575' : '#9e9e9e'};">
							A redesign concept of Insomnia Cookies' mobile app intended to improve the user 
							experience and streamline the cookie-buying process.
						</p>
					</Content>
				</Card>
	
			</a>

			<a href="/" class="card-container">

				<Card variant="outlined" style="height: 100%;">
					<Media class="card-media-16x9" aspectRatio="16x9">
					  <MediaContent>
						<img src={appTeam} alt="app team" style="width: 100%; height: 100%; border-radius: 3px 3px 0px 0px;">
					  </MediaContent>
					</Media>
					<Content style="padding: 0 15px 5px 15px;">
						<p style="margin-bottom: 8px; font-size: 20px; color: {lightTheme ? 'black' : 'white'};">App Team Carolina Website</p>
						<p style="font-size: 14px; line-height: 20px; margin-top: 0; color: {lightTheme ? '#757575' : '#9e9e9e'};">
							An informational website for and about App Team Carolina built with HTML and CSS.
						</p>
					</Content>
				</Card>
	
			</a>

			<a href="/" class="card-container">

				<Card variant="outlined" style="height: 100%;">
					<Media class="card-media-16x9" aspectRatio="16x9">
					  <MediaContent>
						<img src={centible} alt="app team" style="width: 100%; height: 100%; border-radius: 3px 3px 0px 0px;">
					  </MediaContent>
					</Media>
					<Content style="padding: 0 15px 5px 15px;">
						<p style="margin-bottom: 8px; font-size: 20px; color: {lightTheme ? 'black' : 'white'};">Centible</p>
						<p style="font-size: 14px; line-height: 20px; margin-top: 0; color: {lightTheme ? '#757575' : '#9e9e9e'};">
							An iOS app intended to help college students manage their finances and build toward a 
							healthy financial lifestyle by allowing users to sort transactions into custom categories.
						</p>
					</Content>
				</Card>
	
			</a>

			<a href="/" class="card-container">

				<Card variant="outlined" style="height: 100%;">
					<Media class="card-media-16x9" aspectRatio="16x9">
					  <MediaContent>
						<img src={chromaticWorld} alt="app team" style="width: 100%; height: 100%; border-radius: 3px 3px 0px 0px;">
					  </MediaContent>
					</Media>
					<Content style="padding: 0 15px 5px 15px;">
						<p style="margin-bottom: 8px; font-size: 20px; color: {lightTheme ? 'black' : 'white'};">chromatic.world</p>
						<p style="font-size: 14px; line-height: 20px; margin-top: 0; color: {lightTheme ? '#757575' : '#9e9e9e'};">
							An interactive web app developed with Svelte.js featuring a different popular game for 
							each color of the rainbow and a fully functional login system.
						</p>
					</Content>
				</Card>
	
			</a>

			<a href="/" class="card-container">

				<Card variant="outlined" style="height: 100%;">
					<Media class="card-media-16x9" aspectRatio="16x9">
					  <MediaContent>
						<img src={tetris} alt="app team" style="width: 100%; height: 100%; border-radius: 3px 3px 0px 0px;">
					  </MediaContent>
					</Media>
					<Content style="padding: 0 15px 5px 15px;">
						<p style="margin-bottom: 8px; font-size: 20px; color: {lightTheme ? 'black' : 'white'};">Tetris</p>
						<p style="font-size: 14px; line-height: 20px; margin-top: 0; color: {lightTheme ? '#757575' : '#9e9e9e'};">
							A clean and simple redesign of the popular game 'Tetris' intended to make the experience 
							more accessible for users with visual impairments.
						</p>
					</Content>
				</Card>
	
			</a>

			<a href="/" class="card-container">

				<Card variant="outlined" style="height: 100%;">
					<Media class="card-media-16x9" aspectRatio="16x9">
					  <MediaContent>
						<img src={weather} alt="app team" style="width: 100%; height: 100%; border-radius: 3px 3px 0px 0px;">
					  </MediaContent>
					</Media>
					<Content style="padding: 0 15px 5px 15px;">
						<p style="margin-bottom: 8px; font-size: 20px; color: {lightTheme ? 'black' : 'white'};">Weather</p>
						<p style="font-size: 14px; line-height: 20px; margin-top: 0; color: {lightTheme ? '#757575' : '#9e9e9e'};">
							A simple, dynamic iOS weather app that shows sunrise and sunset animations and the 
							current phase of the moon.
						</p>
					</Content>
				</Card>
	
			</a>

			<a href="/" class="card-container">

				<Card variant="outlined" style="height: 100%;">
					<Media class="card-media-16x9" aspectRatio="16x9">
					  <MediaContent>
						<img src={convictions} alt="app team" style="width: 100%; height: 100%; border-radius: 3px 3px 0px 0px;">
					  </MediaContent>
					</Media>
					<Content style="padding: 0 15px 5px 15px;">
						<p style="margin-bottom: 8px; font-size: 20px; color: {lightTheme ? 'black' : 'white'};">A Long Road to Freedom</p>
						<p style="font-size: 14px; line-height: 20px; margin-top: 0; color: {lightTheme ? '#757575' : '#9e9e9e'};">
							A news-style data visualization site made using HTML, CSS, JavaScript, Ajax with 
							JSON data, and several chart-making softwares.
						</p>
					</Content>
				</Card>
	
			</a>

		</div>

	</div>

	<footer>
		<p>Made with <b style="color: #ff3d00;">&hearts;</b> by Morgan Roberts &copy; 2022</p>
	</footer>

</AutoAdjust>


<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');	
	a {
		text-decoration: none;
		font-family: 'Inter', sans-serif;
	}
	footer {
		padding: 0 50px;
		text-align: center;
		font-family: 'Inter', sans-serif;
		font-size: 14px;
	}
	.body {
		font-size: 16px;
		line-height: 24px;
	}
	.title {
		font-size: 32px;
	}
	.cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.card-container {
		width: 32.5%;
		margin-bottom: 20px;
		transition: 0.2s ease-in-out;
	}
	.card-container:hover {
		/* transform: scale(1.02); */
		cursor: default;
	}
	.section-header p {
		font-family: 'Inter', sans-serif;
		font-size: 24px;
	}
	.nav {
		display: flex;
		list-style: none;
		justify-content: space-between;
		width: 15vw;
		margin-right: 50px;
	}
	.nav li a {
		text-decoration: none;
		opacity: 0.5;
		transition: 0.2s ease-in-out;
		font-weight: bold;
	}
	.nav li a:hover {
		opacity: 1;
	}
	#projects, #about {
		padding: 0px 50px 50px 50px;
	}
	#landing {
		display: flex;
		justify-content: space-between;
		height: 90vh;
		width: 100vw;
		margin-top: auto;
		margin-bottom: auto;
		margin-bottom: 5vh;
		font-family: 'Inter', sans-serif;
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
	}
	.about-content {
		display: flex;
	}
	.headshot img {
		width: 36vw;
		border-radius: 5px;
	}
	.exp-header {
		display: flex;
		justify-content: space-between;
		margin-top: 5px;
	}
	.skills-list, .key-list {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.skills-list li {
		padding: 3px 8px;
		margin: 3px;
		border-radius: 5px;
	}
	.key-list div {
		padding: 3px 8px;
		margin: 10px 3px;
		border-radius: 5px;
	}
	.right-side {
		display: flex;
	}




	.tabs label {
		cursor: pointer;
		user-select: none;
		text-decoration: none;
		display: inline-block;
		color: inherit;
		transition: border 0.4s;
		/* padding: 3px 2px; */
		font-weight: 600;
		letter-spacing: 1.5px;
	}
	.tabs {
		display: grid;
		height: 100%;
		width: 100%;
		overflow: hidden;
		grid-template-rows: 50px 1fr;
		grid-template-columns: 1fr 1fr;
		margin-left: 25px;
		font-family: 'Inter', sans-serif;
	}

	input[type=radio] {
		display: none;
	}

	label.nav {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		/* background: #ecf0f1; */
		user-select: none;
		opacity: 0.5;
		/* padding-left: 0; */
		width: 100%;
	}
	input[type=radio]:checked + .page + label.nav {
		/* background: #9b59b6; */
		/* color: #ffffff; */
		border-bottom: 2px solid #555;
		opacity: 1;
		/* padding-left: 20px; */
	}
	input + .page + label.nav {
		transition: 0.2s ease-in-out;
	}
	input:hover + .page + label.nav {
		color: white;

	}
	/* input[type=radio]:checked + .page + label.nav span {
	padding-left: 20px;
	} */
	/* input[type=radio]:checked + .page + label.nav svg {
	opacity: 1;
	} */
	label.nav span {
	/* padding-left: 0px; */
		position: relative;
	}
	/* label.nav svg {
	left: 0;
	top: -3px;
	position: absolute;
	width: 15px;
	opacity: 0;
	transition: opacity 0.2s;
	} */

	.page {
		grid-column-start: 1;
		grid-row-start: 2;
		grid-column-end: span 3;
		display: flex;
		align-items: center;
	}

	.page-contents > * {
		opacity: 0;
		/* transform: translateY(20px); */
		transition: opacity 0.3s;
	}
	.skill-head {
		font-size: 22px;
	}
	/* .page-contents > *:nth-child(1) {
		transition-delay: 0.2s;
	}
	.page-contents > *:nth-child(2) {
		transition-delay: 0.4s;
	}
	.page-contents > *:nth-child(3) {
		transition-delay: 0.6s;
	}
	.page-contents > *:nth-child(4) {
		transition-delay: 0.8s;
	}
	.page-contents > *:nth-child(5) {
		transition-delay: 1s;
	}
	.page-contents > *:nth-child(6) {
		transition-delay: 1.2s;
	}
	.page-contents > *:nth-child(7) {
		transition-delay: 1.4s;
	}
	.page-contents > *:nth-child(8) {
		transition-delay: 1.6s;
	}
	.page-contents > *:nth-child(9) {
		transition-delay: 1.8s;
	}
	.page-contents > *:nth-child(10) {
		transition-delay: 2s;
	}
	.page-contents > *:nth-child(11) {
		transition-delay: 2.2s;
	}
	.page-contents > *:nth-child(12) {
		transition-delay: 2.4s;
	}
	.page-contents > *:nth-child(13) {
		transition-delay: 2.6s;
	}
	.page-contents > *:nth-child(14) {
		transition-delay: 2.8s;
	}
	.page-contents > *:nth-child(15) {
		transition-delay: 3s;
	}
	.page-contents > *:nth-child(16) {
		transition-delay: 3.2s;
	}
	.page-contents > *:nth-child(17) {
		transition-delay: 3.4s;
	}
	.page-contents > *:nth-child(18) {
		transition-delay: 3.6s;
	}
	.page-contents > *:nth-child(19) {
		transition-delay: 3.8s;
	}
	.page-contents > *:nth-child(20) {
		transition-delay: 4s;
	} */

	input[type=radio] + .page {
		transition: transform 0.2s;
		transform: translateX(100%);
	}

	input[type=radio]:checked + .page {
	transform: translateX(0%);
	}
	input[type=radio]:checked + .page .page-contents > * {
		opacity: 1;
		transform: translateY(0px);
	}

	.page-contents {
		margin: 0 auto;
	}
	@media (max-width: 1000px) {
		.about-content {
			flex-direction: column;
		}
		.headshot img {
			width: 100%;
		}
		.experience-instance {
			font-size: 12px;
		}
		.tabs {
			margin-left: 0px;
		}
		.card-container {
			width: 49%;
		}
		.right-side {
			margin-right: 25px;
		}
	}

	@media (max-width: 600px) {
		.about-content {
			flex-direction: column;
		}
		.headshot img {
			width: 100%;
		}
		.experience-instance {
			font-size: 14px;
		}
		.tabs {
			margin-left: 0px;
		}
		.card-container {
			width: 100%;
		}
		.nav {
			width: 30vw;
		}
		.exp-page {
			transform: translateY(-50px) !important;
		}
		#landing {
			flex-direction: column;
			margin-top: -20vh;
			margin-bottom: 25vh;
			justify-content: center;
			padding: none !important;
		}
		.landing-text {
			width: 80vw;
			margin: 10vw;
		}
		.landing-graphic {
			margin: 0 auto;
			width: 70%;
		}
		.landing-graphic svg {
			margin: 0 auto;
			width: 70%;
			margin-left: 18vw;
		}
		.nav {
			width: 20vw;
		}
		#landing-head {
			font-size: 34px !important;
		}
		#landing-subhead {
			font-size: 20px !important;
		}
	}
	

</style>