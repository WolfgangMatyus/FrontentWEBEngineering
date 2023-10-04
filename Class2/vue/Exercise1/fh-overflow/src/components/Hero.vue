<template>
    <div :style="{ backgroundColor: backgroundColor }">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Hero',
        props: {
            title: String,
            text: String,
            backgroundColor: String,
        },
    };
</script>

<style scoped>

</style>