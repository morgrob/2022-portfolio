// import adapter from '@sveltejs/adapter-auto';
// import preprocess from 'svelte-preprocess';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	// Consult https://github.com/sveltejs/svelte-preprocess
// 	// for more information about preprocessors
// 	preprocess: preprocess(),

// 	kit: {
// 		adapter: adapter()
// 	}
// };

// export default config;

// import adapter from '@sveltejs/adapter-static';
// /** u/type {import('@sveltejs/kit').Config} */
// const config = {
// kit: {
// adapter: adapter({
// pages: 'public',
// assets: 'public',
// fallback: null,
// precompress: false
// }),
// prerender: {
// default: true
// }
// }
// }
// export default config;





// import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],

	kit: {
		adapter: adapter({
			pages: 'public',
            assets: 'public',
            fallback: "index.html",
            precompress: false
            })
	}
};

export default config;






