//Filter array with form's parameters
function filterByForm(arrayToFilter, parameters){
    var i = 0;
    var arrayLength = arrayToFilter.length;
    for (var key in parameters) {
        i = 0;
        arrayLength = arrayToFilter.length;
        if (parameters.hasOwnProperty(key)) {
            if(parameters[key]){
                if(key === "dateOfBirth"){
                    var d1 = new Date(parameters[key]);
                    //compare parameter for every object in array
                    for(i; i < arrayLength; i++){
                        var d2 = new Date(arrayToFilter[i][key]);
                        //set worker dateOfBirth hours to 0 to be able to compare with datepicker date
                        d2.setHours(0,0,0,0);
                        if(d1.getTime() !== d2.getTime()){
                            arrayToFilter.splice(i, 1);
                            --arrayLength;
                            --i;
                        }
                    }
                }   else {
                        //compare parameter for every object in array
                        for(i; i < arrayLength; i++){
                            if(arrayToFilter[i][key] !== parameters[key]){
                                arrayToFilter.splice(i, 1);
                                --arrayLength;
                                --i;
                            }
                        }
                }
                
                
            }
        }
    }
    return arrayToFilter;
}