import React, { useState } from 'react'
import Modal from './modal'

function Actions({setHead,setDetails}) {

    const [showModal, setShowModal] = useState(false);
    const [action,setAction] = useState('')

    return (
        <div className='flex buttons gap-4 bg-amber-300 font-medium hover:cursor-pointer'>
            {showModal?<Modal setDetails={setDetails} setHead={action=='addHeader'?setHead:''} showModal={showModal} setShowModal={setShowModal} action={action}/>:null}
            <div onClick={()=>{
                setAction('addHeader')
                setShowModal(true)
                } } className='w-10 bg-amber-300 ps-6 h-14 items-center flex justify-center'>
                New
            </div>
            <div onClick={()=>{
                setAction('insertData')
                setShowModal(true)
                } } className='w-10 h-14 bg-amber-300 ps-6 items-center flex justify-center'>
                Insert
            </div>
            <div className='w-10 h-14 bg-amber-300 ps-6 items-center flex justify-center'>
                Save
            </div>
            <div className='w-10 h-14 bg-amber-300 ps-6 items-center flex justify-center'>
                Print
            </div>
            <div onClick={()=>{
                setAction('addItem')
                setShowModal(true)
                } }className='w-10 h-14 bg-amber-300 ps-6 items-center flex justify-center'>
                Add Item
            </div>
        </div>
    )
}

export default Actions