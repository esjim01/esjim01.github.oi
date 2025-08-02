
function downloadPDF() {
    const element = document.querySelector('.container-lg');// Selecciona el elemento que se va a convertir en PDF

    const opt = {
        margin: [0, 0, 0 , 0],  // [arriba, izquierda, abajo, derecha] en mm
        filename: 'Curriculum_vitae_Stiven_jimenez.pdf', // Nombre del archivo
        image: { type: 'jpeg', quality: 0.98 }, // Configuración de la imagen
        html2canvas: { // Configuración de html2canvas
            scale: 2,// Escala de la imagen
            useCORS: true,// Permitir CORS para imágenes
            allowTaint: false,// No permitir contaminación de imágenes
            scrollY: 0 // Evitar el desplazamiento vertical
        },
        jsPDF: {
            unit: 'mm', // Unidad de medida
            format: 'a4', // Formato del PDF
            orientation: 'portrait'// Orientación del PDF
        }
    };

    html2pdf().set(opt).from(element).save(); // Iniciar la descarga del PDF
}
