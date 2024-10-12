import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config({path: process.env.ENV_FILE ? process.env.ENV_FILE : '.env'})

let robotsTxt = ''

if (process.env.IS_MIRROR) {
	robotsTxt += `User-agent: *\nDisallow: /\n`
}

await fs.promises.writeFile(
	'static/robots.txt',
	robotsTxt,
	{ encoding: 'utf8' }
)