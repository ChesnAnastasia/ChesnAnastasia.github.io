if (!localStorage.getItem('arrayOfUsers')){
    var arrUsers = [
        {
            login: "ChesnAnastasia",
            password: "30041999"
        },
        {
            login: "Mary",
            password: "hello13"
        },
        {
            login: "Ivan Ivanov",
            password: "123456"
        },
        {
            login: "Eliz",
            password: "bsu123"
        },
        {
            login: "Kate",
            password: "098765"
        }
    ];
    localStorage.setItem('arrayOfUsers', JSON.stringify(arrUsers));
}
var users = JSON.parse(localStorage.getItem('arrayOfUsers'));
console.log(users);

