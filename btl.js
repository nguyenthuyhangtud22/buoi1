var index=1;
function chayanh(){
    var imgs=["anh1.jpg","anh2.jpg","anh3.jpg"];
    document.getElementById('img').src=imgs[index];
    index++;
    if(index==3){
        index=0;
    }
   
}
setInterval(chayanh,1000);

function validateForm(){
    var x,y,z;
    x=document.forms["frm_dk"]["txt_ho"].value;
    if (x==""){
        alert("Bạn chưa nhập họ!");
        return false;
    }
    y=document.forms["frm_dk"]["txt_ten"].value;
    if (y==""){
        alert("Bạn chưa nhập tên!");
        return false;
    }
    u=document.forms["frm_dk"]["txt_email"].value;
    if (u==""){
        alert("Bạn chưa nhập email!");
        return false;
    }
    z=document.forms["frm_dk"]["txt_dienthoai"].value;
    if (isNaN(z) || length(z)=="" || length(z)>10){
        alert("Điện thoại phải là số, mời nhập lại!");
        return false;
    }
}
