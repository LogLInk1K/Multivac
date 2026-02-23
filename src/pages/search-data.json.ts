import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getOriginalFileName } from '../utils/getOriginalFileName';

export const GET: APIRoute = async () => {
  const allPosts = (await getCollection('post', (post) => !post.data.draft && typeof post.body === 'string'))
    .filter((post) => !post.data.friends && !post.data.friendGroups && !post.data.moments)
    .map((post) => ({
      id: post.id,
      originalFileName: getOriginalFileName(post.id),
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      tags: post.data.tags,
      category: post.data.category,
      body: post.body,
    }));

  return new Response(JSON.stringify(allPosts), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
