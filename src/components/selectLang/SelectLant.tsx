'use client'

import { useEffect, useRef, useState } from "react"
import mex from '../../../public/img/MEX.svg'
import usa from '../../../public/img/USA.svg'
import Image from "next/image"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid"
import useTranslation from "@/hooks/use-translation"
import { usePathname, useRouter } from "next/navigation"
import i18nConfig from "../../../i18nConfig"
import { useUIStore } from "@/store/sidebar"

export const SelectLang = () => {

    const ref: any = useRef(null)
    const [open, setOpen] = useState(true)
    const [openSelect, setOpenSelect] = useState(false)
    const [lang, setLang] = useState('es')
    const languages: any[] = [{ flag: mex, value: 'es' }, { flag: usa, value: 'en' }]
    const { i18n } = useTranslation()
    const router = useRouter()
    const pathname = usePathname()
    const { closeSideMenu } = useUIStore()

    const currentLaguage = i18n.language

    const handleOpen = () => {
        setOpen(!open)
        setOpenSelect(!openSelect)
    }

    useEffect(() => {

        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(true)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    useEffect(() => {

        const existLang = languages?.find(lang => lang.value === i18n.language)

        if (existLang) {
            setLang(existLang.value)
        } else {
            setLang('es')
        }

    }, [])

    const handleSelect = (e: string) => {
        setLang(e)
        handleOpen()
        closeSideMenu()
        if (currentLaguage === i18nConfig.defaultLocale) {
            router.push(`${e}${pathname}`)
        }
        else {
            router.push(pathname.replace(`/${currentLaguage}`, `${e}`))
        }

        router.refresh()
    }


    return (
        <div ref={ref} className="relative lg:w-40 w-full">
            <div className="flex justify-end  w-full">
                <button onClick={() => handleOpen()} type="button" className="w-full shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 border border-gray-300 focus:outline-none focus:border-purple-900  dark:focus:ring-gray-700 dark:text-white dark:border-zinc-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <div className="inline-flex items-center justify-center w-full h-[18px] overflow-hidden space-x-4">
                        <p>{lang.toUpperCase()}</p>
                        <Image
                            width={200}
                            height={200}
                            unoptimized
                            src={lang === 'es' ? mex : usa}
                            alt={lang}
                            className="size-8"
                        />
                    </div>
                    {openSelect ? <ChevronUpIcon className="size-6 "/> : <ChevronDownIcon className="size-6 " />}
                </button>
            </div>
            <div >
                <menu
                    hidden={open}
                    data-popover="profile-menu"
                    data-popover-placement="bottom"
                    className="absolute w-full border border-purple-900 mt-1 z-10 overflow-auto bg-zinc-50/10 p-2 shadow-lg shadow-sm focus:outline-none">
                    <ul className="flex flex-col justify-center items-center space-y-2 ">
                        {
                            languages?.map((lang, index) => {
                                return (
                                    <li key={index} className="w-full h-10 flex justify-center items-center rounded-md hover:bg-zinc-50/20" onClick={() => handleSelect(lang.value)}>
                                        <Image
                                            width={200}
                                            height={200}
                                            unoptimized
                                            src={lang.flag}
                                            alt={lang.value}
                                            className="size-8"
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </menu>
            </div>
        </div>
    )
}