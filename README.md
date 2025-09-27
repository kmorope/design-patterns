# Design Patterns Exercises

Este proyecto contiene una colección de ejercicios de patrones de diseño con un menú interactivo que permite seleccionar y ejecutar cada ejercicio de manera sencilla.

## 🎯 Ejercicios Incluidos

### 1. Builder Pattern (Ejercicio 1)
**Patrón:** Builder  
**Descripción:** Construcción de automóviles personalizados  
**Problema:** Crear objetos complejos con múltiples configuraciones opcionales sin usar constructores telescópicos.

### 2. Bridge Pattern (Ejercicio 2)
**Patrón:** Bridge  
**Descripción:** Sistema de notificaciones multiplataforma  
**Problema:** Separar la abstracción de notificaciones de su implementación específica por plataforma.

### 3. Mediator Pattern (Ejercicio 3)
**Patrón:** Mediator  
**Descripción:** Sistema de chat grupal  
**Problema:** Gestionar comunicación entre objetos sin que tengan referencias directas entre sí.

## 🚀 Cómo ejecutar

### Opción 1: Usando npm (Recomendado)
```bash
npm start
```

### Opción 2: Usando el script runner
```bash
node run.js
```

### Opción 3: Compilar y ejecutar manualmente
```bash
npm run build
node dist/index.js
```

## ✨ Características del Menú

- 🔨 **Construcción automática**: Compila todos los ejercicios automáticamente al iniciar
- 🎨 **Interfaz visual**: Menú colorido y fácil de usar con chalk
- 📋 **Selección interactiva**: Usa inquirer para navegación intuitiva
- 🔄 **Ejecución en bucle**: Permite ejecutar múltiples ejercicios sin reiniciar
- ✅ **Manejo de errores**: Reporta problemas de construcción o ejecución

## 📦 Dependencias

### Producción
- `chalk`: Para colores y formato en la consola
- `inquirer`: Para menús interactivos

### Desarrollo
- `typescript`: Compilador de TypeScript
- `@types/inquirer`: Tipos para inquirer
- `@types/node`: Tipos para Node.js

## 🛠️ Scripts Disponibles

- `npm start`: Construye y ejecuta el menú interactivo
- `npm run build`: Construye todos los ejercicios y compila el menú
- `npm run build:all`: Solo construye los ejercicios individuales
- `npm run dev`: Compila solo el menú y lo ejecuta (sin construir ejercicios)

## 📁 Estructura del Proyecto

```
design-patterns/
├── package.json           # Configuración principal
├── tsconfig.json         # Configuración TypeScript
├── run.js               # Script runner alternativo
├── src/
│   └── index.ts         # Menú interactivo principal
├── exercise1/           # Builder Pattern
├── exercise2/           # Bridge Pattern
└── exercise3/           # Mediator Pattern
```

## 🎮 Uso del Menú

1. **Inicio automático**: Al ejecutar, se construyen todos los ejercicios
2. **Selección**: Elige el ejercicio que deseas ejecutar del menú
3. **Ejecución**: El ejercicio se ejecuta y muestra sus resultados
4. **Continuación**: Presiona Enter para volver al menú
5. **Salida**: Selecciona "Salir" para terminar la aplicación

## 🔧 Requisitos

- Node.js >= 14.0.0
- npm >= 6.0.0
- TypeScript >= 5.0.0

## 💡 Notas

- Todos los ejercicios se compilan automáticamente en TypeScript
- Los resultados de cada ejercicio se muestran directamente en la consola
- El sistema maneja errores de compilación y ejecución de manera elegante
- Puedes ejecutar el mismo ejercicio múltiples veces sin problemas