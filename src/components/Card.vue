<template>
    <section class="TabsWrapper">
        <div class="InnerContent pa-5">
            <slot name="Title"></slot>
            <div class="Line"></div>
            <slot name="MainContent"></slot>
        </div>
    </section>
</template>
<style>
p {
    font-size: 24px;
    line-height: 24px;
    font-weight: 300;
    margin-bottom: 32px;
}

p > b {
    font-weight: 500;
}

ul > li {
    font-size: 24px;
    line-height: 30px;
    font-weight: 300;
    margin-bottom: 32px;
}

ul > li > b {
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    margin-bottom: 32px;
}


ol > li {
    font-size: 24px;
    line-height: 30px;
    font-weight: 300;
    margin-bottom: 32px;
}

ol > li > b {
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    margin-bottom: 32px;
}



table > tr > td, table > tr > th {
    font-size: 24px;
    line-height: 30px;
    font-weight: 300;
    margin-bottom: 32px;
}

.InnerContent > h1 {
    font-size: 30px;
    line-height: 30px;
    font-weight: 600;
}

.InnerContent > .Line {
    border-bottom: 3px solid white;
    width: 100px;
    margin-top: 32px;
    margin-bottom: 42px;
}

.InnerContent {
    width: 100%;
}
.TabsWrapper {
    background-color: #1e1e1e;
    border-radius: 10px;
    padding: 10px;
}
</style>

<script>
export default {
    data(){
        return {
            tabs: null
        }
    }
}
</script>