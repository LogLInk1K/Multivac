import fs from 'node:fs';
import path from 'node:path';

// 缓存文件名映射表
let fileNameMapCache: Map<string, string> | null = null;

/**
 * 获取文件名映射表（小写 -> 原始大小写）
 */
function getFileNameMap(): Map<string, string> {
	if (fileNameMapCache) {
		return fileNameMapCache;
	}

	const postDir = path.join(process.cwd(), 'post');
	const files = fs.readdirSync(postDir);
	const map = new Map<string, string>();

	files.forEach(file => {
		if (file.endsWith('.md') || file.endsWith('.mdx')) {
			const nameWithoutExt = file.replace(/\.(md|mdx)$/, '');
			const lowerCase = nameWithoutExt.toLowerCase();
			map.set(lowerCase, nameWithoutExt);
		}
	});

	fileNameMapCache = map;
	return map;
}

/**
 * 根据 post.id（小写）获取原始文件名（保持大小写）
 */
export function getOriginalFileName(postId: string): string {
	const fileNameMap = getFileNameMap();
	return fileNameMap.get(postId.toLowerCase()) || postId;
}
