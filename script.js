const  inputFile = document.getElementById('inputFile')
const img = document.getElementById('img')

inputFile.onchange = function(){
    img.src = URL.createObjectURL(inputFile.files[0]);
}