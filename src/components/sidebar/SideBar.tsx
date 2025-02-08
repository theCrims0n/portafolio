"use client";

import { useUIStore } from "@/store/sidebar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { titleFont } from "@/config/fonts"
import Link from "next/link"

export const SideBar = () => {

    const { isSideMenuOpen, closeSideMenu } = useUIStore();

    return (

        <div className="md:hidden md:block w-full">
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
                        " fixed p-5 left-0 top-0 w-[300px] h-screen box-shadow-card z-20 shadow-2xl transform transition-all duration-300",
                        !isSideMenuOpen ? "-translate-x-full" : 'translate-x-0'
                    )}
                >
                    <XMarkIcon
                        className="absolute top-5 right-5 cursor-pointer size-10 text-sm"
                        onClick={() => closeSideMenu()}
                    />
                    <div className="w-full h-px bg-gray-200 my-10" />
                    <div className="flex flex-col">
                        <Link href="#presentation" className="flex items-center mt-5 p-2 hover:ml-2 hover:bg-purple-900 rounded transition-all">
                            <span className={`${titleFont.className} antialiased font-bold text-sm`}>
                                Home
                            </span>
                        </Link>
                        <Link href="#about" className="flex items-center mt-5 p-2 hover:ml-2 hover:bg-purple-900 rounded transition-all">
                            <span className={`${titleFont.className} antialiased font-bold text-sm`}>
                                Acerca de mi
                            </span>
                        </Link>
                        <Link href="#technologies" className="flex items-center mt-5 p-2 hover:ml-2 hover:bg-purple-900 rounded transition-all">
                            <span className={`${titleFont.className} antialiased font-bold text-sm`}>
                                Tecnologias
                            </span>
                        </Link>
                        <Link href="#experience" className="flex items-center mt-5 p-2 hover:ml-2 hover:bg-purple-900 rounded transition-all">
                            <span className={`${titleFont.className} antialiased font-bold text-sm`}>
                                Experiencia laboral
                            </span>
                        </Link>
                        <Link href="#skills" className="flex items-center mt-5 p-2 hover:ml-2 hover:bg-purple-900 rounded transition-all">
                            <span className={`${titleFont.className} antialiased font-bold text-sm`}>
                                Habilidades
                            </span>
                        </Link>
                        <Link href="#projects" className="flex items-center mt-5 p-2 hover:ml-2 hover:bg-purple-900 rounded transition-all">
                            <span className={`${titleFont.className} antialiased font-bold text-sm`}>
                                Proyectos
                            </span>
                        </Link>
                        <Link href="#contact" className="flex items-center mt-5 p-2 hover:ml-2 hover:bg-purple-900 rounded transition-all">
                            <span className={`${titleFont.className} antialiased font-bold text-sm`}>
                                Contactame
                            </span>
                        </Link>
                    </div>
                </nav>
            </div >
        </div >
    )
}