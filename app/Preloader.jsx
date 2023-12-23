"use client"
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import Loader from "../components/Loader";

export default function Loaders() {
    const [timeline, setTimeline] = useState(null);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => setLoaderFinished(true),
            });
            setTimeline(tl);
        });

        return () => context.revert();
    }, []);

    return (
        <main>
            <Loader timeline={timeline} />
        </main>
    );
}