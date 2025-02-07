import { Experience } from "@/interface/experience";

type Props = {
    experience: Experience[];
};

export const TimeLine = ({ experience }: Props) => {
    return (
        <div className="flex justify-center items-center xl:h-[700px] h-full w-full p-4 space-y-4 fade-in ">
            <ol className="xl:flex xl:justify-center xl:items-center border-l border-purple-800 dark:border-purple-800 lg:flex lg:justify-center lg:gap-6 lg:border-l-0 lg:border-t">
                {
                    experience.slice(0).reverse().map((experience, index) => {
                        return (
                            <li key={index} className="xl:max-w-[300px] xl:min-w-[210px]">
                                <div className="flex-start flex items-center pt-2 lg:block lg:pt-0">
                                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-purple-900 lg:-mt-[5px] lg:ml-0 lg:mr-0"></div>
                                    <p className="mt-2 ml-2 md:text-sm text-xs">
                                        {experience.date}
                                    </p>
                                </div>
                                <div className="ml-4 mt-2 pb-5 lg:ml-0 box-shadow-card rounded rounded-lg xl:min-h-80 p-4">
                                    <h4 className="mb-1.5 md:text-sm text-xs font-semibold">
                                        {experience.job}
                                    </h4>
                                    <p className="mb-3 md:text-sm text-xs">
                                        {experience.description}
                                    </p>
                                </div>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}