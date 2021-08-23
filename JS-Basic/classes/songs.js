function solver(arr) {
    let songs = [];
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 1; i < arr.length-1; i++) {
        let songData = arr[i].split('_');
        let typeList = songData[0];
        let name = songData[1];
        let time = songData[2];
        songs.push(new Song(typeList,name,time));
    }
    for(let i = 0; i < songs.length; i++){
        if(arr[arr.length-1] === songs[i].typeList || arr[arr.length-1] ==='all'){
            console.log(songs[i].name)
        }
    }
}


solver([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
    
)