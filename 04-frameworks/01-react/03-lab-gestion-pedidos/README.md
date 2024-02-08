# Laboratorio 3 - Gestión de pedidos a proveedor con React

### Estrategia:
  - Utilizar el hook useReducer en el context provider para gestionar el STATE del componente.
  - Uso de scss directamente sin librerías.


### Progreso:
| Estado | Tarea |
| -------- | ------- |
| ✅ | Data JSON |
| ✅ | Vite |
| ✅ | Linter: MANTENEMOS EL DEFAULT DE VITE... TS-STANDARD está dando problemas | 
| - | - |
| -> | POD-Order | OrderScene.tsx OrderScene
| -> | ProvideContext...provisional. Initial STATE |
| x |   order-context | order-context.tsx : OrderContext , OrderContextProvider
| x |   hooks | use-order.hook.ts // useContext
| x |   reducers | order-reducer.ts //ACTION_TYPES, orderReducer(initialState,action:{payload,type})
| - | - |
| x |   components/order-header.component.tsx : info.header.component.tsx InfoAtHeader, actions.header.component.tsx ActionsAtHeader|
| x |   components/order-details.component : controls.details.component.tsx , details.component.tsx |
| x |     details/components/row.details.component : RowDetails |
        --
| x |   components/reset-exercise.component : ResetExercise.component.tsx |
