import React from 'react'

export const Container = ({ children }: { children: React.ReactNode }) => {
	return <div className='max-w-screen-xl'>{children}</div>
}
