export function getCdnUrl(path: string): string {
  if (!path) return '';
  
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL || '';
  
  if (!cdnUrl) {
    return path;
  }
  
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const cleanCdnUrl = cdnUrl.endsWith('/') ? cdnUrl.slice(0, -1) : cdnUrl;
  
  return `${cleanCdnUrl}/${cleanPath}`;
}

