import { mobxValInstance } from "@/store/mobxVal";
import { observer } from "mobx-react-lite";
import React from "react";

interface IModalProps {
    isOpen: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const IModal: React.FC<IModalProps> = observer(({ isOpen, setOpen }) => {

    if (!isOpen) return null

    const { updateInputData, inputObj, submitData, inputObjErr } = mobxValInstance

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center`} onClick={() => setOpen(false)}>
            <div className="bg-[#FFFFFF] h-[400px] w-[400px] p-5 rounded-[10px]" onClick={e => e.stopPropagation()}>
                <div className="bg-white-100 justify-between flex p-[20px] rounded-[10px]">
                    <h2>Войти</h2>
                    <button className="bg-[#F5F5F5]" onClick={() => setOpen(false)}>X</button>
                </div>
                <div className="w-[300px] flex flex-col mx-auto mt-[20px]">
                    <div className="flex-col flex">
                        <label className="mb-[10px]" htmlFor="">Логин (e-mail):</label>
                        <input
                            value={inputObj.login}
                            onChange={e => updateInputData('login', e.target.value)}
                            className="h-[35px] rounded-[5px] pl-[5px] bg-white-100"
                            type="text"
                            placeholder="Ваш e-mail" />
                            {inputObjErr.loginErr !== '' && <span>{inputObjErr.loginErr}</span>}
                    </div>
                    <div className="flex-col flex mt-[40px]">
                        <label className="mb-[10px]" htmlFor="">Пароль:</label>
                        <input
                            value={inputObj.password}
                            onChange={e => updateInputData('password', e.target.value)}
                            className="h-[35px] rounded-[5px] pl-[5px] bg-white-100"
                            type="text"
                            placeholder="Ваш пароль" />
                            {inputObjErr.passwordErr !== '' && <span>{inputObjErr.passwordErr}</span>}
                    </div>
                    <button onClick={submitData} className="mt-[50px] bg-black h-[40px] rounded-[7px] text-slate-50">Войти</button>
                </div>
            </div>
        </div>
    );
})

export default IModal;