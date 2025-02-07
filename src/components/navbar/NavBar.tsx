'use client'
import { titleFont } from "@/config/fonts"
import Link from "next/link"
import { i18n } from 'next-i18next';
import { redirect } from 'next/navigation';

export const NavBar = () => {

    const handleClick = (language: any) => {

        i18n?.changeLanguage(language).then(() => {
            console.log(language)

        });
        redirect('/')
    };

    return (
        <div className="fixed justity-center items-center z-40 w-screen">
            <nav className=" p-4 px-5 justify-between items-center bg-[rgb(251, 251, 251)] box-shadow backdrop-blur-[5px]">
                <div className=' flex justify-center items-center space-x-12'>
                    <Link href="#presentation">
                        <span className={`${titleFont.className} antialiased font-bold md:text-sm text-xs`}>
                            Home
                        </span>
                    </Link>
                    <Link href="#about">
                        <span className={`${titleFont.className} antialiased font-bold md:text-sm text-xs`}>
                            Acerca de mi
                        </span>
                    </Link>
                    <Link href="#technologies">
                        <span className={`${titleFont.className} antialiased font-bold md:text-sm text-xs`}>
                            Tecnologias
                        </span>
                    </Link>
                    <Link href="#experience">
                        <span className={`${titleFont.className} antialiased font-bold md:text-sm text-xs`}>
                            Experiencia laboral
                        </span>
                    </Link>
                    <Link href="#skills">
                        <span className={`${titleFont.className} antialiased font-bold md:text-sm text-xs`}>
                            Habilidades
                        </span>
                    </Link>
                    <Link href="#projects">
                        <span className={`${titleFont.className} antialiased font-bold md:text-sm text-xs`}>
                            Proyectos
                        </span>
                    </Link>
                    <Link href="#contact">
                        <span className={`${titleFont.className} antialiased font-bold md:text-sm text-xs`}>
                            Contactame
                        </span>
                    </Link>
                    <button onClick={() => handleClick('en')}>
                        <span className={`${titleFont.className} antialiased font-bold md:text-sm text-xs`}>
                            {i18n?.language === 'es' ? 'Esp' : 'En'}
                        </span>
                    </button>

                </div>

            </nav>
        </div>
    )
}