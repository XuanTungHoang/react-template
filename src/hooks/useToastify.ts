import { toast, useToastContainer, ToastOptions, ToastContent } from 'react-toastify';

const useToast = () => {
  const stack: any[] = [];
  const LIMIT = 1;

  const defaulOptions: ToastOptions = {
    onOpen(props) {
      stack.push(props);
    },
    onClose(props) {
      stack.shift();
    },
  };

  const ableToast = () => stack.length < LIMIT;

  const error = (content: ToastContent<unknown>, options?: ToastOptions) => {
    if (!ableToast()) return;
    toast.error(content, { ...defaulOptions, ...options });
  };

  const success = (content: ToastContent<unknown>, options?: ToastOptions) => {
    if (!ableToast()) return;
    toast.success(content, { ...defaulOptions, ...options });
  };

  const warning = (content: ToastContent<unknown>, options?: ToastOptions) => {
    if (!ableToast()) return;
    toast.warning(content, { ...defaulOptions, ...options });
  };

  return {
    error,
    success,
    warning,
  };
};

export default useToast;
