// api/new-meetup
import {MongoClient } from 'mongodb';

function handler(req, res){
  if(req.method === 'POST'){
    const data = req.body;

    const { title, image, address, description } = data;

    MongoClient.connect(
      "mongodb+srv://femi:november14@cluster0.9xctp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );


  }

  
}

export default handler;