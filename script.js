let welcome = alert("Selamat datang di Awan's Currency. Silahkan klik ok untuk menuju ke menu selanjutnnya")
let pin = prompt("Silahkan buat PIN berupa angka")

while (isNaN(pin)) {
    alert("Pin yang di masukkan harus berupa angka!")
    pin = prompt('Silahkan buat PIN berupa angka');
}

let pinconfirm = confirm("Pin yang dibuat berhasil. Lanjut untuk ke menu login ?")

if (pinconfirm) {
    let pinmasuk = prompt("Halo, pengguna. Silahkan masukkan pin untuk konfirmasi")

    while (pinmasuk !== pin) {
        alert("Pin yang di masukkan salah! Silahkan coba lagi")
        pinmasuk = prompt('Halo, pengguna. Silahkan masukkan pin untuk konfirmasi');
    }

    let menu;
    let saldo = 0;
    
    do {
        menu = prompt("Pin yang di masukkan benar. Selamat datang di Awan's Currency. Silahkan pilih menu yang akan di tuju. 1. Cek Saldo 2. Isi Saldo 3. Tarik Uang 4. Keluar")
        
        if (menu == 1) {
            alert("Saldo anda adalah Rp." + saldo);
        } else if (menu == 2) {
            let isisaldo = parseInt(prompt("Silahkan masukkan jumlah uang yang akan anda isi (minimal Rp. 1.000). Contoh: 1000") );
            while (isisaldo < 1000) {
                alert("Jumlah uang yang di isi harus minimal Rp. 1.000")
                isisaldo = parseInt(prompt("Silahkan masukkan jumlah uang yang akan anda isi (minimal Rp. 1.000). Contoh: 1000") );
            }
            saldo += isisaldo;
            alert("Isi saldo berhasil. Saldo anda saat ini adalah Rp." + saldo);
        } else if (menu == 3) {
            let tarikuang = parseInt(prompt("Silahkan masukkan jumlah uang yang akan anda tarik (minimal Rp. 5.000). Contoh: 5000") );
            while (tarikuang < 5000 || tarikuang > saldo) {
                alert("Jumlah uang yang di tarik harus minimal Rp. 5.000 dan tidak melebihi saldo anda")
                tarikuang = parseInt(prompt("Silahkan masukkan jumlah uang yang akan anda tarik (minimal Rp. 5.000). Contoh: 5000") );
            }
            saldo -= tarikuang;
            alert("Tarik uang berhasil. Saldo anda saat ini adalah Rp." + saldo);
        } else if (menu == 4) {
            alert("Terimakasih telah menggunakan Awan's Currency. Sampai jumpa lagi :)")
        } else {
            alert("Menu yang dipilih tidak valid");
        }
    } while (menu != 4);
} else {
    alert("Error")
}