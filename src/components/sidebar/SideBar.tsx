"use client";

import { useUIStore } from "@/store/sidebar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { titleFont } from "@/config/fonts"
import Link from "next/link"
import { SelectLang } from "../selectLang/SelectLant";
import useTranslation from "@/hooks/use-translation";

export const SideBar = () => {

    const { isSideMenuOpen, closeSideMenu } = useUIStore();
    const { t } = useTranslation()
    return (

        <div className="lg:hidden lg:block w-full">
            <div>
                {isSideMenuOpen && (
                    <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
                )}
                {isSideMenuOpen && (
                    <div
                        onClick={() => closeSideMenu()}
                        className="fade-in fixed top-0 left-0 w-screen h-screen z-10 "
                    />
                )}
                <nav
                    className={clsx(
                        " fixed p-5 left-0 top-0 sm:w-[350px] w-[250px] h-screen box-shadow-card z-20 shadow-2xl transform transition-all duration-300",
                        !isSideMenuOpen ? "-translate-x-full" : 'translate-x-0'
                    )}
                >
                    <XMarkIcon
                        className="absolute top-5 right-5 cursor-pointer size-10 text-sm text-zinc-300"
                        onClick={() => closeSideMenu()}
                    />
                    <div className="flex flex-col gap-2 my-14">
                        <Link onClick={() => closeSideMenu()} href="#presentation" className="flex items-center pl-2 pl-2 h-14 hover:ml-2 bg-zinc-900 hover:bg-purple-900 rounded transition-all">
                            <span className={`${titleFont.className} antialiased font-normal text-sm`}>
                                Home
                            </span>
                        </Link>
                        <Link onClick={() => closeSideMenu()} href="#about" className="flex items-center  pl-2 h-14  hover:ml-2 bg-zinc-900 hover:bg-purple-900 rounded transition-all">
                            <span className={`${titleFont.className} antialiased font-normal text-sm`}>
                                {t('navbar.about')}
                            </span>
                        </Link>
                        <Link onClick={() => closeSideMenu()} href="#technologies" className="flex items-center  pl-2 h-14  hover:ml-2 bg-zinc-900 hover:bg-purple-900 rounded transition-all">
                            <span className={`${titleFont.className} antialiased font-normal text-sm`}>
                                {t('navbar.technologies')}
                            </span>
                        </Link>
                        <Link onClick={() => closeSideMenu()} href="#experience" className="flex items-center  pl-2 h-14  hover:ml-2 bg-zinc-900 hover:bg-purple-900 rounded transition-all">
                            <span className={`${titleFont.className} antialiased font-normal text-sm`}>
                                {t('navbar.experience')}
                            </span>
                        </Link>
                        <Link onClick={() => closeSideMenu()} href="#skills" className="flex items-center  pl-2 h-14  hover:ml-2 bg-zinc-900 hover:bg-purple-900 rounded transition-all">
                            <span className={`${titleFont.className} antialiased font-normal text-sm`}>
                                {t('navbar.skills')}
                            </span>
                        </Link>
                        <Link onClick={() => closeSideMenu()} href="#projects" className="flex items-center  pl-2 h-14  hover:ml-2 bg-zinc-900 hover:bg-purple-900 rounded transition-all">
                            <span className={`${titleFont.className} antialiased font-normal text-sm`}>
                                {t('navbar.projects')}
                            </span>
                        </Link>
                        <Link onClick={() => closeSideMenu()} href="#contact" className="flex items-center  pl-2 h-14  hover:ml-2 bg-zinc-900 hover:bg-purple-900 rounded transition-all">
                            <span className={`${titleFont.className} antialiased font-normal text-sm`}>
                                {t('navbar.contactme')}
                            </span>
                        </Link>
                        <SelectLang />
                    </div>
                </nav>
            </div >
        </div >
    )
}