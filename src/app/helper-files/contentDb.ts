window.addEventListener('load', setup);
var select = document.querySelector('select');

function setup() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'data/data.json', true);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      var data = JSON.parse(this.responseText);

      var output = '';
      var genre = '<option> ' + '-- Select Genre --' + ' </option>';

      for (var i = 0; i < data.movies.length; i++) {
        output +=
          '<ul>' +
          '<li> ID: ' +
          data.movies[i].categories +
          '</li>' +
          '<li> Title: ' +
          data.movies[i].title +
          '</li>' +
          '<li> image: ' +
          data.movies[i].categories +
          '</li>' +
          '<li> description: ' +
          data.movies[i].categories +
          '</li>' +
          '<li> Type: ' +
          data.movies[i].categories +
          '</li>' +
          '<li> Creator: ' +
          data.movies[i].categories +
          '</li>' +
          '<li> Tags: ' +
          data.movies[i].categories +
          '</li>' +
          '</ul>';
      }

      for (var i = 0; i < data.categories.length; i++) {
        genre += '<option> ' + data.categories[i] + ' </option>';
      }

      document.getElementById('output').innerHTML = output;
      document.getElementById('selection').innerHTML = genre;

      select.addEventListener('change', filter);

      function filter() {
        for (var i = 0; i < data.categories.length; i++) {
          if (data.movies[i].categories == select.value) {
            alert(2);
          }
        }
      }
    }
  };
  xhr.onerror = function () {
    console.log('req');
  };
  xhr.send();
}
