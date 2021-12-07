# watch
Tutorial ElectronJS - Vuetify - VueJS Desktop UI Design ,Watch Application Dashboard , with Carousel-3d
```
https://www.youtube.com/watch?v=iQ_Rzs8dNuk
```

# begin build vue use electronjs

- vue create [name project]
- vue add vuetify [optional]
- vue add electron-builder
    - setting in background.js
    ```
    browserWindows(
        frame: false,
        titleBarStyle:'hiddenInset'
    )
    ```
    - app.vue
    ```
    add style="-webkit-app-region:drag"
    ````
    - run project
    ```
    package.json
     "electron:serve": "vue-cli-service electron:serve",
     ````


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
