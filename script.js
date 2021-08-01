// usando a api webRTC para abrir a câmera 

function iniciarVideoDaCam(){

  const specs = {video:{width:"fotoDiv"}}  

  navigator.mediaDevices.getUserMedia(specs).then(stream=>{
    const videoElement = document.querySelector("#video")
    videoElement.srcObject = stream
  }).catch(error=>{console.log(error)})

}

window.addEventListener("DOMContentLoaded",iniciarVideoDaCam)

// usando html2canvas 
 // Definindo qual div vms fotografar
        function tirarFoto() {
            let div =
                document.getElementById('video');
  
            // Usando html2canvas que tira fotos e envia para a div fotoPronta
            html2canvas(div).then(
                function (canvas) {
                    document
                    .getElementById('fotoPronta')
                    .appendChild(canvas);
                })
        }

