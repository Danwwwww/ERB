 function merge (obja,objb){
    if(typeof obja === "object"&& typeof objb === "object"){
        for(let key in objb){
            obja[key] = objb[key]
        }
        return obja
    }else{
        return undefined
    }
 }

 export {merge}
