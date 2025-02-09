'use client'
import useTranslation from "@/hooks/use-translation"
import { AcademicCapIcon, BookOpenIcon, ClockIcon, FaceSmileIcon, MagnifyingGlassCircleIcon, MicrophoneIcon, RectangleGroupIcon, ScaleIcon, SquaresPlusIcon, StarIcon, TrophyIcon, UserGroupIcon } from "@heroicons/react/16/solid"

export const Skills = () => {
    const { t } = useTranslation()
    return (
        <div className="flex flex-col space-y-2 md:min-h-[80svh] fadeInUp" id="skills">
            <div className="flex justify-center items-center mb-4">
                <h1 className="m-2 font-bold md:text-[50px] text-sm ">{t('skills.skills')}</h1>
            </div>
            <div className="flex flex-col justify-center items-start border box-shadow-card ">
                <div className="w-96 flex-col w-full flex md:justify-center justify-start items-center md:items-start">
                    <nav className="flex w-full justify-center items-center min-w-[240px] flex-col p-6 grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-6">
                        <div
                            role="button"
                            className="flex w-full hover:pl-4  items-center rounded-md p-3 transition-all hover:bg-slate-900 focus:bg-slate-900 active:bg-slate-900"
                        >
                            <div className="mr-4 grid place-items-center">
                                <UserGroupIcon className="md:size-16 size-10 text-blue-500" />
                            </div>
                            <div>
                                <h6 className="lg:text-lg text-sm font-bold">
                                    {t('skills.teamwork')}
                                </h6>
                                <p className="lg:text-sm text-xs absolute">
                                    {t('skills.teamworkdesc')}
                                </p>
                            </div>
                        </div>
                        <div
                            role="button"
                            className="flex hover:pl-4 w-full items-center rounded-md p-3 transition-all hover:bg-slate-900 focus:bg-slate-900 active:bg-slate-00"
                        >
                            <div className="mr-4 grid place-items-center">
                                <MicrophoneIcon className="md:size-16 size-10 text-pink-500" />
                            </div>
                            <div>
                                <h6 className="lg:text-lg text-sm font-bold">
                                    {t('skills.communication')}
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    {t('skills.communicationdesc')}
                                </p>
                            </div>
                        </div>
                        <div
                            role="button"
                            className="flex hover:pl-4 w-full items-center rounded-md p-3 transition-all hover:bg-slate-900 focus:bg-slate-900 active:bg-slate-900">
                            <div className="mr-4 grid place-items-center">
                                <AcademicCapIcon className="md:size-16 size-10 text-green-500" />
                            </div>
                            <div>
                                <h6 className="lg:text-lg text-sm font-bold">
                                    {t('skills.problem-solving')}
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    {t('skills.problem-solvingdesc')}
                                </p>
                            </div>
                        </div>
                        <div
                            role="button"
                            className="flex hover:pl-4 w-full items-center rounded-md p-3 transition-all hover:bg-slate-900 focus:bg-slate-900 active:bg-slate-900">
                            <div className="mr-4 grid place-items-center">
                                <ClockIcon className="md:size-16 size-10 text-orange-500" />
                            </div>
                            <div>
                                <h6 className="lg:text-lg text-sm font-bold">
                                    {t('skills.timemanagement')}
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    {t('skills.timemanagementdesc')}
                                </p>
                            </div>
                        </div>
                        <div
                            role="button"
                            className=" flex hover:pl-4 w-full items-center rounded-md p-3 transition-all hover:bg-slate-900 focus:bg-slate-900 active:bg-slate-900">
                            <div className="mr-4 grid place-items-center">
                                <RectangleGroupIcon className="md:size-16 size-10 text-cyan-500" />
                            </div>
                            <div>
                                <h6 className="lg:text-lg text-sm font-bold">
                                    {t('skills.adaptability')}
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    {t('skills.adaptabilitydesc')}
                                </p>
                            </div>
                        </div>
                        <div
                            role="button"
                            className=" flex hover:pl-4 w-full items-center rounded-md p-3 transition-all hover:bg-slate-900 focus:bg-slate-900 active:bg-slate-900">
                            <div className="mr-4 grid place-items-center">
                                <BookOpenIcon className="md:size-16 size-10 text-purple-500" />
                            </div>
                            <div>
                                <h6 className="lg:text-lg text-sm font-bold">
                                    {t('skills.criticalthinking')}
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    {t('skills.criticalthinkingdesc')}
                                </p>
                            </div>
                        </div>
                        <div
                            role="button"
                            className=" flex hover:pl-4 w-full items-center rounded-md p-3 transition-all hover:bg-slate-900 focus:bg-slate-900 active:bg-slate-900">
                            <div className="mr-4 grid place-items-center">
                                <FaceSmileIcon className="md:size-16 size-10 text-cyan-500" />
                            </div>
                            <div>
                                <h6 className="lg:text-lg text-sm font-bold">
                                    {t('skills.emotionalintelligence')}
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    {t('skills.emotionalintelligencedesc')}
                                </p>
                            </div>
                        </div>
                        <div
                            role="button"
                            className=" flex hover:pl-4 w-full items-center rounded-md p-3 transition-all hover:bg-slate-900 focus:bg-slate-900 active:bg-slate-900">
                            <div className="mr-4 grid place-items-center">
                                <TrophyIcon className="md:size-16 size-10 text-yellow-500" />
                            </div>
                            <div>
                                <h6 className="lg:text-lg text-sm font-bold">
                                    {t('skills.leadership')}
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    {t('skills.leadershipdesc')}
                                </p>
                            </div>
                        </div>
                        <div
                            role="button"
                            className=" flex hover:pl-4 w-full items-center rounded-md p-3 transition-all hover:bg-slate-900 focus:bg-slate-900 active:bg-slate-900">
                            <div className="mr-4 grid place-items-center">
                                <ScaleIcon className="md:size-16 size-10 text-emerald-500" />
                            </div>
                            <div>
                                <h6 className="lg:text-lg text-sm font-bold">
                                    {t('skills.conflictresolution')}
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    {t('skills.conflictresolutiondesc')}
                                </p>
                            </div>
                        </div>
                        <div
                            role="button"
                            className=" flex hover:pl-4 w-full items-center rounded-md p-3 transition-all hover:bg-slate-900 focus:bg-slate-900 active:bg-slate-900">
                            <div className="mr-4 grid place-items-center">
                                <SquaresPlusIcon className="md:size-16 size-10 text-orange-500" />
                            </div>
                            <div>
                                <h6 className="lg:text-lg text-sm font-bold">
                                    {t('skills.creativity')}
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    {t('skills.creativitydesc')}
                                </p>
                            </div>
                        </div>
                        <div
                            role="button"
                            className=" flex hover:pl-4 w-full items-center rounded-md p-3 transition-all hover:bg-slate-900 focus:bg-slate-900 active:bg-slate-900">
                            <div className="mr-4 grid place-items-center">
                                <StarIcon className="md:size-16 size-10 text-yellow-500" />
                            </div>
                            <div>
                                <h6 className="lg:text-lg text-sm font-bold">
                                    {t('skills.workethic')}
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    {t('skills.workethicdesc')}
                                </p>
                            </div>
                        </div>
                        <div
                            role="button"
                            className=" flex hover:pl-4 w-full items-center rounded-md p-3 transition-all hover:bg-slate-900 focus:bg-slate-900 active:bg-slate-900">
                            <div className="mr-4 grid place-items-center">
                                <MagnifyingGlassCircleIcon className="md:size-16 size-10 text-blue-500" />
                            </div>
                            <div>
                                <h6 className="lg:text-lg text-sm font-bold">
                                    {t('skills.attentiontodetails')}
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    {t('skills.attentiontodetailsdesc')}
                                </p>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}