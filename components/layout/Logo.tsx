import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group">

      <h1
        className="
          text-3xl
          tracking-[-0.05em]
          font-medium
          transition-opacity
          duration-300
          group-hover:opacity-60
        "
      >
        Lily Oliinyk
      </h1>

      <p
        className="
          mt-2
          text-sm
          uppercase
          tracking-[0.3em]
          text-neutral-500
        "
      >
        Photo Retoucher
      </p>

    </Link>
  );
}