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
    })
  }

  return {
    showSuccessToast,
    showErrorToast,
    showTipMessage,
  }
}
