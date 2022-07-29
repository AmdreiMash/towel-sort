module.exports = 
function towelSort (matrix) {
	let result = []
	if(typeof matrix === 'undefined'){	
		return result
	} 

		matrix.forEach((arry, i) => {
			//console.log(arry)
			if( i % 2 == 0 ){
				arry.forEach((num) => {
					result.push(num)})
				} else {
					arry.reverse().forEach(num => result.push(num))
				}
			})

	return result
}

//console.log(towelSort( 
//	[
//	[1, 2, 3, 4],
//	[5, 6, 7, 8],
//	[9, 10, 11, 12],
//	[13, 14, 15, 16],
//]
//))
