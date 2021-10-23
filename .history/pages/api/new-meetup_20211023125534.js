// api/new-meetup
import {MongoClient } from 'mongodb';

async function handler(req, res){
  if(req.method === 'POST'){
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://femi:november14@cluster0.9xctp.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    meetupsCollection.insertOne({});


  }

  
}

export default handler;