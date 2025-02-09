'use client'

import useTranslation from "@/hooks/use-translation"
import { useState } from "react"

export const Presentation = () => {

    const [set, setSet] = useState(false)
    const { t } = useTranslation()

    setTimeout(() => {
        setSet(true)
    }, 500);

    return (
        <>
            <div className=" bg-gradient-to-r from-blue-800 via-red-600 to-cyan-600 inline-block text-transparent bg-clip-text fade-in fadeInUp">
                <h1 className="xl:text-[12svh] md:text-[10svh] text-[6svh] font-bold">{t('presentation.software')}</h1>
            </div>
            <div className="h-10">
                {set && <div className="fade-in fadeInUp ">
                    <h1 className="xl:text-[4svh] md:text-[3svh] text-[2svh] text-[16px] font-bold">{t('presentation.subtitle')}</h1>
                </div>}
            </div>
        </>
    )
}