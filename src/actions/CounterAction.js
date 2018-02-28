export const counterIncrement = () => {
    return {
        type: 'INCREMENT'
    }
}

export const counterDecrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const counterClear = () => {
    return {
        type: 'CLEAR'
    }
}

export const counterInput = (receivedNumber) => {
    return {
        type: 'INPUT',
        payload: receivedNumber
    }
}