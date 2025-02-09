'use client'
import useTranslation from "@/hooks/use-translation"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid"
import Image from "next/image"
import Link from "next/link"

export const Projects = () => {

    const { t } = useTranslation()
    return (
        <div className="flex flex-col space-y-2 md:min-h-[75svh] fade-in fadeInUp" id='projects'>
            <div className="flex justify-center items-center mb-6">
                <h1 className="font-bold md:text-[50px] text-[16px]fade-in pl-4 ">{t('projects.projects')}</h1>
            </div>
            <div className="flex border border-zinc-800 justify-center items-center animation duration-500 ease-in-out grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-1 gap-10 p-6">
                <div className="flex flex-col h-full w-full md:min-w-[260px] box-shadow-card p-4 space-y-4">
                    <div className='flex flex-col h-full justify-start items-center'>
                        <header className=" flex justify-center items-start bg-transparent line-clamp break-words font-bold text-[16px]h-10">
                            Ecommerce (Shop Store)
                        </header>
                        <div className='md:text-xs text-[16px]md:space-y-2 space-y-6 flex flex-col justify-center items-center w-full'>
                            <div className=" flex items-center justify-center m-6 fade-in h-60 fade-in ">
                                <Link
                                    className="hover:text-blue-600 fade-in"
                                    href={`https://grey-ball.vercel.app/`} target="_blank">
                                    <article>
                                        <Image
                                            key={0}
                                            width={200}
                                            height={200}
                                            src={'/img/ecommerse-home.png'}
                                            alt={'ecommerse'}
                                            loading='lazy'
                                            unoptimized
                                            className="bg-transparent h-52"
                                        />
                                        <Image
                                            key={1}
                                            width={200}
                                            height={200}
                                            src={'/img/ecommerse-back.png'}
                                            alt={'ecommerse'}
                                            loading='lazy' unoptimized
                                            className="h-52"
                                        />
                                    </article>
                                </Link>
                            </div>
                            <div className="h-10 flex flex-col justify-center items-start space-y-2">
                                <p color="black" className="font-bold  text-[16px]">
                                    {t('projects.ecommerce')}
                                </p>
                                <Link href={`https://grey-ball.vercel.app/`} target="_blank" className="flex flex-row hover:text-blue-500 animation duration-300 ease-in-out">{t('projects.link')}
                                    <ArrowTopRightOnSquareIcon className="size-4 ml-1" />
                                </Link>
                            </div>
                            <div className="ease-in-out animation duration-300  w-full">
                                <h1 color="black" className="font-bold text-[16px] pt-4">
                                    {t('projects.tools')}
                                </h1>
                                <ul className="text-[14px] pt-2">
                                    <li>
                                        - Visual Studio
                                    </li>
                                    <li>
                                        - Next Js
                                    </li>
                                    <li>
                                        - Tailwind CSS
                                    </li>
                                    <li>
                                        - TypeScript
                                    </li>
                                    <li>
                                        - Zustand
                                    </li>
                                    <li>
                                        - Next Auth
                                    </li>
                                    <li>
                                        - Mongo DB
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-full w-full md:min-w-[260px] box-shadow-card p-4 space-y-4">
                    <div className='flex flex-col h-full justify-start items-center '>
                        <header className=" flex justify-center items-start bg-transparent line-clamp break-words font-bold text-[16px]h-10">
                            Crimson Chat Room
                        </header>
                        <div className='md:text-xs text-[16px]md:space-y-2 space-y-6 flex flex-col justify-center items-center w-full'>
                            <div className=" flex items-center justify-center m-6 fade-in h-60 fade-in ">
                                <Link
                                    className="hover:text-blue-600 fade-in"
                                    href={`https://crimson-01b3.onrender.com/`} target="_blank">
                                    <article>
                                        <Image
                                            key={0}
                                            width={200}
                                            height={200}
                                            src={'/img/crimson-chat.png'}
                                            alt={'crimson'}
                                            loading='lazy' unoptimized
                                            className="h-52"
                                        />
                                        <Image
                                            key={1}
                                            width={200}
                                            height={200}
                                            src={'/img/crimson-login.png'}
                                            alt={'crimson'}
                                            loading='lazy' unoptimized
                                            className="h-64 w-96"
                                        />
                                    </article>
                                </Link>
                            </div>
                            <div className="h-10 flex flex-col justify-center items-start space-y-2">
                                <p color="black" className="font-bold text-[16px]">
                                {t('projects.crimson')}
                                </p>
                                <Link href={`https://crimson-01b3.onrender.com/`} target="_blank" className="flex flex-row hover:text-blue-500 animation duration-300 ease-in-out">{t('projects.link')}
                                    <ArrowTopRightOnSquareIcon className="size-4 ml-1" />
                                </Link>
                            </div>
                            <div className="ease-in-out animation duration-300  w-full">
                                <h1 color="black" className="font-bold text-[16px] pt-4">
                                {t('projects.tools')}
                                </h1>
                                <ul className="text-[14px] pt-2">
                                    <li>
                                        - Visual Studio
                                    </li>
                                    <li>
                                        - React Js
                                    </li>
                                    <li>
                                        - Tailwind CSS
                                    </li>
                                    <li>
                                        - Node Js
                                    </li>
                                    <li>
                                        - Socket.io
                                    </li>
                                    <li>
                                        - TypeScript
                                    </li>
                                    <li>
                                        - Zustand
                                    </li>
                                    <li>
                                        - JWT
                                    </li>
                                    <li>
                                        - Mongo DB
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-full w-full md:min-w-[260px] box-shadow-card p-4 space-y-4">
                    <div className='flex flex-col h-full justify-start items-center'>
                        <header className=" flex justify-center items-start bg-transparent line-clamp break-words font-bold text-[16px]h-10">
                        {t('projects.app')}
                        </header>
                        <div className='md:text-xs text-[16px]md:space-y-2 space-y-6 flex flex-col justify-center items-center w-full'>
                            <div className=" flex items-center justify-center m-6 fade-in h-60 fade-in ">
                                <Link
                                    className="hover:text-blue-600 fade-in"
                                    href={`https://react-node-project-1-my5f.onrender.com/auth/login`} target="_blank">
                                    <article>
                                        <Image
                                            key={0}
                                            width={200}
                                            height={200}
                                            src={'/img/crud-login.png'}
                                            alt={'crud'}
                                            loading='lazy' unoptimized
                                            className="bg-transparent w-96 h-52"
                                        />
                                        <Image
                                            key={1}
                                            width={200}
                                            height={200}
                                            src={'/img/crud-back.webp'}
                                            alt={'crud'}
                                            loading='lazy' unoptimized
                                            className="bg-transparent  w-96 h-52"
                                        />
                                    </article>
                                </Link>
                            </div>
                            <div className="h-10 flex flex-col justify-center items-start space-y-2">
                                <p color="black" className="font-bold text-[16px]">
                                    Aplicación desarrollada para la gestion de empleados basados en una empresa con roles de usuario.
                                </p>
                                <Link href={`https://react-node-project-1-my5f.onrender.com/auth/login`} target="_blank" className="flex flex-row hover:text-blue-500 animation duration-300 ease-in-out">{t('projects.link')}
                                    <ArrowTopRightOnSquareIcon className="size-4 ml-1" />
                                </Link>
                            </div>
                            <div className="ease-in-out animation duration-300  w-full">
                                <h1 color="black" className="font-bold text-[16px] pt-4">
                                {t('projects.tools')}
                                </h1>
                                <ul className="text-[14px] pt-2">
                                    <li>
                                        - Visual Studio
                                    </li>
                                    <li>
                                        - React Js
                                    </li>
                                    <li>
                                        - Node Js
                                    </li>
                                    <li>
                                        - Tailwind CSS
                                    </li>
                                    <li>
                                        - Hook forms
                                    </li>
                                    <li>
                                        - TypeScript
                                    </li>
                                    <li>
                                        - Zustand
                                    </li>
                                    <li>
                                        - JWT
                                    </li>
                                    <li>
                                        - Postgres BD (PGAdmin)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}