import Swal from "sweetalert2";

export const toastError = Swal.mixin({
  toast: true,
  iconHtml: '<img class="w-100" src="https://cdn.icon-icons.com/icons2/1402/PNG/512/cancel_96921.png"',
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
  iconHtml: '<img class="w-100" src="https://cdn.icon-icons.com/icons2/2346/PNG/512/info_information_icon_142931.png"',
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
  iconHtml: '<img class="w-100" src="https://cdn.icon-icons.com/icons2/2346/PNG/512/checkmark_check_apply_done_accept_icon_142904.png"',
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
