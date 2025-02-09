'use client'
import useTranslation from "@/hooks/use-translation";
import { Experience } from "@/interface/experience";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
    experience: Experience;
};

export const GridItem = ({ experience }: Props) => {

    const [isLoading, setIsLoading] = useState(true)
    const [job, setJob] = useState('')
    const { t } = useTranslation()

    const jobs = [{ job: 'devise', description: t('experience.devise'), rol : t('experience.softwaredev') }, { job: 'euysa', description: t('experience.euysa'), rol : t('experience.systemanalist') },
    { job: 'equipesca', description: t('experience.equipesca'), rol : t('experience.systemanalist') }, { job: 'emcor', description: t('experience.emcor'), rol : t('experience.softenginerinter') },
    { job: 'repobox', description: t('experience.repobox'), rol : t('experience.softenginerinter') }]

    useEffect(() => {
        setIsLoading(false)
        typeof onload === 'function'
    }, [experience.image])

    return (
        <div className="flex flex-col h-full w-full md:min-w-[260px] box-shadow-card p-4 space-y-4">
            <div className='flex flex-col h-full justify-start items-center'>
                <header className=" flex justify-center items-start bg-transparent line-clamp break-words font-bold text-sm h-10">
                    {experience.job}
                </header>
                <div className='md:text-xs text-sm space-y-2 relative overflow-auto overflow-hidden flex flex-col justify-center items-center w-full'
                    onMouseEnter={() => setJob(experience.job)}
                    onMouseLeave={() => setJob('')}>
                    <div className=" flex items-center justify-center m-6 fade-in h-52 fade-in ">
                        {isLoading ?
                            <div className='animate-pulse' >
                                <div className='h-32 w-32 bg-gray-100 dark:bg-zinc-800 mb-4 rounded-lg' />
                            </div>
                            : <Link
                                className="hover:text-blue-600 fade-in"
                                href={`/`}>
                                <Image
                                    key={experience.id}
                                    width={200}
                                    height={200}
                                    src={experience.image}
                                    alt={experience.title}
                                    loading='lazy'

                                    className={clsx("bg-transparent fade-in   md:w-fit max-w-40 max-h-36 ease-in-out animation duration-300 hover:scale-110 ", job === experience.job ? 'h-0 w-0' : 'md:h-52 h-32 w-32')}
                                />
                            </Link>}
                    </div>
                    <div className="h-10 flex justify-center items-end">
                        <p color="black" className="font-bold  ">
                        {jobs.filter(f => f.job === experience.id.toLocaleLowerCase()).map(f => f.rol)}
                        </p>
                    </div>
                    <div className={clsx("absolute top-0 left-0 ease-in-out animation duration-300 -translate-x-full w-full", job === experience.job && 'translate-x-0')}>
                        <p color="black" className="font-normal text-xs pt-6">
                            {jobs.filter(f => f.job === experience.id.toLocaleLowerCase()).map(f => f.description)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}