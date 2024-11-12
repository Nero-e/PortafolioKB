"use client";
import { useState, FormEvent } from "react";

interface ContactFormProps {
  showNotification: (status: "success" | "error", message: string) => void;
}

export const ContactForm = ({ showNotification }: ContactFormProps) => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          message,
        }),
      });

      if (response.ok) {
        showNotification(
          "success",
          "Te responderé lo más pronto posible."
        );
        setSubject("");
        setMessage("");
      } else {
        showNotification("error", "Hubo un error al enviar el correo.");
      }
    } catch (error) {
      console.error(error);
      showNotification("error", "Error: No se pudo enviar el correo.");
    }
  };

  return (
    <div className="flex flex-col text-center w-full h-full p-8">
      <h1 className="mb-1 text-xl font-satoshi font-medium tracking-wider text-seasalt">
        Contacto
      </h1>
      <p className="text-sm font-satoshiItalic text-flash-white-200 mb-3">
        Envíame un mensaje
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex font-satoshi flex-col text-left max-w-md mx-4 space-y-4 tracking-wider h-full justify-center"
      >
        <input
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          type="text"
          name="subject"
          placeholder="Asunto"
          required
          className="w-full rounded p-2 border-custom bg-night text-seasalt"
        />
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          name="message"
          placeholder="Mensaje"
          required
          className="w-full p-2 rounded border-custom bg-night text-seasalt"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-tekgelet text-white rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
