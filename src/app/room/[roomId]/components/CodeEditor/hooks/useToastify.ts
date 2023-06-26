import {Toaster, toast} from 'sonner'

export const useToast = () => {
  const showSuccessToast = (msg: string) => {
    return toast.success(msg)
  }
  const showErrorToast = (msg: string) => {
    return toast.error(msg)
  }

  return {
    showSuccessToast,
    showErrorToast,
  }
}
