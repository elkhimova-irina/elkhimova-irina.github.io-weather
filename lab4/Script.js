function PullData(){
    
    var type = document.getElementById('type').value;
    var surname = document.getElementById('surname').value;
    var name = document.getElementById('name').value;
    var patronymic = document.getElementById('patronymic').value;
    var telephone = document.getElementById('telephone').value;
    var passport = document.getElementById('passport').value;
    
    PushData (type,surname,name,patronymic, telephone,passport);
}
 
  function PushData (type,surname,name,patronymic, telephone,passport) 
  {
      var Database = firebase.database().ref().push();
      Database.set({
          
          type: type,
          surname: surname,
          name: name,
          patronymic: patronymic,
          telephone: telephone,
          passport: passport
          
      }, function (error) {
          if (error) {
            alert("Ошибка! Попробуйте снова!");
          }
          else
          {
	          alert("Успешно!");
          }
      });
  }
  
  