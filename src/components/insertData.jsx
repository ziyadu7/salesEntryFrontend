import React, { useEffect, useState } from 'react'
import axiosInstance from '../axios/axios'
import errorFunction from '../helper/errorHandling'
import toast from 'react-hot-toast'

function InsertData({ setShowModal, header, setDetails, details }) {

    const [items, setItems] = useState([])
    const [qty, setQty] = useState('')
    const [err, setErr] = useState('')
    const [item, setItem] = useState('')

    const addDetails = () => {
        if (item.trim().length == 0 || qty == 0 || qty.trim().length == 0) {
            setErr('Fill all the fields')
        } else if (!header) {
            setErr("Select a header")
        } else {
            setDetails({...details})
            // axiosInstance.post('/addDetails', { qty, item, vrno: header.vrno }).then(res => {
            //     toast.success(res?.data?.message)
            //     setDetails(res?.data?.details)
            // }).catch(err => {
            //     errorFunction(err)
            // })
        }
    }

    // useEffect(() => {
    //     axiosInstance.get('/fetchItems').then(res => {
    //         setItems(res?.data?.items)
    //     }).catch(err => {
    //         errorFunction(err)
    //     })
    //     return () => {
    //         setItems([])
    //     }
    // }, [])

    return (
        <div>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        State
                    </label>
                    <div className="relative">
                        <select
                            onChange={(e) => setItem(e.target.value)}
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        >
                            {items.length > 0 ?
                                items?.map(item => (
                                    <option value={item} key={item?.itemcode}>{item?.itemname}</option>
                                ))
                                : ''}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Quantity
                    </label>
                    <input
                        onChange={(e) => setQty(e.target.value)}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="number"
                        placeholder="Enter Item quantity"
                    />
                </div>
                <p className='text-red-500 text-center font-extralight'>{err}</p>
            </div>

            <div className="flex items-center justify-end py-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                >
                    Close
                </button>
                <button
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                        addDetails()
                        setShowModal(false)
                    }}
                >
                    Insert Details
                </button>
            </div>
        </div>
    )
}

export default InsertData