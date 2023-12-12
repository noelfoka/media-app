import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { useSignOutAccount } from '@/lib/react-query/QueriesAndMutations'

const Topbar = () => {
    const { mutate: signOut, isSucces } = useSignOutAccount();

    useEffect(() => {
        if (isSucces) {
            window.location.href = '/login';
        }
    })

  return (
    <section className='tobbar'>
        <div className='flex-between py-4 px-5'>
            <Link to='/' className='flex gap-3 items-center'>
                <img 
                    src='/assets/images/logos.png'
                    alt='Logo'
                    width={60}
                    height={60}
                    className="rounded-full"
                />
            </Link>

            <div className='flex gap-4'>
                <Button variant="ghost" className='shad-button_ghost' onClick={() => signOut()}>
                    <img 
                        src='/assets/images/logout.jpeg'
                        alt='logout'
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                </Button>
            </div>
        </div>
    </section>
  )
}

export default Topbar