// import adapter from '@sveltejs/adapter-cloudflare'
import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import dotenv from 'dotenv'

dotenv.config({path: process.env.ENV_FILE ? process.env.ENV_FILE : '.env'})


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
	}
}

export default config
