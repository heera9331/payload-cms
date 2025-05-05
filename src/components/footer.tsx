// components/Footer.tsx
import React from 'react';
import { getFooter } from '@/lib/posts';
import Link from 'next/link';

export default async function Footer() {
  const footer = await getFooter();

  if (!footer) return null;

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Text */}
        <div className="mb-4 text-center text-sm">
          {footer.footerText}
        </div>

        {/* Social Links */}
        {footer.socialLinks?.length > 0 && (
          <div className="flex justify-center space-x-6">
            {footer.socialLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                {link.platform}
              </Link>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
