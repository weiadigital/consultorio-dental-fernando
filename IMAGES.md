# Documentación de Imágenes — Consultorio Dental Dr. Fernando Hernández

> Última actualización: 28 marzo 2026
> Todas las imágenes son PNG de alta resolución (7.2 MB promedio)
> Próxima optimización: Convertir a WebP para producción

---

## Inventario de imágenes

### 1. **hero.png** (6.9 MB)
- **Ubicación:** `/public/images/hero.png`
- **Uso:** Hero section — imagen principal del consultorio
- **Descripción:** Consultorio dental moderno con equipamiento de última generación
- **Dimensiones:** 1920x1080 (aprox.)
- **Alt text:** "Consultorio dental moderno con equipamiento de última generación"
- **Componente:** `HeroSplit` (lado derecho)

### 2. **equipo.png** (7.7 MB)
- **Ubicación:** `/public/images/equipo.png`
- **Uso:** Sección de credibilidad / equipo profesional
- **Descripción:** Dr. Fernando Hernández y su equipo de odontólogos
- **Dimensiones:** 1920x1080 (aprox.)
- **Alt text:** "Equipo profesional de odontólogos del consultorio"
- **Componente:** Potencial para sección de "Nuestro equipo"

### 3. **familia.png** (7.6 MB)
- **Ubicación:** `/public/images/familia.png`
- **Uso:** Testimonial visual / sección de familias
- **Descripción:** Familia sonriendo después de tratamiento dental
- **Dimensiones:** 1920x1080 (aprox.)
- **Alt text:** "Familia sonriendo mostrando resultados de tratamiento dental"
- **Componente:** Potencial para sección de testimonios

### 4. **servicio-blanqueamiento.png** (7.3 MB)
- **Ubicación:** `/public/images/servicio-blanqueamiento.png`
- **Uso:** Ilustración de servicio de blanqueamiento
- **Descripción:** Proceso de blanqueamiento dental profesional
- **Dimensiones:** 1920x1080 (aprox.)
- **Alt text:** "Proceso de blanqueamiento dental profesional"
- **Componente:** Sección de servicios (ServiciosList)

### 5. **servicio-ortodoncia.png** (6.9 MB)
- **Ubicación:** `/public/images/servicio-ortodoncia.png`
- **Uso:** Ilustración de servicio de ortodoncia
- **Descripción:** Brackets metálicos y cerámica — opciones de ortodoncia
- **Dimensiones:** 1920x1080 (aprox.)
- **Alt text:** "Opciones de ortodoncia: brackets metálicos y cerámica"
- **Componente:** Sección de servicios (ServiciosList)

### 6. **contacto.png** (7.2 MB)
- **Ubicación:** `/public/images/contacto.png`
- **Uso:** Sección de contacto / CTA
- **Descripción:** Consultorio listo para recibir pacientes
- **Dimensiones:** 1920x1080 (aprox.)
- **Alt text:** "Consultorio dental listo para tu cita"
- **Componente:** ContactoFormulario o sección final

---

## Notas técnicas

### Optimización pendiente
Las imágenes actuales son PNG de alta resolución (44 MB totales). Para producción:
1. Convertir a **WebP** con calidad 80 → ~5-8 MB totales
2. Generar **srcset** para responsive:
   - Mobile: 640px
   - Tablet: 1024px
   - Desktop: 1920px

### Comando de optimización (cuando sea necesario)
```bash
# Convertir PNG a WebP
ffmpeg -i hero.png -c:v libwebp -q:v 80 -preset 6 hero.webp

# O usar ImageMagick
convert hero.png -quality 80 hero.webp
```

### Integración en componentes
Todas las imágenes usan la ruta `/images/[nombre].png` en los componentes Astro.

---

## Cambios futuros

- [ ] Optimizar a WebP antes de deploy a producción
- [ ] Generar versiones responsive (640px, 1024px, 1920px)
- [ ] Agregar lazy loading en componentes
- [ ] Considerar CDN para servir imágenes (Cloudflare Images, Vercel Blob)
