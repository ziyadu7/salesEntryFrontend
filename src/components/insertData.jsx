import React, { useEffect, useState } from 'react'
import axiosInstance from '../axios/axios'
import errorFunction from '../helper/errorHandling'

function InsertData({setShowModal}) {

    const [items,setItems] = useState([])

    useEffect(()=>{
        axiosInstance.get('/fetchItems').then(res=>{
            setItems(res?.data?.items)
        }).catch(err=>{
            errorFunction(err)
        })
        return ()=>{
            setItems([])
        }
    },[])

    return (
        <div>

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
                    onClick={() => setShowModal(false)}
                >
                    Save Changes
                </button>
            </div>
        </div>
    )
}

export default InsertData