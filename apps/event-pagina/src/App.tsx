import {useState} from 'react'
import "./assets/fonts/Poppins/Poppins-Medium.ttf";

const timeTable = [
    {
        artist: "David Guetta",
        time: "09:00 - 10:00"
    },
    {
        artist: "David Guetta",
        time: "09:00 - 10:00"
    },
    {
        artist: "David Guetta",
        time: "09:00 - 10:00"
    },
    {
        artist: "David Guetta",
        time: "09:00 - 10:00"
    },
    {
        artist: "David Guetta",
        time: "09:00 - 10:00"
    },
    {
        artist: "David Guetta",
        time: "09:00 - 10:00"
    },
]

function App() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const [toggleRegister, setToggleRegister] = useState(true)

    return (
        <div className={"py-32 bg-neutral-100"}>
            <div className={"container mx-auto grid grid-cols-6 gap-8"}>
                <div className={"bg-white p-12 flex-1 col-span-4 rounded-3xl"}>
                    <div className={"mb-8 max-w-lg"}>
                        <h1 className={"text-7xl tracking-tighter mb-2"}>Vegro Developer Festival 2024</h1>
                        <p className={"text-lg"}>Dit jaar vieren we het uitgebereide succes van Vegro met een festival
                            voor al onze
                            collega's</p>
                    </div>
                    <div className={"gap-4 flex flex-row max-w-lg"}>
                        {toggleRegister ? (
                            <a
                                href={"#"}
                                onClick={() => setToggleRegister(!toggleRegister)}
                                className={"bg-primary p-4 text-white rounded-lg"}
                            >
                                Meld je nu aan
                            </a>
                        ) : (
                            <>
                                <a
                                    href={"#"}
                                    onClick={() => setToggleRegister(!toggleRegister)}
                                    className={"bg-neutral-800 p-4 text-white rounded-lg"}
                                >
                                    X
                                </a>
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
                                <a href={"#"} className={"bg-primary p-4 text-white rounded-lg"}>
                                    Verstuur
                                </a>
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
                                <li>Tijd: 09:00 - 17:00</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className={"text-3xl tracking-wide mb-2"}>Aanmeldingen</h2>
                        <div className={"flex flex-col"}>
                            <span>7 artiesten</span>
                            <span>33 mensen hebben zich aangemeled</span>
                        </div>
                    </div>
                </div>
                <div className={"col-span-full"}>
                    <h2 className={"text-2xl tracking-widest"}>Timetable</h2>
                </div>

                {timeTable.map((item) => (
                    <div className={"col-span-6 flex flex-row justify-between bg-white p-12 rounded-3xl"}>
                        <h3>David guetta</h3>
                        <div>
                            <p>09:00 - 10:00</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App
