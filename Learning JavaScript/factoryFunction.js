function createDomainGenerator (websiteName){

    return function returnedFunction(domain){
        return websiteName + "." + domain;
    }

}

const deployWebsite = createDomainGenerator("ilovepdf");
const newWebsite = deployWebsite("com");

console.log(newWebsite);