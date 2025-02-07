'use client'
import { GridItem } from "../grid-item/GridItem"
import { TimeLine } from '@/components/timeline/TimeLine'
import experience from '../../../json/experience.json'
import { useState } from "react"
import { Spinner } from "@/components/spinner/Spinner";
import clsx from "clsx";


export const GridWelcome = () => {

    const [timeline, setTimeline] = useState(false)

    return (
        <div className="flex flex-col space-y-2 md:min-h-[70svh] fade-in fadeInUp" id='experience'>
            <div className="flex justify-center items-center mb-4">
                <h1 className="font-bold md:text-[50px] text-sm fade-in pl-4 ">{timeline ? 'Linea de tiempo' : 'Experiencia Laboral'}</h1>
            </div>
            <div className={clsx("flex border border-zinc-800 justify-center items-center animation duration-500 ease-in-out", !timeline && 'grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-10 p-6 ')}>
                {
                    !experience
                        ?
                        <div className="flex justify-center items-center h-96 w-96">
                            <Spinner size={50} />
                        </div>
                        :
                        timeline ?
                            <TimeLine experience={experience} />
                            :
                            experience?.map((value, index) => {
                                return (
                                    <GridItem key={index} experience={value} />
                                )
                            })
                }
            </div>
            <button onClick={() => setTimeline(!timeline)} className="text-xs flex justify-start items-center pl-2">{timeline ? 'Ver grid laboral' : 'Ver linea de tiempo'}</button>
        </div>
    )

}