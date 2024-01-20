import { useState } from 'react'
import Header from './components/header'
import DetailTable from './components/detailTable'
import Actions from './components/actions'
import axiosInstance from './axios/axios'
import errorFunction from './helper/errorHandling'
import toast from 'react-hot-toast'

function App() {
  const [search, setSearch] = useState(0)
  const [details, setDetails] = useState([])
  const [header, setHeader] = useState('')
  const [totalPrice, setTotalPrice] = useState(0)
  const [status, setStatus] = useState('A')
  const [newDetail,setNewDetail] = useState([])

  function searchData() {
    if (search != 0) {
      axiosInstance.get(`/fetchDetails/${search}`).then(res => {
        if ((res?.data?.details?.length == 0 && !res?.data?.header) && res?.data?.details?.header == undefined) {
          toast.error("Didn't find header")
        } else {
          setDetails(res?.data?.details)
          if (res?.data?.details?.length == 0) {
            setHeader(res?.data?.header || {})
            setStatus(res?.data?.header?.status)
          } else {
            setStatus(res?.data?.details?.header?.status)
            setTotalPrice(res?.data?.details?.header?.acamount)
            setHeader(res?.data?.details?.header)
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
    } else if(details?.length==0){
      toast.error('Add datas')
    }else {
      axiosInstance.post('/saveData',{header,details:newDetail,status,totalPrice}).then(res=>{
        toast.success(res?.data?.message)
      }).catch(err=>{
        errorFunction(err)
      })
    }
  }

  return (
    <div className='Actions'>
      <div className='w-full'>
        <Header setSearch={setSearch} status={status} setStatus={setStatus} totalPrice={totalPrice} head={header} searchData={searchData} />
        <DetailTable header={header} totalPrice={totalPrice} newDetail={newDetail} setNewDetail={setNewDetail} setTotalPrice={setTotalPrice} setDetails={setDetails} details={details} />
      </div>
      <div className='buttonsParent md:ps-0 ps-3 h-full bg-amber-300 md:mt-20 '>
        <Actions save={save} setDetails={setDetails} header={header} setHead={setHeader} />
      </div>
    </div>
  )
}

export default App
