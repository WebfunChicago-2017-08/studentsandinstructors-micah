var students = [
    { first_name: 'Michael', last_name: 'Jordan' },
    { first_name: 'John', last_name: 'Rosales' },
    { first_name: 'Mark', last_name: 'Guillen' },
    { first_name: 'KB', last_name: 'Tonel' }
];

var users = {
    'Students': [
        { first_name: 'Michael', last_name: 'Jordan' },
        { first_name: 'John', last_name: 'Rosales' },
        { first_name: 'Mark', last_name: 'Guillen' },
        { first_name: 'KB', last_name: 'Tonel' }
    ],
    'Instructors': [
        { first_name: 'Michael', last_name: 'Choi' },
        { first_name: 'Martin', last_name: 'Puryear' }
    ]
}

function studentsAndInstructorsOptional() {   

  for(var key in users){
    console.log(key);
    var type = users[key];
          var place = 1;

    for(var index in type){
      console.log(place + " - " + type[index].first_name + " " + type[index].last_name + " - "+ (type[index].first_name.length + type[index].last_name.length));
      place++;
    }
  }
}


function studentsAndInstructors() {
    for (var i in students) {
        console.log(students[i].first_name, students[i].last_name);

    }
    console.log("\n");
}

studentsAndInstructors();
studentsAndInstructorsOptional();

