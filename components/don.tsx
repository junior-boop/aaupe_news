import { RiArrowRightLine } from "./icons"

export default function DonElement() {
    return (
        <section className="py-12 lg:py-32">
            <div className="max-w-[1280px] mx-auto lg:flex items-start gap-6 px-6 lg:px-0">
                <div className="w-full lg:w-[50%] aspect-square bg-slate-300 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/story.webp')" }}></div>
                <div className="flex-1">
                    <div className="text-3xl lg:text-5xl lg:px-6 py-6 font-judson font-bold ">
                        Devenez un acteur du changement en soutenant notre association
                    </div>
                    <div className="lg:px-6 mb-6">
                        Parce que votre générosité change des vies, faites un don à l’Association d’Appui à l’Unité de Protection de l’Enfance à Casablanca et contribuez à un monde meilleur !
                    </div>
                    <form action="">
                        <div className="lg:px-6 flex  lg:items-center gap-4 flex-col lg:flex-row mb-4 flex-wrap">
                            <Radio name="don" value="200" label="200dhm" />
                            <Radio name="don" value="400" label="400dhm" />
                            <Radio name="don" value="600" label="600dhm" />
                            <Radio name="don" value="1000" label="1000dhm" />
                        </div>
                        <div className="lg:px-6 mb-4">
                            <input type="text" name="don" className="border w-full px-4 py-2 text-lg rounded-full" placeholder="Ou entré un autre montant" />
                        </div>
                        <div className="lg:px-6">
                            <button className="px-6 py-2 bg-yellow-400 text-orange-900 font-bold rounded-full flex items-center gap-4">Soumettre <RiArrowRightLine className="h-6 w-6" /></button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}


interface RadioProp {
    name: string,
    value: string,
    label: string,
}

function Radio({ name, value, label }: RadioProp) {
    return (
        <div className="radio">
            <input type="radio" name={name} value={value} className="input-radio" />
            <label htmlFor={name} className="label-radio">{label}</label>
        </div>
    )
}