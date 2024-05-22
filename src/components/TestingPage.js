import { useRef, useState, useEffect } from "react";
import axios from "../api/axios"

function TestPage () {
    const testConnection = async (e) => {
        axios.get('/')
                .then(function (response) {
                    console.log('Connection successful:', response.data);
                    alert('Connection successful: ' + response.data);
                })
                .catch(function (error) {
                    console.error('Connection failed:', error);
                    alert('Connection failed: ' + error.message);
                });
    }
    return (
    <>
    <h1> Testing connections</h1>
    <button onClick={testConnection}>
        Test connections
    </button>
    </>
    )
}

export default TestPage;