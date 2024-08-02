export default function Footer() {
    const today = new Date()
    return (
        <footer>
            <div className='w-fit flex mx-auto gap-20 flex-col lg:flex-row'>
                <section className='flex-[2] pr-10'>
                    <div className='w-[76px] h-[76px]'>
                        <img src='/Logo-AAUPE.jpg' alt='' className='w-full' />
                    </div>
                    <div className='text-left text-2xl'>
                        Association d’Appui à <br />l’Unité de Protection<br /> de l’Enfance à Casablanca
                    </div>
                </section>
                <section>
                    <div className='font-semibold text-xl uppercase text-left'>
                        A Propos de nous
                    </div>
                    <div>
                        <ul className='text-left'>
                            <li><a href='' className='text-gray-800'>Qui nous sommes</a></li>
                            <li><a href='' className='text-gray-800'>Notre Mission</a></li>
                            <li><a href='' className='text-gray-800'>Notre Engagement</a></li>
                            <li><a href='' className='text-gray-800'>Notre Équipe</a></li>
                            <li><a href='' className='text-gray-800'>Nos Programmes</a></li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className='font-semibold text-xl uppercase text-left'>
                        Nous Contacter
                    </div>
                    <div>
                        <ul className='text-left'>
                            <li><a href='' className='text-gray-800'>info@aaupe.org.ma</a></li>
                            <li><a href='' className='text-gray-800'>Notre Mission</a></li>
                            <li><a href='' className='text-gray-800'>Notre Engagement</a></li>
                            <li><a href='' className='text-gray-800'>Notre Équipe</a></li>
                            <li><a href='' className='text-gray-800'>Nos Programmes</a></li>
                        </ul>
                    </div>
                </section>
                <section></section>
            </div>
            &copy; {today.getFullYear()} AAUPE. Tous droits Reservés.
        </footer>
    )
}