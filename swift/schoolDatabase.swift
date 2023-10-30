struct Student {
  var name: String
  var favoriteTeacherID: Int
}

struct Teacher {
  var name: String
  var id: Int
  var email: String?
  var hairColor: String?
}

struct School {
  var name: String
  var teachers: [Teacher]

  func getTeacher(withID id: Int) -> Teacher? {
    for teacher in teachers {
      if teacher.id == id {
        return teacher
      } 
    }
    return nil
  }

  func printFavoriteTeacherInfo(for student: Student) {
    guard let teacher = getTeacher(withID: student.favoriteTeacherID) else {
      print("No teacher exists for given ID!")
      return
    }
    print("Name: \(teacher.name)")
    print("Hair Color: \(teacher.hairColor ?? "None")")
    print("Email: \(teacher.email ?? "None")")
  }
}

let teachers = [
  Teacher(name: "Janet", id: 1, email: "janet@school.com"),
  Teacher(name: "Fred", id: 2, email: "fred@school.com", hairColor: "Rainbow"),
  Teacher(name: "Meredith", id: 3, hairColor: "Grey and Blue")
]

let queensCollege = School(name: "Queens College", teachers: teachers)

let student1 = Student(name: "Grace", favoriteTeacherID: 1)
let student2 = Student(name: "Dan", favoriteTeacherID: 5)

queensCollege.printFavoriteTeacherInfo(for: student1)
queensCollege.printFavoriteTeacherInfo(for: student2)
