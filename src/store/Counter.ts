// import {action, computed, makeObservable, observable} from 'mobx'
import { makeAutoObservable, autorun, reaction, runInAction } from 'mobx'

class Counter {
  constructor(){
    // 参数1：target，把谁变成响应式（可观察）
    // 参数2：指定哪些属性或者方法变成可观察
    // makeObservable(this, {
    //   count: observable,
    //   increment: action.bound,
    //   decrement: action.bound,
    //   reset: action.bound,
    //   double: computed,
    // })

    // 参数1：target，把谁变成响应式（可观察）
    // 参数2：排除属性和方法
    // 参数3：指定自动绑定this
    makeAutoObservable(this, {}, {autoBind: true})
  }
  count = 0
  increment(){
    this.count++
  }
  incrementAsync(){
    setTimeout(() => {
      runInAction(() => {
        this.count++
      })
    }, 2000)
  }
  decrement(){
    this.count--
  }
  reset(){
    this.count = 0
  }
  get double(){
    return this.count * 2
  }
}

const counter = new Counter()

// autorun(() => {
//   console.log('counter', counter.count);
// })
reaction(
  () => counter.count,
  (newValue, oldValue) => {
    console.log('counter.count变化了');
  }
)

export default counter 