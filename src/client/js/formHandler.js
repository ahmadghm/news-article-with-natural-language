export function handleSubmit(event) {
  //  console.log(event);
   event.preventDefault()
   //client.checkForName(formText)
   let formUrl = document.getElementById('name').value

  if(client.checkUrl(formUrl)) {

    console.log("::: Form Submitted :::")
    fetch('http://localhost:1515/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('urlcheck').innerHTML = `checked link : ${formUrl}` //res.message
    })
   //console.log('>>going to analyze 2<<');

   client.analyze()

     client.response()

 }else {
   alert('Invalid URl , please enter a valid URL')
 }
}

//export { handleSubmit }
