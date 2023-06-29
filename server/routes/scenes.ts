import express from 'express'
import * as db from '../db/scenes'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const sceneArr = await db.getAllScenes()
    res.json(sceneArr)
  } catch (error) {
    console.error('Oh no, route error', error)
    res.sendStatus(500)
  }
})


router.get('/:id', async (req, res) => {
  const id = +req.params.id
  try {
    const review = await db.getScene(id)
    res.json(review)
  } catch (error) {
    console.error('Oh no, route error', error)
    res.sendStatus(500)
  }
})

export default router
