'use client'
import { motion } from "motion/react"
import Image from "next/image"
import photo from '../../../public/photo/photo.png'
export const About = () => {

    return (
        <div className="flex flex-col space-y-2 md:min-h-[90svh] pt-6 fade-in fadeInUp " id='about'>
            <div className="flex justify-center items-center mb-4">
                <h1 className="m-2 font-bold md:text-[50px] text-sm fade-in">Acerca de mi</h1>
            </div>

            <div className=" flex flex-col h-full w-full md:justify-end  justify-center items-center box-shadow-card space-x-6 p-4">
                <h1 className="xl:text-[100px] md:text-[70px] xs:text-[20px] font-bold">Hola, soy Miguel Salomon.</h1>

                <motion.div className=" flex xl:flex-row flex-col justify-start items-center xl:space-x-12 space-y-4" initial={{ opacity: 0 }} animate={{
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.3, ease: 'easeInOut' }
                }}>

                    <Image width={200} height={200} priority src={photo} alt={'photo'} className="rounded-full h-fit w-fit white-grad" />

                    <div className="flex flex-col justify-center items-center lg:w-[800px] md:text-lg text-sm space-y-4">
                        <p className="font-bold flex line-clamp break-words">
                            Nacido en 1989 y criado en Sonora, Mexico y egresado de la Universdad Tecnologica del Sur de Sonora (UTS), Soy ingeniero de Software con 6 años de
                            experiencia desarrollando aplicaciones web y de escritorio. Trabajo directamente
                            con Clientes Globales, aprendiendo e implementando constantemente nuevas tecnologías de la industria del software.
                        </p>
                        <p className="font-bold flex line-clamp break-words">
                            Mi principal objetivo es potenciar mis habilidades profesionales en el campo de los sistemas informáticos y ser un pilar
                            fundamental para la sostenibilidad de los proyectos.
                        </p>
                        <p className="font-bold flex line-clamp break-words"> 
                            Mis pasatiempos son la musica rock, cantar, ver series , aprender tecnologias diferentes
                            y pasar tiempo con mi familia.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}