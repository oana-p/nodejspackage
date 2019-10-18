  function slugger(){
    var s = "";
    for (var i=0; i < arguments.length; i++) {
        s += "-"+arguments[i];
    }
    return s;
}
module.exports = slugger