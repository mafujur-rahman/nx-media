// app/project/[slug]/components/MissionObjective.js
"use client";

import React from "react";

const MissionObjective = ({ project }) => {
    return (
        <section className="bg-black py-20 px-6 md:px-10 lg:px-16">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-2xl">
                        <img
                            src={project?.images?.missionImage1}
                            alt="Mission Image 1"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-2xl">
                        <img
                            src={project?.images?.missionImage2}
                            alt="Mission Image 2"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="w-full h-[350px] md:h-[500px] overflow-hidden rounded-2xl">
                    <img
                        src={project?.images?.bottomImage}
                        alt="Objective Image"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default MissionObjective;