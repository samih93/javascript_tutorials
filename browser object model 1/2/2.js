
setTimeout(function () {
    Swal.fire({
        title: "Welcome", text: "Welcome", showConfirmButton: false,
        showCloseButton: true,

    });
    setTimeout(() => {
        document.location = "https://www.google.com/";
    }, 3000);
}, 5000);