![License](https://img.shields.io/github/license/jobsonita/rocketseat-yt-cd-109-rnative-oauth?color=blue)
![Node version](https://img.shields.io/badge/node-v14.18.0-brightgreen)
![Yarn version](https://img.shields.io/badge/yarn-v1.22.15-brightgreen)
![Expo version](https://img.shields.io/badge/expo-~43.0.0-brightgreen)
![React version](https://img.shields.io/badge/react-17.0.1-blue)
![React Native version](https://img.shields.io/badge/react--native-0.64.2-blue)
![Typescript version](https://img.shields.io/badge/typescript-~4.3.5-lightgrey)

# :rocket::seat: Code/drops #109 - Google OAuth in Mobile App - Learning Exercise :iphone:

A mobile App experimenting Google's OAuth, applying the instructions available at [Login Social com OAuth2 no React Native - Code/drops #109](https://www.youtube.com/watch?v=pAt91MWwwvg)

## :hammer: Status

> :white_check_mark: Finished :lock:

## :bookmark: Content Table
<!--ts-->
  * [App Interface](#newspaper-app-interface)
  * [Technologies](#books-technologies)
  * [Install and Run](#calling-installing-and-running-this-project)
  * [Author and License](#memo-author-and-license)
<!--te-->

## :newspaper: App Interface

<p align="center">
  <video src="https://i.imgur.com/U9a9qni.mp4" width="240px" controls autoplay>
</p>

<details>
  <summary>Sign in screen</summary>
  <p align="center"><img alt="Sign in screen" title="Sign in screen" src="https://i.imgur.com/9CLsXBi.png" width="250px"/></p>
</details>
<details>
  <summary>Profile screen</summary>
  <p align="center"><img alt="Sign in screen" title="Sign in screen" src="https://i.imgur.com/lfTpC6K.png" width="250px"/></p>
</details>

## :books: Technologies

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Google OAuth](https://developers.google.com/identity/protocols/oauth2)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)

## :calling: Installing and running this project

### :wrench: Prerequisites

Before starting, make sure you have [Git](https://git-scm.com/), [Node](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed. Also, install [Expo Go](https://expo.dev/client) on your phone (or install an [Android emulator](https://developer.android.com/studio/) following [these instructions](https://react-native.rocketseat.dev/android/emulador/)) and create an Expo account. We'll be following [Expo's authentication guide](https://docs.expo.dev/guides/authentication/#google).

### :inbox_tray: Install and run

Clone the project using Git, install its dependencies through Yarn and run the project:

```bash
git clone https://github.com/jobsonita/rocketseat-yt-cd-109-rnative-oauth.git

# wait for git to finish clonning the project, then navigate to the folder and install the dependencies:

cd rocketseat-yt-cd-109-rnative-oauth

yarn

# Finally, run the app:

expo start

# Expo will open a browser page with options to connect to an emulator or to your phone (through a QR code)
```

### :mag: Testing

With the app running, read the generated QR code on your phone or select the option to run on Android emulator.

> **Notice:** in order for Google OAuth to work properly, you need to configure your [GCP (Google Cloud Platform) app](https://console.developers.google.com/)'s authorized URI origin to `https://auth.expo.io` and authorized redirect URI to `https://auth.expo.io/@<username>/<your_scheme>`, where `<username>` is your username in Expo (you need to create an Expo account) and `<your_scheme>` is the scheme you set in app.json. Create a `.env` file with the same content as `.env.example` (update the `CLIENT_ID` and `REDIRECT_URI`) in case you're creating a new app on GCP.

## :memo: Author and License

[![Author: jobsonita](https://avatars.githubusercontent.com/u/1463583?s=48&v=4)](https://github.com/jobsonita/jobsonita) | [Jobson Gilberto](https://github.com/jobsonita/jobsonita)
-|-

[![License](https://img.shields.io/github/license/jobsonita/rocketseat-yt-cd-109-rnative-oauth)](LICENSE)
