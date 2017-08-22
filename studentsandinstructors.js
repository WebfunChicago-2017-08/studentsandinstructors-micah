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

function studentsAndInstructorsOptional() {   //Can't quite get it!!! #*!&#
    var index = 0;
    for (var i in users) {
        console.log(i);
        for (var student in users[i]) {
            index++;
            console.log(
                index, '-', users.Students[student].first_name, users.Students[student].last_name, "-", (users.Students[student].first_name.length + users.Students[student].last_name.length));
        }
    }
}

function studentsAndInstructors() {
    for (var i in students) {
        console.log(students[i].first_name, students[i].last_name);

    }
}

studentsAndInstructors();

studentsAndInstructorsOptional();

// Michael Jordan
// John Rosales
// Mark Guillen
// KB Tonel
