# Guarida de Mario

**Proyecto Final - Curso de Desarrollo de Aplicaciones Móviles - Coderhouse**  
**Estudiante:** Francisco Orellana  
**Código del curso:** 83865  


Este proyecto es una aplicación mobile desarrollada con **React Native** usando el entorno **Expo SDK 53**, y representa el trabajo final entregado por el estudiante. Toda la lógica fue implementada desde cero utilizando Redux Toolkit, navegación con React Navigation, y Firebase como backend.

🔐 **Nota importante:** Todos los datos sensibles como credenciales de Firebase y rutas definidas en `.env`, así como el usuario y contraseña para pruebas, han sido enviados al docente mediante el chat interno de la plataforma Coderhouse.  
👉 [Tambien puedes hacer clic aquí para descargar la APK de pruebas desde Expo](https://expo.dev/artifacts/eas/ro8C97HKb9BRoRvXZ26S6P.apk)

---

## 📁 Organización de Carpetas

El proyecto está organizado en las siguientes carpetas principales dentro de `/src`:

- **/components**: Componentes reutilizables como `CyberText`, `CameraIcon`, etc.
- **/navigation**: Configuración de navegación principal (`Tabs`, `Stacks`, `AuthStack`).
- **/screens**: Todas las pantallas de la app (`LoginScreen`, `ProfileScreen`, `CategoryScreen`, etc.).
- **/services**: RTK Query configurado para conexión con Firebase (auth y base de datos).
- **/store**: Configuración de Redux Toolkit con sus respectivos slices (`userSlice`, `cartSlice`, `shopSlice`).
- **/global**: Estilos y constantes globales como la paleta de colores (`colors.js`).
- **/db**: Configuración y funciones de persistencia de sesión utilizando **Expo SQLite**.

<!-- ├── App.js
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
    └── index.js           # Configuración del store -->

---

## ⚙️ Tecnologías y Librerías Utilizadas

- [Expo SDK 53](https://docs.expo.dev/versions/latest/)
- [React Navigation](https://reactnavigation.org/) (con Stack y Tabs)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [Firebase](https://firebase.google.com/) (Authentication + Realtime Database)
- [Expo Image Picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/) – galería y cámara
- [Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/) – persistencia de sesión local
- [React Native Maps](https://github.com/react-native-maps/react-native-maps) – ubicación del usuario
- [Feather Icons](https://feathericons.com/) vía `react-native-vector-icons`

---

## 🧭 Tabs de Navegación

- **Inicio**: Página principal con categorías y productos.
- **Perfil**: Permite cambiar imagen de perfil y ver el correo.
- **Carrito**: Próximamente. (Placeholder visible)
- **Categorías**: Explora categorías disponibles.

---

## 🔐 Persistencia de Sesión

La app implementa **SQLite local (con `expo-sqlite`)** para mantener la sesión activa según la preferencia del usuario:

- Al iniciar sesión, se puede activar o desactivar el switch “¿Mantener sesión iniciada?”.
- Si se activa, se guarda `email` y `localId` en SQLite localmente.
- La sesión se recupera automáticamente al reiniciar la app.
- Se puede cerrar sesión con un botón en el header que limpia la base de datos local.

---

## 📸 Manejo de Imágenes

Desde la pestaña **Perfil**, los usuarios pueden:

- Tomar una **foto con la cámara** para actualizar su imagen de perfil.
- O seleccionar una imagen desde la **galería del dispositivo**.
- La imagen se guarda en Firebase Realtime Database y se recupera automáticamente.

---

## 🛠️ Instalación y Ejecución

1. Clonar el proyecto:

```bash
git clone https://github.com/panxo87sl/rnative-83865.git
cd rnative-83865
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

**Para ejecutar la aplicacion hay scripts creados:** 
```bash
npm run android
```
**Tambien puedes ejecutar limpiando el cache de Expo:** 
```bash
npm run androi:clean 
```

5. Para generar un APK: 
```bash
eas build --platform android --profile preview
```
**Nota importante:** Necesitas tener cuenta en Expo Go, inicializar el proyecto y configurar previamente utilizar este comando.

---
🧪  Probado en Expo Go para Android  
📲  Probado APK generado con EAS Build