async function deleteItem(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });
    if(response.ok) {
        document.location.replace('/')
    } else {
        alert(response.statusText)
    }
}
//add in delete btn id or class and put this js on that page
document.querySelector('.delete-btn').addEventListener('click', deleteItem)