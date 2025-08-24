'use client';

import { Button } from "@/components/Button";
import { useState } from "react";
import { InputForm } from "@/components/forms/InputForm";
// import {leadService} from "@/services/leadService";
// import {ComponentIds} from "@/enums/component-ids";

interface FormErrors {
    [key: string]: string;
}

export function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const subjects = [
        'Adoção Responsável',
        'Clínica',
        'Voluntariado',
        'Apadrinhamento',
        'Doação',
        'Outros'
    ];

    const validateForm = () => {
        const newErrors: FormErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Nome é obrigatório';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'E-mail é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'E-mail inválido';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Telefone é obrigatório';
        } else if (!/^\(\d{2}\)\d{5}-\d{4}$/.test(formData.phone)) {
            newErrors.phone = 'Formato: (99)99999-9999';
        }

        if (!formData.subject) {
            newErrors.subject = 'Assunto é obrigatório';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Mensagem é obrigatória';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);

        try {
            // await leadService.sendEmail(formData as Lead);

            setIsSuccess(true);
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error(error);
            setErrors({ submit: 'Erro ao enviar mensagem. Tente novamente.' });
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center">
                <h3 className="text-2xl font-bold text-green-600 mb-4">✅ Mensagem enviada com sucesso!</h3>
                <p className="text-gray-600 mb-6">Agradecemos seu contato. Responderemos em breve!</p>
                <Button
                    // id={ComponentIds.BUTTON_CONTACT_NEW}
                    id="button-form-id"
                    text="Enviar nova mensagem"
                    onClick={() => setIsSuccess(false)}
                    cssBlock="bg-blue"
                />
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col text-dark-gray rounded-xl shadow-lg p-12 w-full max-w-2xl mx-auto py-8 space-y-4">
            <div className="flex flex-col lg:flex-row justify-center lg:gap-4 mb-6">
                <p className="text-2xl font-bold text-center">📬</p>
                <h3 className="text-2xl font-bold text-center">Envie uma Mensagem</h3>
            </div>

            <div className="flex flex-col gap-6">
                <InputForm
                    type="text"
                    name="fullName"
                    placeholder="Nome completo"
                    value={formData.fullName}
                    onChange={handleChange}
                    error={errors.fullName}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputForm
                        type="tel"
                        name="phone"
                        placeholder="Telefone"
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                    />
                    <InputForm
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                    />
                </div>

                <InputForm
                    name="subject"
                    type="select"
                    placeholder="Selecione o assunto"
                    value={formData.subject}
                    onChange={handleChange}
                    options={subjects}
                    error={errors.subject}
                />

                <InputForm
                    type="textarea"
                    name="message"
                    placeholder="Sua mensagem"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                />
            </div>

            <Button
                // id={ComponentIds.BUTTON_CONTACT_ID}
                id="button-id"
                submitForm
                text={isLoading ? "Enviando..." : "Enviar mensagem"}
                cssBlock={`w-full py-3 rounded-xl font-semibold transition ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isLoading}
            />

            {errors.submit && (
                <p className="text-red-500 text-center mt-4">{errors.submit}</p>
            )}
        </form>
    );
}