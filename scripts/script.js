let darkButton = document.querySelector('#darkButton');
let curhtml = document.querySelector('html');
let htmls = document.querySelector('#links');

darkButton.addEventListener('click', (e)=> {
  e.preventDefault();
  if(curhtml.classList.length === 0){
    curhtml.classList.add('dark'); 
    localStorage.theme = 'dark';
  }else{
    curhtml.classList.remove('dark'); 
    localStorage.theme = 'light';
  }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

