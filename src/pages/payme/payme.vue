<template>
    <Breadcrumbs title="Blog Single" main="Pay me" />

    <div class="container-fluid p-10 ">

        <div class="wrap">

            <div class="inner">

                <div class="header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="38" viewBox="0 0 50 38" fill="none">
                        <g opacity="0.7">
                            <rect x="0.7" y="0.70293" width="48.1444" height="36.5303" rx="6.55" fill="white"
                                fill-opacity="0.26" stroke="white" stroke-width="1.4" />
                            <path
                                d="M0.774414 11.6709H13.4062C15.4082 11.6709 17.0312 13.2939 17.0312 15.2959V20.8108M17.0312 37.185V29.9508M17.0312 29.9508V20.8108M17.0312 29.9508H0.774414M17.0312 20.8108H0.774414"
                                stroke="white" stroke-width="1.4" />
                            <path
                                d="M48.7703 11.6709H33.2876M33.2876 11.6709V20.8109M33.2876 11.6709V0.780762M33.2876 37.185V29.9508M33.2876 29.9508V20.8109M33.2876 29.9508H48.7703M33.2876 20.8109H48.7703"
                                stroke="white" stroke-width="1.4" />
                        </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="40" viewBox="0 0 33 40" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3.31523 26.9912L3.30888 26.9998L3.30273 27.0085C2.95987 27.4963 2.19186 27.6396 1.59127 27.2134C1.11049 26.8723 0.965977 26.112 1.3754 25.5112C1.98627 24.7288 2.42993 23.8141 2.72133 22.9199C3.0247 21.989 3.16581 20.9313 3.16033 19.8938C3.15486 18.8564 3.00261 17.8002 2.68943 16.8726C2.38862 15.9816 1.93534 15.0717 1.31625 14.296C0.900511 13.6996 1.03699 12.9378 1.51415 12.5915C2.11021 12.1589 2.87969 12.2939 3.22768 12.778L3.23392 12.7867L3.24036 12.7952C4.01091 13.8161 4.64291 14.9505 5.02058 16.0634C5.41811 17.3726 5.67133 18.639 5.67787 19.8803C5.68476 21.1866 5.5605 22.4229 5.08341 23.6401C4.56381 24.9656 4.06065 25.9814 3.31523 26.9912ZM8.88666 29.4155L8.90172 29.3941L8.91554 29.3719C10.6235 26.6224 11.6087 23.3047 11.5905 19.8485C11.5722 16.3931 10.5526 13.087 8.81654 10.3565C8.44032 9.75698 8.60935 9.04817 9.24353 8.58787C9.66945 8.27873 10.469 8.38816 10.9434 9.02697C12.9035 12.1518 14.0874 15.9292 14.108 19.835C14.1293 23.8741 12.9862 27.529 11.0574 30.6767C10.6112 31.2937 9.92819 31.4666 9.33919 31.1169C8.70065 30.6468 8.58394 29.8462 8.88666 29.4155ZM18.8852 4.91947L18.902 4.95285L18.9215 4.98475C21.5775 9.33569 23.0534 14.3544 23.082 19.7867C23.1106 25.2165 21.6891 30.2487 19.0815 34.6265C18.6817 35.2724 18.0068 35.4545 17.3226 35.1345C16.6999 34.7268 16.5326 34.051 16.8579 33.3685C19.0756 29.4113 20.4546 24.7483 20.4285 19.801C20.4025 14.8757 19.1208 10.2202 16.7102 6.26287C16.384 5.58717 16.5456 4.91419 17.1609 4.50174C17.9033 4.14538 18.6265 4.40655 18.8852 4.91947ZM26.7498 0.7785L26.7613 0.801307L26.774 0.823437C29.9925 6.41358 31.8834 12.8048 31.92 19.7392C31.9565 26.6665 30.137 33.0716 26.9836 38.6918C26.5831 39.3303 25.9113 39.5091 25.2304 39.1907C24.6096 38.7842 24.4415 38.1114 24.7626 37.4311C27.8005 32.2218 29.4364 26.1866 29.4024 19.7527C29.3684 13.3023 27.5249 7.29053 24.5801 2.13278C24.2111 1.37985 24.4712 0.642425 24.9862 0.380195C25.7423 -0.00471119 26.4866 0.256538 26.7498 0.7785Z"
                            fill="url(#paint0_linear_1752_260)" />
                        <defs>
                            <linearGradient id="paint0_linear_1752_260" x1="16.4074" y1="0.246166" x2="16.6169" y2="39.3945"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0.73" />
                                <stop offset="1" stop-color="white" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div class="content">
                    <h3>
                        {{ formattedNumber }}
                    </h3>
                </div>
                <div class="foot">
                    <h4>{{ uppercaseText }} {{ uppercaseTextTo }}</h4>
                    <p>{{ formattedExpirationDate }}</p>
                </div>
                <svg width="50" height="50" viewBox="0 0 1080 315" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Canvas" transform="translate(344 -1801)">
                        <g id="logo_05">
                            <g id="Shape 1 copy 4">
                                <use xlink:href="#path0_fill" transform="translate(231.204 1830.77)" fill="#33CCCC" />
                                <use xlink:href="#path0_fill" transform="translate(231.204 1830.77)"
                                    fill="url(#paint1_linear)" />
                            </g>
                            <g id="Shape 1 copy 4">
                                <use xlink:href="#path1_fill" transform="translate(264.941 1872.44)" fill="#FFFFFF" />
                            </g>
                            <g id="Shape 1 copy 4">
                                <use xlink:href="#path2_fill" transform="translate(-344 1801)" fill="#FFFFFF" />
                            </g>
                        </g>
                    </g>
                    <defs>
                        <linearGradient id="paint1_linear" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse"
                            gradientTransform="matrix(-66.0999 399.226 -838.377 -138.81 671.585 69.405)">
                            <stop offset="0.47231" stop-color="#00CCCC" />
                            <stop offset="1" stop-color="#3399FF" />
                        </linearGradient>
                        <path id="path0_fill" fill-rule="evenodd"
                            d="M 498.722 100.712C 506.372 111.659 507.142 128.912 499.022 142.283C 491.772 154.225 448.382 200.051 434.262 214.777C 422.022 227.568 405.502 240.377 389.242 240.377L 48.788 240.377C 2.77602 240.377 -9.27734e-06 224.777 -9.27734e-06 189.507L -9.27734e-06 46.434C -9.27734e-06 10.412 10.631 -3.66211e-06 42.052 -3.66211e-06L 389.242 -3.66211e-06C 405.502 -3.66211e-06 419.972 8.30001 436.592 25.2C 450.702 39.541 492.852 92.29 498.722 100.712Z" />
                        <path id="path1_fill" fill-rule="evenodd"
                            d="M 43.4426 13.6512L 43.4426 12.7092C 43.4426 8.10922 43.0566 3.56222 35.5196 3.56222L 7.06758 3.56222C 0.45458 3.56222 0.0365738 7.21921 0.0365738 12.9012L 0.0365738 50.7122C 13.8866 30.9072 29.2436 21.7052 43.4426 13.6512ZM 234.315 150.277L 234.315 148.247L 234.335 148.247L 234.335 57.2422C 234.335 19.0782 217.558 -0.00178076 184.005 0.00221924C 174.706 -0.0852213 165.566 2.41343 157.605 7.21923C 149.618 12.0332 141.944 18.7576 134.583 27.3922C 130.965 18.0089 125.509 11.0982 118.215 6.66021C 110.92 2.22221 101.468 0.00288591 89.8596 0.00221924C 76.4236 0.00221924 60.8026 4.70922 49.7306 13.8172C 47.2536 16.2982 0.0305924 53.4672 0.0305924 91.6412L 0.0305924 149.904C 0.0305924 151.757 -0.863375 158.787 7.01362 158.787L 36.6346 158.787C 45.8426 158.787 44.9436 152.757 44.9436 150.277L 44.9436 56.0452C 49.9436 49.4132 60.1596 33.0342 76.7526 33.0342C 83.1212 33.0342 87.7076 35.1895 90.5116 39.5002C 93.3156 43.8109 94.7236 51.0386 94.7356 61.1832L 94.7356 134.783L 94.7006 134.783L 94.7006 149.906C 94.7006 151.759 93.8066 158.789 101.681 158.789L 130.924 158.789C 140.138 158.789 139.239 152.759 139.239 150.279L 139.239 148.249L 139.273 148.249L 139.273 56.0492C 144.63 49.4172 155.304 33.0382 171.073 33.0382C 177.561 33.0382 182.24 35.1936 185.111 39.5042C 187.981 43.8149 189.415 51.0426 189.411 61.1872L 189.411 134.787L 189.381 134.787L 189.381 149.91C 189.381 151.763 188.491 158.793 196.371 158.793L 226.001 158.793C 235.215 158.789 234.315 152.757 234.315 150.277ZM 397.445 113.277C 386.915 141.612 361.685 157.447 330.425 157.447C 285.145 157.447 255.235 126.592 255.235 80.3152C 255.235 34.5962 286.285 1.45721 329.015 1.45721C 371.285 1.45721 399.635 30.8952 401.435 78.3152C 401.665 84.3742 399.895 89.7272 392.325 89.7272L 296.245 89.7272C 296.815 115.155 309.075 128.871 330.715 128.871C 343.915 128.871 351.735 123.18 358.545 112.027C 361.505 107.174 367.575 107.444 367.575 107.444L 392.325 107.444C 396.365 107.441 398.155 111.389 397.445 113.274L 397.445 113.277ZM 329.015 30.8772C 311.055 30.8772 298.525 43.4462 296.245 64.0272L 360.625 64.0272C 358.915 46.0252 349.225 30.8772 329.015 30.8772L 329.015 30.8772Z" />
                        <path id="path2_fill" fill-rule="evenodd"
                            d="M 176.842 31.0816C 173.036 25.0167 168.099 19.7408 162.3 15.5416C 156.501 11.4673 150.133 8.27274 143.4 6.0616C 135.922 3.62582 128.198 2.02114 120.369 1.2766C 111.412 0.395791 102.417 -0.029751 93.4177 0.00160738L 14.5477 0.00160738C 7.45567 0.00160738 0.0216698 4.65962 0.0216698 13.4436L 0.0216698 141.334C 10.0127 162.649 29.4747 185.278 51.6017 196.093L 51.6017 170.729C 51.6017 157.345 61.6807 154.355 65.8497 154.355L 89.1697 154.355C 121.292 154.355 145.809 147.609 162.721 134.118C 179.633 120.646 188.088 100.635 188.088 74.0846C 188.136 66.413 187.246 58.7643 185.439 51.3086C 183.642 44.1603 180.741 37.336 176.842 31.0816ZM 130.882 96.7626C 128.159 101.489 124.097 105.303 119.21 107.725C 113.913 110.252 108.191 111.768 102.338 112.195C 95.9637 112.763 89.3813 113.048 82.5907 113.049L 60.4297 113.049C 55.0087 113.049 51.6017 108.636 51.6017 102.126L 51.6017 49.8386C 51.6017 43.9746 55.4247 41.5146 60.0087 41.5146L 82.5907 41.5146C 89.9467 41.5146 96.845 41.7269 103.286 42.1516C 109.083 42.416 114.776 43.7905 120.056 46.2006C 124.762 48.4408 128.657 52.0861 131.204 56.6336C 133.888 61.3103 135.23 67.9103 135.232 76.4336C 135.232 85.0876 133.782 91.864 130.882 96.7626L 130.882 96.7626ZM 51.6017 204.358C 27.2657 194.634 10.9507 183.034 0.0216698 171.534L 0.0216698 233.274C 0.0216698 233.274 -0.878337 243.343 8.92166 243.343L 43.3307 243.343C 52.7697 243.343 51.6057 233.274 51.6057 233.274L 51.6057 204.358L 51.6017 204.358ZM 539.245 67.2806L 508.364 67.2806C 502.088 67.2806 497.953 69.9186 495.464 76.8206C 492.975 83.7226 460.243 174.885 460.243 174.885C 460.243 174.885 428.932 85.6056 426.468 78.6926C 424.004 71.7796 419.958 67.2806 412.668 67.2806L 384.293 67.2806C 374.283 67.2806 374.283 75.1436 375.524 78.2616C 376.531 80.7816 415.389 187.288 430.189 227.862C 433.679 237.442 435.057 240.324 435.165 243.873C 435.273 247.422 431.665 254.873 429.172 259.149C 428.027 261.1 426.712 262.947 425.243 264.669C 454.257 255.982 487.698 224.46 504.991 190.311C 522.091 142.72 544.641 79.8526 545.619 76.6366C 547.192 71.4276 547.176 67.2806 539.245 67.2806ZM 402.886 273.725C 400.205 273.678 397.529 273.485 394.87 273.146C 391.615 272.715 385.524 273.323 385.524 278.657L 385.524 302.501C 385.524 311.601 389.875 312.208 392.27 312.747C 399.476 314.249 406.825 314.959 414.186 314.865C 423.942 314.865 432.43 313.09 439.652 309.541C 446.944 305.932 453.442 300.902 458.763 294.746C 464.63 287.892 469.588 280.309 473.514 272.186C 477.825 263.458 481.963 253.843 485.929 243.341C 485.929 243.341 487.629 238.595 490.429 230.82C 481.911 239.419 441.763 277.49 402.886 273.725ZM 356.511 95.5856C 354.835 91.6004 352.546 87.9019 349.727 84.6246C 346.918 81.4786 343.703 78.721 340.166 76.4246C 336.349 73.9431 332.3 71.8395 328.076 70.1436C 323.762 68.4591 319.326 67.1084 314.806 66.1036C 309.667 64.9782 304.453 64.2312 299.206 63.8686C 293.539 63.4466 287.169 63.2339 280.096 63.2306C 233.314 63.2306 206.676 78.0163 200.181 107.588C 198.069 116.764 207.146 117.303 207.146 117.303L 235.925 117.303C 243.438 117.303 243.115 114.882 246.761 108.088C 248.074 104.391 250.437 101.157 253.561 98.7826C 259.084 94.5279 267.362 92.4003 278.396 92.3996C 289.012 92.3996 296.724 94.4553 301.534 98.5666C 306.343 102.678 309.173 108.923 310.025 117.303C 310.025 127.02 306.994 133.503 295.248 133.503C 266.611 132.463 235.838 135.703 218.506 145.64C 201.174 155.577 191.376 175.004 191.376 195.867C 191.376 204.377 192.897 211.828 195.941 218.221C 198.89 224.488 203.25 229.989 208.679 234.291C 214.44 238.784 221.043 242.078 228.098 243.978C 236.117 246.177 244.402 247.254 252.717 247.178C 265.172 247.178 276.176 245.616 285.729 242.492C 295.28 239.374 310.06 229.092 311.942 227.592L 311.942 233.073C 311.942 238.504 313.595 243.348 320.076 243.348L 353.542 243.348C 360.316 243.348 361.822 238.504 361.822 232.543L 361.822 129.442C 361.881 123.033 361.456 116.629 360.551 110.284C 359.833 105.233 358.475 100.294 356.511 95.5856L 356.511 95.5856ZM 310.876 196.672C 310.876 196.672 302.234 214.623 271.392 214.623C 262.906 214.623 256.008 212.708 250.697 208.878C 245.385 205.048 242.731 199.086 242.735 190.994C 242.735 180.484 247.052 173.065 255.688 168.738C 264.315 164.414 281.588 161.944 294.531 162.247C 307.474 162.55 310.876 170.729 310.876 176.376L 310.876 196.676L 310.876 196.672Z" />
                    </defs>
                </svg>
            </div>
        </div>
        <div class="card " v-if="this.$store.state.payme.showHide">
            <div class="cover p-20">
                <div class="inner2">
                    <h4>
                        Add card
                    </h4>
                    <div class="mb-3">
                        <label calss="form-label">Name </label>
                        <input class="form-control" type="text" aria-label="default input example" v-model="firstname">
                    </div>
                    <div class="mb-3">
                        <label calss="form-label">Lastname </label>
                        <input class="form-control" type="text" aria-label="default input example" v-model="lastname">
                    </div>
                    <div class="mb-3">
                        <label for="numeric-input no-spinners">Number of card</label>
                        <input type="text" class="form-control" maxlength="16" id="numeric-input" v-model="number" />
                    </div>
                    <div class="mb-3 d-flex gap">
                        <div>
                            <label for="expiration-date">Expiration Date</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="expiration-date" placeholder="MM/YY"
                                    v-model="formattedExpirationDate" @input="updateExpirationDate" />
                            </div>
                        </div>
                        <div>
                            <label for="expiration-date">Password</label>
                            <div class="input-group">
                                <input type="password" class="form-control" id="password" v-model="password" />
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary" style="width: 100%;" @click="getCard">Sent</button>
                </div>
            </div>
        </div>
        <div class="card " v-else>
            <div class="cover2 p-20" v-if="this.$store.state.payme.showVerify">
                <div class="inner3">
                    <div class="mb-3">
                        <div class="d-flex gap">
                            <label for="numeric-input no-spinners">Verification Code</label>
                            <h5 v-if="!sentVerify"> {{ minut }}:{{ second }}</h5>
                        </div>
                        <input type="text" class="form-control" maxlength="16" id="numeric-input" v-model="verification" />
                    </div>
                    <div class="d-flex gap" v-if="sentVerify">
                        <h6>Press button to sent verification code</h6>
                        <button type="button" class="btn btn-primary" @click="sendVerificationCode">Sent</button>
                    </div>
                    <!-- .d-flex -->
                    <button v-else type="button" class="btn btn-primary" style="width: 100%;">Sent</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            expirationDate: "",
            number: "",
            password: "",
            firstname: "",
            lastname: "",
            numberwithoutspace: "",
            verification: "",
            formattedExpirationDate: "",
            sentVerify: true,
            minut: 1,
            second: 0,
            intervalId: null,
        };
    },
    computed: {
        uppercaseText() {
            return this.firstname.toUpperCase();
        },
        uppercaseTextTo() {
            return this.lastname.toUpperCase();
        },
        formattedNumber() {
            return this.number.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
        },
    },
    methods: {
        updateExpirationDate() {
            this.expirationDate = this.formattedExpirationDate.replace(/\//g, '');

            this.formattedExpirationDate = this.formattedExpirationDate.replace(/\D/g, '');
            if (this.formattedExpirationDate.length >= 2) {
                this.formattedExpirationDate =
                    this.formattedExpirationDate.slice(0, 2) + '/' + this.formattedExpirationDate.slice(2);
            }
        },
        formatNumber() {
            this.numberwithoutspace = this.number.replace(/\s/g, "");
        },
        getCard() {
            // 8600069195406311
            let option = {
                method: "cards.create",
                params: {
                    card: {
                        number: this.number,
                        expire: this.expirationDate
                    },
                    save: true
                }
            }
            this.$store.dispatch('payme/getCard', option)
        },
        sendVerificationCode() {
            this.sentVerify = !this.sentVerify
            let option = {
                method: "cards.get_verify_code",
                params: {
                    token: localStorage.getItem('tokenPayme')
                }
            }
            this.$store.dispatch('payme/getCardVerify', option)
            this.intervalId = setInterval(() => {
                if (this.second === 0) {
                    if (this.minut === 0) {
                        clearInterval(this.intervalId);
                        return;
                    }
                    this.minut -= 1;
                    this.second = 59;
                } else {
                    this.second -= 1;
                }
            }, 1000);
        },
        verify() {
            let option = {
                method: "cards.verify",
                params: {
                    token: localStorage.getItem('tokenPayme'),
                    code: this.verification
                }
            }
            this.$store.dispatch("payme/verify", option)
        }
    },

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');

.container-fluid {
    height: auto !important;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex-direction: column;
}

.wrap {
    width: 561px;
    height: 355px;
    flex-shrink: 0;
    border-radius: 30px;
    background: rgb(22, 8, 76);
    background: linear-gradient(54deg, rgba(22, 8, 76, 1) 14%, rgba(9, 9, 121, 1) 31%, rgba(12, 129, 153, 1) 89%);
    display: flex;
    justify-content: center;
    align-items: center;
}

.inner {
    width: 90%;
    height: 75%;
}

.header {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.content {
    width: 100%;
    height: 65%;
    display: flex;
    align-items: flex-end;
    border-bottom: 2px solid rgba(249, 249, 249, 0.21);
}

.content h3 {
    text-shadow: 0px 2.290884256362915px 4.730000019073486px rgba(8, 43, 69, 0.16);
    font-family: Inter;
    font-size: 34.363px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.375px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.68) 0%, #FFF 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.foot {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.foot h4,
p {
    color: var(--white, #FFF);
    text-shadow: 0px 4px 4px rgba(92, 92, 92, 0.25);
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.cover {
    width: 561px;
    height: 440px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
}

.inner2 {
    width: 97%;
    height: 80%;
}

.gap {
    justify-content: space-between;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.cover2 {
    width: 561px;
    height: 160px;
    flex-shrink: 0;
}

.inner3 {
    width: 520px;
    height: auto;
}</style>