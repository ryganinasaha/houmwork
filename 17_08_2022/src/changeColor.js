function change(str, oldColor, newColor, withCase) {
  if(typeof str !== 'string') {
    return ""
  } 

  
    const split = str.split(" ")

    for(let i = 0; i < split.length; i ++) {
      if(withCase === true) {
        if(split[i].toLowerCase() === oldColor.toLowerCase()) {
        split[i] = newColor
      }
      }else {
        if(split[i] === oldColor) {
          split[i] = newColor
        }
      }
      
    }
    const newStr = split.join(' ')
    
    return newStr
    

  

  

}

module.exports = change;