// api/new-meetup
import {MongoClient } from 'mongodb';

function handler(req, res){
  if(req.method === 'POST'){
    const data = req.body;

    const { title, image, address, description } = data;

    MongoClient


  }

  
}

export default handler;