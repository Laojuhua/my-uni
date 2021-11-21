const PageTemplate = page => `<template>
<view class="${page}">
    <view>
        <text>${page}</text>
    </view>
</view>
</template>

<script>
export default {
data() {
    return {
        
    };
},
onLoad() {
    console.log("${page} onLoad!")
},
created(){},
methods: {},
};
</script>

<style>

</style>`


const ComponentTemplate = component => `<view class="${component}">
<view>
    <text>${component}</text>
</view>
</view>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    onAttach() {
        console.log("${component} onLoad!")
    },
    created(){},
    props:{},
    methods: {},
};
</script>

<style>

</style>`


module.exports = {
    PageTemplate,
    ComponentTemplate
}
