# Descargar y configurar Android Studio y Java

1. Descargar Android Studio

2. Establezca una variable de entorno que apunte al directorio en el disco donde están instaladas las herramientas de Android. Por lo general, puede encontrar la ruta a este directorio en el administrador de SDK de Android Studio. Contendrá las herramientas de la plataforma y otros directorios. Necesitamos definir y persistir la variable de entorno como ANDROID_HOME (o, alternativamente, ANDROID_SDK_ROOT).

3. Use el administrador de SDK de Android para descargar cualquier plataforma de Android que queramos automatizar (por ejemplo, nivel de API 33)

4. Instale Java JDK (para los niveles de API de Android más recientes, se requiere JDK 9; de lo contrario, se requiere JDK 8). Es más fácil usar los paquetes de OpenJDK.

5. Cuando se instala el JDK, deberá encontrar la ruta al directorio de inicio de JDK tal como se instaló en su sistema. Este será el directorio que contiene bin, include y otros directorios. La ruta debe persistir como una variable de entorno denominada JAVA_HOME, para que Appium pueda encontrar las herramientas de Java adecuadas que se requieren para trabajar con la plataforma Android.

6. En la variable de entorno del sistema PATH agregar estas 3 rutas:
    - C:\Users\Usuario\AppData\Local\Android\Sdk\tools
    - C:\Users\Usuario\AppData\Local\Android\Sdk\platform-tools
    - C:\Users\Usuario\AppData\Local\Android\Sdk\build-tools

7. Use Android Studio para crear y ejecutar un dispositivo virtual de Android (un AVD, también conocido como emulador). Es posible que deba descargar las imágenes del sistema para el nivel de API del emulador que desea crear. Usar el asistente de creación de AVD en Android Studio es generalmente la forma más fácil de hacer todo esto.

8. Con el emulador o dispositivo conectado, puede ejecutar adb devices (a través del binario ubicado en $ANDROID_HOME/platform-tools/adb) para verificar que su dispositivo aparezca como conectado.

# Configurar proyecto de Flutter:

1. Descargar e instalar Flutter

2. Asegúrese de que su aplicación Flutter tenga enableFlutterDriverExtension() antes de ejecutar la aplicación. Luego, asegúrese de que su aplicación haya importado el paquete flutter_driver como sus dependencias de desarrollo también.

3. Probar la app en el emulador

# Instalar y ejecutar Appium: 

- npm i --location=global appium
- appium driver install --source=npm appium-flutter-driver
- appium

# Crear el proyecto:

- Crear carpeta del proyecto
- npm init
- npm i --save-dev webdriverio
- npm i appium-flutter-finder
- npm i assert

# Ejecutar las pruebas:

- node test1.js
- node test2.js
- node test3.js