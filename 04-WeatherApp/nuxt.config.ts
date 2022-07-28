import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css:[
        "~/assests/css/tailwind.css"
    ],
    build:{
        postcss:{
            postcssOptions:{
                Plugins:{
                    tailwindcss:{},
                    autoprefixer:{}
                }
            }
        }
    }
})
