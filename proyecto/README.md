# 🌾 Bechyss - Landing Page Premium Light Luxury

Este es el proyecto completo de la Landing Page Premium para **Bechyss**, una panadería artesanal de masa madre ubicada en Tibás, San José, Costa Rica.

El sitio web está diseñado con una estética **"Light Bakery Luxury"** en modo claro invertido, utilizando como fondo el color **Rosa (`#F29AAE`)**, elementos y tarjetas en **Blanco** pulcro y textos y detalles de acento contrastados en **Café / Chocolate (`#4D3422`)**, evocando la frescura, delicadeza y elegancia de la repostería artesanal.

---

## 🎨 Sistema de Diseño

* **Color de Acento:** Café / Chocolate (`#4D3422`)
* **Fondos:**
  - Rosa Pastel (`#F29AAE`) para el fondo principal.
  - Rosa Medio (`#EA91A5`) para secciones secundarias.
  - Blanco Puro (`#FFFFFF`) para tarjetas y elementos interactivos.
* **Tipografías (Google Fonts):**
  - **Títulos:** `Plus Jakarta Sans` (peso 700 y 800) para un aspecto moderno y limpio.
  - **Cuerpo:** `Inter` (peso 400 y 500) para alta legibilidad.
  - **Monospace:** `JetBrains Mono` (para detalles de ingredientes).

---

## 📸 Fotos Reales del PDF Integradas

A diferencia de las plantillas genéricas, esta web utiliza las **fotos reales extraídas del PDF original de la marca** para mantener una total fidelidad al producto real:

1. **Logo de la Marca (`images/logo_circle.png`):** Versión circular transparente y de alta definición procesada a partir de la portada del catálogo.
2. **Visual Hero (`images/hero_visual.jpg`):** Imagen de la canasta rústica con panes recién horneados en el inicio.
3. **Catálogo de Sabores (Flip Cards):**
   - `pan_matcha.jpg` (Matcha y Chocolate Blanco)
   - `pan_chocolate.jpg` (Chocolate)
   - `pan_queso_hierbas.jpg` (Queso y Hierbas Italianas)
   - `pan_arandanos.jpg` (Arándanos y Semillas)
   - `pan_datiles_nuez.jpg` (Dátiles y Nuez de Nogal)
   - `pan_calabaza.jpg` (Calabaza)
4. **Otros Sabores (Sección Tradicional):**
   - `pan_blanco.jpg` (Pan Blanco Clásico)
   - `pan_paprika.jpg` (Páprika y Chile Dulce)
   - `pan_integral.jpg` (Integral de Semillas)
   - `pan_presentacion.jpg` (Queso Cheddar y Jalapeño / Panes de molde en el horno)
5. **Sobre Nosotros y Tostadas (`images/about_image.jpg`):** Tostada de pan de chocolate con mantequilla de maní y café.

---

## ✨ Características y Efectos Especiales

* **Flip Cards en 3D:** Tarjetas interactivas en la sección de Sabores. Al hacer hover en escritorio o tap en móvil, la tarjeta gira en un plano tridimensional para mostrar ingredientes, precio y un botón de orden por WhatsApp.
* **Sistema de Partículas:** Partículas flotantes en tonos palo rosa en el fondo que simulan motas de harina o sutiles destellos decorativos, controladas por rendimiento (menos partículas en móvil).
* **Guía de Conservación Interactiva:** Pestañas animadas para navegar por las instrucciones de almacenamiento (Ambiente, Refrigerado, Congelado) con consejos de regeneración del pan.
* **Métricas Animadas:** Contadores dinámicos que se incrementan automáticamente de `0` al valor real (48 horas, 75% hidratación, etc.) mediante un `IntersectionObserver` al aparecer en pantalla.
* **Glow & Glassmorphism:** Uso intensivo de desenfoque de fondo y sombras de luz palo rosa en textos y botones para lograr un look sumamente moderno y sofisticado.
* **Redirección a WhatsApp:** Todos los botones de orden abren automáticamente un chat de WhatsApp con un mensaje personalizado pre-llenado indicando el producto de interés a **Elizabeth Rodríguez (8608-4667)**.

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

No se requiere ningún framework ni instalación de dependencias para visualizar el sitio, ya que está construido utilizando estándares web puros (HTML5, CSS3, JS Vanilla):

1. **Abrir directamente:**
   Solo haz doble clic sobre el archivo `proyecto/index.html` en tu navegador.
   
2. **Ejecutar un Servidor Local (Recomendado):**
   Si utilizas VS Code, te recomendamos la extensión **Live Server** para ver los cambios y efectos de forma óptima en tiempo real.
   También puedes usar cualquier servidor HTTP simple, por ejemplo con Python:
   ```bash
   # Dentro de la carpeta 'proyecto/'
   python -m http.server 8000
   ```
   Y abrir `http://localhost:8000` en tu navegador.
