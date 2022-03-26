# Keyboard Finder with React.JS

This project was bootstrapped with [Keyboard Finder by React.JS](https://keyboard-finder.netlify.app/).

## Frequently Asked Questions

## রিএক্ট কিভাবে কাজ করে?

রিএক্ট এর গুণ হল এর সিম্প্লিসিটি। এটি মূল জাভাস্ক্রিপ্টের পাশাপাশি JSX নামে একটি বিশেষ সিনট্যাক্স ব্যবহার করে যা আমাদের জাভাস্ক্রিপ্টের ভিতরে 100% HTML লিখতে দেয়। এখন ব্রাউজার বিহ্যাইন্ড দ্যা সীনে একটা ডম ট্রি তৈরি করে যাতে ব্যবহারকারী সেই ডম ট্রি এর সাথে যোগাযোগ করতে পারে। তারপর আমাদের সামনে একটি ওয়েবপেজ উপস্থিত হয়। কিন্তু আমরা জানি যে জাভাস্ক্রিপ্ট DOM ম্যানিপুলেট করতে পারে। সুতরাং জাভাস্ক্রিপ্ট দিয়ে রেন্ডার কমপ্লিট হওয়া কোন পেজের ডম ম্যানিপুলেট করলে সেই ওয়েবপেজ আবার পুরোপুরি রেন্ডার হয়(দুই একটা লেটেস্ট ব্রাউজার ছাড়া বাকী বেশীরভাগ ব্রাউজারই পুরোপুরি নতুন করে আবার ডম ট্রি তৈরী করে রেন্ডার করে) যেটা সময় সাপেক্ষ। আর তাই একটা পেজে ডম ম্যানিপুলেট করার মতো ততো বেশী জাভাস্ক্রিপ্ট থাকলে সেই ওয়েবপেজ স্লো হয়ে যাবে। তাই এখানেই রিঅ্যাক্ট এর আসল খেলা।


## স্টেট ও প্রপস এর মধ্যে পার্থক্য কি?

স্টেট:

i. স্টেট হচ্ছে মিউটেবল ।
ii. স্টেট একটি উপাদানের অভ্যন্তরীণ পরিবেশ পরিচালনা করতে ব্যবহৃত হয় মানে উপাদানটির ভিতরে ডেটা পরিবর্তন হয় ।
iii. স্টেট এর পারফরমেন্স বেশি ভালো না ।
iv. উপরের স্তরের উপাদান।

প্রপস:

i. প্রপস হচ্ছে ইমিউটেবল ।
ii. প্রপগুলি একটি উপাদান দ্বারা বাহ্যিক পরিবেশ থেকে ডেটা পেতে ব্যবহৃত হয় ।
iii. প্রপসের পারফরমেন্স অনেক ভালো ।
iv. উপরের স্তরের উপাদান।


## ইউজস্টেট কিভাবে কাজ করে?

এটি হল একটি হুক (ফাংশন) যা আপনাকে কার্যকরী উপাদানগুলিতে স্টেট ভেরিয়েবল রাখতে দেয়। আপনি এই ফাংশনে প্রাথমিক অবস্থা পাস করেন এবং এটি বর্তমান অবস্থার মান (প্রাথমিক অবস্থা নয়) সহ একটি পরিবর্তনশীল প্রদান করে এবং এই মানটি আপডেট করার জন্য অন্য একটি ফাংশন প্রদান করে।

<!-- ## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
 -->