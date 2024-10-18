import {useAppDispatch, useAppSelector} from "../../app/hooks"

import {setCurrentStep} from "./store/slices";

const Playground: React.FC = () => {
  const statte = useAppSelector(state => state.playground);
  const dispatch = useAppDispatch();

  return (
    <div>{statte.currentStep}
      <button onClick={() => dispatch(setCurrentStep())}>Change Current Step</button>
    </div>
  )
}

export default Playground