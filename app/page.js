{/*for now it's static but we have to add client side logic in it */}

import fs from 'fs'
import path from 'path'
import Hero from './Hero'


export default function Home() {

  const file_path = path.join(process.cwd(), 'qdata/quotes.json');
  const file_data = fs.readFileSync(file_path, 'utf-8');
  const json_data = JSON.parse(file_data);

  return (
    <Hero quotes = {json_data}/>
  );
}
