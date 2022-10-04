//Behruz Boisxonov

//Qoshuv start

var form = document.getElementById("form")
var fistJoiner = document.getElementById("fistJoiner")
var secondJoiner = document.getElementById("secondJoiner")
var resultElement = document.getElementById("result")

function hisobla(birinchi,ikkinchi){
    var result = birinchi + ikkinchi
    return result
}


form.addEventListener('submit' , (event) => {
    event.preventDefault()
    console.log("misol hisoblandi")

    var first = Number(fistJoiner.value)
    var second = Number(secondJoiner.value)

   
    if(first >= 0 && second >= 0){
        resultElement.textContent = hisobla(first,second)
        resultElement.style.color = "green"
    }else{
        resultElement.textContent = "it is not a number"
        resultElement.style.color = "red"

    }
})

//Qoshuv end


//Ayiruv start

var Form = document.getElementById("form2")
var FistJoiner = document.getElementById("fistJoiner2")
var SecondJoiner = document.getElementById("secondJoiner2")
var ResultElement = document.getElementById("result2")

function Hisobla(birinchi2,ikkinchi2){
    var result2 = birinchi2 - ikkinchi2
    return result2
}


Form.addEventListener('submit' , Event => {
    Event.preventDefault()
    console.log("misol hisoblandi")

    var First = Number(FistJoiner.value)
    var Second = Number(SecondJoiner.value)

   
    if(First >= 0 && Second >= 0){
        ResultElement.textContent = Hisobla(First,Second)
        ResultElement.style.color = "green"
    }else{
        ResultElement.textContent = "it is not a number"
        ResultElement.style.color = "red"

    }
})

//Ayiruv end


//Bo'luv start

var forM = document.getElementById("form3")
var fistJoineR = document.getElementById("fistJoiner3")
var secondJoineR = document.getElementById("secondJoiner3")
var resultElemenT = document.getElementById("result3")

function hisoblA(birinchi3,ikkinchi3){
    var result3 = birinchi3 / ikkinchi3
    return result3
}


forM.addEventListener('submit' , (evenT) => {
    evenT.preventDefault()
    console.log("misol hisoblandi")

    var firsT = Number(fistJoineR.value)
    var seconD = Number(secondJoineR.value)

   
    if(firsT >= 0 && seconD >= 0){
        resultElemenT.textContent = hisoblA(firsT,seconD)
        resultElemenT.style.color = "green"
    }else{
        resultElemenT.textContent = "it is not a number"
        resultElemenT.style.color = "red"

    }
})

//Bo'luv end