const qrText=document.getElementById('text');
const sizes=document.getElementById('sizes');
const generate=document.getElementById('Generate');
const download=document.getElementById('Download');
const qrmain=document.querySelector('.qrBody');
let size=sizes.value
generate.addEventListener('click',(e)=>{
    e.preventDefault();
    if(qrText.value.length==0){
        alert("Please Enter Text");
    }
    else{
        generateQr();
    }
});
sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    generateQr();
})
download.addEventListener('click',()=>{
    let img = document.querySelector('.qrBody img');

    if(img !== null){
        const qrCodeDataURL = img.src;
        downloadLink.href = qrCodeDataURL;
        downloadLink.download = 'qr_code.png';
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
})
function generateQr(){
  qrmain.innerHTML="";
new QRCode(qrmain,{
    text:qrText.value,
    width:size,
    height:size,
    colorDark :"#000",
    colorLight :"#fff",
    
});
}