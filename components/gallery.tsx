"use client"

import { motion } from "framer-motion"
import { memo, useMemo, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { gallery, GalleryItem } from "@/app/data/gallery"

// Duplicate enough times to fill widely on large screens
const REPEATS = 4

// --- Simple Gallery Square ---
const GallerySquare = memo(function GallerySquare({ title, category, imageUrl }: GalleryItem) {
    return (
        <div className="group relative w-64 h-64 flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
            <img
                src={imageUrl}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                draggable={false}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold leading-tight">{title}</h3>
                <p className="text-sm font-medium text-neutral-300">{category}</p>
            </div>
        </div>
    )
})

// --- Single-line Marquee (smooth + flicker-free) ---
function SingleLineMarquee({
    items,
    pxPerSecond = 30,
    gapPx = 24,
    onCardClick,
}: {
    items: GalleryItem[]
    pxPerSecond?: number
    gapPx?: number
    onCardClick: (m: GalleryItem) => void
}) {
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const trackRef = useRef<HTMLDivElement | null>(null)
    const animRef = useRef<number | null>(null)
    const startRef = useRef<number>(0)
    const halfWidthRef = useRef<number>(0)

    // Double the list to create the "seamless" effect
    const trackItems = useMemo(() => [...items, ...items], [items])

    useEffect(() => {
        const wrapper = wrapperRef.current
        const track = trackRef.current
        if (!wrapper || !track) return

        const measure = () => {
            const children = Array.from(track.children) as HTMLElement[]
            let firstHalfWidth = 0
            const half = Math.floor(children.length / 2)

            // Calculate width of the first set of items + gaps
            for (let i = 0; i < half; i++) {
                firstHalfWidth += children[i].offsetWidth
                if (i < half - 1) firstHalfWidth += gapPx
            }
            // Add one final gap at the end of the set
            firstHalfWidth += gapPx

            halfWidthRef.current = firstHalfWidth
        }

        // Initial measure
        measure()

        // Re-measure on resize
        const ro = new ResizeObserver(() => measure())
        ro.observe(track)
        ro.observe(wrapper)

        const tick = (t: number) => {
            if (!startRef.current) startRef.current = t
            const elapsed = (t - startRef.current) / 1000
            const delta = elapsed * pxPerSecond

            const half = halfWidthRef.current || 1

            // The math: Move left (-delta). Modulo by half width to snap back instantly.
            const x = -1 * (delta % half)

            track.style.transform = `translate3d(${x}px, 0, 0)`
            animRef.current = requestAnimationFrame(tick)
        }

        animRef.current = requestAnimationFrame(tick)

        return () => {
            if (animRef.current) cancelAnimationFrame(animRef.current)
            ro.disconnect()
            startRef.current = 0
        }
    }, [gapPx, pxPerSecond])

    return (
        <div ref={wrapperRef} className="relative w-full overflow-hidden py-4">
            <div
                ref={trackRef}
                className="flex flex-nowrap items-center will-change-transform"
                style={{ gap: `${gapPx}px`, backfaceVisibility: "hidden" }}
            >
                {trackItems.map((item, idx) => (
                    <div
                        key={`${item.id}-${idx}`}
                        onClick={() => onCardClick(item)}
                    >
                        <GallerySquare {...item} />
                    </div>
                ))}
            </div>

            {/* Fade Edges for depth */}
            <div
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                    background: "linear-gradient(to right, white 0%, transparent 10%, transparent 90%, white 100%)",
                }}
            />
        </div>
    )
}

export default function GallerySection() {
    const router = useRouter()

    // Flatten a repeated array of the base gallery
    const longGallery = useMemo(
        () => Array.from({ length: REPEATS }).flatMap(() => gallery),
        []
    )

    return (
        <section className="relative overflow-hidden bg-white py-24 border-t border-neutral-100">
            <div className="relative mx-auto max-w-6xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
                        Our <span className="text-primary-600">Gallery</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                        A glimpse into our past events, workshops, and memorable moments.
                    </p>
                </motion.div>

                {/* Marquee Container */}
                <div className="relative">
                    <SingleLineMarquee
                        items={longGallery}
                        pxPerSecond={35}
                        gapPx={32}
                        onCardClick={() => router.push("/gallery")}
                    />
                </div>

                <div className="mt-10 text-center">
                    <button
                        onClick={() => router.push("/gallery")}
                        className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-8 py-3 text-sm font-medium text-neutral-900 shadow-sm transition-all hover:bg-neutral-50 hover:shadow-md hover:-translate-y-0.5"
                    >
                        View Full Gallery
                    </button>
                </div>
            </div>
        </section>
    )
}