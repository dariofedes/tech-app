const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
    string(target, name, empty = true) {
        if(typeof target !== 'string') throw new TypeError(`${name} ${target} is not a string`)

        if(empty && !target.trim()) throw new Error(`${name} is empty`)
    },

    email(target) {
        if(!EMAIL_REGEX.test(target)) throw new Error(`${target} is not an email`)
    }
}