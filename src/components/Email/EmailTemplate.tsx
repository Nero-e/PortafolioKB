/* eslint-disable @next/next/no-img-element */
interface EmailTemplateProps {
  message: string;
}

export const EmailTemplate = ({ message }: EmailTemplateProps) => {
  return (
    <table
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#F5F5F4", // Fondo general
      }}
    >
      {/* <tr>
        <td style={{ textAlign: "center", paddingBottom: "20px" }}>
          <a
            href="https://portfolio-v2-nine-phi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/cubsm.png"
              alt="imagen"
              style={{
                width: "64px",
                height: "64px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </a>
        </td>
      </tr> */}
      <tr>
        <td style={{ paddingBottom: "20px", textAlign: "center" }}>
          <div
            style={{
              color: "#1F2937", // Título color oscuro
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            Hola, Kevin
          </div>
          <p
            style={{
              color: "#1F2937",
              fontSize: "16px",
              lineHeight: "1.5",
              margin: "16px 0 0 0",
            }}
          >
            Alguien ha enviado un mensaje desde el{" "}
            <span style={{ fontWeight: "600", color: "#FF2058" }}>
              @portafolio
            </span>
            .
          </p>
        </td>
      </tr>
      <tr>
        <td style={{ paddingBottom: "20px", textAlign: "left" }}>
          <div
            style={{
              color: "#1F2937",
              fontSize: "18px",
              fontWeight: "700",
              marginBottom: "8px",
            }}
          >
            Mensaje
          </div>
          <p style={{ color: "#4B5563", fontSize: "16px", lineHeight: "1.5" }}>
            {message}
          </p>
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: "center", paddingTop: "20px" }}>
          <p
            style={{
              color: "#6B7280",
              fontSize: "14px",
              lineHeight: "1.5",
              margin: "8px 0",
            }}
          >
            Este Email fue enviado por{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#FF2058", textDecoration: "underline" }}
            >
              <span style={{ fontWeight: "600", color: "#FF2058" }}>
                Resend
              </span>
            </a>
          </p>
          <p style={{ color: "#6B7280", fontSize: "14px" }}>
            {"<onboarding@resend.dev>"}
          </p>
        </td>
      </tr>
    </table>
  );
};

export default EmailTemplate;
