import Swal from "sweetalert2";

export const toastError = Swal.mixin({
  toast: true,
  iconHtml: '<img class="w-100" src="assets/image/cancel.png" />',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  position: "bottom-end",
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const toastInfo = Swal.mixin({
  toast: true,
  iconHtml: '<img class="w-100" src="assets/image/info.png" />',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  position: "bottom-end",
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const toastSuccess = Swal.mixin({
  toast: true,
  iconHtml: '<img class="w-100" src="assets/image/check.png" />',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  position: "bottom-end",
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const alertConfirm = Swal.mixin({
  showCloseButton: true,
  showConfirmButton: true,
  showCancelButton: true,
  confirmButtonText: "Confirmar ✔",
  cancelButtonText: "Cancelar ✘",
  confirmButtonColor: "#8CD4F5",
  cancelButtonColor: "#dc3545",
  showClass: {
    popup: 'animate__animated animate__fadeInTopLeft'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutBottomRight'
  }
});
