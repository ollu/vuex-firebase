# A Vuejs, vuex and firebase basic setup

## Build Setup

``` bash
# install dependencies
npm install
```
## Firebase
- Create firebase database https://console.firebase.google.com
- _Optional_, create a second database for development purpose so you don't have to mess up live data.
- Copy firebase configuration and put it in the file `src/store/main.store.js`
- Replace the placeholder `TABLE-NAME` with the name of the firebase table you want to connect to
- _Optional_, replace `YOUR-DOMAIN.NU` with your own domain if you know where your app will live.

## Start development

``` bash
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
