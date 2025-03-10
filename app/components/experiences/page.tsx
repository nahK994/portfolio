import React from "react";
import { experiences, navItems } from "../../utils/constants";

export default function Experiences() {
    return (
        <section id={navItems[3].id} className="flex justify-center items-center min-h-screen font-mono px-3 bg-gradient-to-b to-green-50 from-yellow-50 text-gray-900">
            <div className="max-w-4xl mx-auto px-4 py-20 w-full">
                <div className="relative border-l-4 border-green-600 w-full sm:w-150">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`mb-8 ml-6 ${index === experiences.length - 1 ? 'border-l-0' : ''}`}>
                            <div className="absolute w-4 h-4 bg-green-600 rounded-full -left-2.5"></div>
                            <h3 className="text-2xl font-semibold text-green-800">{exp.role}</h3>
                            <p className="text-lg text-green-700">{exp.company} | {exp.period}</p>
                            <ul className="list-disc list-inside mt-2 text-green-900">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
