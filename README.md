# Guarida de Mario

**Proyecto Final - Curso de Desarrollo de Aplicaciones Móviles - Coderhouse**  
**Estudiante:** Francisco Orellana  
**Código del curso:** 83865  

Este proyecto es una aplicación mobile desarrollada con **React Native** usando el entorno **Expo SDK 53**, y representa el trabajo final entregado por el estudiante. Toda la lógica fue implementada desde cero utilizando Redux Toolkit, navegación con React Navigation, y Firebase como backend.

---

## 📁 Organización de Carpetas

El proyecto está organizado en las siguientes carpetas principales dentro de `/src`:

- **/components**: Componentes reutilizables como `CyberText`, `CameraIcon`, etc.
- **/navigation**: Navegación principal, con Tabs y Stacks.
- **/screens**: Contiene todas las vistas o pantallas de la app (`LoginScreen`, `ProfileScreen`, `HomeScreen`, etc.).
- **/services**: Configuración de RTK Query para conexión con Firebase.
- **/store**: Configuración de Redux Toolkit y slices (`userSlice`, etc.).
- **/global**: Constantes globales como paleta de colores (`colors.js`).

├── App.js
├── /assets                # Imágenes, logos y recursos estáticos
├── /components            # Componentes reutilizables (botones, íconos, textos)
├── /constants             # Constantes globales (categorías, colores)
├── /navigation
│   ├── /auth              # Stack para login y registro
│   └── /tabs              # Navegación principal por tabs
├── /screens
│   ├── /auth              # Pantallas de Login y Signup
│   ├── /shop              # Categorías, Productos, Detalles
│   └── /user              # Perfil de usuario
├── /services              # Configuración de APIs: Auth y Firebase (RTK Query)
└── /store
    ├── /slices            # Slices de Redux Toolkit
    └── index.js           # Configuración del store


---

## ⚙️ Tecnologías y Librerías Utilizadas

- [Expo SDK 53](https://docs.expo.dev/versions/latest/)
- [React Navigation](https://reactnavigation.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [Firebase](https://firebase.google.com/) (Authentication + Realtime Database)
- [Expo Image Picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
- [React Native Maps](https://github.com/react-native-maps/react-native-maps)
## 🧭 Tabs de Navegación

- **Inicio**: Página principal con categorías y productos.
- **Perfil**: Permite cambiar imagen de perfil y ver el correo.
- **Carrito**: Próximamente. (Placeholder visible)
- **Categorías**: Explora categorías disponibles.

---

## 🛠️ Instalación y Ejecución

1. Clonar el proyecto:

```bash
git clone https://github.com/tuusuario/guarida-de-mario.git
cd guarida-de-mario
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear archivo `.env` con tus credenciales de Firebase:

```
EXPO_PUBLIC_FB_API_KEY=...
EXPO_PUBLIC_AUTH_URL=https://identitytoolkit.googleapis.com/v1/
EXPO_PUBLIC_RTDB_URL=https://your-project-id.firebaseio.com/
```

4. Ejecutar la aplicación:

```bash
npx expo start
```

---

📲 Probado en Expo Go para Android