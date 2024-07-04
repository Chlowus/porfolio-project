<template lang="">
    <body class="contact-page-body">
    <main class="contact-page-main">

        <div class="contact-container">
             
             <div class="contact-title-background">
              <div class="h3-contact">Questions?</div>
                <ul class="dynamic-text">
                    <li><span class="title sd">Let's Get in Touch</span></li>
                </ul>
                </div>

                <!--Text & FORM CONTAINER -->
                <div class="text-form-container">
                    <div class="contact-me">
                        <h2>CONTACT ME</h2>
                    </div>
                    <div class="contact-form-box">
                        <form  action="https://formspree.io/f/xleqardl"
                        method="POST" class="form" target="_blank">
                            <input name="fname" class="form-control form-control-lg" type="text" placeholder="Full Name" aria-label=".form-control-lg example" required>
                            <input name="email" class="form-control form-control-lg" type="email" placeholder="Email" aria-label=".form-control-lg example" required>
                            <div class="form-floating">
                                <textarea name="message" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                                <label for="floatingTextarea2">Message</label>
                              </div>
                              <button class="btn-contact btn-primary" type="submit">Contact Me</button>
                        </form>
                    </div>
                </div>

                <!-- Adress, Email and Number -->
                <div class="my-details">
                        <div class="contact-icons">
                            <div class="pin-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                  </svg>
                            </div>
                            <div class="mail-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                  </svg>
                            </div>
                            <div class="phone-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                  </svg>
                            </div>
                        </div>
                        <div class="listed-details">
                            <h3>Crawford</h3>
                            <h3>chlsmi040904@gmail.com</h3>
                            <h3>0780528689</h3>
                        </div>
                </div>
        </div> 
    </main>
</body>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .contact-page-body {
    /* overflow: hidden; */
    max-height: 200vh;
    font-family: Bitter;
}

.contact-page-body {
    background-image: url("https://chlowus.github.io/Images---Bootstrap-Project/Pink-squiggle.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: fixed;
    height: 120vh;
    width: 100vw;
    background-attachment: fixed;
}

.contact-page-main{
    height: 120vh;
    width: 100vw;
}

.contact-container {
    display: grid;
    grid-template-columns: 1fr;
}

.contact-title-background {
    width: 100%;
    background-color: #e1d9e6;
}

.h3-contact {
    font-size: 50px;
    font-family: Libre Franklin;
    font-weight: 700;
    margin-left: -850px;
    margin-top: 20px;
}

.title {
    font-size: 80px;
    font-family: bitter;
    color: #B38ECC;
    font-weight: 400;
    margin-left: 25px;
}

.dynamic-text li {
    list-style: none;
    margin-left: -900px;
    position: relative;
    top: 0;
}

@keyframes slide {
    100% {
        top: -80px;
    }
}

.dynamic-text li .title {
    position: relative;
}

.dynamic-text li .title::after {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    background: #e1d9e6 ;
    border-left: 2px solid #B38ECC;
    animation: typing 4s steps(18) infinite;
}

@keyframes typing {
    100% {
        left: 100%;
        margin: 0 -35px 0 35px;
    }
}

.text-form-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.contact-me {
    margin-top: 100px;
    margin-left: 0px;
    font-family: bitter;
}

.contact-me h2{
    font-size: 60px;
}

.contact-form-box {
    height: 380px;
    width: 600px;
    background-color: #FCC5D3;
    margin-left: auto;
    margin-right: auto;
    border-radius: 30px;
    border: #B38ECC solid 2px;
    margin-top: 100px;
}

.form {
    margin-left: 49px;
    margin-top: 30px;
}

.form input {
    width: 500px;
    background-color: #FCC5D3;
    color: black;
    font-family: Libre Franklin;
    border: none;
    border-bottom: black 2px solid !important;
    border-radius: 0px;
    text-align: center;
    margin-top: 20px;
}

.form-floating textarea {
    width: 500px;
    background-color: #FCC5D3;
    color: black;
    border: none;
    border-bottom: black 2px solid !important;
    border-radius: 0px;
    text-align: center;
    margin-top: 20px;
}

label {
    font-family: Libre Franklin;
    margin-left: 200px;
    font-size: 18px;
}

.my-details {
    display: flex;
}

.btn-contact {
    background-color: #B38ECC;
    font-family: mansalva;
    font-size: 25px;
    border-radius: 10px;
    margin-top: 30px;
    margin-left: -40px;
}

.pin-icon {
    height: 50px;
    width: 50px;
    background-color: #B38ECC;
    border-radius: 50%;
    border: #0F1B61 2px solid;
    margin-left: 150px;
    margin-top: -250px;
} 

.bi-geo-alt {
    height: 40px;
    width: 40px;
    padding-left: 2px;
    padding-top: 10px;
    color: white;
}

.mail-icon {
    height: 50px;
    width: 50px;
    background-color: #B38ECC;
    border-radius: 50%;
    border: #0F1B61 2px solid;
    margin-left: 150px;
    margin-top: 50px;
} 

.bi-envelope {
    height: 40px;
    width: 40px;
    padding-left: 2px;
    padding-top: 10px;
    color: white;
}

.phone-icon {
    height: 50px;
    width: 50px;
    background-color: #B38ECC;
    border-radius: 50%;
    border: #0F1B61 2px solid;
    margin-left: 150px;
    margin-top: 40px;
}

.bi-telephone {
    height: 35px;
    width: 35px;
    padding-left: 2px;
    padding-top: 11px;
    color: white;
}

.listed-details {
    height: 100px;
    width: 100px;
    margin-left: -70px;
    margin-top: -230px;
    font-weight: 600;
    font-size: 20px;
}

.listed-details h3 {
    height: 100px;
    width: 100px;
    margin-left: 100px;
    margin-top: -10px;
    font-weight: 600;
    font-size: 20px;
}

.contact-page-footer {
    padding-top: 40px;
    height: 90px;
    background-color: #b38eccb7;
    text-align: center;
    
}

@media only screen and (max-width:720px ) {
    .h3-contact {
        font-size: 30px;
        font-family: Libre Franklin;
        font-weight: 700;
        margin-left: 150px;
        margin-top: 20px;
    }

    .title {
        font-size: 40px;
        font-family: bitter;
        color: #B38ECC;
        font-weight: 400;
        margin-left: 5px;
    }
    
    .dynamic-text li {
        list-style: none;
        margin-left: -20px;
        position: relative;
        top: 0;
    }
    
    @keyframes slide {
        100% {
            top: -80px;
        }
    }
    
    .dynamic-text li .title {
        position: relative;
    }
    
    .dynamic-text li .title::after {
        content: "";
        position: absolute;
        left: 0;
        height: 100%;
        width: 100%;
        background: #e1d9e6 ;
        border-left: 2px solid #B38ECC;
        animation: typing 4s steps(18) infinite;
    }
    
    @keyframes typing {
        100% {
            left: 100%;
            margin: 0 -35px 0 35px;
        }
    }

    .contact-me {
        margin-top: 300px;
        margin-left: 50px;
        font-family: bitter;
    }
    
    .contact-me h2{
        font-size: 30px;
    }

    .contact-form-box {
        height: 150px;
        width: 300px;
        background-color: #FCC5D3;
        margin-left: auto;
        margin-right: auto;
        border-radius: 30px;
        border: #B38ECC solid 2px;
        margin-top: 100px;
    }
    
    .form {
        margin-left: 49px;
        margin-top: 30px;
    }
    
    .form input {
        width: 500px;
        background-color: #FCC5D3;
        color: black;
        font-family: Libre Franklin;
        border: none;
        border-bottom: black 2px solid !important;
        border-radius: 0px;
        text-align: center;
        margin-top: 20px;
    }
    
    .form-floating textarea {
        width: 500px;
        background-color: #FCC5D3;
        color: black;
        border: none;
        border-bottom: black 2px solid !important;
        border-radius: 0px;
        text-align: center;
        margin-top: 20px;
    }
    
}

@media only screen and (max-width: 720px) {
        .h3-contact {
            font-size: 30px;
            margin-left: -350px;
        }

        .title {
            font-size: 40px;
            margin-left: 5px;
        }

        .dynamic-text li {
            margin-left: -20px;
        }

        @keyframes slide {
            100% {
                top: -80px;
            }
        }

        .contact-me {
            margin-top: -150px;
            margin-left: 50px;
        }

        .contact-me h2 {
            font-size: 30px;
        }

        .contact-form-box {
            height: 150px;
            width: 300px;
            margin-top: 100px;
        }

        .form {
            margin-left: 49px;
        }

        .form input, .form textarea {
            width: 300px;
        }

        .listed-details {
            margin-left: -70px;
            margin-top: -230px;
            font-weight: 600;
            font-size: 20px;
        }

        .listed-details h3 {
            margin-left: 100px;
            margin-top: -10px;
            font-weight: 600;
            font-size: 20px;
        }
    }
</style>