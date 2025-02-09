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
            <div className="bg-gradient-to-r from-blue-900 via-red-600 to-cyan-600 inline-block text-transparent bg-clip-text fade-in fadeInUp">
                <h1 className="break-words xl:text-[14svh] md:text-[10svh] sm:text-[60px] text-[40px] font-bold">{t('presentation.software')}</h1>
            </div>
            <div className="h-10">
                {set && <div className="fade-in fadeInUp ">
                    <h1 className="xl:text-[4svh] md:text-[3svh] sm:text-[25px] text-[15px] font-bold">{t('presentation.subtitle')}</h1>
                </div>}
            </div>
        </>
    )
}