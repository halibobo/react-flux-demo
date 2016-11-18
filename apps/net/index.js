/**
 * Created by su on 2016/11/17.
 */
import 'whatwg-fetch';
import React from 'react';
import FetchTest from 'fetch'

export default class RequestDemo extends React.Component {

    getRequest(){
        fetch(url, options).then(function(response) {
            // handle HTTP response
        }, function(error) {
            // handle network error
        })
    }



    getData(url,data){


        FetchTest("" ,)

        fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        }).then(function(response) {
            response.status     //=> number 100–599
            response.statusText //=> String
            response.headers    //=> Headers
            response.url        //=> String

            response.text().then(function(responseText) {

            })
        }, function(error) {
            error.message //=> String
        })
    }
}