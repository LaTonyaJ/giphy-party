console.log("Let's get this party started!");
const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
});

const btn = document.getElementById('submit');
btn.addEventListener('click', function () {
    const term = $('input').val();
    getInfo(term);
    
});

const remove = document.createElement('button');
remove.className = 'rmv';
remove.innerText = 'Delete'
document.body.append(remove);


async function getInfo(term) {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search`, {params: {api_key:'eZCmudZGVCC0EhR5wMDs238jMQebVc89', q:`${term}`}});
    console.log(res.data.data);
    let dataLen = res.data.data.length;
    //console.log(dataLen);
    let idx = Math.floor(Math.random()*dataLen);
    let gif = res.data.data[idx].images.original.url;
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    img.classList.add('img');
    img.setAttribute('src', gif);
    document.body.append(imgContainer);
    imgContainer.append(img);
    remove.addEventListener('click', function() {
        imgContainer.remove();
    });
};





//getInfo();




