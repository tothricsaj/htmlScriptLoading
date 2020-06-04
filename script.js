setTimeout(() => {
    console.log('load 1')

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => console.log(json))

    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(json => console.log(json))

    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => console.log(json))
}, 7000)

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => console.log(json))
