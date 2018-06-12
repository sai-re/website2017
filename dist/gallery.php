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
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <header class="header-gallery" id="header-gallery">
        <section class="section-holder header-gallery__container">
            <div class="header__mb-menu">
                <button class="hamburger hamburger--spin" type="button" id="hamburger">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>

            <nav class="header__nav">
                <ul class="header__nav-list">
                    <li class="header__nav-item"><a class="header__nav-link" href="http://siavoush-re.co.uk">home</a></li>
                    <li class="header__nav-item"><a class="header__nav-link" href="projects.html">projects</a></li>
                    <li class="header__nav-item"><a class="header__nav-link" href="gallery">gallery</a></li>
                    <li class="header__nav-item"><a class="header__nav-link" href="javascript:void(0)">contact</a></li>
                </ul>
            </nav>

            <div class="header__hero">
                <object class="instagram" data="images/imgres-01.svg" type="image/svg+xml"></object>
                <h1 class="header__title">Gallery</h1>
            </div>
        </section>
    </header>

    <main>
        <section class="gallery">
            <div class="gallery__container">
                <ul class="gallery__list">
                    <?php
                        try {
                            gallery();
                        } catch (Exception $e) {
                            echo $e -> getMessage();
                        }
                    ?>
                </ul>
            </div>
        </section>

        <section class="page-section contact contact--gallery" id="contact">
            <div class="section-holder contact__container">
                <h3 class="secondary__title contact__title">contact</h3>

                <ul class="contact__icons">
                    <li class="contact__icons-item">
                        <a href="https://github.com/sai-re" class="contact__icons-link"><object class="contact__icons-svg" data="images/github.svg" type="image/svg+xml"></object></a>
                    </li>

                    <li class="contact__icons-item">
                        <a href="mailto:contact@siavoush-re.co.uk" class="contact__icons-link"><object class="contact__icons-svg" data="images/mail.svg" type="image/svg+xml"></object></a>
                    </li>

                    <li class="contact__icons-item">
                        <a href="https://uk.linkedin.com/in/siavoush-redhai-b02377a5" class="contact__icons-link"><object class="contact__icons-svg" data="images/linkedin.svg" type="image/svg+xml"></object></a>
                    </li>
                </ul>

                <p class="contact__msg">Feel free to get in touch</p>

                <a class="contact__link" href="javascript:void(0)">back to top</a>
            </div>
        </section>
    </main>

    <footer class="page-section footer footer--gallery">
        <div class="section-holder footer__container">
            <p class="footer__msg">2017 Designed and developed by <span class="msg__highlight">Siavoush Redhai</span></p>
        </div>
    </footer>

    <script src="js/script.js"></script>
</body>

</html>