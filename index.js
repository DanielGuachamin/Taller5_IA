const trainingData = [
    { input: 'Estoy feliz', output: 'feliz' },
    { input: 'Me alegro por ti', output: 'sarcastico' },
    { input: 'Quiero llorar', output: 'triste' },
    { input: 'Estoy ansioso', output: 'ansioso' }
];

const net = new brain.recurrent.LSTM();
net.train(trainingData, {
    iterations: 500,
    erroThresh: 0.001
});

const detectEmotion = () => {
    var divtomar = document.getElementById("emotionalphrase");
    var resultado = net.run(divtomar.value);
    var divpresenta = document.getElementById("emotionalresponse");
    divpresenta.innerHTML = resultado;
    const image = document.createElement('img')
    switch (resultado){
        case 'feliz':
            image.src  = './imagenes/feliz.png'
            document.querySelector('.imageEmotion').appendChild(image)
            //image = document.getElementsByTagName("img").setAttribute("src='https://thumbs.dreamstime.com/b/cara-con-el-icono-de-la-emoci%C3%B3n-en-fondo-blanco-chocado-los-ojos-cabeza-abierta-boca-gente-cambiante-crean-dibujo-car%C3%A1cter-149711186.jpg'");
            break;
        case 'sarcastico':
            image.src  = './imagenes/sarcasmo.jpg'
            document.querySelector('.imageEmotion').appendChild(image)
            //image = document.getElementsByTagName("img").setAttribute("src='https://thumbs.dreamstime.com/b/cara-con-el-icono-de-la-emoci%C3%B3n-en-fondo-blanco-chocado-los-ojos-cabeza-abierta-boca-gente-cambiante-crean-dibujo-car%C3%A1cter-149711186.jpg'");
            break;
        case 'triste':
            image.src  = './imagenes/triste.jpg'
            document.querySelector('.imageEmotion').appendChild(image)
            //image = document.getElementsByTagName("img").setAttribute("src='https://thumbs.dreamstime.com/b/cara-con-el-icono-de-la-emoci%C3%B3n-en-fondo-blanco-chocado-los-ojos-cabeza-abierta-boca-gente-cambiante-crean-dibujo-car%C3%A1cter-149711186.jpg'");
            break;
        case 'ansioso':
            image.src  = './imagenes/emocion.jpg'
            document.querySelector('.imageEmotion').appendChild(image)
            //image = document.getElementsByTagName("img").setAttribute("src='https://thumbs.dreamstime.com/b/cara-con-el-icono-de-la-emoci%C3%B3n-en-fondo-blanco-chocado-los-ojos-cabeza-abierta-boca-gente-cambiante-crean-dibujo-car%C3%A1cter-149711186.jpg'");
            break;
        default:
            image.src  = 'https://premioseikon.com/wp-content/uploads/2020/06/imagen-3.jpg'
            document.querySelector('.imageEmotion').appendChild(image)
            //image = document.getElementsByTagName("img").setAttribute("src='https://thumbs.dreamstime.com/b/cara-con-el-icono-de-la-emoci%C3%B3n-en-fondo-blanco-chocado-los-ojos-cabeza-abierta-boca-gente-cambiante-crean-dibujo-car%C3%A1cter-149711186.jpg'");

            
    }





}

detectEmotion()





//console.log(net.run('I am happy!'));
//console.log(net.run('I am unhappy!'));
//console.log(net.run('What a pill!'));
// bonus: add five new examples in the training data, and then log out five examples that aren't in the training data