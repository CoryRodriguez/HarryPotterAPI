const url = 'http://hp-api.herokuapp.com/api/characters';
const output = document.getElementById('output');

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);

    // console.log(data.Response.toLowerCase());

    // Loop through data
    data.forEach(x => {
      console.log(x.name);

      output.innerHTML += `
              <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <ul>
                  <li class="" src="">${x.name}</li>
                </ul>
              </div>
            `;
    });
  })
  .catch(error => {
    console.log(error);
  });
