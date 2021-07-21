export function checkUrl(url) {
  let formText = ''
 if(url){ formText = url}
 else {
   formText = document.getElementById('name').value;
 }
  console.log(formText);
  //  console.log("Entered Link is:", formText);
   var regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
      if (regexp.test(formText))
      {
                if(url){
                         return true
                        }
   //  alert('valid Url')
    console.log(formText);
      }
      else
      {
        if(url){
                 return false
                }

        //return false if url not a Link
  //    alert('Invalid URl , please enter a valid URL')
      }
//return url;
}

//export { checkUrl }
