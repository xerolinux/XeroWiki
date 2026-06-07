// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
	site: 'https://wiki.xerolinux.xyz',
	compressHTML: true,
	build: {
		inlineStylesheets: 'auto',
	},
	markdown: {
		gfm: true,
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
			head: [
				{ tag: 'script', attrs: { src: '/lightbox.js', defer: true } },
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' } },
				{ tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&display=swap' } },
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/XeroLinux' },
				{ icon: 'youtube', label: 'YouTube', href: 'https://youtube.com/XeroLinuxOfficial' },
				{ icon: 'x.com', label: 'X', href: 'https://twitter.com/xerolinuxop' },
				{ icon: 'mastodon', label: 'Mastodon', href: 'https://fosstodon.org/@xerolinux' },
			],
			sidebar: [
				{ label: '⌂ Home', slug: '' },
				{ label: '◎ The Distro', slug: 'distro' },
				{ label: '☰ XeroInstall', slug: 'xero-install' },
				{ label: '✦ XeroLinux Tools', slug: 'xero-tools' },
				{ label: '⊞ Package Manager', slug: 'xpackagemanager' },
				{ label: '◉ Arch ARM Flasher', slug: 'xero-archarm' },
				{ label: '◈ Hyprland + Noctalia', slug: 'hypr-noc' },
				{ label: '❖ User Contributions', slug: 'contributions' },
				{ label: '⁉ The XeroLinux F.A.Q', slug: 'faq' },
			],
		}),
	],
});
