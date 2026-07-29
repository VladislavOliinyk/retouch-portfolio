import Image, { ImageProps } from "next/image";

export default function PortfolioImage(props: ImageProps) {
  return (
    <Image
      {...props}
      unoptimized
      sizes="
        (max-width:768px) 100vw,
        (max-width:1200px) 50vw,
        33vw
      "
      quality={95}
    />
  );
}