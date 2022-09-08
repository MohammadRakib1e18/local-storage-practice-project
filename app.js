let getItemValueById = key =>{

    let inputField = document.getElementById(key);

    let inputFieldValue = inputField.value;
    inputField.value="";
    return inputFieldValue;
    // return inputFieldValue? inputFieldValue:"No "+key+" found!";
}


let sendData = (key) => {
    let value = getItemValueById(key);
    if(!value) return;
    sendToLocalStorage(key, value);
}

let sendToLocalStorage = (key,value) => {
    localStorage.setItem(key, value);
    send();
}

let deleteData = (key) => {
    localStorage.removeItem(key);
    getData();
}

let reset = () => {
    localStorage.clear();
    send();
}

let send = () => {
    let ob = {};

    let userName = getItemValueById('name');
    if(userName=='') userName = localStorage.getItem('name');
    let userEmail = getItemValueById('email');
    if(userEmail=='') userEmail = localStorage.getItem('email');
    let userMessage = getItemValueById('message');
    if(userMessage=='') userMessage = localStorage.getItem('message');




    ob['name'] = userName;
    ob['email'] = userEmail;
    ob['message'] = userMessage;
    localStorage.setItem("Info", JSON.stringify(ob));
    getData();
}

let getData = () => {
    let info = localStorage.getItem('Info');
    info = JSON.parse(info);
    console.log(info);

    document.getElementById('user-name').innerText = info?info.name:"No name found!";
    document.getElementById('user-email').innerText = info?info.email: "No email found!";
    document.getElementById('user-message').innerText = info?info.message: "No message found!";
}

getData();