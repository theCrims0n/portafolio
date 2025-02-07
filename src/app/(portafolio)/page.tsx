import { About } from "@/components/about/About";
import { Caroulsel } from "@/components/carousel/Carousel";
import { Contact } from "@/components/concact/Contact";
import { GridWelcome } from "@/components/grid/grid-welcome/GridWelcome";
import { Presentation } from "@/components/presentation/Presentation";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";

type Props = {
    searchParams: Promise<{ [page: number]: number }>;
};

export default async function Page({ searchParams }: Props) {

    return (
        <>
            <div className="background " id='presentation'>
                <Presentation />
            </div>
            <div className='flex flex-col justify-center items-center w-full pt-6 ' >
                <div className="flex flex-col h-full w-full md:max-w-[1700px] space-y-6">
                    <About />
                    <GridWelcome />
                    <Skills />
                    <Projects />
                    <Caroulsel />
                    <Contact />
                </div>
            </div>
        </>
    )
}