# anychatbot




## Planned features (looking for PRs)

- Store user chatbot on Firebase
- Multiple chatbot configuration template
- Edit premade chatbot
- Community votes on premade chatbot
- Submit your chatbot function
- Improve UX/UI
- Clean code and reduce redundancy
- Make all compoments modular

## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5


### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Deploy

To deploy the application, you can use a variety of methods depending on your hosting environment. Here are some common commands to deploy your Angular app:

#### Firebase Hosting

1. Install Firebase tools if you haven't already: `npm install -g firebase-tools`
2. Login to your Firebase account: `firebase login`
3. Initialize your project: `firebase init`
4. Choose "Hosting" and select the project you want to deploy to
5. Set the "public" directory to `dist/<project-name>`
6. Run `ng build --prod` to build your project
7. Deploy your project using `firebase deploy`