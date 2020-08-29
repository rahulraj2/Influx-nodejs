'use strict'

const { readFileSync } = require("fs")
var responseObject={};
const rp = require("request-promise")
const promise = require("bluebird");
const { parse } = require("path");
var result={};
var count=0;
var updateJsonRecord = (obj) => {
    //console.log(obj)
   // var readExistingJson = readFileSync("lib/record.json",)
//    var idate = new Date(obj.idate).getTime()
//    idate = `${idate}000000`
  var test = []
    //var test=JSON.parse(readExistingJson)
   test.push(obj)
    console.log(test)
    return new Promise((resolve) => {
    test.forEach(async data => {
        var insertDate = `${data.idate}T19:50:00.000Z`
        var idate = new Date(insertDate).getTime()
        console.log(idate)
        idate = `${idate}250000`
        console.log(idate)
        data.FirstName
        console.log(data.FirstName)
        var options = {
            'method': 'POST',
            'url': 'http://localhost:8086/write?db=jenkins',
            'headers': {
              'Content-Type': 'text/plain'
            },
            body: `record,FirstName=${data.FirstName},LastName=${data.LastName} Age=${data.Age} ${idate}`
          
          };
          try{
              //console.log(data.length)
              //console.log(test.length)
         await rp(options).then(()=>{
            result.count=count++;
            console.log(result)
        }).catch((err)=> console.log(err))
         

    }catch(err){
        console.log(err)
    }
        
    });
   // Promise.all(result);  
  resolve({result:"done"})
  
})

}


module.exports.updateJsonRecord = updateJsonRecord