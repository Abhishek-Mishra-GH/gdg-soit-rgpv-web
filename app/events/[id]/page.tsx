

import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
import { Calendar, MapPin, ArrowLeft, Clock, Share2, Ticket } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { events } from "../../data/events"
import CopyButton from "./copyButton"    // import for copybutton




export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const event = events.find((e) => e.id === id)

    if (!event) {
        return (
            <main className="min-h-screen flex flex-col items-center justify-center bg-white text-neutral-900">
                <h1 className="text-3xl font-bold mb-4">Event not found</h1>
                <Link href="/events" className="text-primary-600 hover:underline flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Go back
                </Link>
            </main>
        )
    }

    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-neutral-900">
                
                <div className="pt-24 md:pt-32 px-6 md:px-8 max-w-7xl mx-auto">

                    {/* Back Link */}
                    <Link
                        href="/events"
                        className="inline-flex items-center text-neutral-500 hover:text-black transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Events
                    </Link>

                    {/* Hero Section */}
                    <div className="relative w-full h-[40vh] md:h-[60vh] rounded-[2rem] overflow-hidden shadow-2xl mb-12">
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
                            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider uppercase bg-white/20 backdrop-blur-md border border-white/30 rounded-full">
                                {event.tag}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{event.title}</h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base font-medium text-neutral-200">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5" />
                                    <span>{event.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-24">

                        {/* Left Column */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* About */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">About the Event</h2>
                                <p className="text-lg text-neutral-600 leading-relaxed whitespace-pre-line">
                                    {event.details}
                                </p>
                            </div>

                            {/* 🔥 NEW: ROADMAP SECTION */}
                            {event.roadmapImage && (
                                <div className="mt-8">
                                    <h2 className="text-2xl font-bold mb-4">Event Roadmap</h2>

                                    <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
                                        <Image
                                            src={event.roadmapImage}
                                            alt="Event Roadmap"
                                            width={1000}
                                            height={500}
                                            className="w-full object-cover"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* What to Expect */}
                            {event.whatToExpect && event.whatToExpect.length > 0 && (
                                <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
                                    <h3 className="font-semibold mb-2">What to expect</h3>
                                    <ul className="list-disc list-inside text-neutral-600 space-y-1">
                                        {event.whatToExpect.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Right Column */}

                        

                        {/*{event.eventCode && (
                            <div className="mb-6 p-4 border border-dashed border-neutral-300 rounded-xl bg-neutral-50 flex items-center justify-between">
                                
                                <div>
                                    <div className="text-xs text-neutral-500">Event Code</div>
                                    <div className="font-mono text-lg font-semibold tracking-wide">
                                        {event.eventCode}
                                    </div>
                                </div>

                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(event.eventCode);
                                    }}
                                    className="px-4 py-2 text-sm bg-black text-white rounded-lg hover:bg-neutral-800 transition"
                                >
                                    Copy
                                </button>

                            </div>
                        )}*/}
                        

                        
                        

                        

                        
                        
                        {event.registerLink &&
                            <div className="space-y-6">
                                <div className="p-6 rounded-3xl border border-neutral-200 shadow-lg bg-white sticky top-24">
                                    <h3 className="text-xl font-bold mb-6">Event Details</h3>

                                    <div className="space-y-4 mb-8">
                                        
                                                   
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-neutral-100 rounded-lg">
                                                <Clock className="w-5 h-5 text-neutral-600" />
                                            </div>
                                            <div>
                                                <div className="font-medium">Time</div>
                                                <div className="text-sm text-neutral-500">{event.time}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-neutral-100 rounded-lg">
                                                <MapPin className="w-5 h-5 text-neutral-600" />
                                            </div>
                                            <div>
                                                <div className="font-medium">Location</div>
                                                <div className="text-sm text-neutral-500">{event.location}</div>
                                            </div>
                                        </div>

                                        {event.eventCode && (
                                            <CopyButton code={event.eventCode} />  // copyButton
                                        )}
                                        
                                    </div>

                                    {event.registerLink && (
                                        <Link
                                            href={event.registerLink}
                                            target="_blank"
                                            className="w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group"
                                        >
                                            <Ticket className="w-5 h-5" />
                                            Register Now
                                        </Link>
                                    )}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </main>
            <Footer />
        </SmoothScroll>
    )
}