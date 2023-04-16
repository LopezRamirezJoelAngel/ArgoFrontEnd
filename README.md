<<<<<<< HEAD
# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
=======
# Proyecto_Final_Dise-o_Web
Proyecto Final para el curso de diseño web UNICA
# Proyecto de máquina expendedora en Figma:
## Estos son los pasos por seguir para generar el proyecto completo (cabe aclarar que habrá que buscar cómo implementar en figma lo que viene en las instrucciones):
1.	**Diseñar la estructura general de la página principal: crear una página principal y agregar secciones para el encabezado, el contenido principal y el pie de página. crear una barra de navegación que permita cambiar entre la sección de administrador y la sección de cliente.**
2.	**diseñar la sección del administrador:**

> **para la sección del administrador:**

1.	crear una página principal: crear una nueva página que se llame “administrador”. hoy esta será la página principal desde la que se podrá acceder a las diferentes secciones del panel de administración.
2.	Crear la página de inicio de sesión: crear una nueva página y llamarla “inicio de sesión”. esta página debe incluir un formulario de inicio de sesión con campos para el correo electrónico y la contraseña. también debe incluir un botón para enviar el formulario y acceder al panel de administración.
3.	crear las páginas de agregar y modificar productos: crear 2 nuevas páginas y nombrarlas “agregar producto” y “modificar producto”. estas páginas van a incluir formularios con los campos necesarios para agregar o modificar un producto. cuando se envían los datos del formulario deberá desplegarse una ventana emergente con los datos capturados.
4.	crear la página del listado de productos: crear una nueva página y nombrarla “listado de productos”. esta página deberá mostrar una lista de todos los productos almacenados. cada producto deberá incluir información como el nombre, la descripción, el precio y la cantidad disponible. Además, deberá incluir un botón para eliminar un producto.
5.	crear la página de clientes: crear 2 nuevas páginas y nombrarlas “agregar cliente” y “listado de clientes”. la página de agregar cliente debe incluir un formulario para capturar la información del cliente. la página de listado de clientes deberá mostrar una lista de todos los clientes dados de alta, y se deberá incluir un botón para eliminar a un cliente. 
6.	Crear una página de ventas: crear una nueva página y llamarla “ventas”. esta página deberá incluir una gráfica que muestre las ventas de cada tipo de producto en un período de tiempo determinado.
7.	crear la página de estado de inventario: crear una nueva página y llamarla “estado de inventario”. esta página deberá mostrar el estado actual del inventario, incluyendo la cantidad disponible de cada producto.
8.	por último utilizar componentes y módulos. hay que utilizar componentes y módulos para elementos comunes en todas las páginas, los elementos comunes van a ser botones, encabezados y pies de página, iconos etcétera.

A continuación se incluyen módulos para la sección de administrador:

•	módulo de formulario: crear un módulo de formulario que se pueda reutilizar en diferentes páginas del proyecto, como la página de agregar o modificar productos y la página de agregar nuevos clientes. este módulo podría incluir campos de entrada de texto, botones de envío y otros elementos necesarios para capturar y procesar los datos que ingrese nuestro usuario.

•	módulo de lista de productos: se podrá crear un módulo de lista de productos que se pueda reutilizar en diferentes páginas del proyecto, como la página del listado de productos y la página de ventas. este módulo podría incluir elementos con la imagen del producto, el nombre del producto, el precio y la cantidad disponible.

•	modulo de gráficas: crear un módulo de gráficas que se pueda reutilizar en diferentes páginas del proyecto como la página de ventas y la página de estado de inventario. este módulo podrá incluir diferentes tipos de gráficas y visualizaciones, como gráficas de barras, de pastel, de líneas.

•	Módulo de botones: crear un módulo de botones que se pueda reutilizar en las diferentes páginas, como la página de Estado de productos y la página de ventas. este modelo podría incluir diferentes tipos de botones, como botones de acción, botones de edición, botones de eliminación, etc.

•	módulo de encabezado y pie de página: crear un módulo de encabezado y pie de página que se pueda reutilizar en varias páginas del proyecto. hola este módulo podría incluir elementos como el logotipo de la empresa, el nombre de la página, el menú de navegación, etcétera.

---

3.	**Diseñar la sección de cliente:**

> **para la sección de cliente tenemos:**

1.	Crear una página principal: crear una página y llamarla “cliente”. esta será la página principal donde los clientes podrán interactuar con la máquina expendedora.
2.	diseñar la máquina expendedora: utilizar una imagen de la máquina expendedora para diseñarla. añadir sombras y patitas para darle profundidad y realismo.
3.	agregar las hileras de botanas: crear cuatro hileras de botanas, cada una con 6 productos. agregar el nombre de los productos, los números de los productos como lo pide el documento que mandaron y los precios debajo de cada botana.
4.	crear el panel de manejo: Crear un panel de manejo en el lado derecho de la página. este panel deberá incluir un logo, una pantalla de manejo y un teclado numérico con botones estilo Calculadora. la pantalla deberá mostrar el producto seleccionado y su precio. los botones deberán tener un estilo que cambie el cursor a una manita cuando se pase sobre ellos y produzca un sonido cuando se haga clic. los botones también deberán tener efectos de sombras.
5.	agregar una sección de pago: Crear una sección de pago en la parte inferior de la página esta sección deberá estar dividida en 2 partes: una ranura para ingresar billetes y otra ranura para ingresar monedas.

A continuación se incluyen módulos para la sección de cliente:

•	Módulo de historial de compras: crear un módulo de historial de compras que se muestra en la página principal del cliente. este módulo podrá incluir una lista de todas las compras anteriores del cliente, con información como la fecha de compra el producto comprado y el precio.

•	modulo de búsqueda: podríamos crear un módulo de búsqueda que se muestra en la página principal del cliente. este módulo permitiría a los clientes buscar productos en la máquina expendedora por nombre o número de producto como lo indican en él classroom.

•	módulo de promociones: podríamos crear un módulo de promociones que se muestra en la página principal del cliente. este módulo podrá incluir información sobre promociones especiales en productos seleccionados.

•	módulo de retroalimentación: podríamos crear un módulo de retroalimentación que se muestra en la página principal del cliente. este módulo permitirá a los clientes enviar comentarios o sugerencias sobre la máquina expendedora a los productos ofrecidos.

•	módulo de ayuda: podríamos crear un módulo de ayuda que se muestra en la página principal del cliente. este módulo podrá incluir información sobre cómo usar la máquina expendedora cómo pagar y cómo solucionar problemas comunes.

---

4.	**Agregar los elementos comunes: crear componentes y módulos para elementos comunes en ambas secciones, como botones, encabezados y pies de página, iconos, etc.** 
5.	**agregar interacciones: podemos agregar animaciones y transiciones para crear una experiencia de usuario fluida y atractiva.**
6.	**comprobar la navegación: debemos asegurarnos de que la navegación entre las acciones del administrador y clientes sea clara y fácil de usar.**
7.	**comprobar la accesibilidad: el diseño debe ser accesible para todos los usuarios.**
8.	**hoy hay que adaptar el diseño del proyecto a que se adapte a diferentes tamaños de pantalla como nos enseñaron guiño guiño.**
9.	**hay que comprobar que sirva y que no tenga errores.** 
>>>>>>> 2f5cdab (compra del usuario listo)
