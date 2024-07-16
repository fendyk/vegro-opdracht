import {useState} from 'react'
import "./assets/fonts/Poppins/Poppins-Medium.ttf";
import {useMutation} from "react-query";
import register from "./api/register.ts";
import {timeTable} from "./data.ts";

function App() {

    // Mutations
    const registerMutation = useMutation('registrations', register)

    // State
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const [toggleRegister, setToggleRegister] = useState(true)

    return (
        <div className={"py-32 bg-neutral-100"}>
            <div className={"container mx-auto grid grid-cols-6 gap-8"}>
                <div className={"bg-white p-12 flex-1 col-span-4 rounded-3xl"}>
                    <div className={"mb-8 max-w-lg"}>
                        <h1 className={"text-7xl tracking-tighter mb-2 font-bold"}>Vegro Developer Festival 2024</h1>
                        <p className={"text-lg"}>Dit jaar vieren we het uitgebereide succes van Vegro met een festival
                            voor al onze
                            collega's</p>
                    </div>
                    <div className={"gap-4 flex flex-row max-w-lg"}>
                        {toggleRegister ? (
                            <div
                                onClick={() => setToggleRegister(!toggleRegister)}
                                className={"bg-primary p-4 text-white rounded-lg cursor-pointer"}
                            >
                                Meld je nu aan
                            </div>
                        ) : (
                            <>
                                <div
                                    onClick={() => setToggleRegister(!toggleRegister)}
                                    className={"bg-neutral-800 cursor-pointer p-4 text-white rounded-lg"}
                                >
                                    X
                                </div>
                                <input
                                    className={"bg-neutral-200 p-4 rounded-lg"}
                                    placeholder={"Volledige naam?"}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    className={"bg-neutral-200 p-4 flex-1 rounded-lg"}
                                    placeholder={"Email adress?"}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div
                                    className={"bg-primary p-4 text-white rounded-lg cursor-pointer"}
                                    onClick={() => registerMutation.mutate({name, email})}
                                >
                                    Verstuur
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className={"col-span-2 bg-white gap-4 flex flex-col justify-between p-12 rounded-3xl"}>
                    <div>
                        <h2 className={"text-3xl tracking-wide mb-2"}>Informatie</h2>
                        <div>
                            <ul className={"text-lg"}>
                                <li>Locatie: Vegro HQ</li>
                                <li>Datum: 17 Juli 2024</li>
                                <li>Tijd: 12:00 - 01:00</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className={"text-3xl tracking-wide mb-2"}>Aanmeldingen</h2>
                        <span><b>33</b> mensen hebben zich aangemeled</span>
                    </div>
                </div>
                <div className={"col-span-full"}>
                    <h2 className={"text-2xl tracking-widest"}>Timetable</h2>
                </div>

                {timeTable.map((item) => (
                    <div className={"col-span-6 grid grid-cols-6 gap-8 items-center pr-12 bg-white rounded-3xl"}>
                        <div className={"col-span-2"}>
                            <img src={item.imgSrc} className={"h-64 w-full object-cover rounded-3xl"}/>
                        </div>
                        <div className={"col-span-3"}>
                            <h3 className={"text-2xl font-bold"}>{item.artist}</h3>
                            <p className={"text-neutral-600"}>{item.desc}</p>
                        </div>
                        <div className={"col-span-1 text-right"}>
                            <span className={"text-lg"}>{item.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App
