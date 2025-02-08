import { AcademicCapIcon, BookOpenIcon, ClockIcon, FaceSmileIcon, MagnifyingGlassCircleIcon, MicrophoneIcon, RectangleGroupIcon, ScaleIcon, SquaresPlusIcon, StarIcon, TrophyIcon, UserGroupIcon } from "@heroicons/react/16/solid"

export const Skills = () => {
    return (
        <div className="flex flex-col space-y-2 md:min-h-[80svh] fadeInUp" id="skills">
            <div className="flex justify-center items-center mb-4">
                <h1 className="m-2 font-bold md:text-[50px] text-sm ">Habilidades blandas</h1>
            </div>
            <div className="flex flex-col justify-center items-start border border-zinc-800 ">
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
                                    Trabajo en equipo
                                </h6>
                                <p className="lg:text-sm text-xs absolute">
                                    Fácil adaptación a los nuevos ambientes y culturas.
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
                                    Comunicación
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    Fácil manejo de palabras y voculabularo tecnico y no tecnico.
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
                                    Resolución de problemas
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    lluvia de ideas para planificar una estrategia que de solución a un problema.
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
                                    Gestión del tiempo
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    Organización y administración de los tiempos en cada proyecto y/o requerimiento.
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
                                    Adaptabilidad
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    Capaz y apto para cualquier nuevo reto, dando por incluido a cualquier tipo de oportunidad.
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
                                    Pensamiento critico
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    Concentración y enfoque en los diferentes casos de uso.
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
                                    Inteligencia emocional
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    Control y manejo de emociones en los diferentes conflictos y desafios.
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
                                    Liderazgo
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    Ser el lider en un proyecto, gestionar equipos y encaminar al equipo hacia la meta.
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
                                    Resolución de conflictos
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    Resolver y mediar los diferentes conflictos e inconvenientes entre los equipos del proyecto.
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
                                    Creatividad
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    Proponer ideas que puedan ser convenientes para un proyecto o facilitar los diferentes casos de uso.
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
                                    Ética laboral
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    Seguir las leyes y politicas de la empresa, ser respetuoso hacia mis compañeros y mostrar disponibilidad.
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
                                    Atención al detalle
                                </h6>
                                <p className="lg:text-sm text-xs">
                                    Ver siempre los pequeños detalles que puedan dar conflictos a larzo plazo y solucionarlos antes de tiempo.
                                </p>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}