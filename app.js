// Modules 
// Encapsulate code (only share minimum)
const abdul = "Abdul"
const Richard  = "Richard"
 
const sayHii=(name)=>{
    console.log(`Good morning ${name
    }`);
}
sayHii(Richard)
sayHii(abdul)
module.exports={abdul,Richard}
module.exports=sayHii