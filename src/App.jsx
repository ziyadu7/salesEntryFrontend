import { useState } from 'react'
import Header from './components/header'
import DetailTable from './components/detailTable'
import Actions from './components/actions'
import axiosInstance from './axios/axios'
import errorFunction from './helper/errorHandling'
import toast from 'react-hot-toast'
import DeleteConfirmModal from './components/deleteConfirmModal'

function App() {
  const [search, setSearch] = useState(0)
  const [details, setDetails] = useState([])
  const [header, setHeader] = useState('')
  const [totalPrice, setTotalPrice] = useState(0)
  const [status, setStatus] = useState('A')
  const [newDetail, setNewDetail] = useState([])
  const [showDeleteModal,setShowDeleteModal] = useState(false)
  
  function searchData() {
    if (search != 0) {
      axiosInstance.get(`/fetchDetails/${search}`).then(res => {
        if ((res?.data?.details?.length == 0 && !res?.data?.header) && res?.data?.details?.header == undefined) {
          toast.error("Didn't find header")
        } else {
          console.log(res?.data?.details);
          setDetails(res?.data?.details)
          if (res?.data?.details?.length == 0) {
            setHeader(res?.data?.header || {})
            setStatus(res?.data?.header?.status)
          } else {
            setStatus(res?.data?.details[0]?.header?.status)
            setTotalPrice(res?.data?.details[0]?.header?.acamount)
            setHeader(res?.data?.details[0]?.header)
          }
        }
      }).catch(err => {
        errorFunction(err)
      })
    }
  }

  const save = () => {
    if (!header || header == '') {
      toast.error("Select header")
    } else if (details?.length == 0) {
      toast.error('Add datas')
    } else {
      axiosInstance.post('/saveData', { header, details: newDetail, status, totalPrice }).then(res => {
        toast.success(res?.data?.message)
      }).catch(err => {
        errorFunction(err)
      })
    }
  }

  const deleteHeader =  ()=>{
    if (!header || header == '') {
      toast.error("No header for delete")
    }else{
      axiosInstance.delete(`/delete/${header?.vrno}`).then(res=>{
        toast.success(res?.data?.message)
        setHeader('')
        setDetails([])
        setNewDetail([])
        setSearch(0)
        setStatus('A')
        setShowDeleteModal(false)
        setTotalPrice(0)
      }).catch(err=>{
        errorFunction(err)
      })
    }
  }

  const printData = () => {
    const printContents = document.getElementById('printableDiv').innerHTML
    let originalContents = document.body.innerHTML
    document.body.innerHTML = printContents
    window.print({
      color: true,  
      landscape: true 
    });
    document.body.innerHTML = originalContents
    location.reload()
  }

  return (
    <div className='Actions'>
      <div className='w-full' id='printableDiv'>
      {showDeleteModal ? <DeleteConfirmModal setShowDeleteModal={setShowDeleteModal} deleteHeader={deleteHeader} /> : ''}
        <Header setSearch={setSearch} status={status} setStatus={setStatus} totalPrice={totalPrice} head={header} searchData={searchData} />
        <DetailTable header={header} totalPrice={totalPrice} newDetail={newDetail} setNewDetail={setNewDetail} setTotalPrice={setTotalPrice} setDetails={setDetails} details={details} />
      </div>
      <div className='buttonsParent md:ps-0 ps-3 h-full bg-amber-300 md:mt-20 '>
        <Actions deleteHeader={deleteHeader} setShowDeleteModal={setShowDeleteModal} printData={printData} save={save} setDetails={setDetails} header={header} setHead={setHeader} />
      </div>
    </div>
  )
}

export default App
