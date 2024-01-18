import React from 'react'

function DetailTable() {
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
                            <tr className="bg-white text-black font-medium">
                                <td className="px-6 py-4 border-2 border-black w-24">
                                    1
                                </td>
                                <td className="px-6 py-4 border-2 border-black w-32">
                                    1
                                </td>
                                <td className="px-6 py-4 border-2 border-black min-w-96">
                                    Laptop
                                </td>
                                <td className="px-6 py-4 border-2 border-black">
                                    $2999
                                </td>
                                <td className="px-6 py-4 border-2 border-black">
                                    $2999
                                </td>
                                <td className="px-6 py-4 border-2 border-black">
                                    $2999
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
                                    $99
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