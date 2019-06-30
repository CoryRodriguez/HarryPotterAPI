const url = 'http://hp-api.herokuapp.com/api/characters';
const output = document.getElementById('output');

fetch(url)
  .then(res => res.json())
  .then(datas => {
    console.log(datas);
    
    

    for (let data of datas) {
      console.log(data.image);
      // console.log(data[i].name);
      let house = data.house;
      // let houseName = document.getElementById('houseName');

      // if (house === 'Ravenclaw') {
      //   houseName.style.color = 'red';
      //   // console.log(house.parentElement);
      // }
      //console.log(house);
      // console.log(house);

      output.innerHTML += 
      // WORKING SECTION
      `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                      <div class="card-group">
        <div class="card">
          <img class="card-img-top" src="${data.image}" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
      </div>
                 
                </div>

                
              `;
      // END WORKING SECTION


    }

    // console.log(data.Response.toLowerCase());

    // Loop through data
    // data.forEach(x => {
    //   // console.log(x.name);

    //   if (x.house === 'Ravenclaw') {
    //     // x.house.style.color = 'blue';
    //     console.log(x.house.parentElement);
    //   }

    //   output.innerHTML += `
    //           <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    //             <ul>
    //               <li class="" src="">${x.name}
    //                 <ul>
    //                   <li id="houseName">${x.house}</li>
    //                 </ul>
    //               </li>

    //             </ul>
    //           </div>
    //         `;
    // });
  })
  .catch(error => {
    console.log(error);
  });
