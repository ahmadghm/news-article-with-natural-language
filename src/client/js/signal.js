async function response() {
    const callkey = async () => {
        const resp = await fetch('http://localhost:1515/passcode', )
        try {
            const key = await resp.json()
            console.log('>>received key<<' + key);
            return key;
        } catch (error) {
            console.log(" XERROR: KEY X", error)
        }
    }
    const keyCode = await callkey();
    let formUrl = document.getElementById('name').value
  /*  const formdata = new FormData();
    formdata.append("key=", keyCode)
    formdata.append("&url=", formUrl);
    formdata.append("&lang=", "en");
    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    }*/
   const meaningLink ='https://api.meaningcloud.com/sentiment-2.1'
   const urlFinalFormat =`${meaningLink}?key=${keyCode}&url=${formUrl}&lang=en`
   const retData = async () => {
        try {
            const response = await fetch(urlFinalFormat)
            const data = await response.json()
            console.log('>>received data<<' + data);
            return data;
        } catch (error) {
            console.log(" XERROR: DATA X", error)
        }
    }
    const useData = async ()=>{
        const data = await retData();
         document.getElementById('result1').innerHTML = 'score: '+cal(data.score_tag);
         result2.innerHTML = `Agreement: ${data.agreement}`;
         result3.innerHTML = `Subjectivity: ${data.subjectivity}`;
         result4.innerHTML = `confidence: ${data.confidence}`;
         result5.innerHTML = `Irony: ${data.irony}`;
        console.log(data);
    }
    useData();

}

export function cal(symbol) {
    let symboResult= ''
    switch (symbol) {
        case 'P+':
            symboResult = 'P+ >strong positive'
            break;
        case 'P':
            symboResult = 'P >positive'
            break;
        case 'NEU':
            symboResult = 'NEU >neutral'
            break;
        case 'N':
            symboResult = 'N >negative'
            break;
        case 'N+':
            symboResult = 'N+ >strong negative'
            break;
        case 'NONE':
            symboResult = 'NONE >without polarity'
            break;
        default:
            symboResult = "... NO sentiment..."
    }
    return symboResult;
}


export {
    response
    };
