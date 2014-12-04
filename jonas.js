console.log('jonas.js')
if(!localStorage.getItem('dnaNexusAPIkey')){
    localStorage.setItem('dnaNexusAPIkey',prompt('Your DNAnexus API key:'))
}

var api = new DX.Api(localStorage.getItem('dnaNexusAPIkey'));
    api.call("user-jonasalmeida", "describe")
        .done(function(userData) {
                console.log("user-jonasalmeida's full name is " + [userData.first, userData.last].join(" "));
            })