# 🎬 Stranger Things Season 5 Countdown

Una aplicación web interactiva creada con Next.js para contar los días hasta el estreno de la temporada final de Stranger Things. Incluye un contador regresivo dinámico, galería de videos oficiales y una trivia interactiva sobre la serie.

![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat&logo=tailwind-css)

## ✨ Características

- **⏱️ Contador Regresivo**: Cuenta atrás en tiempo real hasta el estreno de Stranger Things 5
- **🎥 Galería de Videos**: Reproducción de trailers y contenido oficial de Netflix
- **🎮 Trivia Interactiva**: Pon a prueba tus conocimientos sobre Stranger Things con preguntas y respuestas
- **🎊 Efectos Especiales**: Animaciones con confetti para celebrar respuestas correctas
- **📱 Responsive Design**: Experiencia optimizada para dispositivos móviles y desktop
- **🎨 Tema Oscuro**: Diseño inspirado en la estética de Stranger Things

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) con App Router
- **UI Library**: [React 19](https://react.dev/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Animaciones**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Utilidades**: clsx para manejo de clases CSS

## 📁 Estructura del Proyecto

```
stranger-things-countdown/
├── _components/          # Componentes reutilizables
│   ├── footer/          # Componente de pie de página
│   ├── gallery/         # Galería de videos
│   ├── hero/            # Contador principal
│   ├── navbar/          # Barra de navegación
│   ├── trivia/          # Componente de trivia
│   └── ui/              # Componentes UI base
├── app/                 # App Router de Next.js
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página de inicio
│   └── globals.css      # Estilos globales
├── data/                # Data estática
│   ├── questions.ts     # Preguntas de la trivia
│   └── videos.ts        # Videos de la galería
├── store/               # Zustand store
├── types/               # Definiciones de TypeScript
└── public/              # Archivos estáticos
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 20.x o superior
- npm, yarn, pnpm o bun

### Clonar el Repositorio

```bash
git clone https://github.com/FedeCodeLab/stranger-things-countdown.git
cd stranger-things-countdown
```

### Instalar Dependencias

```bash
npm install
# o
yarn install
# o
pnpm install
# o
bun install
```

### Modo Desarrollo

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

### Build de Producción

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 🎯 Componentes Principales

### Countdown
Muestra el tiempo restante hasta el estreno de Stranger Things 5 en días, horas, minutos y segundos.

### Gallery
Presenta una colección de videos oficiales de Netflix sobre la temporada 5, con reproductor embebido de YouTube.

### Trivia
Sistema de preguntas y respuestas sobre Stranger Things con:
- Progreso visual
- Feedback instantáneo
- Sistema de puntuación
- Efectos de confetti para respuestas correctas

## 🎨 Personalización

### Modificar la Fecha del Estreno
Edita el componente de Countdown en `_components/hero/` para ajustar la fecha objetivo.

### Agregar Videos
Actualiza el archivo `data/videos.ts`:

```typescript
export const videos = [
  {
    id: 1,
    title: "Título del Video",
    src: "https://www.youtube.com/embed/VIDEO_ID",
    description: "Descripción del video",
  },
];
```

### Agregar Preguntas de Trivia
Modifica `data/questions.ts` siguiendo la estructura existente.

## 📦 Dependencias Principales

```json
{
  "next": "16.0.1",
  "react": "19.2.0",
  "zustand": "^5.0.8",
  "tailwindcss": "^4",
  "canvas-confetti": "^1.9.4",
  "typescript": "^5"
}
```

## 🌐 Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/FedeCodeLab/stranger-things-countdown)

La forma más sencilla de deployar esta aplicación es usando [Vercel](https://vercel.com):

1. Importa tu repositorio en Vercel
2. Configura las variables de entorno si es necesario
3. Deploy automático en cada push a main

### Otras Plataformas

Esta aplicación Next.js puede ser deployada en cualquier plataforma que soporte Node.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

**Federico Pablo Guzmán** - [@FedeCodeLab](https://github.com/FedeCodeLab)

## 🙏 Agradecimientos

- Netflix por crear Stranger Things
- Duffer Brothers por la increíble historia
- La comunidad de Next.js y React

---

⭐ Si te gustó este proyecto, no olvides darle una estrella en GitHub!

🎬 Hecho con ❤️ para los fans de Stranger Things
