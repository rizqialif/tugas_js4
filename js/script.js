function masuk() {
    //tangkap request form
    let frm = window.document.getElementById("formulir");
    let user = frm.email.value;
    let password1 = frm.password.value;
    /*
    logic jika mahasiwa sudah input namanya ada salam
    jika tidak input namanya, ada pesan belum input nama
    */
    if (user === "mimin" && password1 === "mimin123") {
        alert("Selamat datang " + user + ",anda Administrator");
    } else if (user === "budi" && password1 === "budi123") {
        alert("Selamat datang " + user + ",anda Operator");

    } else {
        alert("Maaf user atau password yang anda masukan salah!");
    }
}

function kosongin() {
    //tangkap request form
    let frm = window.document.getElementById("formulir");
    frm.nama.value = "";
}