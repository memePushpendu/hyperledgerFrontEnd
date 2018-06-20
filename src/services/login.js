import {APIURL} from '../urlconfig';

export default function login() {
 let BaseURL = APIURL+"user/login";
 return new Promise(function (resolve, reject) {
     fetch(BaseURL)
         .then(function (data) {
             return data.json()
         })
         .then(function (data) {
             resolve(data)
         })
         .catch(function (error) {
             return error.json();
         }).then(function (error) {
             reject(error);
         });
 });
}   


