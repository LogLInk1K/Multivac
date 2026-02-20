import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

const defaultCover = '/img/df-cover.webp';

export async function GET(context) {
	const posts = await getCollection('post', ({ data }) => !data.draft && !data.friends && !data.friendGroups && !data.moments);
	const sortedPosts = posts.sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate));
	
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: sortedPosts.map((post) => {
			const coverImage = post.data.heroImage || defaultCover;
			const coverUrl = new URL(coverImage, context.site).toString();
			const imageType = coverImage.endsWith('.webp') ? 'image/webp' : coverImage.endsWith('.png') ? 'image/png' : 'image/jpeg';
			const author = post.data.author || '波罗歌';
			const tags = post.data.tags || [];
			
			return {
				title: post.data.title,
				pubDate: post.data.pubDate,
				description: post.data.description,
				link: `/p/${post.id}.html`,
				customData: `<author>${author}</author>
<enclosure url="${coverUrl}" type="${imageType}"/>
${tags.map(tag => `<category>${tag}</category>`).join('\n')}`,
			};
		}),
		customData: `<language>zh-CN</language>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
<generator>波罗歌的博客</generator>`,
	});
}
