function bar(){
    let u=document.querySelector("#bar");
    u.style.visibility="hidden";
    document.querySelector(".sidebar").style.display="flex";
}

function cross(){
    let t=document.querySelector("#bar");
    let u=document.querySelector(".cross");
    document.querySelector(".sidebar").style.display="none";
    t.style.visibility="visible";
}
function navigateToUrl(url) {
    var a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer'; // Recommended for security
    a.click();
}