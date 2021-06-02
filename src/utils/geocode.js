const request= require('request')

const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoieXV2aXN0cm9uZzAwNyIsImEiOiJja21uaHUwZnYwZ3lnMnByemh5dXpnendnIn0.xpOAXkNBSpbhGgnOAcwsRg&limit=1'
    request ({url:url ,json:true},(error,{body})=>{
         if(error){
              callback('unable to connect to location services!',undefinded)
         } else if(body.features.length===0) {
                callback('unable to find location , try another seach,',undefined)
         }
         else{
              callback(undefined,{
                 latitude:body.features[0].center[1],
                 longitude:body.features[0].center[0],
                 location: body.features[0].place_name
              })
         }

    })
}

module.exports= geocode