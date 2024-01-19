import { useState } from 'react'
import Header from './components/header'
import DetailTable from './components/detailTable'
import Actions from './components/actions'
import axiosInstance from './axios/axios'
import errorFunction from './helper/errorHandling'

function App() {
  const [search, setSearch] = useState(0)
  const [details,setDetails] = useState([])
  function searchData() {
    if (search != 0) {
      axiosInstance.get(`/fetchDetails/${search}`).then(res=>{
        setDetails(res?.data?.details)
      }).catch(err=>{
        errorFunction(err)
      })
    }
  }
  return (
    <div className='Actions'>
      <div className='w-full'>
        <Header setSearch={setSearch} searchData={searchData} />
        <DetailTable details={details} />
      </div>
      <div className='buttonsParent md:ps-0 ps-3 h-full bg-amber-300 md:mt-20 '>
        <Actions />
      </div>
    </div>
  )
}

export default App
