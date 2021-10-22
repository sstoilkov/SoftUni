const obj = {
    id: 10,
    author: 'Ivan',
    content: 'dasdada',
    upvotes: 5,
    downvotes: 10,
}

function test() {
    this.upvotes += 10;
}
console.log(obj)
test.call(obj);
console.log(obj)