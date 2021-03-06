import axios from 'axios';




const GetRequest = async (url, params) => {
    return new Promise(function(resolve, reject){
        axios.get(url, params)
            .then(response => {
                if(response != null && response.data != null && typeof response.data === "object"){
                    if(response.data.code === 1){
                        resolve(response.data.data );
                    }else{
                        reject({ message: response.data.message });
                    }
                }else{ 
                    reject({ message: "No se completó la operación" });
                }
            }).catch(error => {  
                reject({ message: error.message });
            });
    });
};

const PostRequest = async (url, _params) => {
    return new Promise(function(resolve, reject){
        const params = JSON.stringify(_params);
        const headers = { headers: { 'Content-Type': 'application/json' } };
        
        axios.post(url, params, headers)
            .then(response => {
                if(response != null && response.data != null && typeof response.data === "object"){
                    if(response.data.code === 1){
                        resolve(response.data.data );
                    }else{
                        reject({ message: response.data.message });
                    }
                }else{ 
                    reject({ message: "No se completó la operación" });
                }
            }).catch(error => {
                reject({ message: error.message });
            });
    });
};

const PutRequest = async (url, params) => {
    return new Promise(function(resolve, reject){
        axios.put(url, params)
            .then(response => {
                if(response != null && response.data != null && typeof response.data === "object"){
                    if(response.data.code === 1){
                        resolve(response.data.data );
                    }else{
                        reject({ message: response.data.message });
                    }
                }else{ 
                    reject({ message: "No se completó la operación" });
                }
            }).catch(error => {  
                reject({ message: error.message });
            });
    });
};

const DeleteRequest = async (url, params) => {
    return new Promise(function(resolve, reject){
        axios.delete(url, params)
            .then(response => {
                if(response != null && response.data != null && typeof response.data === 'number'){
                    resolve("Operación exitosa");
                }else{ 
                    reject({ message: "No se completó la operación" });
                }
            }).catch(error => {  
                reject({ message: error.message });
            });
    });
};

const BaseUrl = "http://dockerspringapp-env.eba-8ubmqnvq.sa-east-1.elasticbeanstalk.com/api/";

export {
    GetRequest,
    PostRequest,
    PutRequest,
    DeleteRequest,
    BaseUrl
}