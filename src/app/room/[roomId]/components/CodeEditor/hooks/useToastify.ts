import {toast} from 'sonner'

export const useToast = () => {
  const showSuccessToast = (msg: string) => {
    return toast.success(msg)
  }
  const showErrorToast = (msg: string) => {
    return toast.error(msg)
  }

  const showTipMessage = (msg: string) => {
    return toast('Remember', {
      description: msg,
      style: {background: 'rgba(17,24,39,0.5)', color: 'white'},
    })
  }

  return {
    showSuccessToast,
    showErrorToast,
    showTipMessage,
  }
}
