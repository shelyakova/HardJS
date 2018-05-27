
var userCount = +prompt("Сколько ползователей будет добавлено?"),
users = [];

if (userCount >= 3) {
    var i = 0;
    while (i < userCount){
        var userInformation = prompt("Введите данные о пользователей через запятую в формате: Имя, Фамилия, Э-мейл, Возвраст, Проффесия");
        users.push(transform_usersInformation(userInformation));
        i++;
    }

}   else {
    alert("Необходимо добавить минимум трех пользователей");
    window.location.reload();
}

function transform_usersInformation(userInformation) {
	var values = userInformation.split(', '),
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
    var result = users.sort(function simpleSort (a,b) {
		if (a[sortValue] > b[sortValue]) {
            return 1;
        }
        if (a[sortValue] < b[sortValue]) {
            return -1;
        }
        return 0;
	});
	
	if (!document.getElementById("checkbox").checked) {
        document.getElementById('test').innerHTML = '';
		for( var i = 0; i < result.length; i++) {
			document.getElementById('test').innerHTML += "<div>" + "<p>" + "Имя: " + result[i].name + "</p>" +
                "<p>" + "Фамилия: " + result[i].surname + "</p>" +
                "<p>" + "Почта: " + result[i].email + "</p>" +
                "<p>" + "Возраст: " + result[i].age + "</p>" +
                "<p>" + "Профессия: " + result[i].profession + "</p>" + "</div>";
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

	
