<?php 
require_once 'instagram.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Siavoush Redhai | Web Developer | Gallery</title>
    <!--<base href="http://siavoush-re.co.uk">-->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <header class="gallery-header" id="gallery-header">
        <div class="gallery-header__container">

            <div class="mb-menu">
                <button class="hamburger hamburger--spin" type="button" id="hamburger">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                </button>
            </div>

            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item"><a class="nav__link" href="index.html">home</a></li>
                    <li class="nav__item"><a class="nav__link" href="#">gallery</a></li>
                    <li class="nav__item"><a class="nav__link" href="#">contact</a></li>
                </ul>
            </nav>

            <div class="main">
                <object class="instagram" data="images/imgres-01.svg" type="image/svg+xml"></object>
                <h1 class="main__title">Gallery</h1>
            </div>
        </div>
    </header>

    <main>

        <section class="gallery">
            <div class="gallery__container">
                <ul class="gallery__list">
                    <?php
                        try {
                            gallery();
                        } catch(Exception $e) {
                            echo $e -> getMessage();
                        }
                    ?>
                </ul>
            </div>
        </section>

        <section class="contact" id="contact">
            <div class="contact__container">
                <h3 class="contact__title">contact</h3>
                <ul class="icons">
                    <li class="icons__item">
                        <a href="#" class="icons__link"><object class="icons__svg" data="images/github.svg" type="image/svg+xml"></object></a>
                    </li>
                    <li class="icons__item">
                        <a href="#" class="icons__link"><object class="icons__svg" data="images/mail.svg" type="image/svg+xml"></object></a>
                    </li>
                    <li class="icons__item">
                        <a href="#" class="icons__link"><object class="icons__svg" data="images/linkedin.svg" type="image/svg+xml"></object></a>
                    </li>
                </ul>
                <p class="contact__msg">Feel free to get in touch</p>
                <a class="contact__link" href="#">back to top</a>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="footer__container">
            <p class="footer__msg">2017 Designed and developed by <span class="msg__highlight">Siavoush Redhai</span></p>
        </div>
    </footer>

    <script src="js/script.js"></script>
</body>

</html>