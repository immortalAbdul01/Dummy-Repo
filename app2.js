const name= require('lodash')
const items=[1,[2,[3,[4 ]]]]

// This is a method in lodash module or dependencies

const newItems=name.flattenDeep(items)
console.log(newItems);