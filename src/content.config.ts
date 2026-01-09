import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const post = defineCollection({
	loader: glob({ base: './post', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string().min(1, { message: '标题不能为空' }),
			description: z.string().min(10, { message: '描述至少需要10个字符' }),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).default([]),
			category: z.string().optional(),
			draft: z.boolean().default(false),
			author: z.string().default('Anonymous'),
			readingTime: z.number().optional(),
		}),
});

export const collections = { post };
