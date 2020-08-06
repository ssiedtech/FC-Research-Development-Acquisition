<template>
    <div class="ButtonWrapper">
        <div class="Buttons">
            <v-btn class="BackButton" @click="moveBack()" color="gray" fab dark>
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-btn class="ForwardButton" @click="moveForward()" color="gray" fab dark>
                <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<style scoped>
.ButtonWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}
.Buttons {
    width: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}

.v-btn--fab.v-btn--contained {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0), 0px 6px 10px 0px rgba(0, 0, 0, 0), 0px 1px 18px 0px rgba(0, 0, 0, 0);
}

.v-btn--fab.v-size--default {
    height: 45px;
    width: 45px;
}

.BackButton {
    margin-right: 5%;
}

.ForwardButton {
    margin-right: 5%;
}
</style>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'NavigationButtons',
    props: [
        'rout'
    ],
    created(){
        this.router = this.$props.rout;
    },
    mounted(){
        this.createCurrentPosition(this.router)
        this.getCurrentPosition();
        this.handleKeys();
    },
    methods: {
        handleKeys: function() {
            window.addEventListener('keyup', (event) => {
                if (event.keyCode == 37) { 
                this.moveBack();
                }
            });
            window.addEventListener('keyup', (event) => {
                if (event.keyCode == 39) { 
                this.moveForward();
                }
            });
        },
        moveForward: function() {
            this.getCurrentPosition()
            let newPosition = this.currentPosition + 1;
            if (this.currentPosition === this.routeNamesListLength) {
                return;
            }
            this.$router.push({ name: this.routeNameList[newPosition]})
            this.getCurrentPosition()
        },
        moveBack: function() {
            this.getCurrentPosition()
            let newPosition = this.currentPosition - 1;
            if (this.currentPosition <= 0) {
                return;
            }
            this.$router.push({ name: this.routeNameList[newPosition]})
            this.getCurrentPosition()
        },
        getCurrentPosition: function() {
            let currentRouteName = this.router.currentRoute.name;
            for (let i = 0; i < this.routeNameList.length; i++) {
                if (currentRouteName === this.routeNameList[i]) {
                    // console.log('found current route at position  ' , i)
                    this.currentPosition = i;
                }
            }
        },
        createCurrentPosition: function(router){
            let navigationNamesArray = [];
            
            //let grandchildCategoryCount = 0;
            //let greatgrandChildCategoryCount = 0;

            let routeList = router.options.routes;

            
            for (let categoryCount = 0; categoryCount < routeList.length; categoryCount++) {
                if (routeList[categoryCount].children.length){
                    // console.log('top level', routeList[categoryCount])

                    for (let childCategoryCount = 0; childCategoryCount < routeList[categoryCount].children.length; childCategoryCount++) {
                        if (routeList[categoryCount].children[childCategoryCount].name) {
                            // got home and second thing here
                            // console.log(routeList[categoryCount].children[childCategoryCount].name)

                            navigationNamesArray.push(routeList[categoryCount].children[childCategoryCount].name)
                        }
                    }

                }
            }
            // console.log(navigationNamesArray)
            this.routeNameList = navigationNamesArray;
            this.routeNamesListLength = navigationNamesArray.length - 1;
        }
    },
    data () {
        return {
            router: Object,
            routeNameList: Array,
            currentPosition: Number,
            routeNamesListLength: Number,
        }
    }
})
</script>