var userAmount = +prompt("Сколько пользователей добавить?"),
    users = [];

if (userAmount >= 3) {
    var i = 0;
    while (i < userAmount){
        var userValues = prompt("Введите данные о пользователей через запятую");
        users.push(addToUsers(userValues));
        i++;
    }

}   else {
    alert("Необходимо добавить минимум трех пользователей");
    window.location.reload();
}

function addToUsers(userValues)
{
  var values = userValues.split(', '),
  user = {};
  user.name = values[0];
  user.surname = values[1];
  user.email = values[2];
  user.age = values[3];
  user.profession = values[4];
  return user;
}

function sortUsers(users) {
    var sortValue = sortBy();
    var result = users.sort(function (a, b) {
        if (a[sortValue] > b[sortValue]) {
            return 1;
        }
        if (a[sortValue] < b[sortValue]) {
            return -1;
        }
        return 0;
    });
    var i = 0;
    if (!document.getElementById("checkbox").checked) {
        document.getElementById('test').innerHTML = '';
        while (i < result.length) {
            document.getElementById('test').innerHTML += "<div>" + "<p>" + "Имя: " + result[i].name + "</p>" +
                "<p>" + "Фамилия: " + result[i].surname + "</p>" +
                "<p>" + "Почта: " + result[i].email + "</p>" +
                "<p>" + "Возраст: " + result[i].age + "</p>" +
                "<p>" + "Профессия: " + result[i].profession + "</p>" + "</div>";
            i++
        }
    }
    else document.getElementById('test').innerHTML = specialSort(sortValue, result);
}

function sortBy()
{
    var sort = document.getElementsByName('sortby'),
        checked = null;
    for (var i = 0; i < sort.length; i++) {
        if (sort[i].checked) {
            checked = sort[i].value;
            return checked;
        }
    }
}

function specialSort(sortValue, result)
{
    var i = 0;
    if (sortValue !== 'age') {
        var specCort = [];
        while (i < result.length) {
            specCort.push(result[i][sortValue]);
            i++;
        }
        return  "<h4>" + specCort.join(', ') + "</h4>";
    }
    else {
        var sumAge = 0;
        while (i < result.length) {
            sumAge += +result[i].age;
            i++;
        }
       return "<h4>" + sumAge + "</h4>";
    }
}