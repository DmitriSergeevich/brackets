module.exports = function check(s, bracketsConfig) {
  let combination = [];
  for(let i=0; i<bracketsConfig.length; i++){
  	combination.push(bracketsConfig[i].join(''))
  }
  let count =0;  
  while (count < combination.length) {
    if (s.includes(combination[count])) {
      s = s.replace(combination[count], '')
      count = 0;
    }else count++;
  } return s.length === 0 ? true: false;
}

