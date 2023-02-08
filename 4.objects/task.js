function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    console.log("отчислен");
  } else {
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
  if (this.marks === undefined || this.marks.length === 0) {
    return 0;
  } else {
    return this.marks.reduce(
      (first, second, i, arr) =>
        i === arr.length - 1 ? (first + second) / arr.length : first + second,
      0
    );
  }
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
