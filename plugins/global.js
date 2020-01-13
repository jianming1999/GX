import Vue from 'vue'

Vue.mixin({
    methods: {
        $seo(options, payload = []) {
            return {
                title: options.tit,
                meta: [{
                    hid: 'keyword',
                    name: 'keyword',
                    content: options.kw
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: options.desc
                }].concat(payload)
            }
        }
    }
})