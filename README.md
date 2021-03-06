# Angular - Google Maps API

## Description

This application let the user to view a list of hotels in an area, interacting with markers on the map or titles from the list to get info. Also a search function is available.

__Screenshot__

![alt text](https://raw.githubusercontent.com/AndreiGolopenta/Angular-Google-Maps-API/master/src/assets/image1.png)

## Requirements

* JSON Server
* A Google Maps API key.

### JSON Server

Install JSON Server : 
```cli
npm install -g json-server
```

### API keys

Each Google Maps Web Service request requires an API key. To get an API key, follow the [Get API Key](https://developers.google.com/maps/documentation/javascript/get-api-key) instructions in our Maps JS API docs.

When you have an API key, change your_API_key in `google-maps-api.module.ts` :

```typescript
@NgModule({
  declarations: [
    ...
  ],
  imports: [ 
    AgmCoreModule.forRoot({
      apiKey: 'your_API_key'
    })
  ],
  exports: [
    ...
  ],
  providers: [
   ...
  ],
})
```

## Project Dependencies

`npm install`

## Running the project

```cli
json-server --watch db.json
```
```cli
npm run start
```

