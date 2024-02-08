
import { BackgroundBeams } from '@/components/ui/background-beams';
import React from 'react'

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
        <div className='h-full flex items-center justify-center bg-neutral-950'>
            <div className='z-10'>
                {children}
            </div>
            <BackgroundBeams className='blur-sm' />
        </div>
    );
}

export default AuthLayout;
