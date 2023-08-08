<template lang="">
    <div>
        <div class="cover">
            <div class="calendar">
                <div class="div1"><p>Monday</p></div>
                <div class="div2"> <p>Tuesday</p></div>
                <div class="div3"> <p>Thursday</p></div>
                <div class="div4"> <p>Wensday</p></div>
                <div class="div5"> <p>Friday</p></div>
                <div class="div6"> <p>Saturday</p></div>
                <div class="div7"> <p>Sunday</p> </div>
                <div class="div8"> 1</div>
                <div class="div9"> 2</div>
                <div class="div10"> 3</div>
                <div class="div11"> 4</div>
                <div class="div12"> 5</div>
                <div class="div13"> 6</div>
                <div class="div14"> 7</div>
                <div class="div15"> 8</div>
                <div class="div16"> 9</div>
                <div class="div17"> 10</div>
                <div class="div18"> 11</div>
                <div class="div19">12 </div>
                <div class="div20">13 </div>
                <div class="div21"> 14</div>
                <div class="div22"> 15</div>
                <div class="div23"> 16</div>
                <div class="div24"> 17</div>
                <div class="div25"> 18</div>
                <div class="div26"> 19</div>
                <div class="div27"> 20</div>
                <div class="div28"> 21</div>
                <div class="div29"> 22</div>
                <div class="div30"> 23</div>
                <div class="div31"> 24</div>
                <div class="div32"> 25</div>
                <div class="div33"> 26</div>
                <div class="div34"> 27</div>
                <div class="div35"> 28</div>
                <div class="div36"> 29</div>
                <div class="div37"> 30</div>
                <div class="div38"> 31</div>
                <div class="div39"> 1</div>
                <div class="div40"> 2</div>
                <div class="div41"> 3</div>
                <div class="div42"> 4</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.calendar {
    width: 85%;
    height: 85%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    border: 1px solid #000;
}
.cover{
    width: 500px;
    height: 600px;
    border-radius: 20px;
    background-color: #fefefe;
    display: flex;
    justify-content: center;
    align-items: center;
}
.div1 {
    border: 1px solid #000;
    grid-area: 1 / 1 / 2 / 2;
}

.div2 {
    border: 1px solid #000;
    grid-area: 1 / 2 / 2 / 3;
}

.div3 {
    border: 1px solid #000;
    grid-area: 1 / 3 / 2 / 4;
}

.div4 {
    border: 1px solid #000;
    grid-area: 1 / 4 / 2 / 5;
}

.div5 {
    border: 1px solid #000;
    grid-area: 1 / 5 / 2 / 6;
}

.div6 {
    border: 1px solid #000;
    grid-area: 1 / 6 / 2 / 7;
}

.div7 {
    border: 1px solid #000;
    grid-area: 1 / 7 / 2 / 8;
}

.div8 {
    border: 1px solid #000;
    grid-area: 2 / 1 / 3 / 2;
}

.div9 {
    border: 1px solid #000;
    grid-area: 2 / 2 / 3 / 3;
}

.div10 {
    border: 1px solid #000;
    grid-area: 2 / 3 / 3 / 4;
}

.div11 {
    border: 1px solid #000;
    grid-area: 2 / 4 / 3 / 5;
}

.div12 {
    border: 1px solid #000;
    grid-area: 2 / 5 / 3 / 6;
}

.div13 {
    border: 1px solid #000;
    grid-area: 2 / 6 / 3 / 7;
}

.div14 {
    border: 1px solid #000;
    grid-area: 2 / 7 / 3 / 8;
}

.div15 {
    border: 1px solid #000;
    grid-area: 3 / 1 / 4 / 2;
}

.div16 {
    border: 1px solid #000;
    grid-area: 3 / 2 / 4 / 3;
}

.div17 {
    border: 1px solid #000;
    grid-area: 3 / 3 / 4 / 4;
}

.div18 {
    border: 1px solid #000;
    grid-area: 3 / 4 / 4 / 5;
}

.div19 {
    border: 1px solid #000;
    grid-area: 3 / 5 / 4 / 6;
}

.div20 {
    border: 1px solid #000;
    grid-area: 3 / 6 / 4 / 7;
}

.div21 {
    border: 1px solid #000;
    grid-area: 3 / 7 / 4 / 8;
}

.div22 {
    border: 1px solid #000;
    grid-area: 4 / 1 / 5 / 2;
}

.div23 {
    border: 1px solid #000;
    grid-area: 4 / 2 / 5 / 3;
}

.div24 {
    border: 1px solid #000;
    grid-area: 4 / 3 / 5 / 4;
}

.div25 {
    border: 1px solid #000;
    grid-area: 4 / 4 / 5 / 5;
}

.div26 {
    border: 1px solid #000;
    grid-area: 4 / 5 / 5 / 6;
}

.div27 {
    border: 1px solid #000;
    grid-area: 4 / 6 / 5 / 7;
}

.div28 {
    border: 1px solid #000;
    grid-area: 4 / 7 / 5 / 8;
}

.div29 {
    border: 1px solid #000;
    grid-area: 5 / 1 / 6 / 2;
}

.div30 {
    border: 1px solid #000;
    grid-area: 5 / 2 / 6 / 3;
}

.div31 {
    border: 1px solid #000;
    grid-area: 5 / 3 / 6 / 4;
}

.div32 {
    border: 1px solid #000;
    grid-area: 5 / 4 / 6 / 5;
}

.div33 {
    border: 1px solid #000;
    grid-area: 5 / 5 / 6 / 6;
}

.div34 {
    border: 1px solid #000;
    grid-area: 5 / 6 / 6 / 7;
}

.div35 {
    border: 1px solid #000;
    grid-area: 5 / 7 / 6 / 8;
}

.div36 {
    border: 1px solid #000;
    grid-area: 6 / 1 / 7 / 2;
}

.div37 {
    border: 1px solid #000;
    grid-area: 6 / 2 / 7 / 3;
}

.div38 {
    border: 1px solid #000;
    grid-area: 6 / 3 / 7 / 4;
}

.div39 {
    border: 1px solid #000;
    grid-area: 6 / 4 / 7 / 5;
}

.div40 {
    border: 1px solid #000;
    grid-area: 6 / 5 / 7 / 6;
}

.div41 {
    border: 1px solid #000;
    grid-area: 6 / 6 / 7 / 7;
}

.div42 {
    border: 1px solid #000;
    grid-area: 6 / 7 / 7 / 8;
}
</style>