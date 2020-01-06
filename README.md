# Northcoders News App

Front-end **React** application to request and present data from the [nc-news api](https://github.com/HGartland/nc-news)

## Links

- repository for the nc-news api - https://github.com/HGartland/nc-news-app
- Hosted nc-news api used by this application - https://nc-news-host.herokuapp.com/api/
- Hosted (demo) version of this application - https://affectionate-euclid-fef9a0.netlify.com/

## Getting Started

#### Required - **node** minimum version `v12.11.0`

Clone the [repository](https://github.com/HGartland/nc-news-app) and navigate into the folder

```bash
git clone https://github.com/HGartland/nc-news
cd nc-news
```

## Dependencies

once inside the nc-news directory run

```
npm install
```

### Version control:

Ensure all dependencies listed are running on the correct version \
(see package.json to verify)

```js
"dependencies": {
    "@reach/router": "^1.2.1",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.3",
    "@testing-library/user-event": "^7.1.2",
    "axios": "^0.19.0",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-loader-spinner": "^3.1.5",
    "react-scripts": "3.3.0"
  }
```

---

## Commands

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Authors

- **Harlan Gartland** - _Initial work_ - [HGartland on github](https://github.com/HGartland)

## Acknowledgments

- Special thanks to Mr.Bubz for being my rock when times are hard.
