const users = [
{
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@succesfsive.tech"
},
{
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
},
{
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
}
];

import { diamond, Equilateral_triangle } from "./pattern";
import { hasPermission, validUser } from "./utils";

Equilateral_triangle(10);
diamond(5);
hasPermission( "getUsers", "trainer", "all");
validUser(users);