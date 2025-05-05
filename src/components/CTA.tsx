import React from 'react';
import Link from 'next/link';

export default function CTA({ heading, subheading, button }: any) {
  return (
    <section className="bg-blue-600 text-white text-center py-10 mb-10">
      <h2 className="text-3xl font-bold">{heading}</h2>
      {subheading && <p className="mt-2 mb-4 text-lg">{subheading}</p>}
      {button?.url && (
        <Link
          href={button.url}
          className="bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition"
        >
          {button.label}
        </Link>
      )}
    </section>
  );
}
