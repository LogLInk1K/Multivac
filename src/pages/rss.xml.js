import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const posts = await getCollection('post', ({ data }) => !data.draft && !data.friends && !data.friendGroups && !data.moments);
	// 按发布日期降序排序，确保最新文章显示在最前面
	const sortedPosts = posts.sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate));
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: sortedPosts.map((post) => ({
			...post.data,
			link: `/p/${post.id}.html`,
		})),
	});
}
