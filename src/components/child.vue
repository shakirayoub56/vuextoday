<template>
<h1>child</h1>
<!-- we can get the vale in child also -->
<p>{{ $store.state.title}}</p>
</template>
<script>
export default{
    name:'child',

}
</script>