function ladybugs(list){
    let index = list[0];
    let direction = list[1];
    let table = direction.split(' ');
    
    console.log(table);
  
    

    for( i = 2; i < list.length; i++){
        let position = list[i].split(' ');
        for(j = 0; j < position.length; j++){
            console.log(list[i].split(' '));
        }
        
    }
}

ladybugs([ 3, '0 1', '0 right 1', '2 right 1' ])