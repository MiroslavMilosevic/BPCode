

export function postMessage(message) {

    return axios.post(`https://script.google.com/macros/s/AKfycbxbOpwBDGwDD_hXA5bIBMM-LilA_yaPUr9yxwH1g9vs1YaBERQN/exec?message=${message}`)

}
