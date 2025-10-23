/**
 * Extracts the slug from a blog post file path.
 * Handles both forward slashes (Unix) and backslashes (Windows).
 * 
 * @param filePath - The file path of the blog post
 * @returns The slug extracted from the filename (without .md extension)
 */
export function getSlugFromFilePath(filePath: string): string {
    // Normalize path separators and get the last part
    const fileName = filePath.split(/[/\\]/).pop() || '';
    // Remove .md extension
    return fileName.replace(/\.md$/, '');
}
