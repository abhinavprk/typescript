var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["MANAGER"] = 1] = "MANAGER";
    Roles[Roles["USER"] = 2] = "USER";
    Roles[Roles["EMPLOYEE"] = 3] = "EMPLOYEE";
})(Roles || (Roles = {}));
console.warn(Roles);
console.warn(Roles.ADMIN);
console.warn(Roles.ADMIN.toString);
