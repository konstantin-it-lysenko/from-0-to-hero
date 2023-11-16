// 1
function getExtremeElements(array) {
    const firstEl = array[0];
    const lastEl = array[array.length - 1];
    array.length = 0;
    array.push(firstEl, lastEl);
    return array;
}
// 2
function getExtremeElements(array) {
    const firstEl = array.slice(0, 1)
    const lastEl = array.slice(-1)
    return firstEl.concat(lastEl);
}
// 3
function getExtremeElements(array) {
    const indexToLast = array.length - 2;
    array.splice(1, indexToLast)
    return array;
}
// 4
function getExtremeElements(array) {
    const firstEl = array[0];
    const lastEl = array[array.length - 1];
    return [firstEl, lastEl];
}

getExtremeElements(['Earth', 'Mars', 'Venus', 'Mars', 'Yupiter'])
// 
function calculateEngravingPrice(message, pricePerWord) {
    const newArr = message.split(' ')
    const engravingPrice = pricePerWord * newArr.length;

    return engravingPrice;
}

calculateEngravingPrice('Web-development is creative work', 20)
// 
function slugify(title) {
    const slug = title.toLowerCase().split(' ').join('-');
    return slug;
}

slugify('How to become a JUNIOR developer for TWO WEEKS')
// 1
function makeArray(firstArray, secondArray, maxLength) {
    const newArr = firstArray.concat(secondArray);

    if (newArr.length > maxLength) {
        return newArr.slice(0, maxLength);
    }

    return newArr;
}
// 2
function makeArray(arr1, arr2, max) {
    return arr1.concat(arr2).slice(0, max);
    // return [...arr1, ...arr2].slice(0, max);
}

makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3);
// 1 
function findLongestWord(string) {
    return string.split(' ').reduce(function (longest, word) {
        return word.length > longest.length ? word : longest;
    }, '')
}
// 2
function findLongestWord(string) {
    const newArr = string.split(' ');
    let longestWord = '';

    for (word of newArr) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
// 
function checkFruit(fruit) {
    const fruits = ["apple", "plum", "pear", "orange"];

    for (fr of fruits) {
        return fruits.includes(fruit);
    }
}

checkFruit("mandarin");
checkFruit("plum");
// 1
function getCommonElements(array1, array2) {
    let newArr = array2.concat(array1);

    const uniqArr = newArr.filter((item, index) => { index !== newArr.indexOf(item) });

    return uniqArr;
}
// 2
function getCommonElements(array1, array2) {
    let newArr = [];

    for (const num of array1) {
        if (array2.includes(num)) {
            newArr.push(num);
        };
    };

    return newArr;
}

getCommonElements([1, 2, 3], [2, 1, 17, 19])
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])
// 
function getEvenNumbers(start, end) {
    const newArr = [];

    for (let i = start; i <= end; i += 1) {
        if (i % 2 === 0) {
            newArr.push(i);
        }
    }

    return newArr;
}

getEvenNumbers(6, 12)
getEvenNumbers(7, 7)
getEvenNumbers(8, 8)
// 
function includes(array, value) {
    let bool;
    for (const elem of array) {
        if (elem === value) {
            bool = true;
            break;
        } else {
            bool = false;
        }
    }
    return bool;
}

includes([1, 2, 3, 4, 5], 17);
includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter');
includes([1, 2, 3, 4, 5], 3);
//
function getCommonElements(arr) {
    const duplicates = [];

    for (let i = 0; i < arr.length; i += 1) {
        if (arr.includes(arr[i], i + 1)) {
            duplicates.push(arr[i]);
        }
    }
    return duplicates;
}

getCommonElements([1, 2, 3, 2, 17, 1, 17, 2, 19]);
// Codewars
function addLength(str) {
    const newArr = str.split(' ');

    for (let i = 0; i < newArr.length; i += 1) {
        newArr[i] += ' ' + newArr[i].length;
    }

    return newArr;
}

addLength("apple ban"); // ["apple 5", "ban 3"]
addLength("you will win") // ["you 3", "will 4", "win 3"]
// Codewars
function pipeFix(numbers) {
    const lastEl = numbers[numbers.length - 1];
    const firstEl = numbers[0];
    const newArr = [];

    for (let i = firstEl; i <= lastEl; i += 1) {
        newArr.push(i)
    }
    return newArr
}

pipeFix([1, 3, 5, 6, 7, 8]);
// Codewars
function triangular(n) {
    if (n <= 0) {
        return 0;
    }
    return n * (n + 1) / 2
    // let sum = 0;

    // for (let i = 0; i <= n; i += 1) {
    //     sum += i;
    // }

    // return sum;
}

triangular(4); // 10
triangular(2); // 3
triangular(-10); // 0
// Codewars
function isIsogram(str) {
    return new Set(str.toLowerCase()).size === str.length;
    // return str.charAt(0) !== str.charAt(0).toLowerCase() || !str ? true : false; // Wrong variant, didn't got the instructions :)
}

isIsogram("Dermatoglyphics"); // true
isIsogram("isogram"); // true
isIsogram("aba"); // false
isIsogram("moOse"); // false
isIsogram("isIsogram"); //false
isIsogram(""); // true
// 
function calculatePrice(arr) {
    return arr.reduce((acc, next) => acc + next, 0)
}

calculatePrice([12, 85, 37, 4]);
//
function countProps(object) {
    let propCount = 0;

    const keys = Object.keys(object)

    for (const key of keys) {
        if (object.hasOwnProperty(key)) {
            propCount += 1;
        }
    }

    return propCount;
}

countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });
//

const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
    for (const product of products) {
        if (product.name === productName) {
            return product.price * product.quantity;
        }
    }
    return 0;
}

calculateTotalPrice("Radar");
calculateTotalPrice("Droid");
calculateTotalPrice("Blaster");
// 
function findMatches([...numbers], ...args) {
    const matches = [];

    for (const num of numbers) {
        if (args.includes(num)) {
            matches.push(num);
        }
    }
    // for (let i = 0; i < numbers.length; i += 1) {
    //     if (args.includes(numbers[i])) {
    //         matches.push(numbers[i]);
    //     }
    // }

    return matches;
}

findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
//
const bookShelf = {
    books: ["The last kingdom", "Haze", "The guardian of dreams"],

    updateBook(oldName, newName) {
        const { books } = bookShelf;

        const indexOfOldBook = books.indexOf(oldName)
        books.splice(indexOfOldBook, 1, newName)
        // 2
        // books[indexOfOldBook] = newName

        return books;
    },
};

bookShelf.updateBook('Haze', 'Dungeon chronicles');
bookShelf.updateBook('The last kingdom', 'Dune');
// 
const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
    ],

    getPotions() {
        return this.potions
    },
    addPotion(newPotion) {
        for (const potion of this.potions) {
            if (potion.name === newPotion.name) {
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
            }
        }

        this.potions.push(newPotion);
    },
    removePotion(potionName) {
        const { potions } = this;

        for (let i = 0; i < potions.length; i += 1) {
            if (potions[i].name === potionName) {
                potions.splice(i, 1)
            }
        }

        return `Potion ${potionName} is not in inventory!`;
    },
    updatePotionName(oldName, newName) {
        const { potions } = this;

        for (let i = 0; i < potions.length; i += 1) {
            if (potions[i].name === oldName) {
                return potions[i].name = newName;
            }
        }

        return `Potion ${oldName} is not in inventory!`;
    },
};

atTheOldToad.updatePotionName('Speed potion', 'Some potion');
// 
const array = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male",
        age: 37
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
        age: 34
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
        age: 24
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
        age: 21
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male",
        age: 27
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male",
        age: 38
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female",
        age: 39
    }
]

const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName));
};

getUsersWithFriend(array, 'Briana Decker');
getUsersWithFriend(array, 'Adrian Cross');
//
const profile = {
    name: "Alex",
    age: 23,
    stats: {
        followers: 200,
        likes: 23000,
    },
    location: "USA",
    getProperty({ name, age, stats: { followers, likes }, location }) {
        return followers, likes;
    },
};

profile.getProperty(profile);
// 
const usersArr = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        skills: ["ipsum", "lorem"],
        gender: "male",
        age: 37,
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
        gender: "female",
        age: 34,
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        skills: ["nulla", "anim", "proident", "ipsum", "elit"],
        gender: "male",
        age: 24,
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        skills: ["adipisicing", "irure", "velit"],
        gender: "female",
        age: 21,
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        skills: ["ex", "culpa", "nostrud"],
        gender: "male",
        age: 27,
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        skills: ["non", "amet", "ipsum"],
        gender: "male",
        age: 38,
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        skills: ["lorem", "veniam", "culpa"],
        gender: "female",
        age: 39,
    },
];

const getUserNames = users => {
    return users.map(user => user.name);
};

getUserNames(usersArr);
// 
const books = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        genres: ["adventure", "history"],
    },
    {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        genres: ["fiction", "mysticism"],
    },
    {
        title: "Redder Than Blood",
        author: "Tanith Lee",
        genres: ["horror", "mysticism", "adventure"],
    },
];

const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((genre, index, arr) => arr.indexOf(genre) === index);
// 
const books2 = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
    },
    {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        rating: 8.51,
    },
    {
        title: "The Dream of a Ridiculous Man",
        author: "Fyodor Dostoevsky",
        rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books2.filter(({ rating }) => rating > MIN_RATING);
const booksByAuthor = books2.filter(({ author }) => author === AUTHOR);
//
const friends = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male",
        age: 37
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
        age: 34
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
        age: 24
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
        age: 21
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male",
        age: 27
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male",
        age: 38
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female",
        age: 39
    }
]

const getFriends = (users) => {
    return users.flatMap(user => user.friends).filter((friend, index, arr) => arr.indexOf(friend) === index);
};

getFriends(friends);
//
const getActiveUsers = (users) => {
    return users.filter(({ isActive }) => isActive);
};

getActiveUsers(friends);
//
const players = [
    { name: "Mango", playtime: 1270, gamesPlayed: 4 },
    { name: "Poly", playtime: 469, gamesPlayed: 2 },
    { name: "Ajax", playtime: 690, gamesPlayed: 3 },
    { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((acc, player) => acc + player.playtime / player.gamesPlayed, 0);
//
const arrOfFriends = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male"
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female"
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male"
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female"
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male"
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male"
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female"
    }
]

const getTotalFriendCount = users => {
    return users.reduce((length, user) => length + user.friends.length, 0);
};

getTotalFriendCount(arrOfFriends);
//
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = [...releaseDates].sort((a, b) => `'a: ', ${a} + ' ', 'b: ', ${b}`);
// 
const books4 = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
    },
    {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        rating: 8.51,
    },
    {
        title: "The Dream of a Ridiculous Man",
        author: "Fyodor Dostoevsky",
        rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const sortedByAuthorName = [...books4].sort((author2, author1) => author2.author.localeCompare(author1));

const sortedByReversedAuthorName = [...books4].sort((author2, author1) => author1.author.localeCompare(author2));

const sortedByAscendingRating = [...books4].sort((author2, author1) => author1.rating - author2.rating);

const sortedByDescentingRating = [...books4].sort((author2, author1) => author2.rating - author1.rating);
//
const sortByAscendingBalance = users => {
    return [...users].sort((a, b) => a.balance - b.balance)
};
// 
const sortByDescendingFriendCount = users => {
    return [...users].sort((user2, user1) => user1.friends.length - user2.friends.length)
};
// 
const sortByName = users => {
    return [...users].sort((user2, user1) => user2.name.localeCompare(user1.name));
};
// 
const books5 = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
    },
    {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        rating: 8.51,
    },
    {
        title: "The Dream of a Ridiculous Man",
        author: "Fyodor Dostoevsky",
        rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    {
        title: "The Dreams in the Witch House",
        author: "Howard Lovecraft",
        rating: 8.67,
    },
];
const MIN_BOOK_RATING = 8;

const names = books5.filter(book => book.rating > MIN_BOOK_RATING).map(user => user.author).sort((user2, user1) => user2.localeCompare(user1));
// 
const getNamesSortedByFriendCount = users => {
    return [...users].sort((user2, user1) => user2.friends.length - user1.friends.length).map(user => user.name);
};
// 
const getSortedFriends = users => {
    return [...users]
        .flatMap(user => user.friends)
        .filter((friend, index, arr) => arr.indexOf(friend) === index)
        .sort((friend2, friend1) => friend2.localeCompare(friend1));
};
//
const someUsers = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male"
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female"
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male"
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female"
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
        isActive: true,
        balance: 3951,
        gender: "male"
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
        isActive: false,
        balance: 1498,
        gender: "male"
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female"
    }
]

const getTotalBalanceByGender = (users, gender) => {
    return [...users].filter(user => user.gender === gender).reduce((total, currentUser) => total + currentUser.balance, 0);
};

getTotalBalanceByGender(someUsers, 'male');
//
class Storage {
    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    removeItem(itemToRemove) {
        const indexToRemove = this.items.indexOf(itemToRemove);
        return this.items.splice(indexToRemove, 1);
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

storage.getItems(); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
storage.getItems(); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
storage.getItems(); // ["Nanitoids", "Antigravitator", "Droid"]
//
class StringBuilder {
    constructor(initialValue) {
        this.value = initialValue;
    }

    getValue() {
        return this.value;
    }
    padStart(str) {
        this.value = str + this.value;
    }
    padEnd(str) {
        this.value += str;
    }
    padBoth(str) {
        this.value = str + this.value + str;
        // this.padStart(str)
        // this.padEnd(str)
    }
}

const builder = new StringBuilder(".");
builder.getValue(); // "."
builder.padStart("^");
builder.getValue(); // "^."
builder.padEnd("^");
builder.getValue(); // "^.^"
builder.padBoth("=");
builder.getValue(); // "=^.^="
//
class Car {
    MAX_PRICE = 50000;
    #price;

    constructor({ price }) {
        this.#price = price;
    }

    get price() {
        return this.#price;
    }

    set price(newPrice) {
        if (newPrice < this.MAX_PRICE) {
            this.#price = newPrice;
        }
        return;
    }
}

const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000
audi.price = 49000;
// console.log(audi.price); // 49000
audi.price = 51000;
// console.log(audi.price); // 49000
// 
class User {
    email;

    constructor(email) {
        this.email = email;
    }

    get email() {
        return this.email;
    }

    /**
     * @param {string} newEmail
     */
    set email(newEmail) {
        if (typeof newEmail === 'string' && newEmail !== '') this.email = newEmail;
    }
}

class Admin extends User {
    constructor({ email, accessLevel }) {
        super(email);
        this.accessLevel = accessLevel;
    }

    static AccessLevel = {
        BASIC: "basic",
        SUPERUSER: "superuser",
    };

}

const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
});

mango.email; // "mango@mail.com"
mango.accessLevel; // "superuser"
// 
class User2 {
    email;

    constructor(email) {
        this.email = email;
    }

    get email() {
        return this.email;
    }

    /**
     * @param {any} newEmail
     */
    set email(newEmail) {
        this.email = newEmail;
    }
}
class Admin2 extends User2 {
    blacklistedEmails = [];

    static AccessLevel = {
        BASIC: "basic",
        SUPERUSER: "superuser",
    };

    constructor({ email, accessLevel }) {
        super(email);
        this.accessLevel = accessLevel;
    }

    blacklist(email) {
        this.blacklistedEmails.push(email);
    }

    isBlacklisted(email) {
        return this.blacklistedEmails.includes(email);
    }
}

const mango2 = new Admin2({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
});

mango2.email; // "mango@mail.com"
mango2.accessLevel; // "superuser"

mango2.blacklist("poly@mail.com");
mango2.blacklistedEmails; // ["poly@mail.com"]
mango2.isBlacklisted("mango@mail.com"); // false
mango2.isBlacklisted("poly@mail.com"); // true
//
// console.log('1');

// const promise1 = new Promise((res, rej) => {
//     console.log('s');
// });

// function foo() {
//     console.log(2);
//     setTimeout(() => {
//         console.log('v');
//     }, 1000);
// }

// async function bar() {
//     console.log(3);
//     await foo();
//     console.log(4);
// }

// bar();
// console.log(5);

// 1
// s
// 3
// 2
// 5
// 4
// v

// Codewats #1
// function fakeBin(x) {
//     x = [...x];

//     const toBin = n => n < 5 ? 0 : 1;
//     return x.map(toBin).join('');
// }
// #2
function fakeBin(x) {
    return [...x].map(n => n < 5 ? 0 : 1).join('');
}

fakeBin("1259") // 0011
fakeBin("7815") // 1101
fakeBin("1234567890") // 0000111110
// Codewars
const digitsArr = [-1, 0, 5, 2, -3, 6];

function findLowestDigit(arr) {
    let lowestDigit = 0;

    arr.forEach(digit => {
        if (digit < lowestDigit) lowestDigit = digit;
    });

    return lowestDigit;
}

findLowestDigit(digitsArr); // -3, Big O(n)
// My custom shopping cart script
const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }

        this.items.push(product);
        product.quantity = 1;
    },
    remove(productName) {
        this.items = this.items.filter(product => product.name !== productName);
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        return this.items.reduce((total, { price, quantity }) => total + price * quantity, 0);
    },
    increaseQuantity(productName) {
        for (const item of this.items) {
            if (item.name === productName) item.quantity += 1;
        }
    },
    decreaseQuantity(productName) {
        for (const item of this.items) {
            if (item.name === productName && item.quantity > 0) {
                item.quantity -= 1;
                if (item.quantity <= 0) this.remove(productName);
            }
        }
    },
}

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'pear', price: 60 });
cart.add({ name: 'strawberry', price: 110 });

cart.getItems();
cart.remove('apple');
cart.remove('pear');
cart.add({ name: 'banana', price: 130 });
cart.getItems();
cart.countTotalPrice();
cart.increaseQuantity('banana');
cart.increaseQuantity('banana');
cart.increaseQuantity('banana');
cart.countTotalPrice();
cart.decreaseQuantity('banana');
cart.decreaseQuantity('lemon');
cart.getItems();
cart.countTotalPrice();
// Codewars
function doubleChar(str) {
    return str.split('').map(el => el + el).join('')
}

doubleChar('String'); // 'SSttrriinngg'
doubleChar('1234!_ '); // '11223344!!__  '
// ? ==================================================== CW
// function convertToCamelCase(str) {
//     return str.split((/[.\-_]/)).slice(1).map(el => el[0].toUpperCase() + el.slice(1)).unshift(str[0]).join('');
// }

// convertToCamelCase("the-stealth-warrior"); // theStealthWarrior
// convertToCamelCase("The_Stealth_Warrior"); // TheStealthWarrior
// convertToCamelCase("APippiWasOmoshiroi"); // aPippiWasOmoshiroi
// Callbacks
// function askPassword(ok, fail) {
//     let password = prompt('Password? :)');
//     if (password === 'admin') ok();
//     else fail();
// }

// const platformUser = {
//     name: 'John',
//     loginOk() {
//         console.log(`${this.name} logged in successfully`);
//     },
//     loginFail() {
//         console.log(`${this.name} failed to log in`);
//     },
// }

// askPassword(platformUser.loginOk.bind(platformUser), platformUser.loginFail.bind(platformUser));
//
class Client {
    #login;
    #email;

    constructor({ login, email }) {
        this.#email = email;
        this.#login = login;
    }

    get clientData() {
        return {
            login: this.#login,
            email: this.#email,
        }
    }
    set changeEmail(newEmail) {
        this.#email = newEmail;
    }
}

const constantine = new Client({ login: 'admin123', email: 'const.it@gmail.com' })

constantine.clientData; // {login: 'admin123', email: 'const.it@gmail.com'}
constantine.changeEmail = 'const.it.lysenko@gmail.com';
constantine.clientData; // {login: 'admin123', email: 'const.it.lysenko@gmail.com'}
//
const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

function countFruits(arr) {
    const fruitsObj = {};

    arr.forEach(el => {
        if (!fruitsObj[el]) {
            fruitsObj[el] = 1;
        } else {
            fruitsObj[el] += 1;
        }
    });

    return fruitsObj;
}

countFruits(fruits); // { kiwi: 3, apple: 2, orange: 1
// Codewars
// Bad time limit
function scramble(str1, str2) {
    let sameLettersCount = 0;
    const comparisonArr = str1.split('');
    const targetArr = str2.split('');

    for (let i = 0; i < targetArr.length; i += 1) {
        for (let j = 0; j < comparisonArr.length; j += 1) {
            if (targetArr[i] === comparisonArr[j]) {
                comparisonArr.splice(j, 1);
                sameLettersCount++
                break;
            }
        }
    }
    return sameLettersCount === targetArr.length;
}
// Good time limit
function scramble(str1, str2) {
    let str1Hash = {};
    let containsScramble = true;
    for (const char1 of str1) {
        str1Hash[char1] ? (str1Hash[char1] += 1) : (str1Hash[char1] = 1);
    }

    for (const char2 of str2) {
        str1Hash[char2] ? (str1Hash[char2] -= 1) : (containsScramble = false);
    }

    return containsScramble;
}

scramble('rkqodlw', 'world'); // true
scramble('cedewaraaossoqqyt', 'codewars'); // true
scramble('katas', 'steak'); // false
scramble('scriptjavx', 'javascript'); // false
const digitsArray = [1, 2, 3, 4]
const emptyArray = []
const digitsObject = { a: 1, b: 2, c: 3, d: 4 }
const emptyDigitsObject = {}
const otherDataType = 'gdggs';
// if array or object is empty return true
const isObjectEmpty = (obj) => {
    if (typeof obj !== 'object') return 'Not an object';

    return Array.isArray(obj) ? obj.length === 0 : Object.keys(obj).length === 0;
}

console.log(isObjectEmpty(digitsArray));
console.log(isObjectEmpty(emptyDigitsObject));
// forEach polifill
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
        if (this === null || this === undefined) {
            throw new TypeError('Array.prototype.forEach called on null or undefined');
        }

        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        for (let i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

digitsArray.forEach(el => console.log(el));
