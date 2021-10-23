// api/new-meetup
import {MongoClient } from 'mongodb';

async function handler(req, res){
  if(req.method === 'POST'){
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://femi:november14@cluster0.9xctp.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    cl


  }

  
}

export default handler;