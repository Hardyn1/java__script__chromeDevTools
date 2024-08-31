document.addEventListener("DOMContentLoaded", () => {

    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const addBtn = document.getElementById("add");
    const subBtn = document.getElementById("sub");
    const outPut = document.getElementById("output");

    function getInputValues(){
        const value1 = parseInt(num1.value);
        const value2 = +num2.value;

        return [value1, value2];
    };

    function addHandler(){

        const values = getInputValues();
        const result = values[0] + values[1];
        // console.log(values); // Определили что в массиве числа представлены в виде строк
        // Проблема у div стиль display none, меняем на display block
        // И обращаемся по селектору closest к родителю так как output в родителе card.
        
        displayResult(result);
    };

    function subHandler(){
        debugger // Ключевое слово которое добавляет breakpoint как и в chrome
        const values = getInputValues();
        const result = values[0] - values[1];

        displayResult(result);
    };

    function displayResult(result){
        outPut.closest(".card").style.display = "block";
        outPut.innerHTML = `Rezultat = ${result}`;
        console.trace(); // Позволяет посмотреть что до этого вызывается или функции
    };

    // console.log("test", addBtn);

    addBtn.addEventListener("click", addHandler);
    subBtn.addEventListener("click", subHandler);

});

