import $ from "jquery";

const users = [
  {
    name: "Nick",
    age: 32
  }
];

$("#users").click(() => {
  renderUsers(users);
});

function renderUsers(users) {
  $(".container").html(() => {
    let html = "";
    for (let user of users) {
      html += `<li>
        ${user.name}: ${user.age}
      </li>`;
    }

    return html;
  });
}
