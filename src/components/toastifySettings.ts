import { toast } from "react-toastify";

export const toastSuccess = () =>
  toast.success("Tecnologia criada com sucesso!", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

export const toastError = (errorMassage: string) =>
  toast.error(errorMassage, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

