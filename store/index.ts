export interface CommonState {
  counter: number
}

export const state = (): CommonState => ({
  counter: 0
})

export const mutations = {
  increment(state: CommonState) {
    state.counter++
  }
}

export const actions = {
  increment(context: any, count: number) {
    context.commit('increment', count)
  }
}
