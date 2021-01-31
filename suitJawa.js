var tanya = true;
while(tanya){
    // menangkap pilihan pemain

    var p = prompt('pilih: gajah, semut, orang');

    // menangkap pilihan komputer
    // membangkitkan bilangan random

    var comp = Math.random();
    if(comp < 0.34){
        comp = 'gajah';
    }else if(comp > 0.34 && comp < 0.67){
        comp = 'semut';
    }else{
        comp = 'orang';
    }
    console.log(comp);

    // menentukan rule
    var hasil = '';
    if( p == comp) {
        hasil = 'Seri !';
    } else if(p == 'gajah'){
        // if(comp == 'orang'){
        //     hasil = 'Menang !';
        // } else {
        //     hasil = 'Kalah !';
        // }
        hasil = (comp == 'orang') ? 'Menang !' : 'Kalah !';
    } else if(p == 'semut'){
        hasil = (comp == 'gajah') ? 'Menang !' : 'Kalah !';
    }else if(p == 'orang'){
        hasil = (comp == 'semut') ? 'Menang !' : 'Kalah !';
    }else{
        hasil = 'Kamu memasukkan pilihan yang salah !';
    }
    // tampilkan hasilnya
    alert(`Kamu memilih ${p} dan komputer memilih ${comp}, maka hasilnya: ${hasil}`);

    tanya = confirm('Main lagi Yuk!');
}    
alert('Terima kasih ya sudah bermain..');