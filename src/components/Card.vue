<template>
<section class="TabsWrapper">
    <v-tabs
        style="border-radius: 10px; background-color: transparent;"
        class="TabsWrapper"
        background-color="transparent"
    >
        <v-tab>Slide</v-tab>
        <v-tab>Notes</v-tab>

        <v-tab-item>
            <v-container fluid>
                <div class="InnerContent pa-5">
                    <slot name="Title"></slot>
                    <div class="Line"></div>
                    <slot class="WrapperContentModifier" name="MainContent"></slot>
                </div>
            </v-container>
        </v-tab-item>
        <v-tab-item>
            <v-container fluid>
                <div class="InnerNotesContent pa-5">
                    <slot name="Notes" />
                </div>
            </v-container>
        </v-tab-item>

    </v-tabs>
    

</section>
</template>
<style>
.TabsWrapper > div.theme--dark.v-tabs-items {
    border-radius: 10px;
}

.TabsWrapper > div.v-item-group.theme--dark.v-slide-group > div.v-slide-group__wrapper {
    margin-left: 10px;
}

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

table > tr > td, table > tr > th {
    font-size: 24px;
    line-height: 30px;
    font-weight: 300;
    margin-bottom: 32px;
}
</style>
<style scoped>
    .InnerContent > h1 {
        font-size: 30px;
        line-height: 30px;
        font-weight: 400;
        color: red;
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