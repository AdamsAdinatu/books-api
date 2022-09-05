function logger(req, res, next){
console.log( `${req.meyhod} ${req.originalurl} ${req.statusCode}`);

next();

}
module.exports.logger