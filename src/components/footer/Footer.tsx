import Link from 'next/link';
import github from '../../../public/img/github.svg'
import linkedin from '../../../public/img/linkedin.svg'
import Image from 'next/image';

export const Footer = () => {
  return (
    <div className="flex w-full justify-center items-end text-xs p-4 space-x-4 border border-t-purple-900 border-l-0 border-b-0 border-r-0">
      <Link
        href='/'
        className="mx-3 md:text-sm text-[10px]"
      >
        {`Miguel Angel Salomon Villegas ` + new Date(Date.now()).getFullYear()}
      </Link>
      <div className='flex flex-col justify-center items-center'>
        <Link
          href='https://github.com/theCrims0n?tab=repositories' rel="noopener noreferrer" target="_blank"
          className="mx-3"
        >
          <Image src={github} alt={github} width={40} height={40} className='md:h-12 h-8'/>
        </Link>
        <p className='pt-2 md:text-sm text-[10px]'> GitHub Account</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <Link
          href='https://www.linkedin.com/in/miguel-angel-salom%C3%B3n-villegas-80681a181/' rel="noopener noreferrer" target="_blank"
          className="mx-3"
        >
          <Image src={linkedin} alt={linkedin} width={42} height={42} className='md:h-12 h-8' />
        </Link>
        <p className='pt-2 md:text-sm text-[10px]'> linkedin Account</p>
      </div>
    </div>
  )
}