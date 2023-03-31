const path = require('path');

module.exports = {
mode : "development",
entry : {
    auth : "./src/auth.js",
    stor : "./src/storage.js",
    profile : "./src/profile_fire.js",
    pastwork : "./src/pastworks.js",
},
output : {  
    filename : "[name].js",
    path : path.resolve(__dirname , "dist"),
}, 
watch : true 
}