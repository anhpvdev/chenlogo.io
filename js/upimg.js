const lastimg = document.getElementById('lastimg');
const inputwi = document.getElementById('inputwidth');
const canvas = document.getElementById("canvas");
//uplload img
function uploadimg(){
    const uploadImage = (e) => {
        var l = e.target.files.length;
        var k=0
        let listimg = document.getElementById('listimg')

        for(i=1;i<=l;i++){
            //get canvas ++
            let temp = document.createElement('canvas')
            temp.setAttribute('id', 'canvas')
            listimg.appendChild(temp)

            // add image
            const canvas = document.getElementById("canvas")
            let ctx = canvas.getContext("2d")
            let reader = new FileReader()
            let img = new Image()

            reader.onload = () => {
                img.onload = () => { 
                    canvas.height = img.height;
                    canvas.width = img .width;
                    ctx.drawImage(img,0,0,canvas.width, canvas.height);
                }
                img.src = reader.result;
            }
            reader.readAsDataURL(e.target.files[k])
            k++;
            temp.setAttribute('id','')
            temp.setAttribute('class','canvas')
        }
        
    };
    const imageLoader = document.getElementById('uploader');
    imageLoader.addEventListener("change", uploadImage);
}
//download all image
function dowallimg(){
    var hicanvas = document.getElementsByClassName("canvas");
    console.log(hicanvas)
    for(var r=0;r<hicanvas.length;r++){
        let image = hicanvas[r].toDataURL();
        let link = document.createElement("a");
        let page = r+1;
        link.href = image;
        link.download = page+".jpg";
        link.click();
    }          
}

