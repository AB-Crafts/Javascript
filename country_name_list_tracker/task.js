let people = [
  { name: "Alice", country: "USA" },
  { name: "haider", country: "PAK" },
  { name: "awais", country: "AFG" },
  { name: "bob", country: "UK" },
  { name: "sarosh", country: "GER" }
];

let user = prompt("ENTER YOUR FRIEND'S NAME :- ");

let found = people.find(person => person.name.toLowerCase() === user.toLowerCase());

if (found) {
  alert(`${found.name} is in the list and lives in ${found.country}`);
} else {
  alert("Not in the list");
}
