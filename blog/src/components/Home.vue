<template>
  <div class="articles">
      <a v-for="post in getViewablePosts" href="#">
          <span>{{post.title}}</span>
            <span>{{post.date_of_post| moment("Do MMMM YYYY")}}</span>
        </a>

        <div class="pages">
         Page:
         <a href="#" class="active">1</a>
           <a href="#">2</a>
       </div>

  </div>
</template>
<script>
export default{
  data(){
    return{
    }
  },
  asyncData ({ store, route: { params: { id }}}) {
    store.dispatch('getPostsFromDB', { ids: [id] })
    store.dispatch('getLablesFromDB', { ids: [id] })
    return store.dispatch('getMonthsFromDB', { ids: [id] })
  },
  computed:{
    getViewablePosts(){
      return this.$store.getters.getViewablePosts

    }
  }
}
</script>
<style>

</style>
