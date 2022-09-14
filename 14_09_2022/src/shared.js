import "./styles.css";
import $ from "jquery";

window.renderFilms = (films) => {
  $(".container").html(() => {
    let html = "";
    for (let film of films) {
      html += `<li>
        ${film.name}: ${film.rating}
      </li>`;
    }

    return html;
  });
};
