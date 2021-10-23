// api/new-meetup
import {MongoClient } from 'mongodb';

async function handler(req, res){
  if(req.method === 'POST'){
    const data = req.body;

    const { title, image, address, description } = data;

    await MongoClient.connect(
      "mongodb+srv://femi:november14@cluster0.9xctp.mongodb.net/meetups?retryWrites=true&w=majority"
    );


  }

  
}

export default handler;