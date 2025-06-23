'use client'
import { ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'
export default function Footer() {
  return (
    <footer className='bg-black  text-white underline-link'>
      <div className='w-full'>
        <Button
          variant='ghost'
          className='bg-gray-800 w-full  rounded-none '
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className='mr-2 h-4 w-4' />
            back to top
        </Button>
      </div>
      <div className='p-4'>
        <div className='flex justify-center gap-3 text-sm'>
            <Link href='/page/conditions-of-use'>conditions of use</Link>
            <Link href='/page/privacy-policy'>privacy</Link>
            <Link href='/page/help'>Hellp</Link>
        </div>
        <div className='flex justify-center text-sm'>
            <p>Lorem ipsum dolor sit amet {APP_NAME} consectetur adipisicing elit. Eligendi, ea.</p>
        </div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repellat!
            </div>
      </div>
    </footer>
  )
}