/**
 * 加密/解密工具函数
 * 使用 Web Crypto API 实现 AES-GCM 加密
 */

/**
 * 从密码生成加密密钥
 */
async function deriveKey(password: string, salt: Uint8Array): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const passwordBuffer = encoder.encode(password);

  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    passwordBuffer,
    'PBKDF2',
    false,
    ['deriveBits', 'deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt as BufferSource,
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

/**
 * 加密内容
 */
export async function encryptContent(content: string, password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(content);

  // 生成随机盐和IV
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));

  // 派生密钥
  const key = await deriveKey(password, salt);

  // 加密数据
  const encryptedData = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: iv },
    key,
    data
  );

  // 组合 salt + iv + 加密数据
  const combined = new Uint8Array(salt.length + iv.length + encryptedData.byteLength);
  combined.set(salt, 0);
  combined.set(iv, salt.length);
  combined.set(new Uint8Array(encryptedData), salt.length + iv.length);

  // 转换为 Base64
  return btoa(String.fromCharCode(...combined));
}

/**
 * 解密内容
 */
export async function decryptContent(encryptedContent: string, password: string): Promise<string> {
  try {
    // 从 Base64 解码
    const combined = Uint8Array.from(atob(encryptedContent), c => c.charCodeAt(0));

    // 提取 salt, iv 和加密数据
    const salt = combined.slice(0, 16);
    const iv = combined.slice(16, 28);
    const encryptedData = combined.slice(28);

    // 派生密钥
    const key = await deriveKey(password, salt);

    // 解密数据
    const decryptedData = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: iv },
      key,
      encryptedData
    );

    // 转换为字符串
    const decoder = new TextDecoder();
    return decoder.decode(decryptedData);
  } catch (error) {
    throw new Error('解密失败：密码错误或数据损坏');
  }
}
