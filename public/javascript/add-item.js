async function newItem(event) {
    event.preventDefault();
    const name = document.querySelector('input[name="item-name"]').value;
    const url = document.querySelector('input[name="item-url"]').value;
    const itemtext = document.querySelector('input[name="item-text"]').value;

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
        document.location.replace('/')
    } else {
        alert(response.statusText)
    }
}

document.querySelector('.new-item-form').addEventListener('submit', newItem)