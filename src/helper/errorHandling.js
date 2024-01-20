import { toast } from 'react-hot-toast'

function errorFunction(err) {
  console.log(err);
  if (err?.message) {
    toast.error(err?.message)
  } else if (err?.response?.data) {
    toast.error(err?.response?.data?.errMsg)
  }
}

export default errorFunction