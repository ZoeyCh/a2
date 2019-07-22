var u = document.getElementById("username");
// console.log(u);
u.addEventListener("mouseover",validateNotEmpty);
u.addEventListener("mouseout",validateNotEmpty2);

var p = document.getElementById("password");
p.addEventListener("mouseover",validateNotEmpty);
p.addEventListener("mouseout",validateNotEmpty2);

