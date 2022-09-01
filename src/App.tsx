// import counter from './store/Counter';
// import cart from './store/Cart';
import {useStore} from './store'
// observer是一个高阶组件函数，需要包裹一个组件，这样组件才会更新
import { observer } from 'mobx-react'

function App() {
  const {cart, counter} = useStore()
  return (
    <div className="App">
      <h3>计数器案例</h3>
      <div>点击次数：{counter.count}</div>
      <div>double: {counter.double}</div>
      <div>cart: {cart.list}</div>
      <button onClick={counter.increment}>加1</button>
      <button onClick={counter.incrementAsync}>异步加1</button>
      <button onClick={counter.decrement}>减1</button>
      <button onClick={counter.reset}>重置</button>
    </div>
  );
}

export default observer(App);
