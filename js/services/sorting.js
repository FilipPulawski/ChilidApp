//Sort array by chosen property
function bubbleSort(arrayToSort, attribute)
{
    var swapped;
        do {
            swapped = false;
            for (var i=0; i < arrayToSort.length-1; i++) {
                var bigger = attribute === "dateOfBirth"
                    ? parseDate(arrayToSort[i][attribute]).getTime() > parseDate(arrayToSort[i+1][attribute]).getTime()
                    : arrayToSort[i][attribute] > arrayToSort[i+1][attribute]
                if (bigger) {
                    var tmpArray = arrayToSort[i];
                    arrayToSort[i] = arrayToSort[i+1];
                    arrayToSort[i+1] = tmpArray;
                    swapped = true;
                }
            }
        } while (swapped);
    return arrayToSort;
}

//Change date to correct format
function parseDate(dateToChange){
    var dateParts = dateToChange.split(/[\.\:\s]/g).map(e => parseInt(e));
    var newDate = new Date();
    newDate.setDate(dateParts[0]);
    newDate.setMonth(dateParts[1]);
    newDate.setFullYear(dateParts[2]);
    newDate.setHours(dateParts[3]);
    newDate.setMinutes(dateParts[4]);
    return newDate;
}