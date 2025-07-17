import Image from "next/image";
import { PlayCircle } from "lucide-react";

const PartnerSection = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose Xelaris?</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative group">
                        <Image
                            src="https://placehold.co/600x400.png"
                            alt="Promotional video about Xelaris"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg w-full"
                            data-ai-hint="team meeting"
                        />
                        <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                            <PlayCircle className="h-20 w-20 text-white/80 group-hover:text-white transition-colors cursor-pointer group-hover:scale-110" />
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <p className="text-xl md:text-2xl text-muted-foreground font-semibold">
                            Xelaris – Your QA Partner in Success
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnerSection;
