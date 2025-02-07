import Image from "next/image"

import * as images from '../../../public/svg/index'

export const Caroulsel = () => {

    const svgs = Object.entries(images)

    return (
        <div className="flex flex-col space-y-2 md:min-h-[40svh] fade-in fadeInUp" id='technologies'>
            <div className="flex justify-center items-center  fade-in">
                <h1 className="m-2 font-bold md:text-[50px] text-sm ">Tecnologias</h1>
            </div>
            <div className="slider bg-slate-950">
                <div className=" slide-track">
                    {
                        svgs.map((svg, index) => {
                            return (
                                <div key={index} className="slide flex flex-col justify-center items-center space-y-2">
                                    <Image src={svg[1].default.src} alt={svg[0]} width={70} height={70} />
                                    <p>{svg[0].charAt(0).toUpperCase() + String(svg[0]).slice(1)}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}