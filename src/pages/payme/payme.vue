<template>
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
                    <p>{{ expirationDate }}</p>
                </div>
            </div>
        </div>
        <div class="card ">
            <div class="cover p-20">
                <div class="inner">
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
                        <input type="text" class="form-control"  maxlength="19"  id="numeric-input"  v-model="formattedNumber"/>
                    </div>
                    <div class="mb-3 d-flex gap">
                        <div>
                            <label for="expiration-date">Expiration Date</label>
                            <div class="input-group">
                                <input type="text" class="form-control" id="expiration-date" placeholder="MM/YY"
                                    v-model="expirationDate" @input="formatExpirationDate" />
                            </div>
                        </div>
                        <div>
                            <label for="expiration-date">Password</label>
                            <div class="input-group">
                                <input type="password" class="form-control" id="password" v-model="password" />
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary" style="width: 100%;">Sent</button>
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
            formattedNumber: "",
            password: "",
            firstname: "",
            lastname: "",
            inputText:""
        };
    },
    computed: {
        uppercaseText() {
            return this.firstname.toUpperCase();
        },
        uppercaseTextTo() {
            return this.lastname.toUpperCase();
        },
        formattedNumber: {
            get() {
                return this.inputText;
            },
            set(newValue) {
                let numericValue = newValue.replace(/\D/g,'');
                numericValue = numericValue.replace(/(\d{4})(?=\d)/g, "$1 ");
                this.inputText = numericValue;
            },
        },
        
    },
    methods: {
        formatExpirationDate() {
            this.expirationDate = this.expirationDate.replace(/\D/g, '');
            if (this.expirationDate.length >= 2) {
                this.expirationDate =
                    this.expirationDate.slice(0, 2) + '/' + this.expirationDate.slice(2);
            }
        },
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
    background: #16084C;
    fill: #080E1D;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inner {
    width: 90%;
    height: 80%;
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
    /* color: #fff; */
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
    height: 420px;
    flex-shrink: 0;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    /* align-items: stretch; */
}

.gap {
    justify-content: space-between;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
/* input[type=number] {
  -moz-appearance: textfield;
} */
</style>