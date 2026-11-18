/** Adds the GitHub Pages sub-folder to a file in /public. */
export function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
