let imgBox = document.getElementById('imgBox')
let qrImage = document.getElementById('qrImage')
let qrText = document.getElementById('qrText')
let obj = {
    name: 'gautam',
    age:20,
    gender:'male'
}
function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add('show-img')
        console.log(obj);
    }
    else{
        qrText.placeholder = 'Please fill the input!'
        qrText.classList.add('error')
        setTimeout(() => {
            qrText.classList.remove('error')
            console.log(obj);
        }, 600);
        
    }
}