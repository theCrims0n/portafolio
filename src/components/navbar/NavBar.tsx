'use client'
import { titleFont } from "@/config/fonts"
import Link from "next/link"
import { Bars3Icon } from "@heroicons/react/16/solid";
import { useUIStore } from "@/store/sidebar";
import clsx from "clsx";
import { useState } from "react";
import useTranslation from "@/hooks/use-translation";
import { SelectLang } from "../selectLang/SelectLant";

export const NavBar = () => {

    const { t } = useTranslation()

    const { openSideMenu, isSideMenuOpen } = useUIStore();
    const [lang, setLang] = useState('es')

    const handleClick = (language: any) => {
        setLang(language)
    };

    return (
        <div className="fixed justity-center items-center z-40 md:w-screen ">
            <div className="block lg:hidden">
                <button className={clsx(isSideMenuOpen && 'hidden')} onClick={() => openSideMenu()}>
                    <Bars3Icon className="size-10 text-zinc-300" />
                </button>
            </div>
            <div className="hidden lg:block w-full ">
                <nav className=" p-2 px-5 justify-between items-center bg-[rgb(251, 251, 251)] box-shadow backdrop-blur-[5px]">
                    <div className=' flex justify-center items-center space-x-12'>
                        <div className="flex flex-row justify-center items-center gap-14 md:w-[1200px] w-full">
                            <Link href="#presentation">
                                <span className={`${titleFont.className} antialiased font-bold lg:text-sm text-xs`}>
                                    Home
                                </span>
                            </Link>
                            <Link href="#about">
                                <span className={`${titleFont.className} antialiased font-bold lg:text-sm text-xs`}>
                                    {t('navbar.about')}
                                </span>
                            </Link>
                            <Link href="#technologies">
                                <span className={`${titleFont.className} antialiased font-bold lg:text-sm text-xs`}>
                                    {t('navbar.technologies')}
                                </span>
                            </Link>
                            <Link href="#experience">
                                <span className={`${titleFont.className} antialiased font-bold lg:text-sm text-xs`}>
                                    {t('navbar.experience')}
                                </span>
                            </Link>
                            <Link href="#skills">
                                <span className={`${titleFont.className} antialiased font-bold lg:text-sm text-xs`}>
                                    {t('navbar.skills')}
                                </span>
                            </Link>
                            <Link href="#projects">
                                <span className={`${titleFont.className} antialiased font-bold lg:text-sm text-xs`}>
                                    {t('navbar.projects')}
                                </span>
                            </Link>
                            <Link href="#contact">
                                <span className={`${titleFont.className} antialiased font-bold lg:text-sm text-xs`}>
                                    {t('navbar.contactme')}
                                </span>
                            </Link>
                        </div>
                        <SelectLang />

                    </div>
                </nav>
            </div>
        </div>
    )
}
