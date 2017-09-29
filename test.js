console.log("Hello World!");

var selected = [];

var Man = function(name, grade, location, action){
    
    this.location = location;
    this.action = action;
    this.grade = grade;
    this.name = name;
    
}



/*  make dummy men */

var man1 = new Man("CSH", 3, "home", "rest");
var man2 = new Man("MKH", 2, "outside", "work");
var man3 = new Man("JSW", 4, "outside", "wait");

var company = [man1, man2, man3];

var edit = function(OP, arr){
    switch(OP){
        case 1:   //HOME
            arr.forEach(function(v, i){
                v.location = "home";
                v.action = "rest";
            });
            break;
        case 2:
            arr.forEach(function(v, i){
               v.location = "outside";
               v.action = "work";
            });
            break;
        default:
            break;
    }
}

/* test */


edit(1, company);

console.log(company);  // clear


