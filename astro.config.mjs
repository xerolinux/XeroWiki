// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
	site: 'https://wiki.xerolinux.xyz',
	markdown: {
		rehypePlugins: [
			[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
		],
	},
	integrations: [
		starlight({
			title: 'XeroLinux Wiki',
			logo: {
				src: './src/assets/logo.png',
			},
			favicon: '/favicon.ico',
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/XeroLinuxDev' },
				{ icon: 'youtube', label: 'YouTube', href: 'https://youtube.com/XeroLinuxOfficial' },
				{ icon: 'x.com', label: 'X', href: 'https://twitter.com/xerolinuxop' },
				{ icon: 'mastodon', label: 'Mastodon', href: 'https://fosstodon.org/@xerolinux' },
			],
			sidebar: [
				{ label: '⌂ Home', slug: '' },
				{ label: '◎ The Distro', slug: 'distro' },
				{ label: '☰ XeroInstall', slug: 'xero-install' },
				{ label: '✦ XeroLinux Tool', slug: 'xero-tool' },
				{ label: '❖ Contributions', slug: 'contributions' },
				{ label: '⁉ XeroLinux F.A.Q.', slug: 'faq' },
			],
		}),
	],
});
