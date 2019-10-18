  function slugger(){
    var s = "";
    for (var i=0; i < arguments.length; i++) {
        s += arguments[i] + "-";
    }
    if(s.length > 0)
     return s.slice(0,-1);

     return s;
}
module.exports = slugger