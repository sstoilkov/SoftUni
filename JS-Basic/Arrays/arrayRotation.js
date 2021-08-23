function arrayRotation(list, nRotations){
    let rotationList =[];
    for(i = 0; i < nRotations; i ++){
        rotationList.push(list[i])
    }
    for(i = list.length - 1; i >= nRotations; i--)
        rotationList.unshift(list[i])
    console.log(rotationList.join(' '))
}

arrayRotation([51, 47, 32, 61, 21], 2)