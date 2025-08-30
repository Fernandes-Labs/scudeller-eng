import { ContactForm } from "@/components/forms/ContactForm";
import {IconButton} from "@/components/IconButton";

export default function Contato() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <p className="text-center text-xl lg:text-3xl">Vamos conversar sobre o seu projeto?</p>
                <p className="text-center text-xl lg:text-3xl">Preencha o formulário e entraremos em contato.</p>
            </div>
            <ContactForm />
            <div className="flex flex-col lg:flex-row justify-center py-4 gap-4 lg:gap-10 mx-auto">
                <IconButton cssBlock="bg-blue hover:bg-gray-dark" emoji="📞" text="Telefone" />
                <IconButton cssBlock="bg-blue hover:bg-gray-dark" emoji="✉️" text="E-mail" />
                <IconButton cssBlock="bg-blue hover:bg-gray-dark" emoji="💚" text="WhatsApp" />
            </div>
        </div>
    )
}