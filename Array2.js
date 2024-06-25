const marvel_hero = [
    "thor","iron","spiderman"
]
const dc = [ "superman","flash","batman"]
 //marvel_hero.push(dc);
 //console.log(marvel_hero);
 //const allHero=marvel_hero.concat(dc);
//console.log(allHero);
const all_new_hero = [...dc,...marvel_hero]
//console.log(all_new_hero);
const another_array= [1,2,3,[4,5,6],7,[6,7,[4,7]]]
const real_another = another_array.flat(Infinity);
//console.log(real_another);
console.log(Array.isArray("rakshu"));
console.log(Array.from({name :"rakhu"}));// impotant
  let score1= 100;
  let score2= 220;
  let score3=320;
  console.log(Array.of(score1,score2,score3));