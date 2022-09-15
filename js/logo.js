

document.getElementById("insert").onclick = function(){
    if(document.getElementById("checklogo1").checked == true){
        var logosize = document.getElementById("logosize").value
        console.log(logosize)
        var image__insert = document.querySelectorAll(".canvas")
        var img = document.getElementById("logo");

        for(i=0; i < image__insert.length; i++){
            let size = image__insert[i].width/logosize
            if(document.getElementById("checkTL").checked == true){
                var logo_X = 0
                var logo_Y = 0
            }
            if(document.getElementById("checkTR").checked == true){
                var logo_X = image__insert[i].width - (size*1.2)
                var logo_Y = 0
            }
            if(document.getElementById("checkBL").checked == true){
                var logo_X = 0
                var logo_Y = image__insert[i].height - (size*1.2)
            }
            if(document.getElementById("checkBR").checked == true){
                var logo_X = image__insert[i].width - (size*1.2)
                var logo_Y = image__insert[i].height - (size*1.2)
            }

            let ctx = image__insert[i].getContext("2d")
            ctx.drawImage(img,logo_X,logo_Y,size, size)
        }
    }
    if(document.getElementById("checklogo2").checked == true){
        var logosize = document.getElementById("logosize").value
        console.log(logosize)
        var image__insert = document.querySelectorAll(".canvas")
        console.log(image__insert.length)
        var img = document.getElementById("logo");
        var posY = 0
        const  distance = (image__insert[0].width/9)*16

        for(i=0; i < image__insert.length; i++){
            let size = image__insert[i].width/logosize
            let ctx = image__insert[i].getContext("2d")
            var logo_X = image__insert[i].width - (size*1.1)
            if(image__insert[i].height >= distance - posY){
                var logo_Y = distance - posY
                console.log(logo_X+"++"+logo_Y+"++"+posY)
                ctx.drawImage(img,logo_X,logo_Y,size, size)
                if(image__insert[i].height >= distance+logo_Y){
                    logo_Y = distance + logo_Y
                    ctx.drawImage(img,logo_X,logo_Y,size, size)
                }
                posY = image__insert[i].height - logo_Y
                if(logo_Y+size > image__insert[i].height){
                    posY = (image__insert[i].height - logo_Y) + distance
                }
            }else{
                posY = posY + image__insert[i].height
                console.log("daif qua")
            }



            
        
        }
    }





}

