import React from 'react';

export default function TestimonialBlock({ testimonials }: any) {
  return (
    <section className="bg-gray-100 py-8 mb-8">
      <h2 className="text-center text-2xl mb-6 font-bold">Testimonials</h2>
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3">
        {testimonials?.map((t: any) => (
          <blockquote key={t.id} className="p-4 bg-white shadow rounded-xl">
            <p className="text-sm italic">"{t.quote}"</p>
            <footer className="mt-2 text-xs font-semibold">
              {t.author}, {t.position}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
