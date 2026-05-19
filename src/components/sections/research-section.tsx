"use client";

import { Badge } from "@/components/ui/badge";
import { research } from "@/lib/data";
import { BookOpen, Calendar, FileText, GraduationCap, Users } from "lucide-react";

export function ResearchSection() {
    return (
        <section id="research" className="relative py-20 lg:py-24 bg-muted/30">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        <GraduationCap className="w-3.5 h-3.5" />
                        Research
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        Research & Publications
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Deep learning research in medical imaging, augmented reality, and explainable AI
                    </p>
                </div>

                {/* Research List */}
                <div className="space-y-6">
                    {research.map((publication) => (
                        <div
                            key={publication.id}
                            className="p-6 lg:p-8 rounded-xl border bg-card hover:shadow-md transition-shadow"
                        >
                            {/* Header row */}
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Badge 
                                            className={`text-xs ${
                                                publication.type === "journal" 
                                                    ? "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
                                                    : publication.type === "thesis"
                                                    ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
                                                    : "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20"
                                            }`}
                                        >
                                            {publication.type === "journal" && (
                                                <FileText className="w-3 h-3 mr-1" />
                                            )}
                                            {publication.type === "thesis" && (
                                                <GraduationCap className="w-3 h-3 mr-1" />
                                            )}
                                            {publication.type === "in-progress" && (
                                                <BookOpen className="w-3 h-3 mr-1" />
                                            )}
                                            {publication.status}
                                        </Badge>
                                        {publication.venue && (
                                            <Badge variant="outline" className="text-xs">
                                                {publication.venue}
                                            </Badge>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 leading-relaxed">
                                        {publication.title}
                                    </h3>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <Users className="w-4 h-4 text-primary" />
                                            <span className="text-primary font-medium">
                                                {publication.authors.join(", ")}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {publication.date}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Abstract */}
                            {publication.abstract && (
                                <div className="mb-5">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {publication.abstract}
                                    </p>
                                </div>
                            )}


                        </div>
                    ))}
                </div>

                {/* Research Interests Footer */}
                <div className="mt-12 p-6 rounded-xl border bg-card/50">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        Research Interests
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Deep learning for medical image analysis, computer vision, explainable AI (XAI), 
                        EEG signal processing, convolutional variational autoencoders, augmented reality 
                        for collaborative work, and spatial/temporal-awareness in AR systems.
                    </p>
                </div>
            </div>
        </section>
    );
}
