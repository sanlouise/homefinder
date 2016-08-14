# React Native Home Finder

This app is built with React Native using the Nestoria API.

Users can search for property listings around them or at specific locations. At the moment, the app works for properties in the UK only.

## Installation (MAC OS X)

### Run the App

You will need Brew, NodeJS and Xcode.

Then, install the React Native command line tools:

```
npm install -g react-native-cli
```

Install Watchman and Flow:
```
brew install watchman

brew install flow
```

To run the application, navigate to its directory and run the command:

```
react-native run-ios
```

#### Installation Notes

You might need to also to take care of Node dependencies using

```
npm install
npm start
```

If you have trouble with the version of Node, you can install a newer version using:

```
npm install -g n
n v4.1.2

# Verify the Node version
node -v
```

## Contributing

Do you see any errors or do you want to extend this app? Make a pull-request! They are very welcome.

## License

MIT License. View the full license in LICENSE.