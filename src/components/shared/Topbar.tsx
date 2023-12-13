import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { useSignOutAccount } from '@/lib/react-query/QueriesAndMutations'
import { useUserContext } from '@/context/AuthContext'

const Topbar = () => {
    const { mutate: signOut, isSuccess } = useSignOutAccount();
    const navigate = useNavigate();
    const { user } = useUserContext();

    useEffect(() => {
        if (isSuccess) navigate(0);
    }, [isSuccess]);

  return (
    <section className='tobbar'>
        <div className='flex-between py-4 px-5'>
            <Link to='/' className='flex gap-3 items-center'>
                <img 
                    src='/assets/images/logos.png'
                    alt='Logo'
                    width={50}
                    height={50}
                    className="rounded-full"
                />
            </Link>

            <div className='flex gap-4'>
                <Button variant="ghost" className='shad-button_ghost' onClick={() => signOut()}>
                    <img 
                        src='/assets/images/logout.jpeg'
                        alt='logout'
                        width={35}
                        height={35}
                        className="rounded-full"
                    />
                </Button>
                <Link to={`/profile/${user.id}`} className='flex-center gap-3'>
                    <img 
                        src={user.imageUrl || 'assets/images/profile.png'}
                        alt='profile'
                        className='h-8 w-8 rounded-full'
                    />
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Topbar