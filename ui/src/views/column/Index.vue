<template>
    <div>
        <container>
            <tabs>
            </tabs>
            <blog-item></blog-item>
        </container>
    </div>
</template>

<script>
    import Container from 'layoutComponents/container'
    import Tabs from 'publicComponents/Tabs'
    import BlogItem from 'itemComponents/BlogItem'


    import {
        mapActions,
        mapState
    } from "vuex";

    export default {
        components: {
            Container,
            Tabs,
            BlogItem
        },
        computed: {
            ...mapState({
                list: state => state.blog.blogList
            })
        },
        async mounted() {
            // await this.LoadBlogList()
        },
        methods: {
            ...mapActions(["LoadBlogList"])
        }
    }
</script>