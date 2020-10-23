module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
    let configElement = bracketsConfig[i].join('');
    if (str.includes(configElement) === true) {
        str = str.replace(configElement, '');
        i = -1;
    } 
  }
  if (str === '') return true;
  else return false;  
}
