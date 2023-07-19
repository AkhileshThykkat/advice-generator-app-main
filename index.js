//https://api.adviceslip.com
const callingTheAPI = () =>{
    const api = 'https://api.adviceslip.com/advice' ;
    const adviceNumber = document.querySelector('.advice-number');
    const adviceQuote = document.querySelector('.advice');
    fetch(api)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            const dataJSON = data['slip'];
            adviceNumber.innerHTML = `ADVICE #${dataJSON.id}`;
            adviceQuote.innerHTML = `"${dataJSON.advice}"`
        })
}
main()
function main() {
    const dr = setInterval(function () {
      if (document.readyState === "complete") {
        return;
      }
      // clearInterval(dr);
    }, 100);
  
    callingTheAPI();
  }
  
  const dice = document.querySelector('.dice-container');
  dice.addEventListener('click',main);