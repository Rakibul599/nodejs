
const environments={};
environments.staging={
    port:3000,
    envName:"staging",
    secreat_key:"Rakibulalam"
}
environments.production={
    port:5000,
    envName:"staging",
    secreat_key:"rakib"
}
const currentEnvironment=typeof(process.env.NODE_ENV)==='string' ? process.env.NODE_ENV : 'staging';
const environmentExport=typeof(environments[currentEnvironment])=== 'object' ? environments[currentEnvironment] : environments.staging;

module.exports=environmentExport;