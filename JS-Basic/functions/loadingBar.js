function loadingBar(number){
    if(number === 100){
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    }else{
        let result = '';
        let begining = `${number}% [`;
        let end = ']';
        let percent ='';
        let dots ='';
        for(let i = 0; i < number/10; i ++){
            percent+='%';
        }
        for(let i = number/10; i < 10; i ++){
            dots+='.';
        }
        result = begining+percent+dots+end;
        console.log(result);
        console.log('Still loading...')
    }
}
loadingBar(50)