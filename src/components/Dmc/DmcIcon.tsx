import { assetPath } from "@/lib/assetPath";

/** Icon exported from the Figma file, shown at its original size. */
export default function DmcIcon({ name }: { name: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={assetPath(`/images/figma/${name}.svg`)} alt="" aria-hidden="true" style={{ flexShrink: 0 }} />;
}
