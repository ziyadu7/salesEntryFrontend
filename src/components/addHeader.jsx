import React, { useState } from 'react'
import axiosInstance from '../axios/axios'
import toast from 'react-hot-toast'
import errorFunction from '../helper/errorHandling'

function AddHeader({ setShowModal, setHead, setDetails }) {

    const [accName, setAccName] = useState('')
    const [status, setStatus] = useState('')
    const [err,setErr] = useState('')

    const addHeaderFunction = () => {
        if(accName.trim().length==0||status.trim().length==0){
            setErr('Fill all the fields')
        }else{
            axiosInstance.post('/addHeader',{status,accName}).then(res=>{
                toast.success(res?.data?.message)
                setHead(res?.data?.header)
                setDetails([])
                setShowModal(false)
            }).catch(err=>{
                errorFunction(err)
            })
        }
    }

    return (
        <div>
            <div className="mb-4">
                <input
                    onChange={(e) => setAccName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="item"
                    type="text"
                    placeholder="Enter Account Name"
                />
            </div>
            <div className="w-full mb-6 md:mb-0">
                <div className="relative">
                    <select
                        onChange={(e) => setStatus(e.target.value)}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                    >
                        <option value={''}>Select Status</option>
                        <option value={'A'}>A</option>
                        <option value={'I'}>I</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>

            <p className="text-red-500 text-xs italic text-center my-3">{err}</p>
            <div className="flex items-center justify-end py-6 border-t border-solid border-blueGray-200 rounded-b">
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
                    onClick={addHeaderFunction}
                >
                    Add item
                </button>
            </div>
        </div>
    )
}

export default AddHeader