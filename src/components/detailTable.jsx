import React, { useEffect, useState } from 'react'
import axiosInstance from '../axios/axios'
import errorFunction from '../helper/errorHandling'
import toast from 'react-hot-toast'

function DetailTable({ header, details, setDetails, totalPrice, setTotalPrice, setNewDetail, newDetail }) {

    const [items, setItems] = useState([])
    const [item, setItem] = useState({})
    const [qty, setQty] = useState(0)

    useEffect(() => {
        axiosInstance.get('/fetchItems').then(res => {
            setItems(res?.data?.items)
        }).catch(err => {
            errorFunction(err)
        })
        return () => {
            setItems([])
        }
    }, [])

    const InsertData = () => {
        if (!item?.itemcode || qty == 0) {
            toast.error('Select items properly')
        } else {
            const isExist = details?.find(data => data?.item?.itemcode == item.itemcode)

            if (isExist) {
                toast.error('Item already exist')
            } else if (!header) {
                toast.error('Select or add a header')
            } else {
                setTotalPrice(totalPrice + (item?.price * qty))
                setNewDetail([...newDetail,{ vrno: header?.vrno, srno: details.length + 1, item, qty, rate: item?.price }])
                setDetails([...details, { vrno: header?.vrno, srno: details.length + 1, item, qty, rate: item?.price }])
                setItem({})
                setQty(0)
            }
        }
    }

    return (
        <div>
            <h1 className='w-full mt-5 bg-yellow-200 bg-opacity-50 border-b-2 border-black text-center font-semibold'>Details</h1>
            <div>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-left rtl:text-right text-gray-500">
                        <thead className="text-black font-semibold bg-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Sr NO
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Item Code
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Item Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Qty
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Rate
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {details?.length > 0 ? details?.map(data => (
                                <tr key={data?.srno} className="bg-white text-black font-medium">
                                    <td className="px-6 py-4 border-2 border-black w-24">
                                        {data?.srno}
                                    </td>
                                    <td className="px-6 py-4 border-2 border-black w-32">
                                        {data?.item?.itemcode || data?.itemcode}
                                    </td>
                                    <td className="px-6 py-4 border-2 border-black min-w-96">
                                        {data?.item?.itemname || data?.itemname}
                                    </td>
                                    <td className="px-6 py-4 border-2 border-black">
                                        {data?.qty}
                                    </td>
                                    <td className="px-6 py-4 border-2 border-black">
                                        {data?.rate}
                                    </td>
                                    <td className="px-6 py-4 border-2 border-black">
                                        {data?.rate * data?.qty}
                                    </td>
                                </tr>
                            )) : null}
                            <tr className="bg-white text-black font-medium overflow-scroll">
                                <td className="border-2 border-black w-24">
                                    <input type="number" placeholder={details?.legnth || 1} disabled className='w-full p-1' />
                                </td>
                                <td className="border-2 border-black w-32">
                                    <input type="number" placeholder={item?.itemcode || 0} disabled className='w-full p-1' />
                                </td>
                                <td className="border-2 border-black min-w-96">
                                    <div className="relative">
                                        <select
                                            onChange={(e) => {
                                                const selectedObject = items.find(item => item.itemcode == e.target.value)
                                                setItem(selectedObject);
                                            }}
                                            className="block appearance-none w-full pr-8 rounded ps-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        >
                                            <option value={item?.itemcode}>{item?.itemname || 'select item'}</option>
                                            {items.length > 0 ?
                                                items?.map(item => (
                                                    <option value={item.itemcode} key={item?.itemcode}>{item?.itemname}</option>
                                                ))
                                                : ''}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-2 border-black">
                                    <input type="number" placeholder={qty} onChange={(e) => setQty(e.target.value)} className='w-full p-1' />
                                </td>
                                <td className="border-2 border-black">
                                    <input type="text" placeholder={item?.price || 0} disabled className='w-full p-1' />
                                </td>
                                <td className="border-2 border-black flex">
                                    <input type="text" placeholder={item?.price * qty || 0} disabled className='w-full p-1' />
                                    <button onClick={(e) => InsertData()} className='bg-yellow-400 rounded-sm px-1'>Insert</button>
                                </td>
                            </tr>
                            <tr className="bg-white text-black font-medium">
                                <td className="px-6 py-4">

                                </td>
                                <td className="px-6 py-4">

                                </td>
                                <td className="px-6 py-4">

                                </td>
                                <td className="px-6 py-4">
                                </td>
                                <td className="px-6 py-4 border-2 border-black">
                                    Total :-
                                </td>
                                <td className="px-6 py-4 border-2 border-black">
                                    {totalPrice}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DetailTable