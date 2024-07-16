export interface TimeTableItem {
    artist: string
    desc: string
    time: string
    imgSrc: string
}

export const timeTable: TimeTableItem[] = [
    {
        artist: "Inloop",
        desc: "Koffie en thee",
        time: "12:00 - 13:00",
        imgSrc: "/public/coffee.jpg"
    },
    {
        artist: "Adam Wathan",
        desc: "Maker van TailwindCSS",
        time: "13:00 - 14:00",
        imgSrc: "/public/tailwind.png"
    },
    {
        artist: "Tanner Linsley",
        desc: "Maker van React Query",
        time: "14:00 - 15:00",
        imgSrc: "/public/react-query.jpg"
    },
    {
        artist: "Yonatan Sompolinsky",
        desc: "Maker van Kaspa",
        time: "15:00 - 16:00",
        imgSrc: "/public/kaspa.jpg"
    },
    {
        artist: "Vegro Awards 2024",
        desc: "Uitreiking van de Vegro Awards",
        time: "16:00 - 16:30",
        imgSrc: "/public/awards.jpg"
    },
    {
        artist: "Slot met Reinier zonneveld B2B Dj Paul Elstak",
        desc: "DJ's van het jaar",
        time: "16:30 - 01:00",
        imgSrc: "/public/dj.jpg"
    },
]