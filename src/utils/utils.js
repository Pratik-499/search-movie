export const debounce = (func, delay) => {
    let timer = null;

    return args => {
        if(timer) return;
        timer = setTimeout(() => {
            func.call(null, args)
        }, delay || 250)
    }
}