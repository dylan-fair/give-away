async function newItem(event) {
    event.preventDefault();
    const name = document.querySelector('.titleInput').value.trim();
    const url = document.querySelector('.urlInput').value.trim();
    const itemtext = document.querySelector('.textInput').value.trim();
    console.log('It Works!')
if(name && url && itemtext){
   
    const response = await fetch('/api/items', {
        method: 'POST',
        body: JSON.stringify({
            name,
            url,
            itemtext
        }),
        headers: {'Content-Type': 'application/json'}
    });
    if(response.ok){
        document.location.replace('/dashboard')
    } else {
        alert(response.statusText)
    }
}
}

document.querySelector('.aBtn').addEventListener('click', newItem)


document.querySelector('#create-btn').addEventListener('submit', newItem)