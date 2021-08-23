function dungeonestDark(input){
    let initialHealth = 100;
    let initialCoins = 0;
    let listInput = input.join();
    let list = listInput.split('|');
    let dead = false;
    for(i = 0; i < list.length; i++){
        let currentRoom = list[i];
        let room = currentRoom.split(' ')
        if(room[0] === 'potion'){
           if(initialHealth+Number(room[1])<=100){
                initialHealth += Number(room[1]);
                console.log(`You healed for ${room[1]} hp.`)
            }else if(initialHealth+Number(room[1])>100){
                console.log(`You healed for ${100-initialHealth} hp.`)
                initialHealth = 100;   
            }
            else{
                    console.log('You healed for 0 hp.')
            }console.log(`Current health: ${initialHealth} hp.`)
        }else if(room[0] === 'chest'){
            initialCoins+=Number(room[1]);
            console.log(`You found ${room[1]} coins.`)
        }else{
            initialHealth-=room[1];
            if(initialHealth <= 0){
                console.log(`You died! Killed by ${room[0]}.`)
                console.log(`Best room: ${i+1}`)
                dead = true;
                break;
            }else{
                console.log(`You slayed ${room[0]}.`);
            }
        }
        
    }
    if(!dead){
            console.log('You\'ve made it!');
            console.log(`Coins: ${initialCoins}`);
            console.log(`Health: ${initialHealth}`);
    }
}
dungeonestDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'])