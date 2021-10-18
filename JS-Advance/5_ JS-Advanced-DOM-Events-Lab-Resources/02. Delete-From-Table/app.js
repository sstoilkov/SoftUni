function deleteByEmail() {
    //select input filed and read value

    const input = document.querySelector('input[name="email"]')

    //get t body children

    const rows = Array.from(document.querySelector('tbody').children);

    let removed = false;
    //repeat for every row
    //-Select second cell == email
    //-if textContent matches input.value  -> remove row
    for (let row of rows) {
        if (row.children[1].textContent == input.value){
            row.remove()
            removed = true;
        }
    }
    //if there is a match printe Deleted 
    //else print Not found
    if(removed){
        document.getElementById('result').textContent = 'Deleted.';
    }else{
        document.getElementById('result').textContent = 'Not found.';
    }
}