<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#0d6efd">
  <title>Actividad</title>
  <style>
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f8f9fa;
    }
    .loader {
      text-align: center;
    }
    .spinner {
      border: 6px solid #f3f3f3;
      border-top: 6px solid #0d6efd;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      animation: spin 1s linear infinite;
      margin: 0 auto 20px;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div class="loader">
    <div class="spinner"></div>
    <h2>Cargando...</h2>
    <p>Serás redirigido en unos segundos</p>
  </div>

  <script>
    // Redirige después de 10 segundos
    setTimeout(() => {
      window.location.href = "view/V.login.php";
    }, 10000);

    // Registro del Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
        .then(() => console.log('Service Worker registrado correctamente'))
        .catch(error => console.log('Error al registrar Service Worker:', error));
    }
  </script>
</body>
</html>
