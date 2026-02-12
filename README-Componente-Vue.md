# Componente Vue - HomeFeriaClassic

## Descripción
Se ha convertido el componente Astro `HomeFeriaClassic.astro` a un componente Vue con modal dinámico.

## Archivos creados

### Componente principal
- `src/components/HomeFeriaClassic.vue` - Componente principal reemplazando el archivo Astro

### Componente modal
- `src/components/ModalStand.vue` - Modal dinámico que carga componentes específicos según el stand

### Componentes individuales de stands
- `UnitedHealthCare.vue` - Componente para United Health Care
- `DanaFarber.vue` - Componente para Dana Farber Cancer Institute  
- `AlzheimerAssoc.vue` - Componente para Alzheimer's Association
- `FerrerasCounseling.vue` - Componente para Ferreras Counseling

## Características implementadas

1. **Carga dinámica de componentes**: El modal importa dinámicamente el componente correspondiente al stand seleccionado
2. **Eventos Vue**: Se reemplazó `onclick` por `@click` de Vue
3. **Gestión de estado**: Usa `ref` y `computed` de Vue para manejar el estado del modal
4. **Componentes asíncronos**: Usa `defineAsyncComponent` para importar componentes solo cuando se necesitan
5. **Mantenimiento de estilos**: Se conservaron todos los estilos CSS originales

## Uso

```vue
<template>
  <HomeFeriaClassic />
</template>

<script>
import HomeFeriaClassic from './components/HomeFeriaClassic.vue'

export default {
  components: {
    HomeFeriaClassic
  }
}
</script>
```

## Funcionalidad

- Al hacer clic en cualquier imagen de stand en el mapa, se abre un modal
- El modal carga dinámicamente el componente correspondiente al stand
- Cada componente de stand muestra información específica (logo, título, descripción)
- El modal se puede cerrar con el botón X, el fondo o la tecla ESC
- La versión móvil mantiene los enlaces directos a las páginas de cada stand

## Dependencias

Este componente requiere:
- Vue 3 (Composition API)
- Bulma CSS (para los estilos del modal)
