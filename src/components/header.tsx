import Image from "next/image";

export const Header = () => (
  <>
    <Image
      className="dark:invert my-2"
      src="/next.svg"
      alt="Next.js logo"
      width={100}
      height={20}
      priority
    />
    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
      To get started, edit the page.tsx file.
    </h1>
  </>
);
