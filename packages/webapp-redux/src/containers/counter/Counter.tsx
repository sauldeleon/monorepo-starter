import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../../app/reducers/counter'
import { Button, Row } from '@myscope/common'
import { CounterSpan, CounterInput } from './Counter.styles'

export const Counter: React.FC = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <Row justifyContent="center" alignItems="center">
        <Button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </Button>
        <CounterSpan>{count}</CounterSpan>
        <Button aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </Button>
      </Row>
      <Row justifyContent="center" alignItems="center">
        <CounterInput
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <Button onClick={() => dispatch(incrementByAmount(incrementValue))}>Add Amount</Button>
        <Button onClick={() => dispatch(incrementAsync(incrementValue))}>Add Async</Button>
        <Button onClick={() => dispatch(incrementIfOdd(incrementValue))}>Add If Odd</Button>
      </Row>
    </div>
  )
}
