import React from "react";
import { getHeader } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

export default async function Header() {
  const header = await getHeader();

  if (!header) return null;

  return (
    <header className="bg-white shadow-md px-10">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          {header.logo?.url && (
            <Link href="/">
              <Image
                src={header.logo.url}
                alt="Logo"
                width={100}
                height={100}
                className="h-10 w-auto object-contain"
              />
            </Link>
          )}
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-sm font-medium text-gray-700">
            {header.navLinks?.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className="hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
