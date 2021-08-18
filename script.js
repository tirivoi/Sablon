class Student {
    constructor(name, address, phone, course) {
        this.name = name,
            this.address = address,
            this.phone = phone,
            this.course = course
    }
    getInfo() {
        console.log("Name: " + this.name + ",", "Address: " +
            this.address + ",", "Phone Number: " + this.phone + ",", "Course: " +
            this.course)
    }

}

let StudentOne = new Student("Ritivoi Andra", "Deva Nr:23", 0755632444, "Medicina")
let StudentTwo = new Student("Popescu Ion", "Bucuresti Nr:5", 0743666324, "Drept")
let StudentThree = new Student("Marinescu Groza", "Timisoara Nr:67", 0755231112, "Politehnica")

StudentOne.getInfo()
StudentTwo.getInfo()
StudentThree.getInfo()