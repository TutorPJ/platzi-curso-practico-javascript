function calculateGeometricMean (set){
        
        let product = 1;
        let geometricMean = 0;

    for (i = 0 ; i < set.length ; i++) {
        product = product * set[i];
    }
    
    geometricMean = Math.pow (product , (1/set.length)) ;
    return geometricMean    
}