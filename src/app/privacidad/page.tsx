import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad · Canasta Inteligente Chile",
  description: "Política de Privacidad y Tratamiento de Datos de la aplicación móvil y plataforma web Canasta Inteligente conforme a Google Play Console."
};

export default function PrivacidadPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-12 shadow-sm">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al inicio (canastainteligente.cl)</span>
        </Link>

        {/* Header */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-xs uppercase tracking-wider mb-2">
            <Shield className="w-4 h-4" />
            <span>Documento Legal Oficial</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Política de Privacidad
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Última actualización: 4 de noviembre de 2026 · Válida para la aplicación móvil Android y servicios web de Canasta Inteligente.
          </p>
        </div>

        {/* Highlight box */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 sm:p-5 mb-8 text-emerald-950 text-xs sm:text-sm leading-relaxed">
          <strong>Resumen de Compromiso:</strong> En <strong>Canasta Inteligente</strong> creemos firmemente en el derecho a la privacidad. No vendemos tus datos a terceros, no recopilamos información biométrica y utilizamos la cámara de tu dispositivo únicamente de forma local para la lectura óptica de códigos de barras en góndola.
        </div>

        {/* Body content */}
        <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700">
          <section>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
              1. Identificación del Responsable del Tratamiento
            </h2>
            <p>
              El responsable del tratamiento de los datos recabados a través de la aplicación móvil <strong>Canasta Inteligente</strong> y el sitio web <strong>https://canastainteligente.cl</strong> es el equipo de desarrollo de Canasta Inteligente (Santiago de Chile).
            </p>
            <p>
              Para cualquier duda, solicitud o ejercicio de derechos de privacidad, puedes contactarnos directamente a través del correo oficial:{" "}
              <a href="mailto:soporte@canastainteligente.cl" className="text-emerald-700 font-bold underline">
                soporte@canastainteligente.cl
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
              2. Datos que Recopilamos y Finalidad
            </h2>
            <p>
              Nuestra aplicación se basa en el principio de <strong>minimización de datos</strong>. Puedes utilizar el comparador de precios, revisar el catálogo y consultar al Chef IA sin necesidad de registrarte obligatoriamente.
            </p>
            
            <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-4 mb-2">
              2.1. Datos proporcionados voluntariamente por el usuario
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Registro opcional de cuenta:</strong> Si decides crear una cuenta para sincronizar tus canastas entre dispositivos, recopilamos tu dirección de correo electrónico y una contraseña cifrada mediante algoritmos de hash criptográfico (bcrypt).</li>
              <li><strong>Listas de compras y preferencias:</strong> Los artículos agregados a tu canasta y tus selecciones de supermercados preferidos se almacenan para ofrecerte la funcionalidad de comparación multitienda y optimización de 2 cadenas.</li>
            </ul>

            <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-4 mb-2">
              2.2. Permisos del Dispositivo y Uso de la Cámara
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Permiso de Cámara (<code>android.permission.CAMERA</code>):</strong><br />
                La aplicación solicita acceso a la cámara exclusivamente para el funcionamiento del <strong>Escáner de Códigos de Barra (EAN-13 / GS1)</strong>.
                <br />
                <em>Garantía de privacidad:</em> El procesamiento de los fotogramas se realiza en tiempo real y estrictamente en la memoria RAM local del dispositivo. <strong>Canasta Inteligente NO guarda fotografías, NO graba videos, NO realiza reconocimiento facial ni transmite imágenes a servidores remotos</strong>. Al cerrar el visor del escáner, la cámara se libera de inmediato.
              </li>
              <li>
                <strong>Permiso de Acceso a Red (<code>android.permission.INTERNET</code> y <code>ACCESS_NETWORK_STATE</code>):</strong><br />
                Necesario para conectarse a nuestros servidores seguros y descargar las actualizaciones diarias de precios de Líder, Jumbo, Santa Isabel, Tottus, Unimarc y Alvi.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
              3. Proveedores de Servicios y Terceros Confiables
            </h2>
            <p>
              Para garantizar una alta disponibilidad, seguridad y rendimiento, utilizamos los siguientes proveedores de infraestructura tecnológica de clase mundial:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Supabase Inc. / PostgreSQL:</strong> Base de datos segura y servicio de autenticación con cifrado en reposo y en tránsito.</li>
              <li><strong>Cloudflare Inc.:</strong> Red de distribución de contenidos (CDN), mitigación de ataques DDoS y protección SSL/TLS para el dominio canastainteligente.cl.</li>
              <li><strong>Google Play Services:</strong> Plataforma oficial para la distribución segura de la aplicación móvil y recepción de reportes anónimos de fallos del sistema (crash analytics).</li>
            </ul>
            <p>
              Ninguno de estos proveedores tiene autorización para comercializar o utilizar tus datos para fines publicitarios ajenos a Canasta Inteligente.
            </p>
          </section>

          <section id="eliminacion">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
              4. Retención y Eliminación de Datos (Solicitud de Borrado)
            </h2>
            <p>
              Conservamos tus datos únicamente mientras mantengas tu cuenta activa o según sea necesario para prestarte el servicio.
            </p>
            <p>
              <strong>¿Cómo solicitar la eliminación total de tu cuenta y datos?</strong><br />
              En cumplimiento con las políticas de Google Play y la normativa vigente, cualquier usuario puede solicitar el borrado permanente e irreversible de su cuenta y todos los datos asociados en cualquier momento a través de dos mecanismos:
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li><strong>Desde la aplicación:</strong> Ingresando a <em>Perfil → Configuración → Eliminar Cuenta</em>.</li>
              <li><strong>Por correo electrónico:</strong> Enviando un mensaje a <a href="mailto:soporte@canastainteligente.cl" className="text-emerald-700 font-bold underline">soporte@canastainteligente.cl</a> con el asunto <em>&quot;Solicitud de Eliminación de Cuenta&quot;</em> indicando el correo electrónico con el que te registraste. Procesaremos la solicitud y eliminaremos todos tus registros en un plazo máximo de 48 horas hábiles.</li>
            </ol>
          </section>

          <section id="seguridad">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
              5. Seguridad de la Información
            </h2>
            <p>
              Implementamos medidas técnicas y organizativas rigurosas para proteger tu información contra acceso no autorizado, pérdida o alteración:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Todas las comunicaciones entre la aplicación y nuestros servidores viajan mediante canales cifrados utilizando el protocolo <strong>HTTPS / TLS 1.3</strong>.</li>
              <li>Las contraseñas nunca se almacenan en texto plano.</li>
              <li>El acceso a las bases de datos de producción está restringido y monitoreado con autenticación multifactor (MFA).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
              6. Menores de Edad
            </h2>
            <p>
              Nuestros servicios están dirigidos al público general y a consumidores que realizan compras de supermercado. No recopilamos conscientemente información personal de niños menores de 13 años. Si tomamos conocimiento de que un menor de 13 años nos ha proporcionado información personal, procederemos a eliminarla de inmediato.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
              7. Contacto
            </h2>
            <p>
              Si tienes preguntas o inquietudes sobre esta Política de Privacidad, puedes escribirnos a:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Correo de soporte:</strong> <a href="mailto:soporte@canastainteligente.cl" className="text-emerald-700 font-bold">soporte@canastainteligente.cl</a></li>
              <li><strong>Contacto general:</strong> <a href="mailto:contacto@canastainteligente.cl" className="text-emerald-700 font-bold">contacto@canastainteligente.cl</a></li>
              <li><strong>Sitio Web Oficial:</strong> <a href="https://canastainteligente.cl" className="text-emerald-700 font-bold">https://canastainteligente.cl</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
