import React from 'react';

export default function GalleryBlock({ images }: any) {
  console.log(images);
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold font-semibold mb-4">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images?.map((img: any) => (
          <div key={img.id}>
            <img src={img?.image?.url} alt={img.caption || 'Image'} className="rounded-xl shadow h-[250px] object-cover" />
            {img.caption && <p className="text-sm mt-1 text-center">{img.caption}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
