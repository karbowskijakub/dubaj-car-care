import Image from 'next/image'; 
import Logo from '@/app/assets/car-care-logo.png'
export default function PrivacyPolicy() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#f9f9f9] p-8 relative"> 
           
            <div className="container max-w-2xl bg-white p-8 rounded-lg shadow-md relative">
                <div className='flex flex-col md:flex-row items-center'>
                <div className="order-2 md:order-1"> 
                        <h1 className="text-left text-xl font-semibold mr-10 text-[#555] mb-6">
                            Polityka Prywatności - DUBAJ CAR CARE
                        </h1>
                    </div>
                    <div className="order-1 md:order-2 mb-4 md:mb-0"> 
                        <Image 
                            width={150}
                            height={150}
                            src={Logo} 
                            alt="Logo DUBAJ CAR CARE" 
                        />
                    </div>
                </div>
                <section>
                    <h2 className="text-xl font-semibold text-[#333] ">1. Administrator danych</h2>
                    <p className="mt-2 text-[#333]">Administratorem Twoich danych osobowych jest Bryan Dubaj.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-[#333] mt-8">2. Zakres i cel przetwarzania danych</h2>
                    <p className="mt-2 text-[#333]">
                        Dane osobowe zebrane za pośrednictwem formularza kontaktowego (imię, numer telefonu, model samochodu) będą przetwarzane wyłącznie w celu:
                    </p>
                    <ul className="list-disc ml-6 mt-2">
                        <li>nawiązania kontaktu i przedstawienia szczegółów dotyczących oferowanych usług detailingowych,</li>
                        <li>odpowiedzi na zapytania związane z oferowanymi usługami.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-[#333] mt-8">3. Podstawa prawna przetwarzania danych</h2>
                    <p className="mt-2 text-[#333]">Przetwarzanie danych odbywa się na podstawie zgody wyrażonej przez osobę wypełniającą formularz kontaktowy, zgodnie z art. 6 ust. 1 lit. a RODO.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-[#333] mt-8">4. Przechowywanie danych</h2>
                    <p className="mt-2 text-[#333]">Twoje dane osobowe będą przechowywane przez okres niezbędny do realizacji celu, dla którego zostały zebrane, lub do momentu cofnięcia zgody na przetwarzanie danych.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-[#333] mt-8">5. Udostępnianie danych</h2>
                    <p className="mt-2 text-[#333]">Twoje dane osobowe nie będą udostępniane żadnym osobom trzecim bez Twojej wyraźnej zgody, chyba że będzie to wymagane przepisami prawa.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-[#333] mt-8">6. Twoje prawa</h2>
                    <p className="mt-2 text-[#333]">Masz prawo do:</p>
                    <ul className="list-disc ml-6 mt-2">
                        <li>dostępu do swoich danych osobowych,</li>
                        <li>sprostowania swoich danych,</li>
                        <li>usunięcia danych („prawo do bycia zapomnianym”),</li>
                        <li>ograniczenia przetwarzania danych,</li>
                        <li>przenoszenia danych,</li>
                        <li>cofnięcia zgody na przetwarzanie danych w dowolnym momencie.</li>
                    </ul>
                    <p className="mt-4 text-[#333]">
                        W celu skorzystania ze swoich praw skontaktuj się ze mną pod adresem e-mail:{" "}
                        <a href="mailto:bryandubaj@gmail.com" className="text-blue-600 hover:underline">bryandubaj@gmail.com</a>
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-[#333] mt-8">7. Zmiany w Polityce Prywatności</h2>
                    <p className="mt-2 text-[#333]">Zastrzegam sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. Aktualna wersja dokumentu będzie dostępna w pliku Google Docs, do którego masz dostęp.</p>
                </section>
            </div>
        </div>
    );
}
