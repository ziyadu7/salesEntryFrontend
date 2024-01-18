import { useState } from 'react'
import Header from './components/header'
import DetailTable from './components/detailTable'
import Actions from './components/actions'

function App() {

  return (
    <div className='Actions'>
      <div className='w-full'>
        <Header />
        <DetailTable />
      </div>
      <div className='buttonsParent md:ps-0 ps-3 h-full bg-amber-300 md:mt-20 '>
        <Actions />
      </div>
    </div>
  )
}

export default App
