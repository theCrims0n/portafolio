import Link from 'next/link';
import github from '../../../public/img/github.svg'
import Image from 'next/image';

export const Footer = () => {
  return (
    <div className="flex w-full justify-center items-end text-xs mb-10 pt-8 space-x-2">
      <Link
        href='/'
        className="mx-3"
      >
        {`Miguel Angel Salomon Villegas ` + new Date(Date.now()).getFullYear()}
      </Link>
      <div className='flex flex-col justify-center items-center'>
        <Link
          href='https://github.com/theCrims0n?tab=repositories' rel="noopener noreferrer" target="_blank"
          className="mx-3"
        >
          <Image src={github} alt={github} width={40} height={40} />
        </Link>
        <p className='pt-2'> GitHub Account</p>
      </div>
    </div>
  )
}