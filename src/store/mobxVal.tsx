import { makeAutoObservable } from "mobx";

class MobxVal {
    constructor() { makeAutoObservable(this); }

    inputObj = {
        login: '',
        password: ''
    }

    inputObjErr = {
        loginErr: '',
        passwordErr: ''
    }

    submitData = () => {
        this.validateData()
        if (Object.values(this.inputObjErr).every(i => i === ''))  alert('Success')
    }

    updateInputData = (key: string, value: string) => {
        this.inputObj = {
            ...this.inputObj,
            [key]: value
        }
    }

    validateData = () => {
        const inp = this.inputObj
        const inpErr = this.inputObjErr

        if (inp.login === '') inpErr.loginErr = 'Write password'
        else if (inp.login.length < 3) inpErr.loginErr = 'login min length 3 bytes'
        else if (!/^[a-zA-Z0-9]+$/.test(inp.login)) inpErr.loginErr = 'login can have only words and letters'

        if (inp.password === '') inpErr.passwordErr = 'Write password'
        else if (inp.password.length < 6) inpErr.passwordErr = 'password min length 6 bytes'
        else if (!/^[a-zA-Z0-9]+$/.test(inp.password)) inpErr.passwordErr = 'password can have only words and letters'
    }
}
export const mobxValInstance = new MobxVal();