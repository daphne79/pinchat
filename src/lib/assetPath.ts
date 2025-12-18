/**
 * Get the correct asset path for public assets, accounting for base path
 * @param path - The asset path (e.g., '/lovable-uploads/image.png')
 * @returns The path with base URL prepended (e.g., '/pinchat/lovable-uploads/image.png')
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Get base URL from Vite (e.g., '/pinchat/' or '/')
  const baseUrl = import.meta.env.BASE_URL;
  // Combine base URL with path, ensuring proper slashes
  return `${baseUrl}${cleanPath}`;
}


