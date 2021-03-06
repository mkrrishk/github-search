# Reference Documentation

This Doc includes info about the Design, Architecture & the Setup Decisions/Choices.

## Project Setup/Folder Structure

* This project is setup using a simple client & server folder structure to keep things simple. client directory would contain the Frontend App and the server directory would contain the Backend App. The idea is to be able to run both Frontend and Backend apps using Docker compose locally.
* Ideally, a Monorepo approach using tools like [Lerna](https://lerna.js.org/) & [Turborepo](https://turborepo.org/) would be a good choice as well, as it would allow us to share re-usable components or common modules like Type Definitions among multiple projects.

## Frontend Notes

* Frontend App has been setup using [Vite](https://vitejs.dev/) using it's vue-ts template.
* The reason for using Vite is that it uses native ES Modules under the hood and provides instant Hot Module reloading (HMR) during development and extremely fast Build times. It is developed By Evan You (Creator of Vue.js) himself and is already quite popular.
* Other options to bootstrap the Frontend Project are using [Vue CLI](https://cli.vuejs.org/) or using [Nuxt.js](https://v3.nuxtjs.org/). Nuxt.js is also a good choice as it offers a lot of features like File-system Routing, ServerSide Rendering and Static Site Generation Out of the Box. However, Nuxt3 which is based on Vue 3 is still in Beta.
* **UI Library** - This App uses Tailwind CSS as the Design is minimal and doesnt require a lot of Components. While there a lot of good options out there, each library has it's own pros and cons.
    * **Ant Design** - Huge Number of Components, Looks Clean. But V3 is still in Beta and the [Bundle Size](https://bundlephobia.com/package/ant-design-vue@3.0.0-beta.9) is Huge. Tree shaking is supported, but need to verify to see how it works. I've seen people [complain](https://orkhanhuseyn.medium.com/ant-design-or-elephant-design-a03c19549553) about it in the past.
    * **Element Plus** - Vue 3 is Supported (stable release on 7th Feb). Good Number of Components and Clean UI. [Bundle size](https://bundlephobia.com/package/element-plus@1.3.0-beta.10) is on the higher side but Tree shaking is supported. Some level of Customization is supported by overriding CSS Variables.
    * **Vuetify** - Very popular, Based on Material Design. Vue 3 support is still in Alpha. Material components have a peculiar design/look, UI Customization would be a challenge.
    * **Others** - While there are other UI Component Libraries, some of them do not support Vue 3 yet (Ex. Bootstrap Vue) or only have a handful number of Components. One thing that i observed is that there arent a lot of UI Libraries that are offering decent amount of pre-built components out of the box which are Accessible, customisable if needed and also provide a way for us to build our own components or layouts using well defined API/primitives to match our Custom Designs. [Chakra UI](https://chakra-ui.com/) does this really well and is quite popular in the React Ecosystem. While there is a [Vue version](https://vue.chakra-ui.com/) of Chakra ui it currently only supports Vue 2. One Library which comes close to this offering in the Vue Ecosystem is [Prime Vue](https://primefaces.org/primevue/showcase/#/). It Supports Vue 3, offers Good Number of Components and also supports Dynamic Theming to match Bootstrap, Material or Tailwind Styles by importing corresponding style sheets. But for some reason it only has 2k Github stars and is under-rated in my opinion.
    * **Tailwind** - [Tailwind CSS](https://tailwindcss.com/) Provides Low level Utility Classes to Build custom Layouts/Components. While the idea may seem unintuitive (due to HTML/Template verbosity, having to remember classes, etc) in the begining, It gets easier as we keep building stuff and becomes very Enjoyable to use. The team behind it is [incredible](https://adamwathan.me/tailwindcss-from-side-project-byproduct-to-multi-mullion-dollar-business/) as well. Tailwind CSS has become very popular in the last couple of years and is being used extensively now. While it takes a little longer to build stuff with it at first due to lack of Components, There is an Ecosystem around it where there are a few [Unstyled/Headless](https://headlessui.dev/) Components offered by the Tailwind Team and there a lot of Open source Components available as well. [Paid version](https://tailwindui.com/) of pre-built components are available as well.
* Both ESLint & Prettier have been Setup.
* @heroicons/vue package has been used for SVG Images. It is created & Maintained by the Tailwind CSS Creators.
* [@vueuse/core](https://vueuse.org/) library has been used to watch(with debounce) the search input changes. This is a popular library which offers lot of utilities as Composable functions that can be used with Vue 3.
* axios Library has been used for making the API Requests.
* Storage Layer or Global State has been setup using [pinia](https://pinia.vuejs.org/). This is the official State Management Library recommended by the Vue Team going forward. It's API is quite similar to Vuex and has excellent TypeScript Support.
* Global State includes the Search term (with Tetris as default value) and the Repository List fetched from GitHub. It also includes two actions to fetch the repositores and to track the Favourite Repositories. In the GitHubSearch page Repositories are fetched immediately and are rendered. And, if the Search Term is changed (debounced to 1 Sec) in the Search Input, Action to fetch Repos will be triggered again.
* A Basic Unit Test has been Setup with [Vitest](https://vitest.dev/) and Vue testing Library. Vitest is Compatible with Vite out of the box and provides same API as Jest. However it is still in Development, but is already being used by many projects. I've run into an issue Accessing/Validating DOM Elements with it. Need to Spend futher time to Address this.

## Backend

* Backend Project has been Setup using Express.js and TypeScript.
* A basic Setup where HTTP Requests are served via Repo Controller @ /api/repos route. 
* This End point Allows both POST and GET Requests.
* Database Storage is to be setup. Currently persisting the data in memory.

## Additional Info

* Building both Apps took me about 8-10 Hours. I've spent most of time Researching and going through Documentation for Various Frameworks/Libraries. There were a lot of new Libraries that I've used here including Vue 3 with Composition API. Overall, I've really Enjoyed the Process.
* ~~Containerizing the App was the initial idea. It would be an ideal setup where both apps can be started with a single docker-compose command. I've run into some errors while setting it up, Will include those if time permits.~~
* Docker Compose has now been setup and can be used to run both Frontend and Backend at once locally.