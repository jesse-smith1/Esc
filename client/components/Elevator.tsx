/* eslint-disable @typescript-eslint/no-unused-vars */
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Link, useParams } from 'react-router-dom'
import { useRef, useState } from 'react'
//IMAGES//
import codeBg from '/images/code-bg.png'
import codeBg2 from '/images/code-bg2.png'
import eye from '/images/eye.png'

import { useSound } from 'use-sound'
import liftBellUrl from '/sounds/bell.wav'
import liftDoorUrl from '/sounds/elevator-door.wav'
import slackUrl from '/sounds/wow.mp3'
import ElevatorQuestions from './ElevatorQuestions'
import ElevatorCode from './ElevatorCode'

export default function Elevator() {
  const [lift, setLift] = useState('/images/lift.jpeg')
  const [viewExit, setViewExit] = useState(false)
  const [viewOpen, setViewOpen] = useState(true)
  const [levelNum, setLevelNum] = useState(1)

  const [questionPassed, setQuestionPassed] = useState(false)
  const [codeCracked, setCodeCracked] = useState(false)

  const [playing, setPlaying] = useState(false)
  const [playLiftBell] = useSound(liftBellUrl, { volume: 0.1 })
  const [playLiftDoor] = useSound(liftDoorUrl, { volume: 0.2 })
  const [playSlackUrl] = useSound(slackUrl, { volume: 0.5 })

  const ref = useRef()
  const { userId } = useParams()

  const handleClick = () => {
    setLift('/images/liftgiff.gif')
    setViewExit(true)
    setViewOpen(false)
    liftDoorFx()
  }

  const hasQuestionPassed = (response: boolean) => {
    setQuestionPassed(response)
  }

  const incrLevel = (level: number) => {
    setLevelNum(levelNum + 1)
    ref.current.scrollTo(level)
    setQuestionPassed(false)
    liftBellFx()
  }

  const liftBellFx = () => {
    playLiftBell()
  }

  const liftDoorFx = () => {
    playLiftDoor()
  }

  const handlePlayFx = () => {
    playSlackUrl()
  }

  return (
    <>
      <div className="elevator-shaft">
        <Parallax
          pages={6}
          ref={ref}
          style={{
            width: '105%',
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
          }}
        >
          {/* BACKGROUND LAYERS */}
          <ParallaxLayer
            offset={0}
            speed={1}
            // style={{
            //   backgroundImage: `url(${})`,
            //   backgroundSize: 'fit',
            // }}
            factor={5}
          ></ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={1}
            // style={{
            //   backgroundImage: `url(${})`,
            //   backgroundSize: 'cover',
            // }}
            factor={5}
          ></ParallaxLayer>

          {/* LIFT LAYERS */}

          <ParallaxLayer
            sticky={{ start: 0.1, end: 6.9 }}
            style={{ textAlign: 'left', margin: '50px', width: '20%' }}
          >
            <div id="lift">
              <div id="lift-number">
                <p style={{ textAlign: 'center' }}> LEVEL {levelNum}</p>
              </div>
            </div>
            <img style={{ width: '100%' }} src={lift} alt="lift" />
          </ParallaxLayer>

          {/* BUTTON LAYERS */}

          <ParallaxLayer offset={0.6} speed={0.5}>
            <div>
              <ElevatorQuestions
                key="level-1"
                data={levelNum}
                questionPassed={questionPassed}
                setQuestionPassed={setQuestionPassed}
              />
              {questionPassed && (
                <button onClick={() => incrLevel(1)} className="blue-button">
                  Go Down
                </button>
              )}
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={0.1}>
            <div>
              <ElevatorQuestions
                key="level-2"
                data={levelNum}
                questionPassed={questionPassed}
                setQuestionPassed={setQuestionPassed}
              />
              {questionPassed && (
                <button onClick={() => incrLevel(2)} className="blue-button">
                  Go Down Again
                </button>
              )}
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2.6} speed={1}>
            <div>
              <ElevatorQuestions
                key="level-3"
                data={levelNum}
                questionPassed={questionPassed}
                setQuestionPassed={setQuestionPassed}
              />
              {questionPassed && (
                <button onClick={() => incrLevel(3)} className="blue-button">
                  Annnd Again
                </button>
              )}
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={3.6} speed={1}>
            <div>
              <ElevatorQuestions
                key="level-4"
                data={levelNum}
                questionPassed={questionPassed}
                setQuestionPassed={setQuestionPassed}
              />
              {questionPassed && (
                <button onClick={() => incrLevel(5)} className="blue-button">
                  One more
                </button>
              )}
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={5.2} style={{ textAlign: 'center' }}>
            <div>
              <ElevatorCode codeCracked={codeCracked} setCodeCracked={setCodeCracked}/>
              {viewOpen && codeCracked && (
                <button className="blue-button" onClick={handleClick}>
                  Open Doors
                </button>
              )}
              {viewExit && (
                <Link to={`/game/${userId}/scene/2`}>
                  <button
                    className="blue-button"
                    onClick={() => handlePlayFx()}
                  >
                    Exit
                  </button>
                </Link>
              )}
            </div>
          </ParallaxLayer>

          {/* //FLYING ELEMENTS// */}

          <ParallaxLayer
            sticky={{ start: 2.5, end: 2.6 }}
            style={{ textAlign: 'left', width: '10%' }}
          >
            <img
              style={{ width: '100%', textAlign: 'right' }}
              src={eye}
              alt="eye"
            />
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}
