<script lang="ts">
	import SearchUser from '$lib/SearchUser.svelte'
	import Head from '$lib/Head.svelte'
	import LoginButton from '$lib/LoginButton.svelte'
	import type { PageData } from './$types'

	export const hydrate = false

	export let data: PageData
	export let loggedIn: boolean = data.loggedIn
</script>

<svelte:head>
	<title>SkyBlock Stats</title>
</svelte:head>

<Head
	title="SkyBlock Stats"
	description="Check SkyBlock stats, see leaderboards, mayors, and way more."
/>
<a class="github" href="https://github.com/skyblockstats/skyblock-stats">
	<img src="/github-mark-light.png" alt="View source on GitHub" />
</a>

<main>
	<LoginButton {loggedIn} />
	<section class="title-section">
		<h1>SkyBlock Stats</h1>
		<SearchUser>
			<button>View Profiles</button>
		</SearchUser>
	</section>

	<hr style="margin: 25vh 0 2em 0" />

	<section>
		<h2>Other SkyBlock tools</h2>
		<ul id="other-tools-list">
			<li><a href="/auctionprices">Auction prices</a></li>
			<li><a href="/leaderboards">Leaderboards</a></li>
			<li><a href="/election">Mayor Election Status</a></li>
			<li><a href="/items">Item List</a></li>
		</ul>
	</section>

	<section>
		<h2>Info</h2>
		<p>Website originally made by <a href="https://matdoes.dev">mat</a> & revived by <a href="https://youtube.com/@_thomas">Thomas</a>.</p>
		<p>
			Official hangout/support Discord:
			<a href="//discord.gg/bUE3r3Jckc">discord.gg/bUE3r3Jckc</a>.
		</p>
		<p>
			Source code:
			<a href="//github.com/tgwaffles/skyblock-stats">github.com/tgwaffles/skyblock-stats</a
			>.
		</p>
		<p>
			Resource packs: <a href="//furfsky.net">Furfsky Reborn</a> (default),
			<a href="//packshq.com">PacksHQ</a>,
			<a href="//hypixel.net/threads/2138599">Furfsky</a>,
			<a href="//hypixel.net/threads/2239953">Ectoplasm</a>,
			<a href="//hypixel.net/threads/3470904">RNBW</a>,
			<a href="//hypixel.net/threads/4174260">Hypixel+</a>,
			<a href="//hypixel.net/threads/3597207">Worlds and Beyond</a>.
		</p>
		<p>
			Minecraft skin API: <a href="//mc-heads.net">mc-heads.net</a> for 3d renders.
		</p>
		<p>Emojis: <a href="//twemoji.twitter.com/">Twemoji</a>.</p>
		<p>Font: <a href="//brailleinstitute.org/freefont">Atkinson Hyperlegible</a>.</p>
		<p class="secret">Thank you to Duckie Cousin Gaming for the idea to add harp leaderboards.</p>
	</section>
</main>

<style>
	h1 {
		text-align: center;
	}

	.title-section {
		margin: 0 auto;
		width: fit-content;
	}

	li {
		padding: 0.2em 0;
	}

	.github {
		position: absolute;
		top: 0.5rem;
		left: 0.5rem;
		opacity: 0.2;
		transition: opacity 200ms;
	}
	.github:hover {
		opacity: 0.9;
	}
	.github > img {
		width: 2rem;
	}

	.secret {
		color: var(--theme-main-background);
		margin: 0;
		font-size: 6pt;
		margin-top: -0.5rem;
	}
</style>
