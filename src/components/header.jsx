import React from 'react'

function Header() {
    return (
        <div>
            <h1 className='w-full bg-yellow-300 border-b-2 border-black text-center font-semibold mb-2'>Header</h1>
            <div>
                <div className='flex gap-5 justify-center md:gap-16 pt-5'>
                    <div className='flex'>
                        <label htmlFor="">Vr NO :- </label>
                        <input type="text" disabled className='w-16 ms-1 border-black border-2' />
                    </div>
                    <div className='flex'>
                        <label htmlFor="">Vr Date :- </label>
                        <input type="Date" disabled className=' ms-1 border-black border-2' />
                    </div>
                    <div className='flex'>
                        <label htmlFor="">Status :- </label>
                        <select name="" className='w-16 ms-1 border-black border-2' id="">
                            <option selected value="">A</option>
                            <option value="">I</option>
                        </select>
                    </div>

                </div>
                <div className='flex gap-5 justify-center md:gap-16 pt-5'>
                    <div className='flex'>
                        <label htmlFor="">Ac Name : </label>
                        <input type="text" className=' w-96 ms-1 border-black border-2' />
                    </div>
                    <div className='flex'>
                        <label htmlFor="">Ac Amt </label>
                        <input type="text" className='w-16 ms-1 border-black border-2' />
                    </div>
                </div>
                <div className='flex justify-center gap-2 pt-5'>
                    <div className='flex'>
                        <input type="text" placeholder='Enter vrNo' className='ms-1 border-black border-2' />
                    </div>
                    <div>
                        <button className='rounded-sm bg-blue-500 px-2 py-1 '>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header