import { Link } from "react-router-dom"; 
import React, { useEffect, useState, useCallback } from "react"; 
import { useNavigate, useParams } from "react-router-dom"; 
import verifySession from "./verifySession"; 


function DeletePost() { 
    const {id} = useParams();

    const clickDelete = async () => {

        console.log(id)
        
        try {
            const url = `https://pacific-escarpment-23355.herokuapp.com/posts/${id}`
            console.log(url)
          const responses = await fetch(url, {
          method: 'DELETE',
          headers: {
              "Content-Type": "application/json",
              "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem('userSession')).token},
    
          
      }) 
      
      
      } catch (err) {
        console.log(err);
      } 
      
      } 

  return (
    <div><button className="deletebut" onClick={clickDelete}><span class="material-symbols-outlined">delete</span></button></div>
  )
  }

export default DeletePost