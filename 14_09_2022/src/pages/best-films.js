import $ from "jquery";

$("#best-films").click(() => {
  let copyFilms = [].concat(window.films);

  copyFilms.sort((film1, film2) => {
    return film2.rating - film1.rating;
  });

  copyFilms = copyFilms.slice(0, 1);

  window.renderFilms(copyFilms);
});
