<template>
    <div class="section">
        <h1 class="title is-3">Online Course Search</h1>
        <p> Powered by ClassPert </p>
        <br>
        <b-field label="Search">
            <b-input v-model="search"></b-input>
        </b-field>
        <section>
            <b-button @click="searchMe()">Search</b-button>
        </section>
        <h1 class="title is-3" style="margin: 35px;">Categories</h1>
        <div class="card" style="margin: 35px;" v-for="category in categories" :key="category.name">
            <div class="card-content">
                <a v-bind:href="category.link"><p class="title is-4">{{category.name}}</p></a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CourseSearch',
    data() {
        return {
            search: "",
            categories: [{name: "Computer Science", link: "https://classpert.com/computer-science"},
                        {name: "Arts & Design", link: "https://classpert.com/arts-and-design"},
                        {name: "Business", link: "https://classpert.com/business"},
                        {name: "Personal Development", link: "https://classpert.com/personal-development"},
                        {name: "Data Science", link: "https://classpert.com/data-science"},
                        {name: "Physical Science and Engineering", link: "https://classpert.com/physical-science-and-engineering"},
                        {name: "Marketing", link: "https://classpert.com/marketing"},
                        {name: "Language and Communication", link: "https://classpert.com/language-and-communication"},
                        {name: "Life Sciences", link: "https://classpert.com/life-sciences"},
                        {name: "Math and Logic", link: "https://classpert.com/math-and-logic"},
                        {name: "Social Sciences", link: "https://classpert.com/social-sciences"},
                        {name: "Health & Fitness", link: "https://classpert.com/health-and-fitness"}]
        }
    },
    methods: {
        searchMe(){
            window.location = "https://classpert.com/search?q=" + this.search
        }
    }
}
</script>