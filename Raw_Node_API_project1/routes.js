// dependencies
const {sampleHandeler}=require('./handelers/routeHandelers/sampleHandeler')
const {userHandler}=require('./handelers/routeHandelers/userHandler');
const {tokenHandler}=require('./handelers/routeHandelers/tokenHandler');


const route={
    'sample':sampleHandeler,
    'user':userHandler,
    'tokens':tokenHandler
}
module.exports=route;