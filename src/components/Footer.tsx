import { observer } from "mobx-react-lite";


export const Footer = observer(() => {
    return (
        <footer className="mt-[40px]">
            <hr className="bg-slate-300 text-gray-200 h-[1px] w-full" />
            <div className="flex w-[1440px] mx-auto mt-[50px] mb-[50px] justify-between">
                <h1 className="tracking-[4px] font-black text-[25px] text-slate-500">АНИМЕ ОНЛАЙН</h1>
                <span className="text-slate-400 text-[12px]">Copyright © 2023-2024 fan site anixart.net. Не является официальным сайтом.</span>
                <div className="flex flex-col">
                    <div>
                        <button className="mr-[10px]">Политика конфиденциальности</button>
                        <button>Пользовательское соглашение</button>
                    </div>
                    <button className="mt-[15px] flex justify-end">Правообладателям</button>
                </div>
            </div>
        </footer>
    );
})