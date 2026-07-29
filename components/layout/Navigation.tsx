import Link from "next/link";

import { navigation } from "@/config/navigation";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-10">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="
                text-sm
                tracking-wide
                text-neutral-600
                transition-opacity
                duration-300
                hover:opacity-50
              "
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}