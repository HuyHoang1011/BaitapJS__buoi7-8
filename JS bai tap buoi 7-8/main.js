var a=new Array();
var b=new Array();
document.getElementById("taoMang").onclick=function(){
    var num=document.getElementById("add").value*1;
    a.push(num);
    console.log(a);


}
document.getElementById("Sum").onclick=function(){
        //1
        var i;
        var sum=0;
        var dem=0;
        for (i=0;i<a.length;i++){
            if(a[i]>0){
                sum+=a[i];
                dem++;
            }
        }
        document.getElementById("tongTrongMang").innerHTML=sum;
        //2
        document.getElementById("soDuong").innerHTML=dem;
        //3 
        var min=a[1];
        for(i=0;i<a.length;i++){
            if(a[i]<min){
                min=a[i];
            }
        }
        document.getElementById("soNhoNhat").innerHTML=min;
        //4
        for(i=0;i<a.length;i++){
            if(a[i]>0){
                min=a[i];
                break;
            }
        }
        for(i=0;i<a.length;i++){
            if(a[i]>0 && a[i]<min){
                min=a[i];
            }
        }
        document.getElementById("soDuongNhoNhat").innerHTML=min;
        //5
        var c=0;
        for(i=0;i<a.length;i++){
            if(a[i]%2==0)
            {
                c++;
            }
        }
        // console.log(c);
        if(c==0){
            document.getElementById("soChanCuoiCung").innerHTML=-1;
        }
        for(i=0;i<a.length;i++){
            if(a[i]%2==0)
            {
                c--;
            }
            if(c==0){
                document.getElementById("soChanCuoiCung").innerHTML=a[i];
                break;
            }
        }
    }
//6

document.getElementById("chuyen").onclick=function(){
    var vt1=document.getElementById("viTriMot").value*1;
    var vt2=document.getElementById("viTriHai").value*1;
    var e,f;
    e=a[vt1];
    f=a[vt2];
    var tam;
    tam=e;
    e=f;
    f=tam;
    a[vt1]=e;
    a[vt2]=f;
    document.getElementById("dayXapSep").innerHTML=a;
}

//7
document.getElementById("SX").onclick=function(){  
    var i;
    var j;
    var tam;
    for(i=0;i<a.length-1;i++){
        for (j=i;j<a.length;j++){
            if(a[i]>a[j]){
                tam=a[i];
                a[i]=a[j];
                a[j]=tam;
            }
        }
    }
    document.getElementById("Sort").innerHTML=a;
}
//8
function ktra(a){
    if(a<2){
        return false;
    }
    var i;
    for(i=2; i<=Math.sqrt(a);i++){
        if (a%i == 0){
            return false;    
        }
    }
    return true;
}
document.getElementById("Find").onclick=function(){
    var i;
    var c=0;
    var kqua;
    for(i=0;i<a.length;i++){
        if(ktra(a[i])==true){
            kqua=a[i];
            c=1;
            break;
        }
    }
    if(c==0){
        kqua=-1;
    }
    document.getElementById("Nto").innerHTML=kqua;
}


document.getElementById("taoMangSoThuc").onclick=function(){
    var num=document.getElementById("addSoThuc").value*1;
    b.push(num);
    console.log(b);
}

document.getElementById("soThuc").onclick=function(){
    var i;
    var dem=0;
    for(i=0;i<b.length;i++){
        if(Number.isInteger(b[i]) == true){
            dem++;
        }
    }
    var kq="Có " + dem + " số nguyên trong mảng";
    document.getElementById("inSoThuc").innerHTML=kq;
    // console.log(Number.isInteger(12.345));
}

//B10
document.getElementById("btnDem").onclick=function(){
    var duong=0;
    var am=0;
    console.log("click");
    for(var i=0;i<a.length;i++){
        if(a[i]>=0){
            duong++;
        }else{
            am++;
        }
    }
    var KQ="Có " + duong + " số dương, có " +  am + " số âm";
    document.getElementById("duongAm").innerHTML=KQ; 
}
