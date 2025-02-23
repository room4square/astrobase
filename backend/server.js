const express = require('express');
const app = express();
const port = 4000;
const supabase = require('@supabase/supabase-js')


const supabaseUrl = 'https://ztyutvzcnphbmlpcuibt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0eXV0dnpjbnBoYm1scGN1aWJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMTE4MDQsImV4cCI6MjA1NTc4NzgwNH0.gTzWZpo4SCxIjZdIzSdCKy3Idm4LFTfE6Jl9Ctkrl2E'
const db = supabase.createClient(supabaseUrl, supabaseKey)

app.use(express.json());

app.get('/', async(req, res) => {

    const getData = await db.from('blog').select()
    console.log(getData)
    res.json({getData})
    console.log('route backend diakses.. ${getData}')
});

app.post('/', async(req, res) => {
    const { title, content } = req.body;
    console.log(req)
    const createPost = await db.from('blog').insert([
        { title: title, content: content },
    ])
    console.log(`title: ${title}, content: ${content}`)
    res.json({createPost})
});

app.listen(port, () => {
    console.log(`Backend server running on port ${port}`);
});