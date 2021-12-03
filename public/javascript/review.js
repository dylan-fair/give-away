async function reviewItem(event) {
    event.preventDefault();
                                            //add in actuall text area name
    const reviewText = document.querySelector('textarea[name="review-body"]').value.trim();
    const rating = document.querySelector('#rating').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    if(reviewText) {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({
                id,
                reviewText,
                rating
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if(response.ok){
            document.location.reload()
        } else {
            alert(response.statusText)
        }
    }
}

document.addEventListener('submit', reviewItem)