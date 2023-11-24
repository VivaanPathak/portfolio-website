submit=document.getElementById('submit');
submit.addEventListener("click",()=>{
   console.log("form submitted")

names=document.getElementById('clientname');
email=document.getElementById('clientemail');
phone=document.getElementById('clientphone');
enquiry=document.getElementById('clientenquiry');
if(localStorage.getItem(itemjson)==null){
   itemjsonarray=[];
   itemjsonarray.push([names,email,phone,enquiry]);
   localStorage.setItem('itemjson', JSON.stringify(itemjsonarray));
}
else{
   itemjsonarraystr=localStorage.getItem(itemjson);
   itemjsonarray=JSON.parse("itemjsonarraystr");
   itemjsonarray.push([names,email,phone,enquiry]);
   localStorage.setItem('itemjson', JSON.stringify(itemjsonarray));
}

})