const fileInput = document.querySelector("input");
downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", e =>{
    e.preventDefault();
    downloadBtn.innerText = "İndiriliyor...";
    fetchFile(fileInput.value);
});

function fetchFile(url){
    fetch(url).then(res => res.blob()).then(file=>{
        let tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        downloadBtn.innerText = "Yeni Dosya İndir";
        URL.revokeObjectURL(tempUrl);
        aTag.remove();
    }).catch(() =>{
        alert("Hatalı, bu dosya indirilmiyor");
        downloadBtn.innerText = "Dosya İndir";
    });
}