# Update import statements in Flash.js and Swim.js
sed -i '' 's/import Loading from ".\/Loading";/import LoadingPage from "..\/..\/components\/LoadingPage\/LoadingPage";/g' ./components/Flash/Flash.js
sed -i '' 's/import Loading from ".\/Loading";/import LoadingPage from "..\/..\/components\/LoadingPage\/LoadingPage";/g' ./components/ImageSequence/Swim.js
