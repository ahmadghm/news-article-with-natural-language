import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { checkUrl } from './js/validation.js'
import { analyze } from './js/analyzeUrl.js'
import { response } from './js/signal.js'


// import style files .scss
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

//import bootstrap
import 'bootstrap'

//console.log(checkForName)
//alert('checkForName')

//exports to client library
export {
 checkForName,
 handleSubmit,
 checkUrl,
 analyze,
 response
}
