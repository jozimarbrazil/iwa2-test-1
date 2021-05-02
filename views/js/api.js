const api_url = "/book";

//select the submit button
const submit = document.getElementById('submit');
//add an event listener to execute this code when the button is clicked
submit.addEventListener('click', async event => {
    //select the value user entered in the input box
    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;

    const data = { title: title, year: year, author: author, price: price };
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        //pass the values entered by the user in the body of the post resquest
        body: JSON.stringify(data)
    };
    //make a post request to the api
    const response = await fetch(api_url, options);
    const json = await response.json();
    console.log(json);
});

//select the delete button
const deleteBook = document.getElementById('delete');
//add an event listener for the button is clicked
deleteBook.addEventListener('click', async event => {
    //get the id entered by the user
    const id = document.getElementById('bookid').value;
   
    //make a delete request to the api, appending the id the user entered
    const response = await fetch('/books/'+id, {method: "delete"});
    const json = await response.json();
    console.log(json);
})

//load the contents of the database in the html table in the index page
async function buildTable() {
    //make a get request to the api
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);

    //check if there is any data returned
    if (data.length > 0) {
        //start a variable 
        var temp = "";
        //for each movie in the database we create a row, select the value in each column
        //put it all in the temp variable 
        data.forEach((book) => {
            temp += '<tr>';
            temp += '<td><input name="item0" type="checkbox" /></td>';
            temp += '<td>' + book._id + '</td>';
            temp += '<td>' + book.title + '</td>';
            temp += '<td>' + book.year + '</td>';
            temp += '<td>' + book.author + '</td>';
            temp += '<td>' + movie.price + '</td></tr>';
        });

        //add the temp variable to the body of the table
        document.getElementById("data").innerHTML = temp;
    }
}


buildTable();