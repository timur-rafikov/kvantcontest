

/*
    
    created: by Kvantorium.Astraknan(),10:31 GMT +3;
    Kvantorium.Astraknan(): Rafikov Timur, Aleksey Ivlev, Yagolichev Anatoliy;
    Couch: Ruder Artem Nikolaevich;

*/

var stack = [{
              name: "Петя", 
              birth: "13 10 2005", 
              symptoms: "Средние", 
              id: Math.floor(Math.random() * 100), 
              time: 15
             },

             {
              name: "Вася", 
              birth: "14 10 2005", 
              symptoms: "Лёгкие", 
              id: Math.floor(Math.random() * 100), 
              time: 30
             } ];   // очередь

var userInfo = {};

let name = document.getElementById("name");
let day_of_birth = document.getElementById("dayOfBirth");
let month_of_birth = document.getElementById("monthOfBirth");
let year_of_birth = document.getElementById("yearOfBirth");
var submitButton = document.getElementById("submitButton");

var id;

function add() {
    /*
    var name = prompt("Enter your name and surname: ");                               // ввод данных о пациенте
    var day_of_birth = prompt("Enter your day of birth: ");
    var month_of_birth = prompt("Enter your month of birth: ");
    var year_of_birth = prompt("Enter your year of birth: ");
    var symptoms = prompt("Enter your symptoms (extreme, hard, medium, dbg): ");
    */
    userInfo = {                                                                             // информация о пациенте в одном объекте
        name: name.value,
        birth: day_of_birth.value + " " + month_of_birth.value + " " + year_of_birth.value,
        symptoms: symptoms.value,
        id: Math.floor(Math.random() * 100),
        time: 0,
    };

    if (userInfo.symptoms == "Экстримальные") { 
        stack.push(0);                              // ставим на 2 место (циклический сдвиг массива вправо), если симптомы экстримальные
        let tmp = stack[stack.length - 1];
        let m;
        let prev = stack[0];
        for (i = 0; i < (stack.length - 1); ++i) {
            m = stack[i + 1];
            stack[i + 1] = prev;
            prev = m;
        }
        for (i = 0; i < stack.length; ++i) stack[i].time += 15;
        userInfo.time = 15;к
        stack[0] = userInfo;
        id = 0;

    } else {
        userInfo.time = (stack.length + 1) * 15;              // ставим на последнее место, если симтпомы обычные
        stack.push(userInfo);
        id = stack.length - 1;
    }

    var names_str = "| ";
    for (i = 0; i < stack.length; ++i) {                     // строка имён для вывода очереди
        names_str += stack[i].name + " | ";
    }


    document.getElementById("content").innerHTML = names_str;

    document.getElementById("time").innerHTML = "Примерное время ожидания - " + stack[id].time + " минут"; 
    document.getElementById("id").innerHTML = "Ваш ID - " + stack[id].id;
    document.getElementById("res").innerHTML = "Вы добавлены в очередь</br>Примерное время ожидания - " + stack[id].time + " минут" + "</br>Ваш ID - " + stack[id].id + "</br>Вы " + (id + 1) + " в очереди</br>Для регистрации следующего пациента нажмите на кнопку 'Пунктуальный пациент'";
    document.getElementById("position").innerHTML = "Вы " + (id + 1) + " в очереди";

    console.log(stack);

    return 0;
}

function open_stack() {
    document.getElementById("formContainer").style.display = "none";
    document.getElementById("stackinfo").style.display = "block";
}

function load_main_page() {
    document.getElementById("stackinfo").style.display = "none";
    document.getElementById("formContainer").style.display = "block";
    document.getElementById("name").value = "";
    document.getElementById("dayOfBirth").value = "";
    document.getElementById("monthOfBirth").value = "Январь";
    document.getElementById("yearOfBirth").value = "";
    document.getElementById("symptoms").value = "Лёгкие";
    document.getElementById("content").innerHTML = "";
    document.getElementById("time").innerHTML = "";
    document.getElementById("id").innerHTML = "";
    document.getElementById("res").innerHTML = "";
    document.getElementById("position").innerHTML = "";
}
