<template>
  <section class="course-page">
    <scroll class="course__wrapper" :data="results" :pullup="pullup" @pullup="loadData">
      <ul class="course__list">
        <li v-for="(item, index) in results">
          {{item}}
        </li>
      </ul>
    </scroll>

  </section>
</template>

<script src="../js/course.js"></script>
<style lang="scss">
  @import '../css/course.scss';
</style>
