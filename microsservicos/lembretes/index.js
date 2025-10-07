const express = require('express')
const app = express()
//middleware
app.use(express.json())
/*
{
  1: {
    id: 1,
    texto: 'fazer café'
  },
  2: {
    id: 2,
    texto: 'ir à feira'
  }
}
*/
const baseLembretes = {}
// GET localhost:4000/lembretes
//aqui vc obtem a lista
app.get('/lembretes', (req, res) => {
  res.json(baseLembretes)
})
// POST localhost:4000/lembretes
// //aqui vc cadastra um lembrete
// {
//   texto: "fazer café"
// }
let id = 1
app.post('/lembretes', (req, res) => {
  const { texto } = req.body
  const lembrete = { id, texto }
  baseLembretes[id] = lembrete
  id++
  res.status(201).json(lembrete)
})

app.put('/lembretes/:id', (req,res) => {
  const {texto} = req.body
  baseLembretes[req.params.id]['texto'] = texto
  res.json(baseLembretes[req.params.id])
})

app.delete('/lembretes/:id', (req,res) => {
  baseLembretes[req.params.id] = null
  res.json(204)
})

const port = 4000
app.listen(
  port, 
  () => console.log(`Lembretes. Porta ${port}.`)
)


