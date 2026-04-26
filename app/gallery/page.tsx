"use client"

import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
import { gallery } from "@/app/data/gallery"

export default function GalleryPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Gallery</h1>
            <p className="text-lg text-neutral-500">A glimpse into our past events, workshops, and memorable moments</p>
          </div>

          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gallery.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl bg-neutral-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-neutral-200">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="
                        h-full w-full object-cover 
                        transition-transform duration-700 
                        group-hover:scale-110
                      "
                      draggable={false}
                    />

                    <div
                      className="
                        absolute inset-0 
                        bg-gradient-to-t from-black/80 via-black/30 to-transparent 
                        opacity-0 md:opacity-0 md:group-hover:opacity-100 
                        transition-opacity duration-300
                      "
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
                    <p className="text-sm font-medium text-neutral-300">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  )
}
