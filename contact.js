const scriptURL = 'https://script.google.com/macros/s/AKfycbxPLdZiQjxqh2K-WvqHnlCuR1sqcKlJxliZ3jbY_5jkDw_bbS_hDRYonho8SjSVKhfAZg/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent to Ritu successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })