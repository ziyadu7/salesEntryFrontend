import React from 'react'

function Header({ setSearch, searchData, head, totalPrice, setStatus, status }) {
    return (
        <div>
            <h1 className='w-full bg-yellow-300 border-b-2 border-black text-center font-semibold mb-2'>Header</h1>
            <div>
                <div className='flex gap-5 justify-center md:gap-16 pt-5'>
                    <div className='flex'>
                        <label htmlFor="">Vr NO :- </label>
                        <input type="text" value={head?.vrno} disabled className='w-16 ms-1 border-black border-2 px-1' />
                    </div>
                    <div className='flex'>
                        <label htmlFor="">Vr Date :- </label>
                        <input type="Date" value={head?.vrdate?.slice(0, 10)} disabled className=' ms-1 border-black border-2 px-1' />
                    </div>
                    <div className='flex'>
                        <label htmlFor="">Status :- </label>
                        <select onChange={(e) => setStatus(e?.target?.value)} name="" className='w-16 ms-1 border-black border-2' id="">
                            <option selected value={head?.status}>{head?.status||status}</option>
                            <option value="A">A</option>
                            <option value="I">I</option>
                        </select>
                    </div>

                </div>
                <div className='flex gap-5 justify-center md:gap-16 pt-5'>
                    <div className='flex'>
                        <label htmlFor="">Ac Name : </label>
                        <input type="text" disabled value={head?.acname} className=' w-96 ms-1 border-black border-2 px-1' />
                    </div>
                    <div className='flex'>
                        <label htmlFor="">Ac Amt </label>
                        <input type="text" disabled value={head?.acamount || totalPrice} className='w-16 ms-1 border-black border-2 px-1' />
                    </div>
                </div>
                <div className='flex justify-center gap-2 pt-5'>
                    <div className='flex'>
                        <input type="number" onChange={(e) => setSearch(e.target.value)} placeholder='Enter vrNo' className='ms-1 border-black border-2 px-1' />
                    </div>
                    <div>
                        <button onClick={() => searchData()} className='rounded-sm bg-blue-500 px-2 py-1 '>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header