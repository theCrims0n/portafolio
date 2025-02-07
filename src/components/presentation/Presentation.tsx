'use client'

import { useState } from "react"

export const Presentation = () => {

    const [set, setSet] = useState(false)

    setTimeout(() => {
        setSet(true)
    }, 500);

    return (
        <>
            <div className=" bg-gradient-to-r from-blue-800 via-red-600 to-cyan-600 inline-block text-transparent bg-clip-text fade-in fadeInUp">
                <h1 className="lg:text-[200px] text-[90px] font-bold">Software Developer</h1>
            </div>
            <div className="h-10">
                {set && <div className="fade-in fadeInUp ">
                    <h1 className="lg:text-[40px] text-[20px] font-bold">Con +6 años de experiencia en el campo laboral.</h1>
                </div>}
            </div>
        </>
    )
}