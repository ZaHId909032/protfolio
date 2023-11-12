Myid=document.getElementById('my-id');
window.onscroll=function(){
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop >30 ){
        Myid.style.display="block";

    }
    else{
        Myid.style.display="none";

    }
};

function scrolltop(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
    

}


function About(){
    document.getElementById('about')
}