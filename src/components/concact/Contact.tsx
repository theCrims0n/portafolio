'use client'
import { SendEmail } from "@/actions/email/email"
import { Input } from "../ui/input/Input"
import { InputArea } from "../ui/input/InputArea"
import { useForm } from 'react-hook-form'
import { Spinner } from "../spinner/Spinner"
import { redirect } from 'next/navigation';
import validateEmail from "@/helper/validator"
import { useState } from "react"
import useTranslation from "@/hooks/use-translation"

export const Contact = () => {

    const { t } = useTranslation()
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors, isSubmitting, }, resetField, setError } = useForm()

    const onSend = async (data: any) => {
        setIsLoading(true)
        const { email, message, subject } = data

        const isValidEmail = validateEmail(email)
        if (!isValidEmail) {
            setError('email', { type: 'pattern', message: 'Formato de correo invalido.' })
            return
        }
        SendEmail({ email, message, subject }).then(() => {
            resetField('email')
            resetField('message')
            resetField('subject')
            setIsLoading(false)
            redirect('#presentation');
        })
    }

    return (
        <div className="flex flex-col space-y-2 md:min-h-[75svh] fade-in fadeInUp" id='contact'>
            <div className="flex justify-center items-center mb-6">
                <h1 className="font-bold md:text-[50px] text-sm fade-in pl-4 ">{t('contact.contact')}</h1>
            </div>
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit(onSend)} className="flex flex-col p-8 w-full h-full md:w-[800px] box-shadow-card gap-6">
                    <div className="flex flex-col justify-center items-start space-y-2">
                        <label className='text-sm' htmlFor="email">Email</label>
                        <Input
                            disabled={isLoading}
                            className={errors.email ? "border-red-500" : ''}
                            {...register('email', { required: 'Correo requerido' })}
                        />
                        {errors.email && <span className="text-xs text-orange-600 w-full">{t('contact.emailrequired')}</span>}
                    </div>
                    <div className="flex flex-col justify-center items-start space-y-2">
                        <label className='text-sm' htmlFor="subject">{t('contact.subject')}</label>
                        <Input
                            disabled={isLoading}
                            placeholder={t('contact.subject') + '...'}
                            {...register('subject')}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start space-y-2 h-full">
                        <label className='text-sm' htmlFor="message">{t('contact.message')}</label>
                        <InputArea
                            placeholder={t('contact.messagedesc') + '...'}
                            disabled={isLoading}
                            className={errors.message ? "border-red-500" : ''}
                            maxLength={500}
                            {...register('message', { required: 'Mensaje requerido' })}
                        />
                        {errors.message && <span className="text-xs mt-2 text-orange-600 w-full">{t('contact.messagerequired')}</span>}
                    </div>
                    {errors.smtp && <span className="text-xs mt-2 text-orange-600 w-full">Error con SMTP</span>}
                    <button disabled={isLoading} className="btn-primary">{isLoading ? <Spinner size={20} /> : t('contact.send')}</button>
                </form>
            </div>
        </div>
    )

}