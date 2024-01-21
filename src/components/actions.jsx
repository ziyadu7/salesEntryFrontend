import React, { useState } from 'react'
import Modal from './modal'
import toast from 'react-hot-toast';

function Actions({ setHead, setDetails, header, save, printData, setShowDeleteModal }) {

    const [showModal, setShowModal] = useState(false);
    const [action, setAction] = useState('')

    return (
        <div className='flex buttons gap-4 rounded-sm bg-amber-300 font-medium hover:cursor-pointer'>

            {showModal ? <Modal setDetails={setDetails} header={header} setHead={action == 'addHeader' ? setHead : ''} showModal={showModal} setShowModal={setShowModal} action={action} /> : null}
            <div onClick={() => {
                setAction('addHeader')
                setShowModal(true)
            }} className='w-10 bg-amber-300 ps-6 h-14 items-center flex justify-center'>
                New
            </div>
            <div onClick={save} className='w-10 h-14 bg-amber-300 ps-6 items-center flex justify-center'>
                Save
            </div>
            <div onClick={printData} className='w-10 h-14 bg-amber-300 ps-6 items-center flex justify-center'>
                Print
            </div>
            <div onClick={() => {
                setAction('addItem')
                setShowModal(true)
            }} className='w-10 h-14 bg-amber-300 ps-6 items-center flex justify-center'>
                Add Item
            </div>
            <div onClick={()=>
                {
                    if(!header||header==''){
                        toast.error('No header for delete')
                    }else{
                        setShowDeleteModal(true)
                    }
                }} className='w-full h-14 bg-red-600 items-center pe-6 ps-6 flex justify-center'>
                Delete
            </div>
        </div>
    )
}

export default Actions