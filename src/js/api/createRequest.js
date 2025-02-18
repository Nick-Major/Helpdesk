const createRequest = async ({ url, method, data}) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;

        console.log(xhr.responseText);
    };

    xhr.open(method, url);

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.responseType = 'json';

    if (data) {
        xhr.send(data);
    } else {
        xhr.send();
    };

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Error: ' + xhr.status);
        };
    };

};

export default createRequest;
