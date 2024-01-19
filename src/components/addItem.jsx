import React, { useState } from 'react'
import axiosInstance from '../axios/axios'
import toast from 'react-hot-toast'
import errorHandling from '../helper/errorHandling'

function AddItem({ setShowModal }) {

    const [item, setItem] = useState('')
    const [price,setPrice] = useState('')
    const [err, setErr] = useState('')
    const addItem = () => {
        setErr('')
        if (item.trim().length == 0||price==0||price.trim().length==0) {
            setErr('Fill the field')
        } else {
            axiosInstance.post('/addItem', { item, price }).then(res => {
                toast.success(res?.data?.message)
                setShowModal(false)
            }).catch(err => {
                setShowModal(false)
                errorHandling(err)
            })
        }
    }

    return (
        <div>
            <div className="w-full max-w-xs">
                <div className="rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="item"
                            type="text"
                            placeholder="Enter Item name"
                            onChange={(e)=>setItem(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="item"
                            type="number"
                            placeholder="Enter Item Price"
                            onChange={(e)=>setPrice(e.target.value)}
                        />
                    </div>
                    <p className='text-red-500 text-center font-extralight'>{err}</p>
                </div>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                >
                    Close
                </button>
                <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={addItem}
                >
                    Add item
                </button>
            </div>
        </div>
    )
}

export default AddItem