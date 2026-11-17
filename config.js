/* PERSONALIZZAZIONE: associare i premi ai giorni SOLO dopo la conferma del calendario ufficiale.
   In ogni casella è possibile indicare: de, it, partner, image (percorso assets/premi/...), reveal true.
   reveal=false impedisce di anticipare visivamente il premio. */
window.ADVENT_CONFIG = {
  partners: [
    {name:'Auto Brenner',logo:'assets/loghi/auto-brenner.png'},
    {name:'Auto Hofer',logo:'assets/loghi/auto-hofer.png'},
    {name:'Auto Industriale',logo:'assets/loghi/auto-industriale.png'},
    {name:'Würth',logo:'assets/loghi/wuerth.png'},
    {name:'Würth Modyf',logo:'assets/loghi/wuerth-modyf.png'},
    {name:'Zuin Gomme',logo:'assets/loghi/zuin-gomme.png'}
  ],
  days: Array.from({length:24}, (_,i)=>({day:i+1, de:'Überraschung', it:'Sorpresa', partner:'',image:`assets/premi/${String(i+1).padStart(2,'0')}.png`, reveal:false})),
  winners: []
};
