const phnContainer = document.getElementById('phn-container');

const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const datas = await res.json();
    const singleData = (datas.data.tools);
    console.log(singleData);
    displayData(singleData);

}
const displayData = (singleData) => {
    singleData.forEach(data => {
        // console.log(data);
        const divCard = document.createElement('div');
        const li = document.createElement('li');
        const features = data.features;
       console.log(features)
        divCard.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src="${data.image ? data.image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png?20221208232400'}" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-left ">
      <h2 class="card-title ">Features</h2>
    <ol  class="list-decimal pl-4"  id="ol-List">
  
    ${features.map((feature) => `<li>${feature}</li>`).join("")}

    </ol>

      <div class="card-actions">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
        `
        
       
        phnContainer.appendChild(divCard)
    });
}


loadData();



