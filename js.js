function gridIndex(grid, indices) {
    
    let b = grid.flat();
    let c = indices.map((i) => b[i - 1]).join('')
    return console.log(c)
  }

  let a = [
    ['m', 'y', 'e'], 
 ['x', 'a', 'm'], 
 ['p', 'l', 'e']];

 let c = [1, 3, 5, 8];

  gridIndex(a, c)

console.log('hau hi to everyone')
