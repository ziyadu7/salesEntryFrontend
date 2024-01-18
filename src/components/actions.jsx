import React from 'react'

function Actions() {
    return (
        <div className='flex buttons gap-4 bg-amber-300 font-medium hover:cursor-pointer'>
            <div className='w-10 bg-amber-300 ps-6 h-14 items-center flex justify-center'>
                New
            </div>
            <div className='w-10 h-14 bg-amber-300 ps-6 items-center flex justify-center'>
                Insert
            </div>
            <div className='w-10 h-14 bg-amber-300 ps-6 items-center flex justify-center'>
                Save
            </div>
            <div className='w-10 h-14 bg-amber-300 ps-6 items-center flex justify-center'>
                Print
            </div>
        </div>
    )
}

export default Actions