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
                            <Link href="#presentation" className="group transition duration-300">
                                <span className={`${titleFont.className} antialiased font-bold xl:text-sm text-[11px]`}>
                                    Home
                                </span>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-purple-900 pt-1"></span>
                            </Link>
                            <Link href="#about" className="group transition duration-300">
                                <span className={`${titleFont.className} antialiased font-bold xl:text-sm text-[11px]`}>
                                    {t('navbar.about')}
                                </span>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-purple-900 pt-1"></span>
                            </Link>
                            <Link href="#technologies" className="group transition duration-300">
                                <span className={`${titleFont.className} antialiased font-bold xl:text-sm text-[11px]`}>
                                    {t('navbar.technologies')}
                                </span>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-purple-900 pt-1"></span>
                            </Link>
                            <Link href="#experience" className="group transition duration-300">
                                <span className={`${titleFont.className} antialiased font-bold xl:text-sm text-[11px]`}>
                                    {t('navbar.experience')}
                                </span>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-purple-900 pt-1"></span>
                            </Link>
                            <Link href="#skills" className="group transition duration-300">
                                <span className={`${titleFont.className} antialiased font-bold xl:text-sm text-[11px]`}>
                                    {t('navbar.skills')}
                                </span>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-purple-900 pt-1"></span>
                            </Link>
                            <Link href="#projects" className="group transition duration-300">
                                <span className={`${titleFont.className} antialiased font-bold xl:text-sm text-[11px]`}>
                                    {t('navbar.projects')}
                                </span>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-purple-900 pt-1"></span>
                            </Link>
                            <Link href="#contact" className="group transition duration-300">
                                <span className={`${titleFont.className} antialiased font-bold xl:text-sm text-[11px]`}>
                                    {t('navbar.contactme')}
                                </span>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-purple-900 pt-1"></span>
                            </Link>
                        </div>
                        <SelectLang />

                    </div>
                </nav>
            </div>
        </div>
    )
}
