// book search
const searchBook = () => {
    let searchField = document.getElementById('search-field');
    let searchText = searchField.value;
    console.log(searchText);
    let url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBookResult(data.docs.slice(0, 20)));
};

// book display
const displayBookResult = docs => {
    const searchResult = document.getElementById('search-result');
    docs.forEach(doc => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Name: ${doc.title === undefined ? `Book title is not availabe` : doc.title}</h5>
                <p class="card-text">Author: ${doc.author_name === undefined ? `Author name is not availabe` : doc.author_name}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Published in: ${doc.publish_date === undefined ? `Date is not available` : doc.publish_date[0]}</small>
            </div>
            </div>`
        searchResult.appendChild(div);
    });
};


// for total search result
const searchTotalResult = () => {
    let searchField = document.getElementById('search-field');
    let searchText = searchField.value;
    searchField.value = '';
    let urls = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(urls)
        .then(res => res.json())
        .then(data => displayTotalResult(data.numFound));
};

// for display results and no results 
const displayTotalResult = nums => {
    let result = nums;
    let totalFound = document.getElementById('total-found');
    let totalResult = document.getElementById('total-result');
    if (result != 0) {
        totalFound.innerText = `${result}`;
    }
    else {
        totalResult.innerText = `No result found`;
    }
};
