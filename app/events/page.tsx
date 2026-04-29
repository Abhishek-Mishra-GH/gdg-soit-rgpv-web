"use client"

import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
import { Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { events } from "@/app/data/events"

export default function EventsPage() {
  const router = useRouter()
  const featuredEvent = events.find((e) => e.featured)
  const regularEvents = events.filter((e) => !e.featured)

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white text-neutral-900">

        {/* --- Header --- */}
        <section className="pt-32 pb-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                Connect. Learn.<br />
                <span className="text-neutral-400">Grow Together.</span>
              </h1>
              <p className="text-xl text-neutral-600 max-w-2xl">
                From hands-on workshops to large-scale conferences, join us to explore the future of technology.
              </p>
            </motion.div>

            {/* --- Featured Event (Hero Card) --- */}
            {featuredEvent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onClick={() => router.push(`/eventPage`)}
                className="group relative w-full h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer"
              >
                <Image
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-medium mb-4">
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                    <span>Featured Event</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">{featuredEvent.title}</h2>
                  <p className="text-lg md:text-xl text-neutral-200 mb-8 line-clamp-2">
                    {featuredEvent.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-neutral-400" />
                      <span>{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-neutral-400" />
                      <span>{featuredEvent.location}</span>
                    </div>
                    <div className="ml-auto md:ml-4 flex items-center gap-2 text-white group-hover:translate-x-2 transition-transform">
                      View Details <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* --- Upcoming Events Grid --- */}
        <section className="py-20 px-6 md:px-12 bg-neutral-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">Events</h2>
              <div className="hidden md:block text-sm text-neutral-500 font-medium">
                Showing {regularEvents.length} events
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => router.push(`/events/${event.id}`)}
                  className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-neutral-200 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col"
                >
                  {/* Image Area */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 text-xs font-bold tracking-wide uppercase bg-white/90 backdrop-blur-sm rounded-full text-neutral-900 shadow-sm">
                        {event.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-auto">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-neutral-500 text-sm leading-relaxed mb-6 line-clamp-2">
                        {event.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-neutral-100 mt-6 space-y-3">
                      <div className="flex items-center gap-3 text-sm text-neutral-600">
                        <Calendar className="w-4 h-4 text-neutral-400" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-neutral-600">
                        <MapPin className="w-4 h-4 text-neutral-400" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </SmoothScroll>
  )
}