/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { ArrowRight, Gem, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const MobileNav = ({
  isAuth,
  isSubscribed
}: {
  isAuth: boolean
  isSubscribed: boolean
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleOpen = () => setIsOpen((prev) => !prev)

  const pathName = usePathname()

  useEffect(() => {
    if (isOpen) toggleOpen()
  }, [pathName])

  const closeOnCurrent = (href: string) => {
    if (pathName === href) {
      toggleOpen()
    }
  }

  return (
    <div className=' sm:hidden'>
      <Menu
        onClick={toggleOpen}
        className=' relative z-50 h-5 w-5 text-zinc-700'
      />
      {isOpen && (
        <div className='fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 w-full'>
          <ul className=' absolute bg-white border-b  border-zinc-200 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8'>
            {/* todo: i18n */}
            {!isAuth ? (
              <>
                <li>
                  <Link
                    onClick={() => closeOnCurrent('/sign-up')}
                    href={'/sign-up'}
                    className='flex items-center w-full font-semibold text-green-600'>
                    Get Started <ArrowRight className=' ml-2 h-5 w-5' />
                  </Link>
                </li>
                <li className=' my-3 h-px w-full bg-gray-300' />
                <li>
                  <Link
                    onClick={() => closeOnCurrent('/sign-in')}
                    href={'/sign-in'}
                    className='flex items-center w-full font-semibold '>
                    Sign in
                  </Link>
                </li>
                <li className=' my-3 h-px w-full bg-gray-300' />
                <li>
                  <Link
                    onClick={() => closeOnCurrent('/pricing')}
                    href={'/pricing'}
                    className='flex items-center w-full font-semibold '>
                    Pricing
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    onClick={() => closeOnCurrent('/dashboard')}
                    href={'/dashboard'}
                    className='flex items-center w-full font-semibold '>
                    Dashboard
                  </Link>
                </li>
                <li className=' my-3 h-px w-full bg-gray-300' />
                {isSubscribed ? (
                  <Link
                    href={'/dashboard/billing'}
                    className='flex items-center w-full font-semibold '>
                    Manage Subsccription
                  </Link>
                ) : (
                  <Link
                    href={'/pricing'}
                    className='flex items-center w-full font-semibold '>
                    Upgrade <Gem className=' text-zinc-600 h-4 w-4 ml-1.5' />
                  </Link>
                )}
                <li className=' my-3 h-px w-full bg-gray-300' />
                <li>
                  <Link
                    onClick={() => closeOnCurrent('/sign-out')}
                    href={'/sign-out'}
                    className='flex items-center w-full font-semibold '>
                    Sign out
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default MobileNav
