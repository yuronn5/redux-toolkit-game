import { useEffect, useState, useRef } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import { setCurrentStep } from "./store/slices"

import Controls from "./components/Controls"

import { INTERVAL_TIME } from "./constants"

const Playground: React.FC = () => {
  const statte = useAppSelector(state => state.playground)
  const dispatch = useAppDispatch()

  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null)

  const [itTimerActive, setItTimerActive] = useState<boolean>(false)

  useEffect(() => {
    if (itTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setCurrentStep())
      }, INTERVAL_TIME)
    } else {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }

    return () => {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }
  }, [itTimerActive, dispatch])

  return (
    <div>
      {statte.currentStep}
      <Controls
        isTimerActive={itTimerActive}
        setIsTimerActive={setItTimerActive}
      />
    </div>
  )
}

export default Playground
