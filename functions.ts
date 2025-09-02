function addTwo(a: number,b: number): number {
    return a + b
}

addTwo(1,2)
const resultado = addTwo(20, 30) * 10

const concat = (start: string, end: string): string => {
    return start + end
}

const fruits = ["Banana", "Kiwi", "Apple"]
const fruitsExclamation = fruits.map((fruta: string) => {
    return fruta + "!"
})

console.log(fruitsExclamation)

type Post = {
    id: number,
    likeCount: number,
    content: string,
    createdBy: string
}

function increaseLikeCount({id, likeCount, content, createdBy} : Post) {
    likeCount += 1
}

increaseLikeCount(1)

const post1 = {
    id: 1,
    likeCount: 10,
    createdBy: "Yo",
    content: "Typescript <3"
}
increaseLikeCount(post1)

// const id = post1.id;
// const likeCount = post1.likeCount;
// const createdBy = post1.createdBy;
// const content = post1.content;

const {id, likeCount, createdBy, content } = post1;