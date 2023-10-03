let element = document.getElementById("1");
let opacity = 0;
let fadeIn = setInterval(() => {
   element.style.opacity = opacity;
   opacity += 0.01;
}, 10);

document.getElementById('loadContentButton').addEventListener('click', async () => {
   console.log('c');  
   try {
     const response = await fetch('index.html');
     
     if (!response.ok) {
       throw new Error('Gagal memuat konten');
     }
 
     const content = await response.text();
     document.getElementById('contentContainer').innerHTML = content;
   } catch (error) {
     console.error('Terjadi kesalahan:', error);
   }
 });
 