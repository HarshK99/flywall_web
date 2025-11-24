
"use client";

import { useEffect, useState } from "react";
import { HERO_TITLE, HERO_DESCRIPTION, HERO_EXPLORE_LABEL, HERO_REQUEST_LABEL } from "../config/siteText";

const images = ["/hero/1.jpg", "/hero/2.jpg"];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % images.length);
        }, 5000);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="relative overflow-hidden min-h-screen">
            {/* Background carousel (no scrollbar) */}
            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden no-scrollbar">
                <div
                    className="no-scrollbar flex h-full w-full transition-transform duration-700"
                    style={{ transform: `translateX(-${index * 100}%)`, width: `${images.length * 100}%` }}
                >
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="h-full w-full flex-shrink-0 bg-center bg-cover"
                            style={{ backgroundImage: `url(${src})` }}
                            aria-hidden="true"
                        />
                    ))}
                </div>
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 text-center lg:text-left h-full flex items-center">
                <div className="w-full lg:flex lg:items-center lg:justify-between">
                    <div className="max-w-2xl text-white">
                        <h1 style={{ textAlign: 'left' }} className="text-left text-4xl font-extrabold tracking-tight sm:text-5xl">
                            {HERO_TITLE}
                        </h1>
                        <p className="mt-4 text-lg">
                            {HERO_DESCRIPTION}
                        </p>
                        <div className="mt-6 flex justify-center lg:justify-start gap-3">
                            <a
                                href="#products"
                                className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark"
                            >
                                {HERO_EXPLORE_LABEL}
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center rounded-md border border-secondary px-5 py-3 text-sm font-medium text-primary hover:bg-secondary/10"
                            >
                                {HERO_REQUEST_LABEL}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

